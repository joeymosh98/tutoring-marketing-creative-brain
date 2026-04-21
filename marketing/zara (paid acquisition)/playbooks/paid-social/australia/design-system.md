---
name: design-system
description: >
  Brand constants, design templates (A–K), and technical file structure for Tutero Tutoring
  AU paid social ad creatives. Read when building HTML ad files. Companion to creating-paid-social-ads.
---

# Design System — Tutero Tutoring AU Paid Social

## Brand Constants (Never Deviate)

These are non-negotiable. Every ad must use these exact values.

### Colours

| Token | Hex | Usage |
|---|---|---|
| `blue-50` | `#F0FAFF` | **Light blue card background** — the signature surface for tutoring ads |
| `blue-200` | `#C2E9FF` | Eyebrow pill background, tinted accents |
| `blue-500` | `#00A3FF` | Main tutoring blue — CTAs, accents |
| `blue-800` | `#004166` | Dark text on light backgrounds, subheads |
| `dark-text` | `#1A1A2E` | Body text |
| `gray-text` | `#5A5A70` | Subtext, captions |
| `white` | `#FFFFFF` | Tick pills, text on dark |
| `green` | `#22c55e` | Tick checkmark circles |

### The Tutoring Gradient (hero text fill)

The gradient has **two colour variants** — one for each background type. The hues are the same (blue → cyan → teal → gold → orange) but the photo-overlay version is lifted ~30% brighter so it reads against dark backgrounds.

**On light-blue (#F0FAFF) backgrounds:**
```css
background: linear-gradient(90deg, #1D49E3 0%, #00A3FF 15%, #66A693 35%, #E8A909 60%, #FF7A00 85%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
```

**On photo-overlay (dark) backgrounds:**
```css
background: linear-gradient(90deg, #5B8CFF 0%, #33C8FF 15%, #7EC9A8 35%, #F5C542 60%, #FF8C33 85%);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
```

**Critical: Gradient stop compression.** The stops end at **85%, not 100%**. Because `background-clip: text` renders the gradient across the full element width but the text only occupies a portion, stops at 100% cause the rightmost colours (gold, orange) to fall outside the visible text. Compressing to 85% ensures the full blue→orange spectrum completes within the text. This is mandatory on both variants.

**Critical: NO white stroke.** The gradient hero text must **never** have `-webkit-text-stroke` or `paint-order: stroke fill`. The winning ads do not feature a white outline on the gradient text. The gradient itself is visually distinctive enough. Any stroke makes the text look bloated and is off-brand. This applies to ALL templates, both light-blue and photo-overlay backgrounds.

### Typography

| Role | Font | Weight | Size range | Line-height |
|---|---|---|---|---|
| Hero gradient word | Satoshi | 900 (Black) | 100–108px | **1.25** |
| Subhead | Satoshi | 900 (Black) | 42–48px | 1.1 |
| Eyebrow pill | Hanken Grotesk | 600 | 22px | — |
| Tick text (pill format) | Hanken Grotesk | 600 | 22–24px | — |
| Tick text (emoji format) | Hanken Grotesk | 600 | 28px | — |
| Footer URL | Hanken Grotesk | 600 | 18–20px | — |

**Critical: Hero line-height must be 1.25.** Satoshi 900 at 100–108px has deep descenders on letters like 'g', 'y', 'p'. At `line-height: 1` or `1.15`, the bottom of the 'g' in "Tutoring" is clipped. `1.25` provides safe clearance for all descenders. Never use `line-height: 1` on hero text.

```html
<link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Canvas

All Meta feed statics are **1080 × 1350px** (4:5 aspect ratio). Outer border-radius: **32px**.

### Spacing Rules — Harmonious Positioning

Content must feel balanced and breathable across the entire canvas. Cramped ads look amateur.

| Rule | Light-blue card templates | Photo-overlay templates |
|---|---|---|
| **Top padding** | 48px | 64px |
| **Side padding** | 56px | 60px |
| **Bottom padding** | 56px | 80px |
| **Ticks → footer gap** | 24px | 28px |

**The 56px edge rule:** No content element (eyebrow, hero text, ticks, logo) should be closer than 56px to any edge. When content touches the edge zone, the ad feels unprofessional and cramped. This is the single most common "looks amateur" signal.

### Subhead Format (Standardised)

Always use this exact format: `for Prep – Year 12 🇦🇺`

- Lowercase "for" (it flows from the hero: "Online Tutoring" / "for Prep – Year 12")
- One 🇦🇺 flag on the right side only
- En dash (–) between Prep and Year
- On light-blue bg: `color: #004166;` (no stroke)
- On photo bg: `color: #FFFFFF;` (no stroke)

**Never:** `🇦🇺 For Prep – Year 12 🇦🇺` (capital F, double flags) — inconsistent and busy.

### Footer Format (Standardised)

Always use: `tutero.com.au`

**Never:** "Choose your dream tutor at tutero.com.au" or "Meet your dream tutor at tutero.com.au" — footer is not copy space.

### Logo

Use the primary logo SVG (`tutero-logo.svg`) on light backgrounds. Invert to white on dark/photo backgrounds:

```css
/* On dark backgrounds */
.logo { filter: brightness(0) invert(1); }
```

Logo height: **34–36px** in the footer.

---

## Design Templates

There are **10 active templates** (Template E is deprecated). Templates A–F are the originals; G–K are newer formats inspired by high-performing creatives. Each serves a different hypothesis angle. Never produce a batch of ads that all use the same template — variety in the feed is a competitive advantage.

### Template A: Workhorse Static (Light-Blue Card)

**When to use:** Default for any hypothesis. The proven baseline. Works for school gate scenes, family photos, UGC-style images. Use when the PHOTO is supporting the copy, not dominating it.

**Layout:**
```
┌─────────────────────────────────────────┐  ← #F0FAFF bg, 32px radius
│  48px padding top                       │
│  ┌─────────────────────────┐            │
│  │ Eyebrow pill (C2E9FF)   │            │  ← hypothesis hook
│  └─────────────────────────┘  20px gap  │
│                                         │
│     Online Tutoring                     │  ← gradient (no stroke)
│     for Prep – Year 12 🇦🇺              │  ← #004166 (no stroke)
│                          24px gap       │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │         PHOTO (flex: 1)           │  │  ← 20px radius, object-fit: cover
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                          20px gap       │
│  ┌───────────────────────────────────┐  │
│  │ ● Tick one                        │  │  ← white pill, green circle + SVG check
│  │ ● Tick two                        │  │
│  │ ● Tick three                      │  │
│  └───────────────────────────────────┘  │
│                          24px gap       │
│  [tutero logo]     tutero.com.au        │  ← footer
│  56px padding bottom                    │
└─────────────────────────────────────────┘
```

**Key CSS:**
```css
.ad {
  width: 1080px; height: 1350px;
  background: #F0FAFF;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 56px 56px;
}
.hero-word {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 104px;
  line-height: 1.25;
  text-align: center;
  background: linear-gradient(90deg, #1D49E3 0%, #00A3FF 15%, #66A693 35%, #E8A909 60%, #FF7A00 85%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* NO -webkit-text-stroke */
}
.subhead {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 42px;
  line-height: 1.1;
  text-align: center;
  color: #004166;
  /* NO -webkit-text-stroke */
}
.photo-wrap {
  width: 100%; flex: 1; min-height: 0;
  border-radius: 20px; overflow: hidden;
}
.photo-wrap img { width: 100%; height: 100%; object-fit: cover; }
```

**Tick format (white pills):**
```html
<div class="tick">
  <div class="tick-check">
    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  </div>
  <span>Value proposition here</span>
</div>
```
```css
.tick {
  background: #FFFFFF; border-radius: 14px;
  padding: 14px 22px; display: flex; align-items: center; gap: 14px;
  box-shadow: 0 2px 8px rgba(0,65,102,0.06);
}
.tick-check {
  width: 30px; height: 30px; background: #22c55e;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
}
.tick span {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 600; font-size: 22px; color: #004166;
}
.ticks { margin-bottom: 24px; }  /* gives footer breathing room */
```

---

### Template B: Text-on-Photo (Full-Bleed) — Split Layout

**When to use:** When the photo IS the ad — a strong portrait, a kitchen scene, an evocative home moment. The text overlays the image. This feels more native in the feed (less "designed", more like a real post). Works best for: single tutor portraits, Ed Manager angle, lifestyle scenes, persona stories.

**Layout (split — hero at top, ticks at bottom):**
```
┌─────────────────────────────────────────┐  ← 32px radius
│  64px padding top                       │
│  ┌── top-group ──────────────────────┐  │
│  │  Online Tutoring                  │  │  ← bright gradient (no stroke)
│  │  for Prep – Year 12 🇦🇺           │  │  ← white text
│  └───────────────────────────────────┘  │
│                                         │
│         FULL-BLEED PHOTO                │  ← photo visible in middle zone
│         (dark overlay fades to clear)   │     through the transparent gradient
│                                         │
│  ┌── bottom-group ───────────────────┐  │
│  │  ✅ Tick one                      │  │  ← emoji + white bold text
│  │  ✅ Tick two                      │  │
│  │  ✅ Tick three                    │  │
│  │  ✅ Tick four                     │  │
│  │                       28px gap    │  │
│  │  [logo white]    tutero.com.au    │  │  ← white logo, muted URL
│  └───────────────────────────────────┘  │
│  80px padding bottom                    │
└─────────────────────────────────────────┘
```

**Key differences from Template A:**
- **Split layout** — hero at top, ticks+footer at bottom, photo visible in middle. Uses `justify-content: space-between` with `.top-group` and `.bottom-group` wrapper divs
- **Dual-zone gradient overlay** — dark at top AND bottom (for text readability), clear in the middle (so photo shows through). NOT bottom-only
- NO eyebrow pill (keep it simpler — the photo speaks)
- NO white tick pills (too "UI" on a photo background)
- Ticks use ✅ emoji + white bold text directly on the dark gradient
- Subhead is white (not blue)
- Can have **4 ticks** (more visual room since no pill cards)
- Logo is **white** (inverted)
- Bottom padding is **80px** (prevents border-radius clipping, gives logo space)
- Uses **brighter gradient variant** for hero text

**Key CSS:**
```css
.ad {
  width: 1080px; height: 1350px;
  border-radius: 32px; overflow: hidden; position: relative;
}
.bg-photo {
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover;
  object-position: center 30%;  /* adjust per image — center the subject's face */
}
/* DUAL-ZONE gradient — dark top + dark bottom, clear middle */
.overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(0,15,30,0.72) 0%,     /* dark at top — hero text zone */
    rgba(0,15,30,0.25) 20%,
    rgba(0,15,30,0.08) 45%,    /* nearly clear — photo shows through */
    rgba(0,15,30,0.25) 62%,
    rgba(0,15,30,0.72) 80%,    /* darkens again — tick zone */
    rgba(0,15,30,0.9) 100%     /* darkest at bottom */
  );
}
/* SPLIT layout — hero at top, ticks at bottom */
.content {
  position: relative; z-index: 2;
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  justify-content: space-between;  /* hero pushed to top, ticks to bottom */
  padding: 64px 60px 80px;
}
.hero-word {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 100px;
  line-height: 1.25;
  background: linear-gradient(90deg, #5B8CFF 0%, #33C8FF 15%, #7EC9A8 35%, #F5C542 60%, #FF8C33 85%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* NO -webkit-text-stroke — the brighter gradient reads on its own */
}
.subhead {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 1.1;
  color: #FFFFFF;
  /* NO stroke */
}
```

**HTML structure (split groups):**
```html
<div class="content">
  <div class="top-group">
    <div class="hero-word">Online Tutoring</div>
    <div class="subhead">for Prep – Year 12 🇦🇺</div>
  </div>
  <div class="bottom-group">
    <div class="ticks">...</div>
    <div class="footer">...</div>
  </div>
</div>
```

**Tick format (emoji on photo):**
```html
<div class="tick"><span class="emoji">✅</span> Value proposition here</div>
```
```css
.tick {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 600; font-size: 28px; color: #FFFFFF;
  display: flex; align-items: center; gap: 12px;
}
.ticks { margin-bottom: 28px; }
```

**Critical: Photo object-position.** Every photo needs a tailored `object-position` to center the subject's face in the visible middle zone. Default `center center` often cuts off heads. For portraits: `center 15%` or `center 20%`. For group scenes: `center 30%`. Always test and adjust per image.

---

### Template C: Tutor Grid

**When to use:** "Meet your teacher", abundance/choice, faculty quality. Uses the light-blue card background with a grid of headshots replacing the single photo. Direct descendant of Winners 2 and 12.

**Layout:** Same as Template A, but the photo-wrap is replaced by a grid:
```css
.tutor-grid {
  width: 100%; flex: 1; min-height: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
}
.tutor-cell {
  border-radius: 16px; overflow: hidden;
  background: #fff; display: flex; flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,65,102,0.06);
}
.tutor-cell img { width: 100%; flex: 1; min-height: 0; object-fit: cover; }
.tutor-cell .name-bar { padding: 8px 12px; text-align: center; }
.tutor-cell .name { font-family: 'Satoshi'; font-weight: 700; font-size: 19px; color: #004166; }
.tutor-cell .detail { font-family: 'Hanken Grotesk'; font-size: 13px; color: #5A5A70; }
```

**Grid rules:**
- 2×3 (6 tutors) is the standard — "enough to feel selectivity, not so many it's overwhelming"
- 4×2 (8 tutors) for a density variant — test it against 2×3
- Each tile needs: headshot photo, first name, subject + year levels
- Names should be multicultural-Australian (e.g., Anna, Liam, Priya, Tom, Hannah, Marcus)

---

### Template D: Testimonial Quote Card

**When to use:** Real parent testimonial, outcome substitution (Winner 3). The pull-quote is the hero. This template has a gradient hero title AND a testimonial card.

**Layout:**
```
┌─────────────────────────────────────────┐  ← #F0FAFF bg
│  48px padding top                       │
│                                         │
│  ┌───────────────────────┐              │
│  │ Eyebrow pill (context)│              │  ← sets up the testimonial
│  └───────────────────────┘              │
│                                         │
│     1-on-1 Tutoring                     │  ← gradient (no stroke)
│     for Prep – Year 12 🇦🇺              │  ← #004166 (no stroke)
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  "                                │  │  ← large decorative quote mark
│  │  "I spent months thinking I was   │  │
│  │   failing him. Then I rang Tutero │  │  ← pull-quote, 36px
│  │   and met Anna. Now I worry less."│  │
│  │                                   │  │
│  │   (88px avatar)  — Mum of Year 5  │  │  ← avatar + attribution
│  └───────────────────────────────────┘  │
│                                         │
│  ● Tick one                             │  ← white pills
│  ● Tick two                             │
│  ● Tick three                           │
│                          24px gap       │
│  [tutero logo]     tutero.com.au        │
│  56px padding bottom                    │
└─────────────────────────────────────────┘
```

**Key rules:**
- The eyebrow sets CONTEXT for the quote (e.g., "What one mum said after week 3") — it is NOT a headline or punchline
- The quote should describe a **changed home life**, not praise the product. "Her confidence is through the roof" > "The tutors are great". Hunt for non-obvious outcomes: confidence, less screen time, less homework fights, guilt relief
- The avatar should be **88px** diameter minimum — big enough to add warmth and credibility
- Uses light-blue gradient variant for hero text (same as Template A)

---

### Template E: Persona Static — DEPRECATED

**Do not use this template.** Chat bubble mockups in paid social ads read as artificial and staged. Nobody scrolling Instagram thinks "this looks like a real chat." The template was tested and received feedback that it "does not really make sense."

**Instead:** For persona-story angles (working mum, ADHD parent, regional family), use **Template B (Text-on-Photo)** with the persona's image as the full-bleed background. The ticks tell the story; the photo shows the persona in their real environment.

---

### Template F: Polaroid Collage

**When to use:** When you have 3+ real customer photos. Volume of evidence — "lots of families do this" (Winner 11). Three tilted polaroid-style photos beat one perfect stock photo.

**Layout:**
```
┌─────────────────────────────────────────┐  ← #F0FAFF bg
│                                         │
│     Online Tutoring                     │  ← gradient hero (no stroke)
│     for Prep – Year 12 🇦🇺              │
│                                         │
│     ┌──────┐  ┌──────┐  ┌──────┐       │
│     │ 📷   │  │ 📷   │  │ 📷   │       │  ← 3 photos, tilted ±3–5°
│     │      │  │      │  │      │       │     white border (polaroid)
│     │      │  │      │  │      │       │     each shows parent+child+laptop
│     └──────┘  └──────┘  └──────┘       │
│                                         │
│  ✅ Qualified Teachers & Tutors         │  ← ticks (green pill or emoji)
│  ✅ Personalised 1:1 Lessons            │
│                                         │
│  [logo]              tutero.com.au      │
└─────────────────────────────────────────┘
```

**Key rule:** The polaroid tilt signals "user-submitted" which raises trust. Use `transform: rotate(±3deg)`.

---

### Template G: 50/50 Split (Photo + Content)

**When to use:** When you have a strong lifestyle or study photo that deserves equal billing with the proposition. The vertical split creates a magazine-spread feel — the eye processes photo and copy simultaneously without either competing. Works for: candid study moments, kitchen table scenes, tutor-student pairs, any image that tells a story on its own. The photo side has zero text — it must speak for itself.

**When NOT to use:** Weak or generic photos (the photo carries 50% of the ad). Testimonial angles (no space for a quote card). Any hypothesis where the image is secondary to the copy.

**Layout:**
```
┌────────────────────┬──────────────────────┐  ← 32px radius clips both sides
│                    │  40px padding         │
│                    │                       │
│                    │  ┌──────────────┐     │
│                    │  │Eyebrow (opt.)│     │  ← C2E9FF pill, optional
│                    │  └──────────────┘     │
│                    │                       │
│   PHOTO            │  1-on-1              │  ← gradient hero (no stroke)
│   (50% width)      │  Tutoring            │
│                    │  for Prep – Year 12 🇦🇺│  ← #004166 subhead
│   object-fit:cover │                       │
│                    │  ● Tick one           │  ← white pills (same as A)
│                    │  ● Tick two           │
│                    │  ● Tick three         │
│                    │                       │
│                    │  [logo] tutero.com.au │  ← footer
│                    │                       │
└────────────────────┴──────────────────────┘
```

**Key CSS:**
```css
.ad {
  width: 1080px; height: 1350px;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.photo-col {
  width: 50%;
  min-height: 0;
  overflow: hidden;
}
.photo-col img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 30%; /* adjust per image */
}
.content-col {
  width: 50%;
  background: #F0FAFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 40px;
}
.hero-word {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 88px;        /* slightly smaller than A to fit the narrower column */
  line-height: 1.25;
  background: linear-gradient(90deg, #1D49E3 0%, #00A3FF 15%, #66A693 35%, #E8A909 60%, #FF7A00 85%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* NO -webkit-text-stroke */
}
.subhead {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 1.1;
  color: #004166;
  margin-bottom: 24px;
}
```

**HTML structure:**
```html
<div class="ad">
  <div class="photo-col">
    <img src="../images/study-moment.png" alt="">
  </div>
  <div class="content-col">
    <!-- optional eyebrow -->
    <div class="hero-word">1-on-1<br>Tutoring</div>
    <div class="subhead">for Prep – Year 12 🇦🇺</div>
    <div class="ticks">
      <div class="tick"><div class="tick-check">…</div><span>Maths English Science & More</span></div>
      <div class="tick"><div class="tick-check">…</div><span>Handpicked Tutor Matched</span></div>
      <div class="tick"><div class="tick-check">…</div><span>No Lock-in Contracts</span></div>
    </div>
    <div class="footer">
      <img src="../images/tutero-logo.svg" class="logo">
      <span class="url">tutero.com.au</span>
    </div>
  </div>
</div>
```

**Critical: Content column width.** The content column is only 540px (half of 1080). The gradient hero must be sized down to ~88px (from 104px in Template A) to prevent text overflow. Test that the hero word wraps cleanly — "1-on-1" and "Tutoring" on two lines works well. Avoid long hero phrases that break awkwardly at this width.

**Critical: Photo selection.** The photo gets no text overlay, no gradient, no ticks — it must tell a story on its own. Candid beats posed. Look for: a child concentrating at a desk, a laptop screen showing a tutor, a kitchen table study scene. The photo's `object-position` must center the subject within the left half — test and adjust per image.

**Tick format:** Same as Template A — white pills with green circle + SVG checkmark. Max 3 ticks.

---

### Template H: Confidence Statement on Photo

**When to use:** When the headline IS the ad — a bold, emotive sentence about what tutoring does for a child's life. The photo provides emotional context (child in school uniform, outdoors, confident), and a Trustpilot testimonial card at the bottom delivers social proof. This template does NOT use gradient text — the headline is pure white Satoshi for maximum emotional weight. Best for: confidence, growth, transformation, "this term" urgency angles.

**When NOT to use:** Product-description headlines ("Online tutoring for Australian students"). Any angle where you need ticks — this template has zero ticks. Weak testimonials that don't reinforce the headline's emotional claim.

**Layout:**
```
┌─────────────────────────────────────────┐  ← 32px radius
│  64px padding top                       │
│  ┌── top-group ──────────────────────┐  │
│  │                                   │  │
│  │  Grow your child's               │  │  ← WHITE text, Satoshi 900
│  │  confidence this term.            │  │     "this term." in italic
│  │                                   │  │
│  │  1-on-1 tutoring with one of      │  │  ← white/80% opacity, smaller
│  │  Australia's top 1.3% of tutors.  │  │     supporting proof line
│  │  Matched to your child, every wk. │  │
│  └───────────────────────────────────┘  │
│                                         │
│         FULL-BLEED PHOTO                │  ← photo visible in middle zone
│         (dual-zone dark overlay)        │
│                                         │
│  ┌── bottom-group ───────────────────┐  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │  ★★★★★                     │  │  │  ← white card, 20px radius
│  │  │  "She's asking for extra    │  │  │
│  │  │   worksheets now..."        │  │  │     pull-quote, dark text
│  │  │   — Trustpilot Review       │  │  │     attribution, muted
│  │  └─────────────────────────────┘  │  │
│  │                       28px gap    │  │
│  │  [logo white]    tutero.com.au    │  │
│  └───────────────────────────────────┘  │
│  80px padding bottom                    │
└─────────────────────────────────────────┘
```

**Key differences from Template B:**
- **NO gradient hero text** — the headline is pure white. This template's power is emotional directness, not brand gradient
- **NO ticks** — replaced by a testimonial card that does the proof work
- **Supporting text line** under the headline adds a single stat or proof point (1.3%, matched to your child)
- **White testimonial card** at the bottom with 5 stars + quote + attribution
- The headline is a **complete sentence** about the child's transformation, not a two-word brand phrase
- Uses italic emphasis on the key phrase (e.g., "*this term.*") for urgency

**Key CSS:**
```css
.ad {
  width: 1080px; height: 1350px;
  border-radius: 32px; overflow: hidden; position: relative;
}
.bg-photo {
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover;
  object-position: center 30%;
}
.overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(0,15,30,0.75) 0%,
    rgba(0,15,30,0.30) 22%,
    rgba(0,15,30,0.08) 45%,
    rgba(0,15,30,0.30) 60%,
    rgba(0,15,30,0.78) 82%,
    rgba(0,15,30,0.92) 100%
  );
}
.content {
  position: relative; z-index: 2;
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  justify-content: space-between;
  padding: 64px 60px 80px;
}
/* NOT gradient — pure white statement text */
.headline {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 72px;
  line-height: 1.2;
  color: #FFFFFF;
}
.headline em {
  font-style: italic;  /* emphasise the key phrase */
}
.supporting-text {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.5;
  color: rgba(255,255,255,0.80);
  margin-top: 20px;
  max-width: 85%;
}
.testimonial-card {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 28px 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.stars {
  font-size: 24px;
  color: #F5A623;
  margin-bottom: 12px;
  letter-spacing: 2px;
}
.quote {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  color: #1A1A2E;
  font-style: italic;
}
.attribution {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #5A5A70;
  margin-top: 12px;
}
```

**Critical: Headline sizing.** At 72px the headline fits a full emotional sentence (~6–8 words) across two lines. If the sentence is longer, drop to 64px. The headline must never wrap to more than 3 lines — rewrite if it does.

**Critical: Testimonial must reinforce the headline.** If the headline says "confidence", the testimonial should describe a confidence outcome. If the headline says "this term", the review should reference a short timeframe. Mismatched headline + testimonial kills credibility.

---

### Template I: Dark Showcase

**When to use:** Premium brand awareness and retargeting. The dark background signals prestige — it says "we're not a budget tutoring marketplace." The centred photo card shows the actual tutoring experience (student + laptop + tutor on screen). Ultra-minimal: logo, statement, one photo, URL. Maximum restraint. Best for: top-of-funnel awareness, retargeting warm audiences who've visited the site, brand-building in competitive feeds.

**When NOT to use:** Direct-response performance ads (no ticks, no hook — this doesn't hard-sell). Any angle requiring copy-heavy persuasion. Bottom-of-funnel conversion campaigns.

**Layout:**
```
┌─────────────────────────────────────────┐  ← 32px radius, #0B1A2E bg
│                                         │
│         [tutero logo — white]           │  ← centered, 36px height
│                                         │
│         Private Tutoring                │  ← white, Satoshi 900, centered
│         for Prep – Year 12              │  ← muted white, centered
│                                         │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │                                   │  │
│  │       HERO PHOTO CARD             │  │  ← 24px radius, centered
│  │       (student + laptop + tutor)  │  │     subtle shadow/glow
│  │                                   │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
│              tutero.com.au              │  ← muted white, centered
│                                         │
└─────────────────────────────────────────┘
```

**Key CSS:**
```css
.ad {
  width: 1080px; height: 1350px;
  border-radius: 32px;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 40%, #122744 0%, #0B1A2E 70%);
  /* subtle radial gradient adds depth without being obvious */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 56px 56px;
}
.logo {
  height: 36px;
  filter: brightness(0) invert(1);
  margin-bottom: 40px;
}
.title {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 80px;
  line-height: 1.15;
  color: #FFFFFF;
  text-align: center;
}
.subtitle {
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: rgba(255,255,255,0.55);
  text-align: center;
  margin-bottom: 40px;
}
.hero-card {
  width: 100%;
  flex: 1;
  min-height: 0;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0,100,200,0.15), 0 0 0 1px rgba(255,255,255,0.06);
  /* subtle blue-tinted glow + hairline border for depth against dark bg */
}
.hero-card img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.footer-url {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: rgba(255,255,255,0.45);
  text-align: center;
  margin-top: 32px;
}
```

**Critical: The photo must show the product.** This template has no copy explaining what Tutero is — the photo does that job. The image must show: a student at a desk or kitchen table, laptop open, tutor visible on screen in a video call. This is the "product shot" — it shows the tutoring experience directly. A generic child-studying photo without a visible tutor on screen defeats the purpose.

**Critical: Restraint is the design.** Do NOT add ticks, eyebrows, testimonial cards, or any additional copy. The power of this template is its emptiness. Three elements only: brand (logo + title), product (photo), and destination (URL).

---

### Template J: Tutor Spotlight

**When to use:** When the tutor IS the hero. One large, natural portrait fills most of the canvas, and a credential card overlay proves they're exceptional. Humanises the brand — "this is the actual person who would teach your child." Best for: 1.3% selectivity angle, "meet your teacher" angle, trust-building, combating the faceless-platform perception. Direct descendant of the Ed Manager and Faculty Quality pillars.

**When NOT to use:** When you don't have a strong, natural-looking tutor image (AI-generated tutor faces are risky here — the credential card implies this person is real). Testimonial angles. Risk/cost angles.

**Layout:**
```
┌─────────────────────────────────────────┐  ← 32px radius, #F0FAFF bg
│  48px padding top                       │
│                                         │
│  Our tutors would love to               │  ← gradient hero, Satoshi 900
│  help your child this term.             │     wraps across 2 lines, ~56px
│                          20px gap       │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  │                                   │  │
│  │       TUTOR PHOTO (large)         │  │  ← 20px radius, flex:1
│  │       natural, not posed          │  │     object-fit: cover
│  │                                   │  │
│  │  ┌──────────────────────┐        │  │
│  │  │  James T.  ✓ verified │        │  │  ← white card, overlaps photo
│  │  │  QUALIFIED TUTOR      │        │  │     positioned bottom-left
│  │  │  B.Ed Mathematics     │        │  │
│  │  │  ★ 4.8 · 312 lessons │        │  │
│  │  └──────────────────────┘        │  │
│  └───────────────────────────────────┘  │
│                          20px gap       │
│              tutero.com.au              │  ← centered footer
│  48px padding bottom                    │
└─────────────────────────────────────────┘
```

**Key CSS:**
```css
.ad {
  width: 1080px; height: 1350px;
  border-radius: 32px;
  overflow: hidden;
  background: #F0FAFF;
  display: flex;
  flex-direction: column;
  padding: 48px 56px;
}
/* Full-sentence gradient hero — smaller size to fit */
.headline {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.25;
  background: linear-gradient(90deg, #1D49E3 0%, #00A3FF 15%, #66A693 35%, #E8A909 60%, #FF7A00 85%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 20px;
}
.tutor-frame {
  flex: 1;
  min-height: 0;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}
.tutor-frame img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 20%; /* keep face visible */
}
.credential-card {
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  min-width: 280px;
}
.tutor-name {
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #1A1A2E;
  display: flex;
  align-items: center;
  gap: 8px;
}
.verified-badge {
  width: 24px; height: 24px;
  background: #00A3FF;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.verified-badge svg {
  width: 14px; height: 14px;
  stroke: #FFFFFF; stroke-width: 3; fill: none;
}
.tutor-tag {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.08em;
  color: #00A3FF;
  text-transform: uppercase;
  margin-top: 6px;
}
.tutor-detail {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #5A5A70;
  margin-top: 4px;
}
.tutor-stats {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #1A1A2E;
  margin-top: 8px;
}
.tutor-stats .star { color: #F5A623; }
```

**Credential card content:**
```html
<div class="credential-card">
  <div class="tutor-name">
    James T.
    <div class="verified-badge">
      <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </div>
  <div class="tutor-tag">Qualified Tutor</div>
  <div class="tutor-detail">Bachelor of Education (Mathematics)</div>
  <div class="tutor-stats"><span class="star">★</span> 4.8 · 312 lessons</div>
</div>
```

**Critical: The headline is a full sentence.** Unlike Templates A/B where the hero is a 2-word phrase ("Online Tutoring"), this template uses a complete emotional sentence. Size drops to ~56px so it wraps cleanly across 2 lines within the available width. Never go above 2 lines.

**Critical: Credential card must feel specific and verifiable.** Use: a realistic first name + last initial, a specific qualification (not just "qualified"), a decimal rating (4.8, not 5.0 — perfect scores feel fake), a specific lesson count (312, not "300+"). The card's credibility comes from its specificity.

**Critical: Anti-AI aesthetic is paramount here.** The tutor portrait MUST pass the 5-second test (see `aesthetic-rules`). If generating the image, use the full anti-AI negative block. The credential card literally says this person is real — an AI-glow portrait would be brand-damaging.

---

### Template K: Story Card on Photo

**When to use:** For narrative/story-driven ads where a specific child's transformation IS the hook. A floating white card sits on top of a full-bleed contextual photo (school gates, sports field, walking to school). The photo provides real-world emotional context; the card delivers the narrative punch. Best for: persona stories, before/after transformations, outcome substitution, term-end results. This is the most editorial template — it feels like a magazine feature, not an ad.

**When NOT to use:** Generic headlines that don't tell a specific story ("Online tutoring for your child"). Photos without strong environmental storytelling. Any angle that needs ticks or proof points — this template's proof is the story itself.

**Layout:**
```
┌─────────────────────────────────────────┐  ← 32px radius
│                                         │
│         FULL-BLEED PHOTO                │  ← contextual environment
│         (dark gradient overlay)         │     (school gates, sports field)
│                                         │
│                                         │
│    ┌─────────────────────────────┐      │
│    │                             │      │
│    │  PRIVATE TUTORING           │      │  ← uppercase eyebrow, muted
│    │  FOR PREP – YEAR 12         │      │
│    │                             │      │
│    │  By the end of the term,    │      │  ← gradient hero text
│    │  Jonah was a different kid. │      │     "different" in italic
│    │                             │      │
│    └─────────────────────────────┘      │  ← white card, centered
│                                         │
│                                         │
│    [tutero logo — white]                │
│              tutero.com.au              │
│  80px padding bottom                    │
└─────────────────────────────────────────┘
```

**Key CSS:**
```css
.ad {
  width: 1080px; height: 1350px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
}
.bg-photo {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center center;
}
.overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(0,15,30,0.20) 0%,
    rgba(0,15,30,0.10) 30%,
    rgba(0,15,30,0.25) 55%,
    rgba(0,15,30,0.70) 85%,
    rgba(0,15,30,0.85) 100%
  );
  /* lighter at top (photo shows), darkens toward bottom (footer legibility) */
}
.content {
  position: relative; z-index: 2;
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;   /* card + footer pushed to lower portion */
  align-items: center;
  padding: 64px 56px 80px;
}
.story-card {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 40px 44px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.18);
  max-width: 880px;
  width: 100%;
  margin-bottom: 48px;
}
.card-eyebrow {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5A5A70;
  margin-bottom: 16px;
}
/* Gradient text INSIDE the white card — uses light-bg variant */
.story-text {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 52px;
  line-height: 1.3;
  background: linear-gradient(90deg, #1D49E3 0%, #00A3FF 15%, #66A693 35%, #E8A909 60%, #FF7A00 85%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.story-text em {
  font-style: italic;  /* emphasise the transformation word */
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.footer .logo {
  height: 34px;
  filter: brightness(0) invert(1);
}
.footer .url {
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: rgba(255,255,255,0.70);
}
```

**HTML structure:**
```html
<div class="ad">
  <img class="bg-photo" src="../images/school-gates.png" alt="">
  <div class="overlay"></div>
  <div class="content">
    <div class="story-card">
      <div class="card-eyebrow">Private Tutoring for Prep – Year 12</div>
      <div class="story-text">By the end of the term, Jonah was a <em>different</em> kid.</div>
    </div>
    <div class="footer">
      <img class="logo" src="../images/tutero-logo.svg">
      <span class="url">tutero.com.au</span>
    </div>
  </div>
</div>
```

**Critical: The story must be specific.** Use a real name (or realistic name), a specific time period ("the term", "week 3", "by Easter"), and a specific transformation word ("different", "confident", "calmer", "excited"). "Your child will improve" is not a story. "By the end of the term, Jonah was a *different* kid" is.

**Critical: The photo is environmental, not portrait.** The photo shows a school, a sports field, a suburban street, a school gate — the child's WORLD. The child may be visible (walking to school, in uniform) but is not the focal point. The environment creates the emotional context ("this is where the transformation shows up"). Avoid posed portraits — this template is about the world around the child, not a headshot.

**Critical: Card positioning.** The card sits in the lower half of the canvas, not dead centre. This leaves the top half for the photo's environmental storytelling to breathe. The `justify-content: flex-end` pushes the card down naturally. Do NOT centre it vertically — that splits the photo awkwardly.

---

## Technical Implementation

### File structure

```
ads/
  ads.json              ← registry of all ads
  index.html            ← gallery page (serves from /ads/)
  images/               ← generated images
    tutero-logo.svg     ← logo (copy from shared/images/)
    2a-school-gate.png
    3a-tutor-anna.png
    ...
  creatives/            ← HTML ad files (1080×1350 each)
    2a-mum-at-the-gate.html
    2b-anna-picks-up.html
    ...
  generate_images.py    ← image generation script
```

### ads.json schema

Every ad must be registered:

```json
{
  "name": "2A — The Mum at the Gate",
  "hypothesis": "Pickup-Line Mum",
  "format": "Feed",
  "headline": "The mum who knows something you don't.",
  "body": "Primary text for Meta Ads Manager...",
  "cta_label": "Book a 1-on-1 lesson →",
  "cta_url": "https://tutero.com",
  "audience": "Pickup-line mums, cold",
  "image": "images/2a-school-gate.png",
  "creative_file": "creatives/2a-mum-at-the-gate.html",
  "pillar": "Education Manager (white-glove)",
  "reframe": "The parents of thriving kids made one phone call.",
  "load_bearing_word": "one"
}
```

### Gallery page (index.html)

The gallery groups ads by hypothesis and renders HTML creatives as scaled iframes:

```javascript
// Group ads by hypothesis
var groups = {};
filtered.forEach(function(ad) {
  var key = ad.hypothesis || 'Uncategorised';
  if (!groups[key]) groups[key] = [];
  groups[key].push(ad);
});

// Render each group with a section header
groupOrder.map(function(hypothesis) {
  return '<div class="hypothesis-section">' +
    '<div class="hypothesis-header"><h2>' + hypothesis + '</h2>' +
    '<span class="count">' + ads.length + ' ads</span></div>' +
    '<div class="grid">' + cards + '</div></div>';
});
```

Iframe scaling:
```javascript
function scaleIframe(iframe) {
  var wrap = iframe.parentElement;
  var scale = wrap.offsetWidth / 1080;
  iframe.style.transform = 'scale(' + scale + ')';
}
```
