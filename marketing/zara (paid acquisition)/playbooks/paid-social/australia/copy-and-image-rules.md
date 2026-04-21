---
name: copy-and-image-rules
description: >
  On-image copy rules (eyebrow pills, tick content, tick formatting) and image generation
  setup for Tutero Tutoring AU paid social ads. Read when writing ad copy or generating
  images. Companion to creating-paid-social-ads.
---

# Copy & Image Rules — Tutero Tutoring AU Paid Social

## Copy Rules for On-Image Text

### Eyebrow pill (Templates A, C, D, G only — NEVER on photo-overlay)

The eyebrow adds a specific hook or proof point above the gradient hero. It's the first thing the eye reads. One sentence max. It should be **clear and specific** — never clever at the expense of comprehension.

**Good eyebrows:**
- "We accept 1.3% of tutors who apply" (clear stat, selectivity)
- "Same tutor every week, no exceptions" (clear benefit, specific)
- "Maths, English, Science & More" (clear subject range)
- "Australia's most selective tutoring service" (clear positioning)
- "Vetted, verified & background-checked" (clear trust signal)
- "No contracts. Cancel anytime." (clear risk-reducer)

**Bad eyebrows:**
- "She made one phone call you haven't" (clever, but a scrolling parent doesn't know what you're selling)
- "Meet your teacher before you commit" (not all tutors are teachers, and unclear what the product is)
- "What one mum said after week 3" (vague, doesn't name the product or benefit)
- "Less worry. More Anna." (who is Anna? Not clear)

The test: does a parent who has never heard of Tutero understand this eyebrow in 1 second? If not, rewrite.

**Eyebrow deconfliction rule:** No two ads within the same hypothesis batch may share the same eyebrow or start with the same opening phrase. Every eyebrow must be instantly distinguishable in the feed.

### Ticks — benefit stacking and overlap prevention

Every ad's ticks must be **unique to its hypothesis**. Never copy-paste the same 3 ticks across all ads in a batch.

**The overlap rule: No two ads within the same hypothesis may share more than 1 tick.** This is the most commonly violated rule and the single biggest reason ads feel repetitive.

Example of correct tick distribution (4 ads):

| Ad | Tick 1 (quality) | Tick 2 (risk-reducer) | Tick 3 (outcome/convenience) |
|---|---|---|---|
| 2A | Same Tutor Every Week | No Contracts | Grow Confidence |
| 2B | Personal Account Manager | Cancel Anytime | Weekly Lesson Reports |
| 4A | Vetted & Verified Tutors | Money Back Guarantee | Fun & Engaging Lessons |
| 4B | Custom Tutor Pairing | No Upfront Fees | Aligned to Curriculum |

Check: every pair shares 0 ticks. ✅

**Tick pool by category (draw from these, always mix categories in each ad):**

**Service & quality:**
- Same Tutor Every Week
- Custom Tutor Pairing
- Vetted & Verified Tutors
- Caring Tutors
- Personal Account Manager
- A Real Person Picks Up the Phone
- 1.3% Acceptance Rate
- Matched by a Real Person

**Learning & curriculum:**
- We Find & Fix Gaps in Knowledge
- Aligned to Curriculum
- Any Subject
- Available for Every Year Level
- Fun & Engaging Lessons
- Interactive Resources
- Lessons in Our Interactive Learning Space

**Convenience:**
- Tutoring from Home
- No Driving, No Traffic
- Convenient Tutoring
- Mobile App for Parents
- Available in Every State

**Risk & cost:**
- No Contracts
- No Upfront Fees
- Cancel Anytime
- Money Back Guarantee
- Free Tutoring Consultation
- Affordable Pricing

**Outcomes & proof:**
- Grow Confidence
- Improve Grades
- Watch Your Child's Confidence Soar
- Weekly Lesson Reports
- See Progress After 3 Lessons
- A Safe Learning Environment

**Tick stacking rule:** Always mix categories. Ideal 3-tick pattern:
1. **Service quality tick** (what makes Tutero special)
2. **Risk-reducer tick** (why it's safe to try) — always in the middle
3. **Outcome or convenience tick** (what the parent gets)

The middle tick should always be the risk-reducer ("No Contracts", "Cancel Anytime", "Money Back Guarantee"). Parents are loss-averse — the risk-reducer is the tick that converts.

### Tick format by template

| Template | Tick format | Max ticks |
|---|---|---|
| A (Workhorse), C (Grid) | White pill with green circle + SVG checkmark | 3 |
| B (Text-on-Photo) | ✅ emoji + white bold text on dark gradient | 4 |
| D (Quote Card) | White pill with green circle + SVG checkmark | 3 |
| F (Polaroid) | Either format works | 2–3 |
| G (50/50 Split) | White pill with green circle + SVG checkmark | 3 |
| H (Confidence Statement) | **No ticks** — testimonial card replaces them | 0 |
| I (Dark Showcase) | **No ticks** — minimal brand awareness layout | 0 |
| J (Tutor Spotlight) | **No ticks** — credential card replaces them | 0 |
| K (Story Card) | **No ticks** — story text is the content | 0 |

---

## Image Generation

### API setup

Use Gemini Flash image preview via OpenRouter:

```python
response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    },
    json={
        "model": "google/gemini-3.1-flash-image-preview",
        "messages": [{"role": "user", "content": prompt}],
        "image_config": {"aspect_ratio": aspect_ratio},
    },
    timeout=120,
)
```

Aspect ratios: `"4:5"` for full-bleed photos, `"1:1"` for tutor headshots and testimonial avatars.

### The anti-AI negative block

**MANDATORY on every prompt.** Append this to the end of every image generation prompt:

```
NEGATIVE / AVOID: AI glow, soft rim lighting around subjects, halo lighting, golden hour orange tint, teal and orange colour grading, dreamy bokeh, extreme shallow depth of field, smooth airbrushed skin, perfect skin, retouched skin, flawless complexion, perfect symmetrical composition, cinematic colour science, HDR look, over-saturated colours, warm peachy skin tones, oversaturated warmth, studio lighting, softbox lighting, ring light, fashion editorial aesthetic, magazine photoshoot, Pinterest mood board feel, generic stock photo, diverse stock group arrangement, perfectly tidy environment, sterile modern interior, chalkboard background, apple on desk, graduation cap, headset on child, corporate tutoring centre, learning centre interior, text in image, watermark, brand logos visible, perfect lighting, dramatic lighting, moody lighting, film grain effect, Instagram filter, VSCO filter, beauty filter, AI rendering, 3D render, illustration, painting.
```

### Prompt structure

Every prompt must start with: `"Documentary photograph, NOT a stylised AI image. Shot on iPhone 13, default camera app, no editing, no filter."`

### Photo composition for text-on-photo ads

When generating images for Template B, the subject must be positioned to work with the split layout:
- **Leave space at top and bottom** — the gradient overlay will darken these zones for text
- **Subject's face should be in the middle third** — the clear zone of the dual gradient
- **Specify text overlay space** in the prompt: "with clear space in the upper quarter and lower third for text overlay"

### Strategic object-position per image type

After generating images, set `object-position` CSS per image to center the subject correctly:

| Image type | Recommended object-position |
|---|---|
| Portrait / headshot (for photo-wrap in Template A) | `center 15%` or `center 20%` |
| Full-bleed portrait (Template B) | `center 30%` (keeps face in clear middle zone) |
| Group scene (school gate, kitchen) | `center center` or `center 40%` |
| Overhead/flat lay (kitchen counter) | `center center` |

**Never rely on the default.** Always set an explicit `object-position`.

### Concurrent generation

Generate all images in parallel (4 workers max) for efficiency:

```python
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    futures = {executor.submit(generate_image, p, path, ar): name for name, p, ar, path in tasks}
```

### Image types needed per template

| Template | Images needed |
|---|---|
| A (Workhorse) | 1 scene photo (school gate, kitchen, home) |
| B (Text-on-Photo) | 1 strong photo (portrait, scene — must work with split layout overlay) |
| C (Tutor Grid) | 6–12 individual headshots (1:1 aspect ratio) |
| D (Quote Card) | 1 parent portrait/avatar (1:1 aspect, warm, candid) |
| F (Polaroid) | 3 different family photos |
| G (50/50 Split) | 1 lifestyle/study photo (candid desk scene, kitchen study, tutor-student — must carry half the canvas with no text) |
| H (Confidence Statement) | 1 portrait-in-environment photo (child in school uniform, outdoors, confident — works with dual-zone overlay) |
| I (Dark Showcase) | 1 tutoring session photo (student + laptop + tutor visible on screen — the "product shot") |
| J (Tutor Spotlight) | 1 large tutor portrait (natural, candid, 4:5 aspect — anti-AI aesthetic critical) |
| K (Story Card) | 1 environmental/contextual photo (school gates, sports field, suburban street — child may be visible but is not the focal point) |
