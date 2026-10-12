# BHATHI FOREX — A TO Z TRADING
## Premium Forex & Crypto Academy Landing Page

Production-ready, high-performance, cinematic single-page landing page for **BHATHI FOREX — A TO Z TRADING**. Engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, and custom GSAP ScrollTrigger animations.

---

## 💎 Features & Architecture

- **Dark Luxury Fintech Aesthetic**: Designed with navy & charcoal backgrounds (`#12141D`, `#181B27`, `#202331`), purple gradients (`#995DE8`, `#B17AF5`), and refined gold accents (`#D6B15E`).
- **Interactive Trading Terminal & Candlestick Charts**: Live interactive chart mockup with bullish/bearish candle wicks, support/resistance levels, order fill states, and live price fluctuations.
- **Cinematic GSAP Animation Timeline**: Precision staggered hero entrance, smooth ScrollTrigger reveals, progressive roadmap drawing, and responsive motion handling.
- **WhatsApp Course Enrollment Engine**: Pre-formatted, course-specific `wa.me` URL generation for frictionless conversion with zero backend required.
- **Accessible Components**: Semantic HTML5 tags, ARIA-expanded FAQ accordions, keyboard accessibility, and `prefers-reduced-motion` compliance.
- **Enterprise SEO & Schema Markup**: Pre-configured JSON-LD structured data for `EducationalOrganization` and `Course`, automated `sitemap.xml`, and `robots.txt`.

---

## 📚 11 Complete Website Sections

1. **Sticky Navigation Bar**: Dynamic blur on scroll, active section spy, BHATHI FOREX geometric emblem, and responsive mobile drawer.
2. **Cinematic Hero**: Split-layout hero with eyebrow badge, Space Grotesk headline, description, CTAs, and floating trading dashboard mockup.
3. **About the Mentor**: Two-column layout presenting mentor background, teaching approach, and trading philosophy.
4. **Trading Education Features**: Six core pillars covering Forex Fundamentals, Crypto, Technical Analysis, Risk Management, Psychology, and Exchange Navigation.
5. **Four-Phase Trading Roadmap**: Progressive visual timeline with line-drawing animation (Foundations &rarr; Technical Analysis &rarr; Risk Management &rarr; Mastery).
6. **Courses & Pricing**: Exact tuition structure (LKR 5,000 / 25,000 / 25,000 / 40,000) with Best Value badges and WhatsApp links.
7. **Trading Platforms**: Educational tour of TradingView, Binance, Bybit, and MetaTrader interfaces.
8. **Why Choose BHATHI FOREX**: Clear emphasis on risk management, practical concepts, and capital defense.
9. **Frequently Asked Questions (FAQ)**: Animated 6-question accordion addressing admissions, courses, format, and risk.
10. **Contact & Admissions**: Interactive course dispatcher with real-time WhatsApp message preview and direct channels.
11. **Premium Footer**: Complete navigation, course directory, official hotline, copyright, and mandatory financial risk disclaimer.

---

## 🛠️ Configuration & Customization

All business parameters, phone numbers, and course details are centralized for easy maintenance:

### 1. Update WhatsApp Number & Contact Details
Edit `src/data/academy.ts`:
```typescript
export const ACADEMY_CONFIG = {
  brandName: "BHATHI FOREX",
  tagline: "A TO Z TRADING",
  whatsappNumber: "94771234567", // Enter digits only without '+' or spaces
  displayPhone: "+94 77 123 4567",
  email: "support@bhathiforex.com",
  location: "Sri Lanka",
  ...
};
```

### 2. Update Courses or Tuition
Edit `src/data/courses.ts`:
```typescript
export const COURSES: CoursePackage[] = [
  {
    id: "primary-trading-course",
    name: "PRIMARY TRADING COURSE",
    priceLKR: 5000,
    ...
  },
  ...
];
```

---

## 🚀 Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Type check & Lint:
```bash
npx tsc --noEmit
npm run lint
```

4. Production build:
```bash
npm run build
npm run start
```

---

## ☁️ Vercel Deployment Instructions

1. Push this repository to GitHub or GitLab.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `Bathi Forex` repository.
4. Set the Framework Preset to **Next.js**.
5. Leave Build Command (`npm run build`) and Output Directory (`.next`) as default.
6. Click **Deploy**. Vercel will automatically build and assign your production URL.
