import "dotenv/config";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const API_KEY = process.env.KIE_API_KEY;
if (!API_KEY) {
  console.error("ERROR: KIE_API_KEY not found in .env");
  process.exit(1);
}

const BASE_URL = "https://api.kie.ai/api/v1";
const PUBLIC_DIR = resolve(__dirname, "../public");

// ── Variant B: Girl at living room coffee table (Wan 2.6) ───────────────────
//
// Different actor (girl), different setting (living room), different model (Wan).
// Wan 2.6 text-to-video supports 5s and 10s durations.
//
// Clip 1 (10s, use first 8s): Focused lesson → confusion/struggle
// Clip 2 (5s): Understanding → breakthrough joy

const PROMPT_CLIP1 = `Vertical 9:16 video. A 10-year-old Australian girl with dark brown hair in a ponytail sits cross-legged on a living room couch with a laptop on the coffee table in front of her. She wears a casual pink t-shirt. A warm floor lamp lights the scene, evening time. The living room has a comfy beige couch, cushions, a bookshelf in the background. She is in an online tutoring lesson. She starts focused, writing in her notebook and glancing at the laptop screen. Then her expression shifts — she pauses, furrows her brow, tilts her head, looks confused and stuck. She taps her pen and stares at the screen, puzzled. Shot on phone, natural warm lighting, realistic, no airbrushing.`;

const PROMPT_CLIP2 = `Vertical 9:16 video. Same 10-year-old Australian girl with dark brown ponytail, pink t-shirt, sitting on a living room couch with laptop on the coffee table. Warm floor lamp, evening. She is listening to her tutor on screen, nodding slowly. Then her eyes widen — she gets it. She breaks into a huge genuine delighted smile, sits up excitedly, writes something down confidently. She looks at the screen and nods enthusiastically, beaming with pride. The pure joy of a child who just understood something. Shot on phone, warm natural lighting, realistic, no airbrushing.`;

// ── API helpers ──────────────────────────────────────────────────────────────

async function apiRequest(
  method: string,
  path: string,
  body?: unknown
): Promise<any> {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }

  return res.json();
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function createTask(
  prompt: string,
  duration: string,
  label: string
): Promise<string> {
  console.log(`Submitting ${label} (${duration}s, Wan 2.6)...`);

  const payload = {
    model: "wan/2-6-text-to-video",
    input: {
      prompt,
      duration,
      resolution: "1080p",
      aspect_ratio: "9:16",
    },
  };

  const resp = await apiRequest("POST", "/jobs/createTask", payload);

  if (resp.code !== 200) {
    throw new Error(`Failed to create task: ${JSON.stringify(resp)}`);
  }

  const taskId = resp.data.taskId;
  console.log(`  Task created: ${taskId}`);
  return taskId;
}

async function pollTask(taskId: string, label: string): Promise<string[]> {
  const MAX_WAIT = 15 * 60 * 1000;
  const INTERVAL = 10_000;
  const start = Date.now();

  while (Date.now() - start < MAX_WAIT) {
    const resp = await apiRequest(
      "GET",
      `/jobs/recordInfo?taskId=${taskId}`
    );

    if (resp.code !== 200) {
      console.error(`  ${label} poll error: ${JSON.stringify(resp)}`);
      await sleep(INTERVAL);
      continue;
    }

    const { state, progress, failMsg, resultJson } = resp.data;
    const elapsed = Math.round((Date.now() - start) / 1000);

    console.log(
      `  [${elapsed}s] ${label}: state=${state} progress=${progress ?? 0}%`
    );

    if (state === "success") {
      const result = JSON.parse(resultJson || "{}");
      return result.resultUrls || [];
    }

    if (state === "fail") {
      console.error(`\n${label} FAILED: ${failMsg}`);
      throw new Error(`${label} generation failed`);
    }

    await sleep(INTERVAL);
  }

  throw new Error(`${label} timed out after 15 minutes`);
}

async function getDownloadUrl(tempUrl: string): Promise<string> {
  const resp = await apiRequest("POST", "/common/download-url", {
    url: tempUrl,
  });
  if (resp.code === 200 && typeof resp.data === "string") {
    return resp.data;
  }
  return tempUrl;
}

async function downloadVideo(
  url: string,
  outputPath: string
): Promise<void> {
  if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });

  const downloadUrl = await getDownloadUrl(url);
  console.log(`Downloading to ${outputPath}...`);

  const res = await fetch(downloadUrl);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length === 0) throw new Error("Downloaded file is empty");

  writeFileSync(outputPath, buffer);
  const sizeMb = (buffer.length / (1024 * 1024)).toFixed(1);
  console.log(`  Downloaded: ${sizeMb} MB`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("=".repeat(60));
  console.log("Variant B — Girl at living room (Wan 2.6 text-to-video)");
  console.log("=".repeat(60));
  console.log();

  // Sequential to avoid double-charging credits upfront

  // ── Clip 1: 10s (focus → confusion) ──
  const taskId1 = await createTask(PROMPT_CLIP1, "10", "Clip 1 (focus→confusion)");
  console.log("\nPolling Clip 1...\n");
  const urls1 = await pollTask(taskId1, "Clip 1");
  if (!urls1.length) {
    console.error("Clip 1: no video URLs returned.");
    process.exit(1);
  }
  await downloadVideo(urls1[0], resolve(PUBLIC_DIR, "variant-b-clip1.mp4"));

  console.log("\n" + "─".repeat(60) + "\n");

  // ── Clip 2: 5s (understanding → joy) ──
  const taskId2 = await createTask(PROMPT_CLIP2, "5", "Clip 2 (understanding→joy)");
  console.log("\nPolling Clip 2...\n");
  const urls2 = await pollTask(taskId2, "Clip 2");
  if (!urls2.length) {
    console.error("Clip 2: no video URLs returned.");
    process.exit(1);
  }
  await downloadVideo(urls2[0], resolve(PUBLIC_DIR, "variant-b-clip2.mp4"));

  console.log("\nDone. Videos saved:");
  console.log("  public/variant-b-clip1.mp4 (10s — use first 8s)");
  console.log("  public/variant-b-clip2.mp4 (5s)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
