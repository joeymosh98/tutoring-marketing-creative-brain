---
name: creating-paid-social-ads
description: >
  End-to-end pipeline for creating paid social ad creatives (Meta/Facebook/Instagram statics)
  for Tutero Tutoring in the Australian market. This is the orchestrator — it contains the
  cognition system (how to think) and workflow (how to execute), then references companion
  files for design, copy, image, and quality details. Trigger on "create an ad", "make a
  paid social creative", "build a Meta ad", "design a Facebook ad", "Instagram ad for tutoring",
  "new ad creative", "ad for hypothesis", or any request to produce Australian parent-facing
  tutoring paid social creative. NOT for tutero.ai schools ads. NOT for Florida/US ads.
---

# Creating Paid Social Ads — Tutero Tutoring Australia

This skill orchestrates the full pipeline: hypothesis → cognition → copy → image → HTML → gallery.

**Read these companion files as needed:**
- `design-system` — brand constants, 10 templates (A–K), CSS, file structure
- `copy-and-image-rules` — eyebrow/tick copy rules, image generation API + prompts
- `quality-gates` — 16 anti-patterns, per-ad checklist, batch checklist
- `style-inspiration` — 12 experimental layout blueprints from outside tutoring

**Also read these dependency skills in full before starting:**
- `visual-identity` — brand colours, typography, logo, the Tutoring Ad Aesthetic recipe
- `winner-insights` — the 12 winners, 7 recurring moves, pre-flight checklist
- `parent-copy` — parent-facing copy rules, forbidden words, pillars, proof stack
- `image-generator` — image generation prompts, anti-AI rules, Nano Banana 2 API

---

## The Cognition System (Think Before You Design)

Never open an HTML file before completing these steps. The thinking is the work. The HTML is just rendering.

### Step 1: Identify the reason to buy

Every ad is anchored to a specific reason a parent would buy tutoring. Not a vague "wound" — a concrete situation the parent is living through right now.

**The 8 reasons to buy:**

| # | Reason | What the parent is feeling |
|---|--------|---------------------------|
| 1 | **Child is falling behind** | They can see the gap widening and don't know how to close it |
| 2 | **Unsure how to help their child improve** | They want to help but feel out of their depth |
| 3 | **School system isn't supporting their child** | The school cares but can't give their child individual attention |
| 4 | **Upcoming exams** | They want to give their child the best shot at success |
| 5 | **Child's confidence is low** | Their child needs someone to build them back up |
| 6 | **Accountability** | They want someone to keep their child on track each week |
| 7 | **Emotional support and mentorship** | Their child needs more than academic help — they need a guide |
| 8 | **Role model** | They want someone their child can look up to |

If no reason to buy is provided, ask for one. But don't overthink it — most ads serve reasons 1, 2, 3, or 5. Pick the one that best fits the brief and move on.

**Then identify which Tutero pillar best answers that reason:**
- Faculty (1.3%, vetted & verified, custom pairing)
- Knowing (find & fix gaps, weekly reports)
- Proof (lesson reports, progress visible)
- Open Door (no contracts, money back guarantee, cancel anytime)
- Account Manager (real person, picks up the phone)

### Step 2: Know the persona

Don't over-narrow. There are three broad parent types — nearly every ad serves one of them:

**The three parent types:**
1. **The worried parent** — sees their child struggling, feels helpless, needs reassurance that someone competent will step in
2. **The ambitious parent** — wants to push their child to reach their potential, sees tutoring as an investment
3. **The frustrated parent** — doesn't feel the school system is doing enough, looking for something better

**Sub-segments within those types** (use for targeting, not always in the copy):
- **Switchers** — tried another tutoring service or centre, it didn't work, now they're skeptical
- **Anxious parents** — higher emotional intensity, need more reassurance, respond to warmth
- **Special learning needs** — child has specific needs the school can't meet, need 1:1 attention
- **Regional families** — no access to in-person support, online tutoring is the only option
- **Busy working parents** — can't do homework with their child, need someone reliable to step in

An ad for "all parents" is vague. Pick a type. But don't force an overly narrow label (e.g., "working mum aged 35–42") — the broad types are enough for most ads.

### Step 3: Choose the template

Match the reason to buy to the template that best serves it. See `design-system` for the full template catalogue (A–K). Quick decision matrix:

| Reason / angle | Best template | Why |
|---|---|---|
| Falling behind, school gaps | **A: Workhorse** or **G: 50/50 Split** | Clear product naming + benefit ticks do the work |
| Abundance of choice, faculty quality | **C: Tutor Grid** | Faces = choice = trust |
| Single tutor spotlight, 1.3% selectivity | **J: Tutor Spotlight** | One hero tutor + credential card — intimate and verifiable |
| Confidence, growth, transformation | **H: Confidence Statement** or **K: Story Card** | H for emotional headline; K for narrative story |
| Real parent testimonial, outcome proof | **D: Quote Card** or **H: Confidence Statement** | D for pull-quote hero; H for headline + Trustpilot card |
| Persona mirroring (specific archetype) | **B: Text-on-Photo** | Persona in the frame, ticks tell the story |
| Social proof, volume of evidence | **F: Polaroid Collage** | Three photos = pattern, not anecdote |
| Premium brand awareness, retargeting | **I: Dark Showcase** | Minimal, prestige — logo + statement + product photo |
| Balanced photo + product info | **G: 50/50 Split** | Magazine spread — photo and proposition side by side |
| Upcoming exams, urgency | **A: Workhorse** or **B: Text-on-Photo** | Clear product + "this term" urgency in subhead/ticks |

Also consult `style-inspiration` for experimental layouts beyond the core templates.

### Step 4: Write the copy

Copy is not a rigid formula. Different ads need different approaches depending on the template, the reason to buy, and what the creative leads with. The goal is always the same: **be clear about what the product is, give a reason to act, and make it easy to act.**

**Three copy approaches (choose the one that fits):**

**Approach A — Product-led (most common):**
The headline clearly names the product ("1-on-1 Tutoring for Prep – Year 12"). The ticks stack specific benefits. The primary text gives one compelling reason to act now. Works for Templates A, C, G, and any ad where clarity is the strategy.

**Approach B — Emotion-led:**
The headline makes an emotional claim that clearly communicates what the product does ("Grow your child's confidence *this term.*" or "Her confidence will grow every lesson."). The supporting copy gives one proof point. Works for Templates H, K, and B.

**Approach C — Story-led:**
The headline tells a specific story ("By the end of the term, Jonah was a *different* kid."). The photo provides context. Minimal supporting copy — the story and image do the work. Works for Templates K, B, and D.

**Regardless of approach, every ad needs:**
- **Clarity** — a parent scrolling at speed knows this is tutoring within 2 seconds
- **A reason to act** — one USP, one proof point, or one emotional hook
- **A CTA** — choose the strongest for the context:
  - "Get a Quote →"
  - "Get a Custom Quote →"
  - "Find Your Tutor →"
  - "Speak With Our Team →"
  - "Start Your Tutoring →"
  - "Book a 1-on-1 Lesson →"

**Copy layers that may or may not be present (adapt to the template):**
- **Primary text** (Meta ad copy above the image) — 2–4 sentences max. Not every template needs heavy primary text.
- **Eyebrow** (on-image pill) — optional, used on light-blue card templates (A, C, D, G). See `copy-and-image-rules`.
- **Ticks** (on-image benefits) — draw from the approved copy bank in `parent-copy`. Mix categories. Middle tick = risk-reducer. Not every template uses ticks — H, I, J, K don't.
- **Headline / hero text** — the gradient or white text on the image. This is the most important piece of copy in the ad.
- **Supporting text** — a proof point or stat below the headline (Template H, J). Optional.

### Step 5: Run the pre-flight

Before building, check:

| # | Check | |
|---|-------|---|
| 1 | **Clarity** — a parent knows this is tutoring and who it's for in 2 seconds | |
| 2 | **Reason to buy** — the ad addresses a specific reason from Step 1 | |
| 3 | **Human face** — at least one real, natural photo (not stock, not AI-glow) | |
| 4 | **Risk-reducer** — somewhere in the ad, the parent sees it's safe to try (no contracts, cancel anytime, money back guarantee) | |
| 5 | **Australianness** — AU flag, school uniform, "Australia" in copy, or AU curriculum reference | |
| 6 | **Confidence signal** — the ad points at a child who feels capable, not just "better grades" | |

**0–2:** Don't ship. **3–4:** Ship as experimental variant. **5–6:** Strong — put budget behind it.

---

## Production Workflow

This is the sequence for building ads once the thinking is done. The steps are fixed for the *technical* build — but the creative decisions (copy approach, template, imagery) should already be resolved in the cognition system above. Don't force every ad through an identical process; adapt the workflow to serve the creative.

1. **Think first** — Run the cognition system (Steps 1–5 above) for each ad. Write down: reason to buy, persona, copy approach, image description. For batches, lay out all ticks in a table and deconflict — no two ads in the same batch should share more than 1 tick. No two eyebrows should share their opening phrase.

2. **Choose the template deliberately** — Before building anything, read the full template catalogue in `design-system` (Templates A–K). For each ad, consider at least 3 candidate templates and write down why one is the best fit. Think about:
   - What is the strongest element of this ad — the copy, the photo, the story, or the proof? Pick the template that gives that element the most room.
   - What does the reason to buy demand? A confidence story needs H or K. A product clarity play needs A or G. A tutor trust angle needs J. Don't default to Template A for everything.
   - What else is in this batch? If you've already got two Workhorse ads, a 50/50 Split or Dark Showcase will create variety in the feed.
   - Would a different template make this specific piece of copy land harder? A brilliant emotional sentence might be wasted inside a tick-heavy template — give it Template H where it can breathe.

   **Write this out before proceeding:** "Template [X] because [reason]. Considered [Y] and [Z] but [why they're worse for this ad]." This one sentence prevents lazy defaults.

3. **Generate images (MANDATORY — DO NOT SKIP)** — For each ad, list every image needed (filename + prompt). Execute `generate_image()` from `image-generator`. Append the ANTI_GLOW suffix to every prompt (see `copy-and-image-rules`). For photo-overlay templates, specify text overlay space in the prompt. Generate concurrently (4 workers max). Review for AI glow — regenerate any that fail the 5-second test. **HARD GATE: Verify every image file exists on disk before proceeding.**

4. **Copy the logo** — `cp shared/images/tutero-logo.svg ads/images/tutero-logo.svg`

5. **Build HTML creatives** — One file per ad in `ads/creatives/`. Use the exact template CSS from `design-system`. **Every `<img src="...">` must reference an image that already exists from step 3.**

6. **Update ads.json** — Register all ads with full metadata.

7. **Run the production checklist** — See `quality-gates`. Every checkbox must pass.

8. **Preview** — Open the gallery page. Verify each creative renders correctly. Open at full size (1080×1350) to check: layout balance, text legibility, tick alignment, descender integrity, gradient colour completion (must end on orange), logo breathing room.

**The creative leads, the workflow follows.** If a brilliant piece of copy stands on its own, build around it. If a template demands a different writing approach, adapt. The workflow exists to ensure quality and consistency in the *build* — not to constrain the *thinking*.

---

## What This Skill Does NOT Cover

- **Video/Reel ads** — This skill is for static creatives only. Video UGC follows different rules.
- **Carousel ads** — Different format, different layout logic.
- **Florida/US ads** — Use `tutero-florida-sufs-creative-designer` instead.
- **tutero.ai / Schools ads** — Use `tutero-ai-ad-rules` instead. Never use blue palette for Schools.
- **Copywriting theory** — For the full copy system (forbidden words, pillars, thinking moves, objection map), see `parent-copy`.
- **Brand fundamentals** — For logos, typography rules, and the gradient recipe, see `visual-identity`.
- **Image generation deep dive** — For prompt templates, persona skeletons, and anti-AI aesthetic rules, see `image-generator`.
