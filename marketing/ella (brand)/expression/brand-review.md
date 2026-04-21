---
name: brand-review
description: |
  Brand compliance audit skill for Tutero. Use when reviewing any asset -ad creative, document, presentation, email, landing page, social post, or any output from another agent -for brand compliance. Produces a structured pass/fail verdict with actionable fixes. Trigger on "brand review", "brand check", "review this for brand", "is this on-brand", "brand audit", "compliance check", or any request to evaluate a Tutero asset against brand standards.
cssclasses:
Status: 🟡
tags:
Date Updated: 21 April 2026
---

# Brand Review

Use this skill to audit any Tutero asset for brand compliance. Read **visual-identity.md** and **brand-messaging.md** first -this skill is the enforcement layer on top of those two.

---

## How to Run a Review

### Step 1 -Identify the asset

Before checking anything, answer these three questions:

| Question | Why it matters |
|---|---|
| **Which brand layer?** Company / tutero.ai / Tutero Tutoring | Determines the palette, tone, and messaging rules |
| **Which market?** AU / US / Global | Determines locale spelling and cultural cues |
| **What type of asset?** Ad / doc / deck / email / landing page / social post | Determines which checklist to run |

### Step 2 -Run the relevant checklist

Use the asset-type checklist below. Score each item as PASS, FAIL, or N/A.

### Step 3 -Deliver the verdict

Use this format:

```
## Brand Review -[Asset Name]

**Layer:** [Company / tutero.ai / Tutero Tutoring]
**Market:** [AU / US / Global]
**Asset type:** [Ad / Doc / Deck / Email / Landing page / Social]

### Verdict: [PASS / FAIL / PASS WITH NOTES]

### Issues found: [N]

| # | Category | Issue | Fix |
|---|---|---|---|
| 1 | [Colour/Type/Copy/Logo/Tone/Layout] | [What's wrong] | [What to change -be specific] |

### What's working well
- [1-2 things the asset does right]
```

**Rules for verdicts:**
- **PASS** -zero issues
- **PASS WITH NOTES** -no hard failures, but 1-3 minor improvements recommended
- **FAIL** -any hard failure (wrong palette, AI mentioned to parents, wrong logo variant, forbidden language, wrong product name)

---

## Universal Checklist (All Assets)

These apply to every Tutero asset regardless of type or brand layer.

### Colour

- [ ] **Correct palette for the brand layer** -purple for tutero.ai/Schools/corporate, blue for Tutoring, never mixed
- [ ] **Main purple is `#832EC5`** -not the old `#3D1D8A`
- [ ] **Main tutoring blue is `#00A3FF`**
- [ ] **No invented colours** -every colour used must appear in the brand palette
- [ ] **If tutoring: leaning lighter** -`blue-50`, `blue-200`, `blue-500` preferred, `blue-600` and `blue-800` used sparingly

### Typography

- [ ] **Headings in Satoshi** (or Arial fallback in docs/decks)
- [ ] **Body in Hanken Grotesk** (or Arial fallback in docs/decks)
- [ ] **No other typefaces** unless explicitly justified

### Logo

- [ ] **Logo used from SVG file** -not recreated or retyped
- [ ] **Correct variant for background:** primary on light, white on dark/mid/photo, black for single-ink only, badge for small/square
- [ ] **Clear space preserved** -minimum height of the "t" in tutero on all sides
- [ ] **Not skewed, rotated, stretched, recoloured, or shadowed**
- [ ] **If PNG: rendered at 4×+ resolution** -no blurry logos
- [ ] **If PNG: transparent background** -no black rectangles
- [ ] **If PNG: display-p3 styles stripped** before conversion -lightbulb should show gradient (primary) or solid white (white variant), not black

### Product naming

- [ ] **tutero.ai** (lowercase) for the Schools/teachers product -never "Tutero Schools"
- [ ] **Tutero Tutoring** or **Tutero.com** for the tutoring product -never "tutoring platform"
- [ ] **Tutero** (capital T) for the company -never TUTERO, Tutor0, or lowercase tutero without URL context

### Tone

- [ ] **Human, not corporate** -no press-release voice
- [ ] **Confident, not arrogant** -direct and clear, never boastful
- [ ] **Warm, not fluffy** -genuine enthusiasm without empty cheerleading
- [ ] **Specific, not vague** -concrete benefits, not abstractions

### Forbidden language (all audiences)

- [ ] **No "AI-powered"** anything
- [ ] **No "cutting-edge" / "revolutionary" / "game-changing"**
- [ ] **No "platform" alone** -must be "AI teaching platform" or "teaching platform"
- [ ] **No "Tutero Schools"** -rebranded to tutero.ai
- [ ] **No "empower" / "leverage" / "stakeholders" / "solution" / "unlock potential"**

### Locale

- [ ] **One locale per asset** -AU and US English not mixed
- [ ] **Spelling matches the market** -personalised (AU) vs personalized (US)
- [ ] **Year levels match the market** -Prep–Year 12 (AU) vs K–12 (US)

---

## Tutoring Ad Checklist (Tutero Tutoring -Paid Social)

Run this IN ADDITION to the universal checklist for any parent-facing tutoring ad creative.

### Hard rules (any failure = FAIL verdict)

- [ ] **No AI language** -no "AI", "algorithm", "machine learning", "software", "technology", "smart", "powered by", "automated", "intelligent" anywhere a parent will read it
- [ ] **No "platform" / "app" / "tool"** as product descriptor -Tutero is a service
- [ ] **"Tutor" is the default noun** -not "teacher" as a blanket term
- [ ] **No purple anywhere** -this is tutoring, not tutero.ai
- [ ] **Background is light blue (`#F0FAFF`) or full-bleed photo** -not dark, not white, not purple

### Visual rules

- [ ] **Gradient hero text has NO white stroke** -no `-webkit-text-stroke`, no `paint-order: stroke fill`. The gradient fills without outline.
- [ ] **Correct gradient variant** -standard on light-blue, brighter variant on photo/dark backgrounds
- [ ] **Gradient stops end at 85%** -not 100% (otherwise orange is invisible)
- [ ] **Subhead has no stroke** -plain solid colour only, lowercase "for Prep – Year 12 🇦🇺"
- [ ] **Hero text `line-height: 1.25` minimum** -descenders ('g', 'y') must not clip
- [ ] **Photography is UGC-style** -real homes, iPhone feel, not stock, not classrooms, not studios
- [ ] **At least one human face** -real, not stock
- [ ] **Anti-AI-glow** -no golden hour, no rim lighting, no dreamy bokeh, no airbrushed skin
- [ ] **At least one AU signal** -flag, uniform, school gate, AU curriculum reference, AU home interior

### Layout rules

- [ ] **Tick format matches background** -white pills on light blue, ✅ emoji on photo
- [ ] **No eyebrow pill on photo-overlay templates** -eyebrows are for light-blue card layouts only
- [ ] **Photo-overlay uses split layout** -hero at top, ticks at bottom, photo visible in middle
- [ ] **Bottom padding: 56px min (card) / 80px min (photo-overlay)**
- [ ] **Side padding: 56px min** -no content touching edge zone
- [ ] **Total visual elements ≤ 5** -not busy
- [ ] **Footer is just `tutero.com.au`** -no extra copy
- [ ] **Tutero logo present** -primary on light, white on dark

---

## tutero.ai Ad / Content Checklist (Schools & Teachers)

Run this IN ADDITION to the universal checklist for any teacher-facing tutero.ai content.

### Visual

- [ ] **Purple palette used** - not blue (that's tutoring)
- [ ] **No stock photography** - product mockups, screen recordings, or typography-led layouts
- [ ] **Sentence case** - never Title Case headlines, never ALL CAPS (except "AI" and proper nouns)

---

## Document / Deck Checklist

Run this IN ADDITION to the universal checklist for any Word doc or PowerPoint deck.

- [ ] **Header:** logo (correct variant) + document title + sub-brand-500 bottom border
- [ ] **Cover:** sub-brand-900 background, white logo variant, white hero text
- [ ] **Section structure:** eyebrow label → sub-brand-500 rule → heading (Satoshi) → body (Hanken Grotesk)
- [ ] **Tables:** sub-brand-500 header labels, `gray-row` alternating, `gray-border` dividers
- [ ] **Logo PNG rendered at 4×+** -not blurry
- [ ] **display-p3 styles stripped** before SVG→PNG conversion
- [ ] **Arial used as fallback** for both Satoshi and Hanken Grotesk (web fonts can't embed in docx/pptx)

---

## Email Checklist

Run this IN ADDITION to the universal checklist for any email.

- [ ] **Correct brand layer** - tutoring emails use blue, tutero.ai emails use purple
- [ ] **If parent-facing: no AI language** - same hard ban as ads
- [ ] **Product naming correct** throughout
- [ ] **Locale consistent** - no spelling mix

---

## Common Mistakes (Ranked by Frequency)

From production experience, these are the most common brand violations. Check for them first.

1. **White stroke on gradient text** -the #1 most common CSS mistake. Never add it.
2. **AI mentioned in parent-facing copy** -hard ban, no exceptions
3. **Wrong palette** -purple on tutoring, blue on schools
4. **"Teachers" used as blanket term for tutors** -default is "tutor"
5. **Old purple `#3D1D8A`** instead of `#832EC5`
6. **"Tutero Schools"** instead of tutero.ai
7. **Blurry logo** -PNG rendered at 1× instead of 4×+
8. **Black lightbulb** -display-p3 styles not stripped before SVG→PNG conversion
9. **Gradient stops at 100%** -orange invisible, gradient looks like it ends on teal
10. **"Platform" without qualifier** -must be "AI teaching platform" or "teaching platform"
