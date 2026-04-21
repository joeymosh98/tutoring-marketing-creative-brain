---
name: quality-gates
description: >
  Anti-patterns and production checklist for Tutero Tutoring AU paid social ad creatives.
  Read when reviewing ads before shipping. Companion to creating-paid-social-ads.
---

# Quality Gates — Tutero Tutoring AU Paid Social

## Anti-Patterns (Learned from Iteration)

These are specific mistakes made during the development of this skill. Each one wasted a round of feedback. Don't repeat them.

### Anti-pattern 1: Dark backgrounds

**What happened:** First iteration used dark (#2a2520) backgrounds with custom layouts, speech bubbles, phone mockups, translucent overlay bars.

**Why it's wrong:** Tutoring ads MUST use light blue (#F0FAFF) or full-bleed photos. Dark backgrounds feel corporate and off-brand.

**Rule:** Background is either #F0FAFF (light blue card) or a full-bleed photo. Nothing else.

### Anti-pattern 2: Cookie-cutter templates

**What happened:** Second iteration made all 4 ads follow the identical template with no variation.

**Why it's wrong:** Variety in the feed is a competitive advantage. If all 4 ads look identical, the parent sees one and scrolls past the rest.

**Rule:** A batch of 4+ ads must use at least 2 different templates. Preferably 3.

### Anti-pattern 3: Generic copy recycled across ads

**What happened:** All 4 ads had the same generic ticks and the eyebrow was descriptive rather than hypothesis-specific.

**Why it's wrong:** If the ticks are interchangeable between ads, the ads aren't testing different hypotheses.

**Rule:** No two ads in a batch should share more than 1 tick. The eyebrow must be unrecyclable.

### Anti-pattern 4: White tick pills on photo backgrounds

**What happened:** Photo-overlay ads used the same white rounded pill cards as the light-blue card ads.

**Why it's wrong:** The white pills look like "app UI" on a photo background. Winning reference ads use ✅ emoji + bold text directly on the dark gradient.

**Rule:** White pill ticks on light-blue backgrounds. ✅ emoji ticks on photo backgrounds. Never mix.

### Anti-pattern 5: White stroke on gradient hero text

**What happened:** Multiple iterations added `-webkit-text-stroke: 5px #FFFFFF` and `paint-order: stroke fill` to the gradient hero text.

**Why it's wrong:** The winning ads do NOT feature a white outline on the gradient text. The stroke makes the text look bloated and is NOT part of the brand aesthetic. This was confirmed across multiple feedback rounds. The gradient itself provides enough visual impact.

**Rule:** NEVER add `-webkit-text-stroke` or `paint-order: stroke fill` to the gradient hero text. On ANY template, ANY background. This is the single most common CSS mistake in this skill.

### Anti-pattern 6: Bottom overflow / border-radius clipping / cramped logo

**What happened:** Photo-overlay layouts had content sitting too close to the bottom edge. The logo felt squished against the bottom. The 32px border-radius clipped into the footer area.

**Why it's wrong:** Content gets cut off, logo feels cramped, whole ad looks amateur.

**Rule:** Photo-overlay layouts: **80px bottom padding** minimum. Light-blue card layouts: **56px** minimum. Ticks must have **24px margin-bottom** before the footer. Always account for the 32px border-radius eating into the visual padding.

### Anti-pattern 7: Eyebrow pills on photo-overlay layouts

**What happened:** Photo-overlay ads had an eyebrow pill floating at the top of the image.

**Why it's wrong:** The photo-overlay format should be simpler — the photo speaks. Adding eyebrow + hero + subhead + ticks makes it too busy.

**Rule:** Eyebrow pills belong on light-blue card templates (A, C, D) only. Never on photo-overlay (B).

### Anti-pattern 8: "Too busy" (the most common failure)

**What happened:** First iteration had overlapping speech bubbles, phone mockups, translucent bars, multiple text zones competing for attention.

**Why it's wrong:** Paid social ads must be scannable in under 2 seconds.

**Rule:** Count the visual elements. If there are more than 5 (including the photo), remove something.

### Anti-pattern 9: Chat bubbles / Persona Static template

**What happened:** Template E used chat bubble mockups to tell a persona story. Feedback: "this ad does not really make sense."

**Why it's wrong:** Chat bubble mockups are artificial. Nobody scrolling a feed thinks they're looking at a real conversation. The concept is forced.

**Rule:** Template E is deprecated. For persona-story angles, use Template B (Text-on-Photo) with the persona's image as full bleed. Let the ticks tell the story.

### Anti-pattern 10: Bottom-only content on text-on-photo (wasted space at top)

**What happened:** All text-on-photo ads used `justify-content: flex-end` to push all content to the bottom. The top 50% of the ad was empty photo with a light gradient — a massive waste of visual real estate.

**Why it's wrong:** It makes the ad look like a photo with a caption slapped on the bottom. The top half is "wasted space" that adds nothing.

**Rule:** Use the split layout: hero text at TOP, ticks+footer at BOTTOM, photo visible in the MIDDLE. `justify-content: space-between` with top-group and bottom-group wrapper divs. The dual-zone gradient darkens both text zones while leaving the middle clear for the photo.

### Anti-pattern 11: Same gradient colours on dark backgrounds

**What happened:** Used the standard gradient (#1D49E3 → #00A3FF → #66A693 → #E8A909 → #FF7A00) on photo-overlay ads. The dark blue and teal portions disappeared against the dark overlay.

**Why it's wrong:** The blue (#1D49E3) and teal (#66A693) are too dark to read against a dark background. Only the gold and orange were visible, making the gradient look "messed up."

**Rule:** Use the brighter gradient variant on photo-overlay backgrounds: `#5B8CFF → #33C8FF → #7EC9A8 → #F5C542 → #FF8C33`. Same hues, lifted ~30%.

### Anti-pattern 12: Gradient stops at 100% (orange never visible)

**What happened:** Gradient stops were evenly distributed (0%, 25%, 50%, 75%, 100%). The orange end of the gradient was invisible because `background-clip: text` renders the gradient across the full element width, but the text only occupies a portion.

**Why it's wrong:** The rightmost colours (gold, orange) — which are the most eye-catching — fell outside the visible text area. The gradient looked like it ended on teal/green instead of the signature orange.

**Rule:** Compress gradient stops to end at 85%: `0% → 15% → 35% → 60% → 85%`. This ensures the full blue-to-orange spectrum completes within the visible text.

### Anti-pattern 13: Descender clipping (line-height too low)

**What happened:** Used `line-height: 1` (then `1.15`) on the hero text. The bottom of the 'g' in "Tutoring" was clipped.

**Why it's wrong:** Satoshi 900 at 100–108px has deep descenders. Standard line-heights clip them.

**Rule:** Hero text `line-height: 1.25` minimum. Never use `1` or `1.15`.

### Anti-pattern 14: Content too close to edges

**What happened:** Side padding was 52px, making content feel cramped against the edges. Bottom padding was 44px (card) / 64px (photo), making the logo feel squished.

**Why it's wrong:** The "squished" feeling is the single most common reason ads look amateur rather than professional.

**Rule:** Minimum padding: 48px top, 56px sides, 56px bottom (card) / 64px top, 60px sides, 80px bottom (photo). No content element should be closer than 56px to any edge.

### Anti-pattern 15: Eyebrow repetition within hypothesis batch

**What happened:** Two ads in the Pickup-Line Mum hypothesis both started with "She made one phone call..." — one said "...you haven't", the other said "...It changed Tuesdays."

**Why it's wrong:** If a parent sees both ads in the same session, they blur together. The eyebrows need to be instantly distinguishable.

**Rule:** No two eyebrows within the same hypothesis may share their opening phrase. Every eyebrow must be independently recognisable.

### Anti-pattern 16: Inconsistent footer and subhead

**What happened:** Some ads said "Choose your dream tutor at tutero.com.au", others just "tutero.com.au". Some subheads had capital "For" and double flags, others lowercase "for" and single flag.

**Why it's wrong:** Inconsistency undermines brand trust and looks sloppy.

**Rule:** Footer is always `tutero.com.au`. Subhead is always `for Prep – Year 12 🇦🇺` (lowercase, one flag, right side).

---

## Full Production Checklist

Run this before delivering any ad batch:

### Per-ad checks
- [ ] Background is **light blue (#F0FAFF)** OR **full-bleed photo** — not dark, not white, not purple
- [ ] Hero noun has the **correct gradient variant** (standard on light-blue, bright on photo-overlay)
- [ ] Gradient stops end at **85%** not 100%
- [ ] Hero text has **NO `-webkit-text-stroke`** (no white outline)
- [ ] Hero text has **`line-height: 1.25`** (descenders not clipped)
- [ ] Subhead has **NO stroke** — plain colour only
- [ ] Subhead format: lowercase `for Prep – Year 12 🇦🇺` (one flag, right side)
- [ ] At least one **🇦🇺 AU flag** visible
- [ ] Photography is **UGC-style** — not stock, not classrooms, not studios
- [ ] At least one **human face** in the creative
- [ ] Photo has explicit **`object-position`** set (not relying on default)
- [ ] Ticks are **hypothesis-locked** — not recycled from other ads
- [ ] One tick is a **risk-reducer** ("Pay Per Lesson", "No Lock-in Contract")
- [ ] Tick format matches the background: **white pills on light blue**, **✅ emoji on photo**
- [ ] No purple anywhere — this is tutoring, not tutero.ai
- [ ] Tutero logo is present (primary on light, white on dark)
- [ ] Footer says **just "tutero.com.au"** — no extra copy
- [ ] Bottom padding: **56px min on card**, **80px min on photo-overlay**
- [ ] Side padding: **56px min** — no content touching edge zone
- [ ] Total visual elements ≤ 5 (not busy)
- [ ] No eyebrow pill on photo-overlay templates
- [ ] Text-on-Photo uses **split layout** (hero at top, ticks at bottom)
- [ ] Pre-flight score ≥ 3 (against the 7 moves)

### Batch checks
- [ ] **At least 1 ad uses an experimental layout from the style inspiration file (not Templates A–F)**
- [ ] **No single template letter accounts for more than 30% of the batch**
- [ ] **No two ads share more than 1 tick** within same hypothesis
- [ ] **No two eyebrows share their opening phrase** within same hypothesis
- [ ] Each ad tests a distinct hypothesis angle
- [ ] ads.json updated with all entries (including hypothesis field for gallery grouping)
- [ ] **All images generated via `generate_image()` and saved to ads/images/** — verify every file exists on disk, not just listed in ads.json
- [ ] **Every HTML creative's `<img src>` resolves to an existing file** — no broken image references
- [ ] **ads.json `image` field matches the actual filename used in the HTML** for every ad
- [ ] Gallery page renders all creatives correctly in hypothesis groups
- [ ] Primary text (Meta ad copy) written for each ad
- [ ] Load-bearing word identified for each ad
