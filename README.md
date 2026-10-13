# Apex Trading Academy — A TO Z TRADING
## Premium Forex & Crypto Academy Web Application

Production-ready, high-performance, institutional single-page platform for **Apex Trading Academy — A TO Z TRADING**. Engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, native mobile app navigation, and custom GSAP ScrollTrigger animations.

---

## 💎 Features & Architecture

- **Light Silver Institutional Theme**: Tailored with executive light silver backgrounds (`#F4F7FB`, `#FFFFFF`), deep ocean blue (`#0284C7`), soft ocean breeze accents (`#E0F2FE`), and warm champagne/gold highlights (`#D97706`).
- **Native Mobile App Experience**: Fixed bottom navigation dock (`MobileAppDock.tsx`) with haptic feedback and left-to-right touch-swipeable auto-scroll tracks across key sections.
- **Official 3D Golden Emblem**: High-resolution official brand crest integrated across navigation, mentor showcase, and student forum.
- **Interactive Trading Terminal & Candlestick Charts**: Live interactive chart mockup with bullish/bearish candle wicks, support/resistance levels, order fill states, and live price fluctuations.
- **Verified Trade Proofs & Live Market Execution**: Dedicated showcase featuring MT5 execution, Binance Futures breakout, Bybit partnership, and P2P liquidation.
- **Official Student WhatsApp Forum**: 1,500+ student trading forum with instant WhatsApp enrollment and daily market breakdowns.
- **Enterprise SEO & Schema Markup**: Pre-configured JSON-LD structured data for `EducationalOrganization` and `Course`, automated `sitemap.xml`, and `robots.txt`.

---

## 📚 Complete Platform Sections

1. **Sticky Navigation Bar**: Dynamic frosted glass on scroll, active section spy, official golden emblem, and responsive mobile dock.
2. **Executive Hero**: Clean typography, verified credentials, dual CTAs, and floating trading dashboard mockup.
3. **About the Mentor**: Bhathiya Sooriarachchi profile, educational approach, and core philosophy.
4. **Trading Education Features**: Core modules with mobile horizontal auto-scroll and desktop grid.
5. **Four-Phase Trading Roadmap**: Progressive visual timeline with auto-scroll on mobile.
6. **Courses & Tuition Structure**: 4 tiers (LKR 5,000 / 25,000 / 25,000 / 40,000) with instant WhatsApp enrollment.
7. **Trading Platforms**: Clean tour of TradingView, Binance, Bybit (with referral code `02Q4O8Z`), and MetaTrader 5.
8. **Live Trade Proofs**: Real documented execution records with interactive lightbox inspection.
9. **Student WhatsApp Forum**: 1,500+ active trader community with live chat simulation and direct access.
10. **Why Choose Apex Trading Academy**: Clear emphasis on risk management, math, and capital defense.
11. **Frequently Asked Questions (FAQ)**: Interactive 6-question accordion addressing admissions, courses, format, and risk.
12. **Contact & Admissions**: Interactive course dispatcher with real-time WhatsApp message preview and direct channels.
13. **Executive Footer**: Complete navigation, course directory, official email (`apextradingacademy9@gmail.com`), and risk disclaimer.

---

## 🛠️ Configuration & Customization

All business parameters, phone numbers, and course details are centralized for easy maintenance:

### 1. Update WhatsApp Number & Contact Details
Edit `src/data/academy.ts`:
```typescript
export const ACADEMY_CONFIG = {
  brandName: "Apex Trading Academy",
  tagline: "A TO Z TRADING",
  whatsappNumber: "94771240270",
  displayPhone: "+94 77 124 0270",
  email: "apextradingacademy9@gmail.com",
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
