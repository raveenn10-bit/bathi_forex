# 🧠 PROJECT MEMORY & SYSTEM ARCHITECTURE
> **Repository:** `https://github.com/raveenn10-bit/bathi_forex.git`  
> **Branch:** `main`  
> **Official Domain:** `https://lankaforex.com`  
> **Brand Name:** Lanka Forex • Apex Trading Academy  
> **Tagline:** A TO Z TRADING  
> **Founder / Lead Strategist:** Bhathiya Sooriarachchi  
> **Contact / WhatsApp:** `+94 77 124 0270` (`94771240270` / `0771240270`)  
> **Email:** `apextradingacademy9@gmail.com`  
> **Last Synced Date:** 2026-10-13  

---

## 📌 1. Project Overview & Mission
This project is the official web application and educational gateway for **Lanka Forex (LankaForex.com)** / **Apex Trading Academy**, Sri Lanka's leading institutional Forex and Cryptocurrency educational academy.
- **Goal:** Provide high-converting, credible, institutional-grade Forex and Crypto education for Sri Lankan youth, professionals, and university students.
- **Key Proposition:** Teach systematic price action, mathematical risk management, and funded prop firm accounts ($10K to $200K on FTMO/FundedNext) so students do not risk family life savings.
- **Bilingual Delivery:** Clear explanations in Sinhala (`සිංහල මාධ්‍යයෙන්`) combined with international Wall Street financial vocabulary.
- **Conversion Focus:** Instant WhatsApp 1:1 consultation and 1,500+ member student forum access.

---

## 🛠️ 2. Tech Stack & Dependencies
- **Framework:** Next.js `14.2.24` (App Router, SSG static pre-rendering, 7/7 static routes)
- **Language:** TypeScript `5.5.4` (Strict typing, 0 tsc errors required)
- **Styling:** Tailwind CSS `3.4.13` with custom animations, glassmorphism, and responsive breakpoints
- **Theming:** Custom `ThemeContext` supporting seamless toggle between **Light Silver Institutional** and **Executive Dark Fintech** (`#0B0E14` / `#101522`)
- **Animation & Motion:** 
  - GSAP `3.12.5` + ScrollTrigger
  - Horizontal Left-to-Right loop animation (`animate-marquee` / auto-scroll) for mobile cards
- **Icons:** `lucide-react` `0.446.0`

---

## 🎨 3. Design System & Brand Palette
> **Strict Directive:** Avoid generic "AI-generated slop" (no neon purple or generic SaaS layouts). Maintain an executive Wall Street / Bloomberg fintech aesthetic.

### Color Tokens:
| Role | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| **Base Background** | `#F8FAFC` / `#FFFFFF` | `#0B0E14` / `#0D111A` | Main page canvas & sections |
| **Card Surfaces** | White with subtle slate borders | `#121824` / `#101522` | Cards, modals, mockups |
| **Primary Brand** | Ocean / Sky Blue (`#0284C7`) | Sky / Cyan (`#38BDF8`) | Links, badges, active tabs |
| **Success & WhatsApp** | Emerald (`#059669` / `#10B981`) | Emerald (`#10B981`) | Verified proofs, WhatsApp buttons, profits |
| **Luxury Accent** | Amber / Champagne (`#D97706`) | Warm Gold (`#F59E0B`) | SLST live clock, golden overlap, badges |
| **Text Primary** | `text-slate-900` | `text-white` | Headings & hero text |
| **Text Secondary** | `text-slate-600` | `text-slate-300` / `text-slate-400` | Body copy & explanations |

---

## 📁 4. Project Directory Map
```text
f:\Bathi Forex\
├── public\
│   ├── images\
│   │   ├── logo.png                # Official circular BHATHI FOREX seal badge
│   │   ├── bhathiya-sooriarachchi.png # Cutout portrait of Bhathiya
│   │   ├── trading-desk.webp       # Dual-monitor live charting trading desk photo
│   │   ├── binance-futures.jpg     # Real trade proof (+4,727% COAI ROI)
│   │   ├── binance-withdrawal.png  # Real P2P 11,000 USDT cashout proof
│   │   ├── bybit-proof.jpg         # Real Bybit 50X short execution proof
│   │   └── mt5-execution.jpg       # MT5 0.01 lot size disciplined execution proof
│   ├── favicon.ico
│   └── google-search-console-instructions.html
├── src\
│   ├── app\
│   │   ├── layout.tsx              # Root HTML, SEO metadata, JSON-LD schemas (WebSite, Org, LocalBusiness, FAQ)
│   │   ├── page.tsx                # Main single-page application layout
│   │   ├── globals.css             # Tailwind base, dark theme variables, marquee animation
│   │   ├── robots.ts               # Robots.txt with AI crawlers allowed
│   │   └── sitemap.ts              # XML sitemap generator (https://lankaforex.com)
│   ├── components\
│   │   ├── layout\
│   │   │   ├── Navbar.tsx          # Top glass navbar, brand logo, mobile hamburger drawer, ThemeToggle
│   │   │   └── Footer.tsx          # Full footer with quick links, legal disclaimer, domain badge
│   │   ├── sections\
│   │   │   ├── Hero.tsx            # Executive hero with trust chips & trading mockup
│   │   │   ├── SriLankaTradingHub.tsx # Live SLST clock, active sessions, 4 unfair advantage cards, dual CTA
│   │   │   ├── TradeProofs.tsx     # Verified trading execution showcase + lightbox modal
│   │   │   ├── Mentor.tsx          # Founder Bhathiya Sooriarachchi profile & teaching philosophy
│   │   │   ├── Features.tsx        # 6 core curriculum modules (with mobile auto-scroll)
│   │   │   ├── Roadmap.tsx         # 4-stage beginner-to-pro timeline
│   │   │   ├── Pricing.tsx         # Course tuition tiers (Forex, Crypto, Masterclass, 1:1 Mentorship)
│   │   │   ├── Platforms.tsx       # TradingView, Binance, Bybit (Code 02Q4O8Z), MT5 cards
│   │   │   ├── StudentCommunity.tsx# Official 1,500+ student WhatsApp Forum section
│   │   │   ├── WhyChooseUs.tsx     # Ethical defense vs gambling/signal-traps
│   │   │   ├── FAQ.tsx             # Interactive Q&A accordions
│   │   │   └── Contact.tsx         # Course selection & WhatsApp inquiry builder
│   │   └── ui\
│   │       ├── AmbientTradingBackground.tsx # High-end subtle candlestick and matrix grid
│   │       ├── FloatingWhatsApp.tsx# Sticky bottom-right WhatsApp bubble + chat popover
│   │       ├── MobileAppDock.tsx   # Fixed bottom 5-tab mobile app navigation bar
│   │       ├── ThemeToggle.tsx     # Light/Dark mode toggle button
│   │       └── TradingDashboardMockup.tsx # Interactive terminal preview
│   ├── context\
│   │   └── ThemeContext.tsx        # Dark/Light theme state & local storage management
│   ├── data\
│   │   ├── academy.ts              # Master academy configuration, phone, sessions, SEO keywords
│   │   ├── courses.ts              # Course curriculum details, prices, and syllabi
│   │   ├── platforms.ts            # Broker/Exchange details and referral perks
│   │   └── faqs.ts                 # Full questions and answers for AEO & user help
│   └── lib\
│       ├── whatsapp.ts             # wa.me link generation with custom pre-filled messages
│       └── utils.ts                # Tailwind merge helper
├── scripts\
│   └── push.js                     # 1-Click interactive Git push helper
├── push.bat                        # Windows batch shortcut for 1-click push
├── LAPTOP_GUIDE.md                 # Step-by-step setup guide for working from laptop
└── PROJECT_MEMORY.md               # THIS MEMORY FILE
```

---

## 🔍 5. Current Implementation State & Recent Decisions
1. **Official Logo:** The circular seal at `/images/logo.png` is the canonical brand emblem.
2. **Removed Sections (as requested by user on 2026-10-13):**
   - Galle District Chapter Guild card (`#galle-hub`) has been removed from `SriLankaTradingHub.tsx`.
   - "Sri Lanka Trader Currency Volatility Guide" table has been removed from `SriLankaTradingHub.tsx`.
   - Associated links in `Navbar.tsx`, `Footer.tsx`, and `sitemap.ts` were cleaned up.
3. **Live Sri Lanka Trading Hub (`#sl-market`):**
   - Real-time live SLST (UTC+05:30) clock running continuously.
   - Live session indicators (Tokyo, London, New York) and the glowing "Golden Overlap" (06:30 PM – 10:30 PM SLST).
   - 4 core advantage cards for Sri Lankan traders.
4. **Mobile App Experience:**
   - `<MobileAppDock />` renders at screen bottom on mobile (`md:hidden`) with tabs: Home, Courses, Proofs, Forum, WhatsApp.
   - Core cards have horizontal left-to-right swipeable tracks with auto-scroll.
5. **SEO, AEO & GEO Configuration:**
   - Canonical Domain: `https://lankaforex.com`
   - Verification token slot ready in `layout.tsx` (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`).
   - Rich JSON-LD schemas for `WebSite`, `EducationalOrganization`, `LocalBusiness`, `Person`, `FAQPage`, and `BreadcrumbList`.

---

## 🚀 6. How to Run & Push from Your Laptop

### A. First-Time Setup on Laptop:
```bash
# 1. Clone repository
git clone https://github.com/raveenn10-bit/bathi_forex.git

# 2. Open project folder
cd bathi_forex

# 3. Install packages
npm install

# 4. Start development server
npm run dev
# -> Open http://localhost:3000 in your browser
```

### B. Pull Latest Changes anytime:
```bash
git pull origin main
```

### C. 1-Click Push Workflow (Super Easy!):
You can use any of these 3 easy methods:

**Method 1: Run via NPM**
```bash
npm run push
```

**Method 2: Windows 1-Click Batch**
- Double click `push.bat` inside the folder or type `.\push.bat` in terminal.

**Method 3: Standard Git Commands**
```bash
npx tsc --noEmit
git add .
git commit -m "your custom update message"
git push origin main
```

---

## 💡 7. Pending / Future Enhancement Ideas
- [ ] Connect custom Google Search Console verification code once domain DNS is mapped.
- [ ] Add student testimonial video embeds if available.
- [ ] Add real-time price ticker websocket feed (Binance / TradingView widget) if desired.
- [ ] Add bilingual language toggle button (English / Sinhala) if full-page native Sinhala text version is desired.
