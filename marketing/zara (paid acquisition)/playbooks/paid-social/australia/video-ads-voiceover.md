---
name: video-ads-voiceover
description: >
  End-to-end production skill for voiceover-style paid social video ads for Tutero Tutoring
  in the Australian market. The format: fast-cut AI-generated footage of real-feeling online
  tutoring scenes in Australian homes, overlaid with a single Australian-voice voiceover that
  tells a short narrative (tension → resolution → CTA). Built around Seedance 2.0 for video
  and ElevenLabs for voice. Trigger on "video ad", "VO video", "voiceover video", "Meta video
  ad", "Reel ad", "paid social video", "make a tutoring video", "video creative for parents",
  or any request to produce Australian parent-facing tutoring video creative. This skill
  covers VOICEOVER-STYLE only — NOT UGC, NOT talking-head, NOT influencer. For statics use
  `creating-paid-social-ads`. For tutero.ai schools use `tutero-ai-ad-rules`. For Florida use
  `tutero-florida-sufs-creative-designer`.
---

# Tutoring Video Ads — Voiceover Style (AU)

This skill produces one specific kind of video: a short (15–30s) fast-cut sequence of documentary-style clips showing online tutoring in real Australian homes, with an Australian voiceover narrating a clear story over the top. The voiceover is pre-recorded via ElevenLabs, the footage is generated clip-by-clip via Seedance 2.0, and the final asset is assembled in ffmpeg.

**Why this format exists.** The 12 proven winners in the AU market (see `winner-insights`) include three UGC videos, but AI-generated talking-head video still falls into the uncanny valley — it looks like AI, sounds like AI, and converts like AI. Voiceover-style sidesteps this entirely: the visuals are short, silent b-roll clips (where AI is already good enough to pass for iPhone footage), and the voice is pre-recorded with a real-sounding ElevenLabs Australian voice. No lip-sync. No character consistency across clips. No dialogue. This is the format that is shippable today without looking like AI.

**Read these companion files before starting:**
- `winner-insights` — which angles convert on Australian paid social
- `parent-copy` — voice, forbidden words, approved strategic lines, pre-flight checklist
- `visual-identity` — colours and logo for the end card
- `image-generator` — the anti-AI-glow aesthetic principles (we extend them for motion)

---

## What This Skill Does and Does Not Cover

**Covers:** Voiceover-style static-b-roll video ads. Fast-cut Seedance clips + ElevenLabs AU voice. 15s, 20s, or 30s. 9:16 (Reels/Stories) and 1:1 (Feed). Australian parent-facing tutoring only.

**Does not cover:** UGC-style video (person to camera), talking-head, influencer, animated/motion-graphics, dialogue-driven scenes, tutor-on-camera, founder videos. When Joey or another user asks for any of those, push back and ask which format they actually want — most of them are better produced by filming real people, not by AI.

---

## Part 1 — The Cognition System (Think Before You Render)

Never call the Seedance API before finishing this. Generating video is the slow, expensive part. Thinking is the cheap part.

### Step 1 — Identify the reason to buy

Every video is anchored to a single reason a parent would buy tutoring right now. Pick one. Don't mix.

**Use the eight reasons to buy from `creating-paid-social-ads` Step 1.** Don't redefine them here — they're canonical in that skill and drift is a real risk if both skills keep their own copies.

**Video-specific guidance on which reasons suit this format:**

- **Strongest fit:** reasons 1 (falling behind), 3 (school not supporting), 5 (low confidence), 7 (emotional support/mentorship). These carry an emotional arc that video can dramatise — tension to resolution — in a way a single static can't.
- **Weaker fit:** reasons 4 (upcoming exams) and 6 (accountability). Video can work for these but they're often tighter, more transactional plays that a well-designed static can deliver more cheaply.
- **Push back:** if the brief is pure product/credential (lead with 1.3%, lead with faculty) or pure objection-handling (lead with "pay per lesson"), a static is almost always the better format. Offer the static alternative before committing Seedance budget.

Write down your chosen reason before moving on.

### Step 2 — Pick the persona

The persona shapes the b-roll casting more than any other single decision. "Working mum" and "ambitious dad" produce completely different videos even with the same reason to buy — different kitchens, different kids' ages, different clothing, different time of day.

**Use the three parent types + sub-segments from `creating-paid-social-ads` Step 2.** Don't redefine them here.

**Video-specific guidance on persona → casting:**

| Persona | Who's in the frame | Setting | Time of day | Wardrobe anchors |
|---|---|---|---|---|
| **Worried parent** | Primary-age child (6–10), mum often present or adjacent | Kitchen table, living room | Afternoon / early evening | School uniform still on, mum in casual activewear or work-from-home |
| **Ambitious parent** | Older primary / early high school (10–14), sometimes parent in a work shirt | Dedicated study corner, bedroom desk | Evening after work | Neat desk setup, notebook, school diary visible |
| **Frustrated parent** | Any age, often the child alone and bored | Kitchen table, couch | Afternoon | Uniform slightly dishevelled, distracted posture |
| **Working mum (sub-segment)** | Primary child + mum returning from work | Kitchen with a Woolworths bag on the bench | 5–6pm weekday | Work clothes (smart-casual, not corporate suit), tired eyes |
| **ATAR teen (sub-segment)** | Year 11–12 student, alone | Bedroom desk, laptop open | Late evening | Hoodie, water bottle, VCE/HSC study guide visible |
| **Regional family (sub-segment)** | Primary child + parent | Kitchen with a view of a yard / shed / gum trees | Daytime | Everyday clothes, a dog in the background is a strong AU anchor |
| **Switcher (sub-segment)** | Any age, parent visible | Any home setting | Any | The "tried-something-else" cue is verbal in the VO, not visual |

A strong video picks ONE persona and sticks to it across every clip. "For everyone" b-roll is the fastest way to a video that feels like no one in particular.

**Write this down before moving on:** "Persona: [type + sub-segment]. Kitchen: [what's in it]. Child: [age / year level]. Time: [hour]. One distinctive anchor: [the specific detail that makes this feel like THIS family]."

### Step 3 — Choose the narrative arc

The voiceover must carry a story in 15–30 seconds. There are four arcs that work. Pick one before writing a word.

| Arc | Beat 1 | Beat 2 | Beat 3 | Best for |
|-----|--------|--------|--------|----------|
| **Problem → Solution** | The worry (homework battles, falling behind, disengagement) | What Tutero actually is (1-on-1, every week, vetted tutor) | The shift (confidence, relief, home calmer) | Reasons 1, 2, 3, 5 |
| **Specific Moment → Reframe** | A specific scene (Sunday night, maths homework tears) | The mental shift ("we stopped trying to be the tutor") | The outcome (tutor handles Tuesdays, parent handles bedtime) | Reason 2, working-parent persona |
| **Objection → Resolution** | The objection spoken out loud ("I thought tutoring meant lock-in contracts") | The reframe (pay per lesson, cancel anytime, money-back) | The permission to try | Cold audience, Reasons 4, 6 |
| **Scene Montage → Claim** | A montage of small real moments (kitchen table, laptop, notebook) | A single clean positioning line | The CTA | Brand-flex, retargeting, Reason 7 |

Write one sentence describing your chosen arc before moving on. Example: *"Arc: Problem → Solution. Beat 1 — mum watching daughter stare at a maths problem at the kitchen table on Sunday night. Beat 2 — Tutero tutor on screen, lesson in progress, daughter engaged. Beat 3 — daughter walking into school on Monday confident."*

### Step 4 — Write the voiceover script FIRST

This is the most important rule in this skill: **the voiceover is written before any footage is planned, not after.** The VO is the spine. The clips are cut to fit the VO, not the other way around.

**Word budgets by length** (based on natural AU English pacing of ~150 words/minute for an unhurried, warm read):

| Video length | VO word count | Approx clip count |
|---|---|---|
| 15s | 30–38 words | 5–7 clips |
| 20s | 40–50 words | 7–9 clips |
| 30s | 60–75 words | 10–14 clips |

Don't overfill. Pauses breathe. A 30s ad with 85 words of VO is bad — the voice sounds rushed and AI-like. When in doubt, cut words.

**Script structure rules:**

1. **Open with a specific image, not a generic claim.** "Sunday nights used to be maths homework and tears." beats "Is your child struggling with maths?" every time.
2. **Say "1-on-1 tutoring" once, clearly.** Somewhere in the middle. This is the product naming rule from `parent-copy` — non-negotiable.
3. **Include one trust shortcut.** Pick one: "top 1.3% of tutors", "vetted and verified", "same tutor every week", "no contracts, cancel anytime", "money-back guarantee". One. Not three.
4. **End with the CTA word-for-word.** Either "Book a 1-on-1 lesson at tutero.com.au" or "Find your tutor at tutero.com.au". The URL must be spoken.
5. **No forbidden words** (see `parent-copy` section 5). Especially: no "AI", no "platform", no "app", no "cutting-edge", no "sign up".
6. **Write for the ear, not the eye.** Read every line out loud. If you stumble on it, a parent will too. Short sentences. Contractions. Australian plain English.
7. **"Tutor" not "teacher"** as the default noun — see `parent-copy` non-negotiable #4.
8. **One idea per sentence.** Never stack three benefits in one line. The voice needs room to land each one.

**Example 20s VO (Problem → Solution arc, Reason 5 — confidence):**

> Sunday nights used to be maths homework and tears.
>
> Now she's got her own tutor. Same one every week. One-on-one, from the kitchen table.
>
> Her confidence has grown every lesson.
>
> Find your tutor at tutero.com.au.

Word count: 38. Pauses marked by paragraph breaks become SSML breaks at render time. Names the product ("one-on-one"), names a trust signal ("same one every week"), lands on a confidence outcome, ends with spoken URL.

### Step 5 — Build the shot list

Only now, with the VO locked, do you plan the clips. The rule is one clip per 1.5–3 seconds of VO, with each clip illustrating or adjacent to the line being spoken at that moment.

For each clip, specify:

1. **Timing** (e.g. "0.0–2.0s")
2. **VO line it overlaps** (or "silence" / "music only")
3. **Scene description** — what's in the frame, who's in it, what's happening
4. **Camera instruction** — static, slow push, handheld sway, locked tripod
5. **Anti-AI anchor** — one concrete "real" detail (a mug, a rumpled school uniform, a scratched laptop, afternoon light through blinds) that makes it feel shot, not generated

A 20s shot list for the example script above might look like:

| # | Time | VO | Scene | Camera | Anti-AI anchor |
|---|------|-----|-------|--------|----------------|
| 1 | 0.0–2.0 | "Sunday nights used to be…" | Close on a maths textbook open on a kitchen table, half-eaten toast next to it | Static, locked | Toast crumbs visible, kids' drawing stuck to fridge in background blur |
| 2 | 2.0–3.5 | "…maths homework and tears." | Primary-school girl, chin on hands, staring at a worksheet | Slow handheld sway | Hair a bit messy, school cardigan half off |
| 3 | 3.5–6.0 | "Now she's got her own tutor." | Wide shot: same girl at laptop, smiling at the screen, tutor's face visible on the laptop | Static tripod | Laptop is a real MacBook, not a generic render; sticker on the lid |
| 4 | 6.0–8.0 | "Same one every week." | Over-shoulder: the tutor on screen mid-sentence, pen moving on their notepad | Static over-shoulder | Pixelated webcam quality of the tutor's image |
| 5 | 8.0–10.5 | "One-on-one, from the kitchen table." | Pull-back wide: girl at kitchen table, mum making dinner in background | Slow push-out | Kitchen lights on, blinds slightly open, afternoon light |
| 6 | 10.5–13.5 | "Her confidence has grown…" | Girl explaining something back to the tutor, gesturing with her pencil | Static tripod | Notebook open with actual handwritten working, not a blank page |
| 7 | 13.5–16.0 | "…every lesson." | Close on her face, small private smile | Static | No direct camera look; candid |
| 8 | 16.0–20.0 | "Find your tutor at tutero.com.au." | End card: Tutero logo on light blue (#F0FAFF) with tagline "The school your child deserves, one lesson at a time." and URL | Held static | This is a designed card, not a Seedance clip — rendered separately |

**Shot list discipline rules:**

- **Cuts every 1.5–3 seconds.** Slower than this feels like a documentary. Faster than this feels frantic.
- **Alternate close / wide.** Never two closes or two wides in a row.
- **Never reuse a character's face across clips.** Seedance does not hold character consistency across separate text-to-video generations. Use close-ups on hands, objects, or over-the-shoulder framing to avoid the "is that the same girl?" problem. If a scene needs character consistency, generate it as one continuous clip.
- **At least one clip must show the laptop with a tutor visible on screen.** This is Move 6 from `winner-insights` — the whole transaction in one frame. Without it, the ad is generic "kid at a laptop".
- **At least one Australianness anchor.** School uniform, AU plug socket, Kmart furniture, an AU-spec kettle, a Woolworths bag on the counter, morning light through suburban venetian blinds, an AU flag sticker on a notebook. One per video, visible.
- **End card is always the last clip.** 3–4 seconds. Logo, tagline, URL. Designed, not generated.

### Step 6 — Pre-flight (before you render anything)

Run this against your VO script + shot list. If any box fails, fix before generating video.

| # | Check | |
|---|-------|---|
| 1 | **Clarity** — a parent who watches the first 3 seconds knows this is about tutoring | |
| 2 | **Arc named** — the video is executing one of the four narrative arcs, not a random sequence | |
| 3 | **Product named in VO** — "1-on-1 tutoring" or "tutoring" is spoken, clearly, once | |
| 4 | **One trust shortcut** — not zero, not three | |
| 5 | **Australianness anchor** — at least one unmissable AU signal in the footage | |
| 6 | **Whole-transaction frame** — at least one clip shows child + laptop + tutor visible on screen | |
| 7 | **Forbidden words check** — no AI, no platform, no app, no sign up, no enrol | |
| 8 | **Confidence pointed at** — the video ends with the child better off, even if implicitly | |
| 9 | **CTA with URL spoken** — the final line includes "tutero.com.au" as a spoken line | |
| 10 | **VO fits the timing** — read the script aloud with a stopwatch. If it runs over, cut words |

**0–5:** Don't render. **6–7:** Ship as experimental. **8–10:** Strong. Put budget on it.

---

## Part 2 — Production Workflow

This sequence is for the build. The creative decisions above must be resolved first.

### Workflow overview

```
1. Lock VO script + shot list
   ↓
2. Render VO via ElevenLabs → voiceover.mp3
   ↓
3. Measure actual VO timing (clip lengths follow actual VO, not the plan)
   ↓
4. Source the music bed (pre-rendered shared loop, or generate once)
   ↓
5. Render each Seedance clip at its required length
   ↓
6. View every clip. Reject anything AI-glowy. Regenerate.
   ↓
7. Design end card (HTML → PNG, or direct PNG)
   ↓
8. ffmpeg assembly: concat clips, overlay VO + ducked music bed, export
   ↓
9. QA pass against Part 3 quality gates
   ↓
10. Deliver MP4 (9:16 and/or 1:1)
```

### A note on cost

Video is an order of magnitude more expensive to iterate on than statics. Rough per-video budget (as of April 2026, check live pricing before scaling):

| Line item | Typical cost | Notes |
|---|---|---|
| Seedance 2.0 fast tier, 720p, 3s clip | ~$0.30 | fal.ai `seedance-2-fast` at ~$0.10/sec |
| Seedance 2.0 standard tier, 720p, 3s clip | ~$0.40 | fal.ai `seedance-2` at ~$0.13/sec |
| ElevenLabs VO render (20s, ~50 words, `eleven_v3`) | ~$0.05–0.15 | Billed per character |
| **Single 20s video, 8 clips, fast tier, one regen on two clips** | **~$3–5** | Most common scenario |
| **Same video on standard tier with heavy iteration (3 regens average)** | **~$10–15** | Final hero ad |

**Budget defaults this skill follows:**
- **Iterate on fast tier, 480p.** Only move to standard tier / 720p for the final cut of a hero ad.
- **One regen budget per clip in the timeline.** If a clip fails three regens, stop — change the composition (see rework protocol in Step 4 below), don't keep burning spend.
- **Before generating more than 20 clips in a single session (roughly $6–8), flag the spend to the user and confirm scope.** Easy to run up a $50+ bill on a single "let's try a few variations" ad.
- **Never render the same clip more than once per unique prompt.** If the prompt hasn't changed, the output distribution hasn't changed meaningfully either. Rewrite the prompt, then regenerate.

### Step 1 — Lock the script and shot list

Step 1 is the cognition system output. Before proceeding, confirm you have: the chosen reason to buy (Step 1 of Part 1), the chosen persona (Step 2), the chosen arc (Step 3), the final VO script with SSML breaks (Step 4), the shot list with timings (Step 5), and a passing pre-flight score (Step 6). If any of these are missing, go back to Part 1 — do not skip ahead to API calls.

### Step 2 — Render the voiceover (ElevenLabs)

**API basics:**
- Endpoint: `POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}`
- Auth: header `xi-api-key: $ELEVENLABS_API_KEY`
- Model: `eleven_v3` for warmth and expressiveness. Falls back to `eleven_multilingual_v2` if v3 produces artefacts.

**Voice selection — Emma is the default.** The default voice for all Tutero tutoring VO ads is **Emma** — a warm Australian female voice, early 30s, sweet and approachable, added to the Tutero ElevenLabs library. She matches the primary parent persona and has been selected specifically for this skill.

Store her voice ID in `config/elevenlabs_voices.json` in the project root. The ID is `56bWURjYFHyYyVf490Dp`. The config file is still the single source of truth — if Emma is ever re-added to the library or swapped for a different voice, the ID is updated in one place, not across every ad.

```json
{
  "default": "emma",
  "voices": {
    "emma": {
      "voice_id": "56bWURjYFHyYyVf490Dp",
      "description": "Warm Australian female, early 30s, sweet",
      "use_for": "Default for all parent-facing tutoring VO"
    }
  }
}
```

**Why hardcode a single default rather than discover at render time.** ElevenLabs' API accent filter isn't always reliable — the `GET /v1/voices` endpoint returns voices with inconsistent `labels.accent` metadata, and not every Australian voice is tagged as such. Keyword search on voice names/descriptions also misses voices labelled only as "Oceanic" or "English (Australia)". A hardcoded Emma ID, tested and known-good, removes all of this.

**Adding new voices.** When testing a male voice, an older female voice, or a regional-sounding voice, add them to the same `voices` config with a descriptive key (e.g. `"david_mature"`, `"sarah_regional"`) and pass the key through the render function. Never rip out Emma as default without a documented reason — consistency across ads builds recognisability.

**If Emma's voice ID is missing or the render fails with 404.** Fall back in this order:
1. List voices via `GET /v1/voices`, filter the `voices[]` array client-side for any voice whose `labels.accent` contains "australian" or whose `description` contains "Australian". Log the candidates for human review — do NOT auto-pick.
2. If none are found in the account's library, tell the user explicitly: *"Emma's voice ID isn't configured and no Australian voices are attached to this account. Please add Emma to the library or provide another AU voice ID before I can render."* Do NOT default to a US or UK voice — it instantly kills the AU trust signal (see `winner-insights` Move 5).

**Voice settings that sound real, not AI:**
```json
{
  "stability": 0.45,
  "similarity_boost": 0.75,
  "style": 0.35,
  "use_speaker_boost": true
}
```

Lower stability (0.35–0.50) produces more natural prosodic variation — it's the single biggest dial for "doesn't sound like a robot". Higher stability (0.70+) sounds smooth but wooden. Start at 0.45, tune from there. For Emma specifically, 0.45 has tested well; if she sounds too loose, nudge to 0.55.

**SSML for pacing.** The script's paragraph breaks should become SSML `<break>` tags — this is what produces the natural pauses the ear expects. Example:

```xml
<speak>
  Sunday nights used to be maths homework and tears.
  <break time="0.8s"/>
  Now she's got her own tutor. Same one every week.
  <break time="0.4s"/>
  One-on-one, from the kitchen table.
  <break time="0.6s"/>
  Her confidence has grown every lesson.
  <break time="0.7s"/>
  Find your tutor at tutero.com.au.
</speak>
```

**Reference Python call:**

```python
import requests, os

def render_voiceover(ssml_text: str, voice_id: str, out_path: str) -> str:
    """Render an ElevenLabs voiceover to MP3. Returns out_path."""
    r = requests.post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}",
        headers={
            "xi-api-key": os.environ["ELEVENLABS_API_KEY"],
            "Content-Type": "application/json",
        },
        json={
            "text": ssml_text,
            "model_id": "eleven_v3",
            "voice_settings": {
                "stability": 0.45,
                "similarity_boost": 0.75,
                "style": 0.35,
                "use_speaker_boost": True,
            },
        },
        timeout=60,
    )
    r.raise_for_status()
    with open(out_path, "wb") as f:
        f.write(r.content)
    return out_path
```

**Always regenerate if any of these fail the listen-test:**
- Final "tutero.com.au" sounds like "too-TEH-ro" or "TOO-ter-oh dot com dot AYE-yoo"
- The URL reads as "t-u-t-e-r-o dot com dot a-u" (letter-by-letter)
- Unnatural pauses mid-phrase
- Breathy/robotic on final syllables
- The accent wobbles (drifts US or UK partway)

**Pronunciation dictionary.** If "Tutero" is consistently misread, use ElevenLabs' pronunciation dictionary feature with the phonetic spelling `tyoo-TAIR-oh` (AU English IPA: `/tjuːˈteːɹəʉ/`). Test 2 or 3 renders before committing.

**Measure actual timing.** Once the VO is rendered, use `ffprobe` to extract the exact length of each segment between pauses. The video clips are cut to these actual timings — not to the timings you planned.

```bash
ffprobe -v quiet -show_entries format=duration -of csv=p=0 voiceover.mp3
```

### Step 3 — Source the music bed

Every Tutero voiceover video carries one specific music style. Consistency across ads is part of the brand sound — parents who scroll Meta repeatedly should start to recognise a Tutero ad by its audio signature before the VO even starts.

#### The style — Lo-fi Acoustic Sunshine

A single nylon-string acoustic guitar, fingerpicked in a warm, pillowy room. That's it. No drums, no shakers, no synths, no vocals, no melodic lead.

**Musical spec:**
- **Instrumentation:** Lo-fi nylon-string guitar, fingerpicking only. Classic pattern: bass note → treble pair → mid note → treble pair. One soft pillowy kick on beat 1 of each bar — *felt, not heard*.
- **Chord progression:** C → G → Am → F, repeating
- **Tempo:** ~100 BPM
- **Reverb:** Warm room (not hall, not plate)
- **Forbidden sound design:** No finger snaps, no shakers, no percussion fills, no melodies, no vocals, no pad textures, no bass guitar, no strumming. If it sounds like a song, it's wrong — it should sound like someone noodling on an acoustic in a Sunday-morning coffee shop.

**Reference vibe:** Sunday morning coffee shop. Warm nylon strings. Lo-fi vlog background stripped down to one guitar and a soft thump. The listener should not be able to hum the melody after the ad finishes — because there isn't one.

#### Volume behaviour (this is more important than the notes)

The music is almost inaudible during VO and gently swells on held silence. The VO is always dominant — music is atmosphere, not accompaniment.

| Moment | Music level | Notes |
|---|---|---|
| Opening (first 0.3s silent lead-in) | ~30% | Fading in from 0%, establishes the sonic world |
| During any VO line | ~10% (≈ -22 to -24 dB below VO) | Felt more than heard. VO must dominate. |
| Between VO lines (short gaps, <0.6s) | Stay at ~10% | Don't duck up and down on micro-gaps — it sounds glitchy |
| Held silences / end card hold | 35–40% | Swell up, let the music breathe. This is where the vibe lands. |
| Outro (last ~0.4s) | Fade to 0% | Soft tail, not a hard cut |

Transitions between volume levels are **always gentle** — 0.3–0.6s fades, never hard cuts. ffmpeg's `volume` filter with a `sendcmd` script or the `afade` filter chained with `acrossfade` handles this cleanly.

#### Sourcing the bed

Two approaches. In order of preference:

1. **Pre-rendered bed, reused across every ad (preferred).** Generate or commission a 60-second seamless loop matching the spec above, save it to `shared/audio/tutero_lofi_bed_60s.mp3`, and slice/loop it as needed per ad. This is cheaper, more consistent, and means every ad in a test cohort carries exactly the same audio signature. When a bed goes stale (after ~20 ads, the ear starts to notice), commission a fresh one.

2. **Generate per-ad via a music API.** Tools like ElevenLabs Music, Suno, or Udio can produce a matching bed from the spec above as a text prompt. Use this only if the pre-rendered bed is unavailable. Cost is non-trivial (~$0.30–1 per generation) and consistency across ads drifts.

For the first production batch, generate one canonical 60s loop and save it as the shared asset. Subsequent ads reference the shared file. Do not regenerate per ad unless there's a specific creative reason.

**Music file spec:**
- Format: MP3 or WAV, stereo, 44.1 kHz, 128+ kbps
- Length: 60 seconds, seamlessly looping (no fade-in or fade-out on the file itself — that's applied at assembly time)
- Peak level: around -12 dB (leaves headroom for the ducking/swelling envelope without clipping)
- Filename: `shared/audio/tutero_lofi_bed_60s.mp3`

### Step 4 — Render the Seedance video clips

**API (fal.ai, the production default).** fal hosts Seedance 2.0 with both standard and fast tiers.
- Endpoint (async): `POST https://fal.run/fal-ai/bytedance/seedance/2.0/text-to-video`
- Auth: header `Authorization: Key $FAL_KEY`
- Tiers: `seedance-2` (standard, higher quality) and `seedance-2-fast` (lower cost, faster). Default to **fast** for iteration, **standard** for the final cut of hero ads.
- Output: MP4, 480p or 720p, 4–15s, aspect ratios including 9:16, 1:1, 16:9.

The exact endpoint paths and request schemas on fal change occasionally. Before the first render in a new project, check `https://fal.ai/models/fal-ai/bytedance/seedance/2.0` for the current payload shape, and update the wrapper function accordingly.

**The NO_AUDIO parameter.** Seedance 2.0 generates native audio by default. We do NOT want this — our audio is the ElevenLabs VO. Either:
- Pass `generate_audio: false` if the endpoint supports it, OR
- Accept the audio and strip it in ffmpeg with `-an` during assembly (safer default — works regardless of API flags).

**Per-clip prompt structure:**

Every Seedance prompt for this skill has six parts, in this order:

1. **Documentary framing opener** — forces Seedance away from cinematic mode
2. **Scene description** — what's in the frame (who, where, doing what)
3. **Camera instruction** — static, locked, handheld, slow push, etc.
4. **Lighting and colour** — flat, neutral, household
5. **Specific anti-AI anchors** — the concrete real-world details
6. **Anti-AI negative suffix** — required on every prompt

**The video anti-AI suffix (MANDATORY — append to every prompt):**

```
NEGATIVE / AVOID: cinematic camera move, crane shot, drone shot, dolly zoom,
film-look colour grade, teal and orange grading, golden hour glow, halo or rim
lighting on subjects, bokeh-heavy background, dreamy slow motion, hyperreal skin,
airbrushed faces, perfect symmetry, studio lighting, softbox lighting,
ring light, editorial fashion composition, commercial advertising aesthetic,
Pinterest mood-board look, stock footage arrangement, perfect tidy home interior,
corporate tutoring centre, classroom with chalkboard, apple on desk, headset on
child, HDR, over-saturated warm peachy skin tones, film grain effect, VSCO filter,
colour-graded shadows, on-screen text, logos, watermarks, subtitles, faces
morphing between frames, unnatural limb motion, extra fingers.

POSITIVE EMPHASIS: Documentary home video. Flat overhead household lighting.
Neutral colour temperature. iPhone 13 default camera quality. Slight handheld
motion or locked tripod. Natural skin with visible texture. A real Australian
suburban home interior — Kmart furniture, a Woolworths bag on the counter, a
slightly messy kitchen. Nothing looks styled for camera.
```

**Template — Seedance prompt for a kitchen-table study scene:**

```
Documentary home video, shot on an iPhone 13 with the default camera app, no
editing, no filter. A primary-school girl in an Australian school cardigan sits
at a wooden kitchen table, chin on her hands, staring down at a maths worksheet.
Afternoon daylight comes through half-open venetian blinds. A kids' drawing is
stuck to the fridge in the background (soft focus). The girl blinks slowly, then
picks up a pencil.

Camera: static tripod, locked, no movement, no zoom. 3 seconds.

Lighting: flat overhead kitchen ceiling light, neutral white balance, daylight
from the side. No warm orange. No halo.

Real-world anchors: worn tabletop with a small scratch, half-eaten toast on a
plate to the side, the cardigan slightly askew.

{VIDEO_ANTI_GLOW_SUFFIX}
```

**Critical Seedance rules for this skill:**

1. **Always use `documentary` and `iPhone 13, default camera app` in the opener.** This is the single biggest dial. Skip it and Seedance defaults to cinematic.
2. **Specify the clip length explicitly in the prompt AND the API param.** Seedance sometimes pads or clips. Belt and braces.
3. **Never specify character ages as numbers.** "A primary-school girl" is safer than "a 9-year-old girl" — the latter can trigger content-moderation rejects.
4. **Never specify ethnicity if the scene doesn't require it.** Leave it ambiguous. If you need AU diversity signals, specify via cultural cues (school uniform, Woolworths bag) not ethnicity.
5. **Generate at 720p for final, 480p for iteration.** Fast tier + 480p costs are trivial — iterate aggressively.
6. **Review every clip in full before moving on.** Budget one regeneration per clip in the timeline. If a clip is bad, regenerate with escalated anti-glow language. If three regenerations are still bad, change the composition.
7. **9:16 for Reels/Stories. 1:1 for Feed.** Render both if the ad is running in both placements. Don't letterbox — regenerate at the target aspect.

**Parallelising generation.** Seedance calls are async and can take 30–120s each. A 20s ad with 7 clips should be generated concurrently (4 workers max to avoid rate limits). Each worker polls until its clip is done.

**Reference Python wrapper:**

```python
import fal_client
import requests
import os

fal_client.api_key = os.environ["FAL_KEY"]

def render_clip(prompt: str, out_path: str, duration: float = 3.0,
                aspect_ratio: str = "9:16", fast: bool = True) -> str:
    """Render a single Seedance 2.0 clip. Blocks until done."""
    model = (
        "fal-ai/bytedance/seedance/2.0-fast/text-to-video"
        if fast else "fal-ai/bytedance/seedance/2.0/text-to-video"
    )
    result = fal_client.subscribe(
        model,
        arguments={
            "prompt": prompt + "\n\n" + VIDEO_ANTI_GLOW_SUFFIX,
            "duration": round(duration),  # Seedance accepts integer seconds
            "aspect_ratio": aspect_ratio,
            "resolution": "720p",
            "generate_audio": False,
        },
    )
    # Download the produced video
    video_url = result["video"]["url"]
    r = requests.get(video_url, timeout=120)
    r.raise_for_status()
    with open(out_path, "wb") as f:
        f.write(r.content)
    return out_path
```

#### Rework protocol — when a clip won't render

Video has cascading dependencies the static pipeline doesn't. The VO is already recorded and the shot list is timed to it, so a bad clip is not a drop-in swap — it's a scene-level decision. Use this decision tree when a specific clip fails.

**Regen 1** — same prompt, verbatim. Seedance is non-deterministic; sometimes a bad first take is just luck. Free-ish on fast tier.

**Regen 2** — escalated anti-glow. Prepend `Not cinematic. Not a commercial. Raw iPhone video, no editing.` and add `Very flat lighting, no halo, no bokeh, no warm grade` explicitly. If the issue was camera-related (random dolly, dramatic push), add `Camera is locked on a tripod. Camera does not move.` as its own sentence.

**Regen 3** — composition shift. Same scene, different framing. If you tried a wide, try a close-up on hands. If you tried a locked tripod, try gentle handheld. The scene description stays the same so the clip still serves the same VO line.

**After 3 failed regens — stop. Choose one of these three recoveries:**

1. **Substitute the shot in place** (preferred, cheapest). Swap this clip's scene for a different scene that serves the same VO line equally well. The shot list is a plan, not a contract — if "girl at kitchen table" keeps failing, "close on pencil on worksheet" carries the same narrative beat. Regenerate under the new prompt. The VO does not change.

2. **Rewrite one VO line and re-render** (moderate cost). If no alternative scene exists for the line (e.g. the whole-transaction frame is failing and the VO line is "Now she's got her own tutor"), rewrite that one line so the visuals you CAN generate now match. The ElevenLabs re-render is cheap (~10 cents). You'll need to splice the new line into the existing VO with ffmpeg — easiest to re-render the whole VO for consistency.

3. **Cut the clip entirely** (rare, last resort). Shorten the ad by the clip's duration and re-time the ffmpeg assembly. Only do this if the clip was non-essential (e.g. an extra wide shot for texture). Never cut the whole-transaction frame or the end card.

**Never do any of these when a clip fails:**

- **Don't ship the bad clip.** One AI-glowy face in eight clips wrecks the whole ad's credibility.
- **Don't run a 4th, 5th, 6th regen on the same prompt.** The cost adds up and the output distribution isn't shifting. If three escalations didn't work, Seedance has locked onto a "premium" interpretation of the scene — change the scene.
- **Don't silently change the shot list without telling the user.** Flag the substitution briefly: *"Clip 4 kept rendering with glow — I swapped it for a close-up of the worksheet. Same VO line, same arc."*

### Step 5 — The end card

The end card is the last 3–4 seconds of the video. It is NOT Seedance-generated — it is a designed still, exported to PNG, then held on screen with a subtle fade-in.

Required elements:
- **Background:** `#F0FAFF` (blue-50) — the signature tutoring surface
- **Logo:** Tutero primary logo, centred in the upper third (use the blue variant)
- **Tagline:** *The school your child deserves, one lesson at a time.* (Satoshi 900, gradient fill — use the light-blue gradient variant from `visual-identity`)
- **URL line:** `tutero.com.au` (Hanken Grotesk 600, `#004166`)
- **CTA pill (optional):** "Book a 1-on-1 lesson →" in a `#00A3FF` filled pill with white text

Build the end card as a 1080×1920 (9:16) or 1080×1080 (1:1) PNG. Easiest workflow: write a minimal HTML file using the `visual-identity` constants and rasterise with `playwright` or headless Chrome. Reuse the exact gradient CSS and typography spec from the statics pipeline (`design-system`).

### Step 6 — ffmpeg assembly

The final step: concatenate video clips, strip their audio, mix the VO with the ducked music bed, and export.

The audio mix has two layers: the VO (always dominant) and the music bed (whisper-quiet under speech, swells on silence). ffmpeg's `sidechaincompress` filter automates the ducking — the VO signal triggers the music to duck down whenever the VO is active, and release back up when it's silent. This is more reliable than manually scripting volume envelopes against VO timing.

```bash
# 1. Strip audio from each clip and normalise format
for clip in clips/clip_*.mp4; do
  ffmpeg -i "$clip" -an -c:v libx264 -pix_fmt yuv420p -r 30 \
    "clips_clean/$(basename $clip)"
done

# 2. Render end card as a 3.5s video
ffmpeg -loop 1 -i end_card.png -c:v libx264 -t 3.5 -pix_fmt yuv420p -r 30 \
  -vf "fade=t=in:st=0:d=0.4" clips_clean/end_card.mp4

# 3. Build concat list
for f in clips_clean/*.mp4; do echo "file '$f'"; done > concat.txt

# 4. Concat silent video
ffmpeg -f concat -safe 0 -i concat.txt -c copy silent_video.mp4

# 5. Measure total video length (needed for music bed trimming)
TOTAL_LEN=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 silent_video.mp4)

# 6. Prepare the music bed — loop the 60s shared bed to cover full video length,
#    trim to exact length, and apply the overall volume envelope.
#    Music peaks at -12 dB from the source file; we leave that as-is here
#    because the sidechain in step 7 handles the ducking dynamically.
ffmpeg -stream_loop -1 -i shared/audio/tutero_lofi_bed_60s.mp3 \
  -t $TOTAL_LEN \
  -af "afade=t=in:st=0:d=0.4,afade=t=out:st=$(echo "$TOTAL_LEN - 0.4" | bc):d=0.4" \
  -c:a pcm_s16le music_bed_trimmed.wav

# 7. Mix VO + sidechain-ducked music over the silent video.
#    - VO: 0.3s lead-in silence, 0.2s fade-in, 0.5s fade-out at end
#    - Music: sidechained to duck ~14 dB when VO is present, released in 0.6s
#    - Final mix: VO at unity, music baseline at ~-10 dB, ducked to ~-24 dB under speech
ffmpeg -i silent_video.mp4 -i voiceover.mp3 -i music_bed_trimmed.wav \
  -filter_complex "
    [1:a]adelay=300|300,afade=t=in:st=0:d=0.2,afade=t=out:st=$(echo "$TOTAL_LEN - 0.5" | bc):d=0.5,volume=1.0,asplit=2[vo_mix][vo_sc];
    [2:a]volume=-10dB[music];
    [music][vo_sc]sidechaincompress=threshold=0.05:ratio=8:attack=5:release=600:makeup=1[music_ducked];
    [vo_mix][music_ducked]amix=inputs=2:duration=first:dropout_transition=0:normalize=0[audio_out]
  " \
  -map 0:v -map "[audio_out]" -c:v copy -c:a aac -b:a 192k -shortest final.mp4
```

**Explanation of the audio filter graph:**

- `[1:a]adelay=300|300` — pads 300ms of silence at the start of the VO (stereo)
- `asplit=2[vo_mix][vo_sc]` — duplicates the VO into two streams: one for the final mix, one as the sidechain key trigger
- `[2:a]volume=-10dB[music]` — sets music baseline to ~-10 dB (below VO, roughly 30% perceived level — this is where the music sits during the end card swell)
- `sidechaincompress=threshold=0.05:ratio=8:attack=5:release=600` — when the VO rises above -26 dB (threshold 0.05), the music is compressed 8:1, pulling it down to the ~10% target level under speech. The 600ms release lets the music swell naturally back up between VO lines without pumping.
- `amix` — final stereo combine

**Tuning knobs if the balance is off:**
- Music too loud under VO → raise `ratio` (try 12 or 16) or lower `threshold` (try 0.03)
- Music pumps/gasps between VO lines → lengthen `release` (try 900ms)
- Music ducks too slowly (first word of VO gets buried in music) → lower `attack` (try 2ms)
- Music too quiet during end card → change `volume=-10dB` up to `-8dB` or `-6dB`
- VO too loud overall (clipping) → change `volume=1.0` on `[vo_mix]` down to `0.9` or `0.85`

**If music is being omitted for a specific ad** (e.g. first-ever test batch, retargeting where silence reads better), use the simpler v1 filter graph: `[1:a]adelay=300|300,afade=t=in:st=0:d=0.2,afade=t=out:st=...:d=0.5[a]` and map that directly. Music is the default, not the requirement — if an ad tests meaningfully better without it, document that in `ads.json` notes.

**Audio polish rules:**
- 0.3s silent lead-in before the VO starts (prevents a jarring vocal start)
- 0.2s fade-in on the VO, 0.5s fade-out at the end
- 0.4s music fade-in at the start, 0.4s fade-out at the tail
- VO peaks around -3 dB, music peaks around -10 dB (baseline) / -24 dB (under VO)
- No hard cuts on music volume — all transitions are sidechain-driven or faded

### Step 7 — File organisation

```
video-ads/
├── {ad_slug}/
│   ├── brief.md              # the cognition (arc, reason to buy, persona)
│   ├── script.md             # the VO script with SSML breaks
│   ├── shot_list.md          # the clip-by-clip plan
│   ├── voiceover.mp3         # ElevenLabs output
│   ├── clips/                # raw Seedance clips
│   │   ├── clip_01.mp4
│   │   ├── clip_02.mp4
│   │   └── ...
│   ├── clips_clean/          # audio stripped, normalised
│   ├── end_card.html
│   ├── end_card.png
│   ├── music_bed_trimmed.wav # per-ad trimmed loop (ephemeral, safe to delete)
│   ├── final_9x16.mp4
│   └── final_1x1.mp4
├── shared/
│   └── audio/
│       └── tutero_lofi_bed_60s.mp3   # 60s seamless lo-fi loop, reused across all ads
├── config/
│   └── elevenlabs_voices.json        # voice IDs (Emma as default)
└── ads.json                  # registry with metadata
```

#### ads.json schema

Every video ad is registered in `ads.json` at the root of the `video-ads/` folder. This is the single source of truth for the gallery page, analytics, and hypothesis grouping across tests. Every field is required unless marked optional — missing fields break the gallery rendering.

```json
{
  "ads": [
    {
      "slug": "confidence_sunday_maths_20s",
      "title": "Sunday Maths → Confidence",
      "created_at": "2026-04-21",

      "hypothesis": "working_mum_confidence_v1",
      "reason_to_buy": 5,
      "reason_label": "Child's confidence is low",
      "persona": "worried_parent.working_mum",
      "arc": "problem_to_solution",
      "pillar": "knowing",

      "duration_seconds": 20,
      "aspect_ratios": ["9:16", "1:1"],
      "placements": ["reels", "stories", "feed"],

      "vo": {
        "voice_key": "emma",
        "model": "eleven_v3",
        "word_count": 38,
        "script_path": "confidence_sunday_maths_20s/script.md",
        "audio_path": "confidence_sunday_maths_20s/voiceover.mp3",
        "settings": {
          "stability": 0.45,
          "similarity_boost": 0.75,
          "style": 0.35
        }
      },

      "music": {
        "included": true,
        "style": "lofi_acoustic_sunshine",
        "bed_file": "shared/audio/tutero_lofi_bed_60s.mp3",
        "baseline_db": -10,
        "ducked_db_under_vo": -24,
        "end_card_swell_db": -8,
        "sidechain_params": {
          "threshold": 0.05,
          "ratio": 8,
          "attack_ms": 5,
          "release_ms": 600
        }
      },

      "clips": [
        {
          "index": 1,
          "start_s": 0.0,
          "end_s": 2.0,
          "vo_line": "Sunday nights used to be…",
          "scene": "Close on maths textbook, kitchen table",
          "camera": "static_locked",
          "tier": "fast",
          "resolution": "720p",
          "regen_count": 0,
          "file": "clips/clip_01.mp4"
        }
      ],

      "end_card": {
        "variant": "tagline_url",
        "file": "end_card.png"
      },

      "trust_signals_used": ["same_tutor_every_week"],
      "australianness_anchors": ["venetian_blinds", "school_cardigan", "kitchen_overhead_light"],
      "whole_transaction_frame": true,

      "cost_estimate_aud": 3.85,
      "winner_insights_score": 6,
      "preflight_score": 9,

      "final_mp4": {
        "9:16": "confidence_sunday_maths_20s/final_9x16.mp4",
        "1:1": "confidence_sunday_maths_20s/final_1x1.mp4"
      },

      "notes": "Clip 4 substituted — original kitchen shot kept rendering with glow; replaced with close on pencil-on-worksheet."
    }
  ]
}
```

**Schema field rules:**

| Field | Type | Notes |
|---|---|---|
| `slug` | string, snake_case | Must match the folder name. Used as the primary key across the gallery. |
| `hypothesis` | string | Groups related ads in the gallery. Ads in the same hypothesis batch must obey the overlap rules in `quality-gates` (no shared trust signals, no repeated opener phrases). |
| `reason_to_buy` | integer 1–8 | From `creating-paid-social-ads` Step 1. |
| `persona` | string `type.sub_segment` | Dotted notation, e.g. `worried_parent.working_mum`, `frustrated_parent.switcher`. |
| `arc` | enum | One of: `problem_to_solution`, `specific_moment_to_reframe`, `objection_to_resolution`, `scene_montage_to_claim`. |
| `pillar` | enum | One of: `faculty`, `knowing`, `proof`, `open_door`, `account_manager`. |
| `duration_seconds` | integer | 15, 20, or 30. No other values. |
| `aspect_ratios` | array | At least one of `9:16`, `1:1`, `16:9`. |
| `vo.voice_key` | string | Must match a key in `config/elevenlabs_voices.json`. Default is `emma`. |
| `vo.word_count` | integer | Must respect the budget for the duration (see quick reference). |
| `music.included` | boolean | `true` for default (music bed present). `false` only when the ad is deliberately silent — document the reason in `notes`. |
| `music.style` | enum | Default and only supported value is `lofi_acoustic_sunshine`. New styles require a skill update, not an ad-level override. |
| `music.bed_file` | string path | Usually `shared/audio/tutero_lofi_bed_60s.mp3`. Per-ad generated beds are an exception, not a default. |
| `music.baseline_db` | number | Music level during end card (silent section). Default `-10`. |
| `music.ducked_db_under_vo` | number | Target music level while VO is active. Default `-24`. If the balance is wrong, tune the sidechain params, not this field — it's descriptive, not prescriptive. |
| `clips[]` | array | One object per Seedance clip. Excludes the end card. |
| `clips[].tier` | enum | `fast` or `standard`. |
| `clips[].regen_count` | integer | Number of regens it took to land. `>=3` flags a shot that should be reviewed for future briefs — if the same scene keeps costing three regens, the prompt template needs fixing. |
| `trust_signals_used` | array of 1 | Exactly one — not zero, not two. Enforces the one-trust-signal rule from the pre-flight. |
| `australianness_anchors` | array ≥1 | At least one. The quality gate fails if this is empty. |
| `whole_transaction_frame` | boolean | Must be `true`. If `false`, the ad is missing Move 6 from `winner-insights` and should be flagged before shipping. |
| `cost_estimate_aud` | number | Running total: Seedance + ElevenLabs spend for this ad. Useful for monthly reporting. |
| `winner_insights_score` | integer 0–7 | From the `winner-insights` Part 3 checklist. |
| `preflight_score` | integer 0–10 | From Step 6 in the cognition system. |
| `notes` | string | Optional. Any substitutions, VO rewrites, or unusual decisions. Future agents read this to avoid repeating mistakes.

---

## Part 3 — Quality Gates (Before You Ship)

Run this checklist against the final MP4. Every box must pass.

### Visual
- [ ] No AI glow on any face in any clip (check at full size, not thumbnail)
- [ ] No teal-and-orange colour grading anywhere
- [ ] No faces morphing between frames within a single clip
- [ ] No unnatural limbs, extra fingers, or melting objects
- [ ] No on-screen text, watermarks, or Seedance artefacts
- [ ] At least one clip shows child + laptop + tutor-on-screen (whole-transaction frame)
- [ ] At least one unmistakable Australianness anchor (uniform, AU plug socket, suburban interior, AU product)
- [ ] Cut cadence is 1.5–3s per clip — not slower, not faster
- [ ] End card renders clean: logo, gradient tagline, URL all legible
- [ ] 9:16 or 1:1 aspect correct for intended placement — no letterboxing

### Audio
- [ ] Voice is clearly Australian — not US, not UK, not "neutral international"
- [ ] "Tutero" is pronounced correctly
- [ ] URL "tutero.com.au" is spoken naturally, not letter-by-letter
- [ ] No robotic artefacts, breath catches, or accent drift
- [ ] Pauses land on sentence breaks, not mid-phrase
- [ ] VO level peaks around -3 dB, doesn't clip
- [ ] Silent lead-in (~0.3s) before VO starts
- [ ] Music bed is Lo-fi Acoustic Sunshine (nylon-string fingerpicking, C→G→Am→F, ~100 BPM) — OR music is omitted entirely (both are valid; no stock beds, no melodic loops)
- [ ] Music level is ~10% (≈ -22 to -24 dB below VO) during all VO lines — VO is clearly dominant, music is felt not heard
- [ ] Music swells to ~35–40% only during the end card hold (no VO playing)
- [ ] Ducking transitions are smooth (no hard cuts between volume levels)
- [ ] No hissing, clipping, or phase issues where music and VO overlap

### Copy
- [ ] VO script obeys the `parent-copy` pre-flight (product named, one trust signal, confidence pointed at)
- [ ] No forbidden words: AI, platform, app-as-product, cutting-edge, sign up, enrol
- [ ] "1-on-1 tutoring" or "tutoring" spoken at least once, clearly
- [ ] One trust shortcut — not zero, not three
- [ ] CTA with URL is the final spoken line

### Platform fit
- [ ] Under 30 seconds (Meta Reel/Story sweet spot is 15–20s)
- [ ] MP4, H.264, yuv420p pixel format, 30fps
- [ ] Under 50MB file size (Meta compresses heavily above this)
- [ ] `.mp4` extension, descriptive filename: `{angle}_{arc}_{length}_{aspect}.mp4`

### Winner-insights score
- [ ] Run the `winner-insights` Part 3 checklist. Target score ≥5 of 7.

If any Visual or Audio box fails, the ad is not shippable — fix and re-render the offending clip or VO. If a Copy box fails, rewrite the script from scratch (cheap — VO renders are under a dollar).

---

## Part 4 — Anti-Patterns (Learned from Production)

Specific mistakes that have wasted rounds of iteration. Don't repeat them.

### Anti-pattern 1 — Writing the shot list before the VO
Writing visuals first produces a VO that has to scan-over-and-bridge scenes that don't match, so the narration gets wordy and unnatural. The VO is always written first. Clips are cut to fit.

### Anti-pattern 2 — More than one trust signal in 30 seconds
"Top 1.3%, vetted and verified, no contracts, money-back guarantee, personal account manager" in a 30s VO sounds like a spec sheet. One signal, landed well, converts better. Save the rest for the landing page.

### Anti-pattern 3 — "Neutral international" voice
Picking a US voice or the ElevenLabs default "Rachel" because the AU voices felt "unfamiliar" is the easiest way to kill the ad. The AU accent is the single biggest trust marker on AU paid social. Non-negotiable.

### Anti-pattern 4 — Cinematic Seedance defaults
Without the `documentary` opener and the anti-glow suffix, Seedance produces Instagram-Reels-quality cinematic footage. Beautiful, and instantly dead — parents scroll past. Every prompt gets the opener + suffix. No exceptions.

### Anti-pattern 5 — Character consistency attempts across clips
Trying to make "the same girl" appear in all 7 clips. Seedance text-to-video does NOT hold character across separate generations. Either use image-to-video with a reference image across clips (harder, more expensive), or design the shot list around close-ups of hands, over-the-shoulder framing, and new scenes — so character consistency isn't required. The latter is the default for this skill.

### Anti-pattern 6 — Music that competes with the voiceover
The signature sound of a Tutero voiceover ad is a warm, whisper-quiet lo-fi acoustic bed that sits well under the VO — never over it. The failure mode is music that's too loud (above ~10% during speech), too melodic (catches the ear and pulls attention from the VO), or too produced (sounds like a stock "uplifting corporate" bed, reads as salesy). Use the Lo-fi Acoustic Sunshine spec in Part 2, or don't use music at all. Never pick a random track from a stock library just to fill silence.

### Anti-pattern 7 — Letter-by-letter URL
"T-U-T-E-R-O dot C-O-M dot A-U" is an ElevenLabs default when the model doesn't recognise the word. Always use the pronunciation dictionary OR phonetic spelling in the script ("tutero dot com dot au" rather than "tutero.com.au" in the raw text) OR test-render and rewrite if it spells out.

### Anti-pattern 8 — The 85-word 30-second VO
Cramming seven ideas into 30 seconds. It sounds rushed, unnatural, and AI. Ruthless cutting to 60–75 words is the single biggest dial for "sounds like a real person". When in doubt, cut.

### Anti-pattern 9 — Generic b-roll montage with no story
Eight pretty clips of kids at laptops with a VO reading the tagline. Looks fine. Converts badly. Every video must execute one of the four arcs (Part 1 Step 3). A montage of vibes is not an arc.

### Anti-pattern 10 — No whole-transaction frame
The parent's biggest mental block is "I can't picture how this works". If there's no clip showing child + laptop + tutor-on-screen, the imagination work hasn't been done. Every video includes at least one.

### Anti-pattern 11 — Ending on footage instead of the end card
Ending on a cute clip of a kid smiling and then cutting to black. The last 3–4 seconds must be the designed end card with logo, tagline, and URL. This is where conversion happens — it is non-negotiable.

### Anti-pattern 12 — 1:1 aspect for a Reel / 9:16 for a Feed
Placement mismatches waste budget. Always confirm the placement with the brief and render the correct aspect. Don't letterbox — regenerate.

---

## Part 5 — Quick Reference

**Format:** Voiceover-style static b-roll. 15–30s. 9:16 (Reels/Stories) or 1:1 (Feed). Australia only.

**Brand sound signature:** Emma (warm AU female, ElevenLabs) + Lo-fi Acoustic Sunshine (nylon guitar, C→G→Am→F, ~100 BPM, whisper-quiet under VO, swells on end card).

**Stack:**
- Video: Seedance 2.0 (fal.ai) — fast tier for iteration, standard for final
- Voice: ElevenLabs `eleven_v3`, voice `emma` (ID `56bWURjYFHyYyVf490Dp`) stored in `config/elevenlabs_voices.json`
- Music: shared 60s lo-fi acoustic loop at `shared/audio/tutero_lofi_bed_60s.mp3`
- Assembly: ffmpeg (concat clips, mix VO + sidechain-ducked music bed, export)
- End card: HTML → PNG (or direct PNG) using `visual-identity` constants

**Word budgets:**
- 15s → 30–38 words of VO, 5–7 clips
- 20s → 40–50 words, 7–9 clips
- 30s → 60–75 words, 10–14 clips

**The four arcs:** Problem → Solution · Specific Moment → Reframe · Objection → Resolution · Scene Montage → Claim.

**Every video must:**
1. Name the product ("1-on-1 tutoring") spoken, once
2. Include one trust shortcut — not three
3. Show at least one whole-transaction frame (child + laptop + tutor-on-screen)
4. Carry at least one Australianness anchor
5. End with the CTA and URL as the final spoken line
6. End on the designed end card (3–4s hold)
7. Carry the Lo-fi Acoustic Sunshine bed unless deliberately silent (documented in `ads.json` notes)

**Every Seedance prompt must:**
1. Open with `Documentary home video, shot on an iPhone 13, default camera app, no editing, no filter.`
2. Specify static or gentle handheld camera — never cinematic
3. Specify flat, neutral household lighting — never warm, never golden
4. Include the `VIDEO_ANTI_GLOW_SUFFIX`

**Every VO must:**
1. Be written before the shot list
2. Use Emma (voice ID `56bWURjYFHyYyVf490Dp`) by default
3. Use SSML `<break>` tags for pausing
4. End with "tutero.com.au" pronounced naturally, not letter-by-letter
5. Clock in under the word budget for its length

**Every music mix must:**
1. Sit at ~10% (~-24 dB) during VO lines — VO always dominates
2. Swell to ~35–40% (~-8 to -10 dB) only during end card hold
3. Use sidechain compression, not manual volume envelopes, to drive the ducking
4. Never use stock library "uplifting corporate" beds or melodic loops

**Hard rules from `parent-copy` that also apply here:** No AI. No platform. No app-as-product. No "sign up". "Tutor" as default noun, not "teacher".

---

## Cross-references

- **`winner-insights`** — which angles convert; which personas to target; the 7 moves
- **`parent-copy`** — voice, forbidden words, pillars, proof stack, pre-flight
- **`visual-identity`** — colours, logo, gradient constants for the end card
- **`image-generator`** — the static sibling of this skill; anti-AI aesthetic principles extend to motion
- **`creating-paid-social-ads`** — the static creative pipeline; share the same cognition system (reason to buy, persona, arc)
- **`brand-messaging`** — company positioning, taglines, five pillars (tutoring), messaging by audience