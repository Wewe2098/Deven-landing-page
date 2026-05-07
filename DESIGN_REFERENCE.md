# Site Design & Layout Reference

## 🎨 Visual Structure

Following the design pattern from your reference (olxclaim.ai style):

### 1. HEADER SECTION
```
┌─────────────────────────────────────────────┐
│  ArticleHub Logo    |  Featured | Articles  │
└─────────────────────────────────────────────┘
```
- Sticky navigation
- Logo on left
- Links on right
- Green accent on hover

### 2. HERO SECTION
```
┌─────────────────────────────────────────────┐
│                                             │
│      Discover Quality ARTICLES              │
│  Explore curated articles from top writers  │
│                                             │
│    [Explore Articles] [Learn More]          │
│                                             │
│    Trusted by thousands of readers          │
│                                             │
└─────────────────────────────────────────────┘
```
- Full height
- Gradient background (dark gradient)
- Large heading with accent color
- Two CTA buttons
- Smooth animations on load

### 3. FEATURED ARTICLES SECTION
```
┌─────────────────────────────────────────────┐
│                                             │
│  Featured Articles                          │
│  ────                                       │
│                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────┐│
│  │   Image     │  │   Image     │  │Image││
│  │  Category   │  │  Category   │  │Cat. ││
│  │  Title      │  │  Title      │  │Title││
│  │  Desc...    │  │  Desc...    │  │Desc.││
│  │  Author  →  │  │  Author  →  │  │Auth││
│  │ Read More   │  │ Read More   │  │Read ││
│  └─────────────┘  └─────────────┘  └─────┘│
│                                             │
└─────────────────────────────────────────────┘
```
- 3-column grid (responsive)
- Featured = true in Sanity
- Article cards with:
  - Featured image
  - Category badge (green)
  - Title
  - Description excerpt
  - Author info
  - Publication date
  - Read More link with arrow

### 4. ALL ARTICLES SECTION
```
┌─────────────────────────────────────────────┐
│                                             │
│  All Articles                               │
│  ────                                       │
│                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────┐│
│  │   Image     │  │   Image     │  │Image││
│  │  Category   │  │  Category   │  │Cat. ││
│  │  Title      │  │  Title      │  │Title││
│  │  Desc...    │  │  Desc...    │  │Desc.││
│  │  Author  →  │  │  Author  →  │  │Auth││
│  │ Read More   │  │ Read More   │  │Read ││
│  └─────────────┘  └─────────────┘  └─────┘│
│                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────┐│
│  │   Image     │  │   Image     │  │Image││
│  │  Category   │  │  Category   │  │Cat. ││
│  │  Title      │  │  Title      │  │Title││
│  │  Desc...    │  │  Desc...    │  │Desc.││
│  │  Author  →  │  │  Author  →  │  │Auth││
│  │ Read More   │  │ Read More   │  │Read ││
│  └─────────────┘  └─────────────┘  └─────┘│
│                                             │
└─────────────────────────────────────────────┘
```
- All articles (featured = true/false)
- Same grid layout as featured
- Loading state with spinner
- Empty state messaging

### 5. FOOTER SECTION
```
┌─────────────────────────────────────────────┐
│  ArticleHub              Quick Links  Follow │
│  Your source for        Home          Twitter│
│  quality articles      Articles       LinkedIn
│                        Contact       GitHub  │
│                                             │
│  © 2024 ArticleHub. All rights reserved.   │
└─────────────────────────────────────────────┘
```
- Dark background
- Three columns: About, Links, Social
- Copyright info

---

## 🎨 Color Scheme

| Element | Color | Usage |
|---------|-------|-------|
| Primary Background | #1F2937 | Main content bg |
| Secondary Color | #10B981 | Accent, buttons, badges |
| Accent Color | #F59E0B | Highlights |
| Dark | #111827 | Header, hero bg |
| Light | #F9FAFB | Light text |
| Text | #E5E7EB | Body text |
| Muted | #9CA3AF | Secondary text |

---

## 🎬 Animation Details

### Page Load
```
Hero Title        → Fade in + slide down (0.3s delay)
Hero Subtitle     → Fade in + slide down (0.5s delay)
Hero Buttons      → Fade in + slide down (0.7s delay)
```

### Scroll Animations
```
Article Cards     → Fade in + slide up as they scroll into view
Sections          → Fade in on scroll
```

### Hover Effects
```
Article Card      → Lift up 2rem + shadow increase
Button            → Scale up 1.05x
Link              → Color change + arrow slide right
Image             → Zoom 1.1x on hover
```

---

## 📱 Responsive Breakpoints

### Mobile (< 768px)
- Full width cards
- Single column layout
- Larger touch targets
- Simplified header

### Tablet (768px - 1024px)
- 2 column grid
- Adjusted spacing
- Medium text sizes

### Desktop (> 1024px)
- 3 column grid
- Full spacing
- Optimized typography

---

## 🔤 Typography

| Element | Font Size | Weight | Color |
|---------|-----------|--------|-------|
| Hero H1 | 3.5rem (md) / 2.25rem (sm) | Bold | White |
| Hero H2 | 1.5rem (md) / 1.25rem (sm) | Normal | Gray-300 |
| Section Title | 2.25rem | Bold | White |
| Card Title | 1.25rem | Bold | White |
| Body Text | 1rem | Normal | Gray-300 |
| Small Text | 0.875rem | Normal | Gray-400 |

---

## 🎯 Key Sections in Code

### Components Location
```
frontend/src/components/
├── Header.tsx         → Navigation bar
├── Hero.tsx           → Landing section
├── ArticlesSection.tsx → Featured + All articles
├── ArticleCard.tsx    → Individual card
└── Footer.tsx         → Footer
```

### Styling
```
frontend/
├── tailwind.config.js → Colors & theme
├── src/index.css      → Global styles
├── src/App.css        → App-specific styles
```

### Hooks & Data
```
frontend/src/
├── hooks/useArticles.ts → Data fetching
├── config/sanity.ts     → CMS config
└── types/index.ts       → TypeScript types
```

---

## 🔗 Design References

This design follows the pattern from **olxclaim.ai** with:
- Clean, modern aesthetic
- Dark theme with green accents
- Featured showcase section
- Grid layout for content
- Testimonials/Featured items
- Sponsors/Brands section (can be added)
- Professional typography

---

## ✨ Interactive Features

### Article Cards
- Hover: Lift up with shadow
- Click: Navigate to full article
- Tags: Display up to 3 tags
- Author: Show avatar + name
- Date: Show publication date

### Navigation
- Smooth scrolling
- Active link highlighting
- Mobile menu (can be added)
- Sticky header on scroll

### Search & Filter (Future)
- Search articles by title
- Filter by category
- Sort by date/popularity
- Tag filtering

---

This design provides a professional, modern landing page for your article storage CMS with all the visual polish and interactivity from the reference site!
