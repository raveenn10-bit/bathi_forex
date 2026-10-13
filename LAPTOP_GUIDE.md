# 💻 Laptop Setup & Quick Git Push Guide (ලැප්ටොප් එකෙන් වැඩ කරන්න උපදෙස්)

ඔබගේ Laptop එකෙන් ඉතිරි වැඩ කටයුතු කරගෙන යාම සඳහා සහ ඉක්මනින් Git Push කිරීම සඳහා මෙම සරල පියවර අනුගමනය කරන්න.

---

## 🚀 1. Laptop එකට Project එක ගන්න ආකාරය (Initial Setup)

### පියවර 1: Repository එක Clone කරගන්න
ඔබගේ Laptop එකේ Terminal (PowerShell / Command Prompt / Git Bash) එක open කර පහත command එක run කරන්න:
```bash
git clone https://github.com/raveenn10-bit/bathi_forex.git
cd bathi_forex
```
*(දැනටමත් Laptop එකේ folder එක තිබේ නම්, `git pull origin main` run කර අලුත්ම update එක ගන්න)*

### පියවර 2: Dependencies Install කරන්න
```bash
npm install
```

### පියවර 3: Local Dev Server එක Start කරන්න
```bash
npm run dev
```
දැන් ඔබේ Browser එකෙන් `http://localhost:3000` වෙත ගොස් website එක live බලාගත හැක. Code වෙනස් කරන විට browser එක auto-refresh වේ.

---

## ⚡ 2. පහසුවෙන්ම Git Push කරන ක්‍රම (3 Easy Methods)

ඔබ Laptop එකෙන් code වෙනස් කළ පසු GitHub එකට push කරන්න ක්‍රම 3ක් සූදානම් කර ඇත:

### ක්‍රමය 1: NPM Command එකෙන් (වඩාත් පහසුම ක්‍රමය)
Terminal එකේ පහත command එක run කරන්න:
```bash
npm run push
```
- එය ස්වයංක්‍රීයව `tsc` check කර TypeScript errors නැති බව තහවුරු කරයි.
- වෙනස් වූ files පෙන්වා Commit Message එකක් අසයි (Enter එබූ විට auto timestamp message එකක් වැටේ).
- කෙලින්ම GitHub `origin/main` වෙත Push වේ!

### ක්‍රමය 2: `push.bat` File එක Double-Click කිරීම (Windows)
- Folder එක ඇතුළේ ඇති **`push.bat`** file එක double-click කරන්න.
- එය auto open වී සියලු වෙනස්කම් GitHub එකට upload කර අවසන් කරයි.

### ක්‍රමය 3: සාමාන්‍ය Git Commands වලින්
```bash
git add .
git commit -m "update: your message here"
git push origin main
```

---

## 🧠 3. වැදගත් Files & Folder Structure

ඔබට අවශ්‍ය දේවල් ඉක්මනින් වෙනස් කරගත හැකි තැන්:

| වෙනස් කිරීමට අවශ්‍ය දේ | අදාළ File එක |
|---|---|
| **WhatsApp Number, Email, Domain, SEO** | `src/data/academy.ts` |
| **Courses & Course Fees (මිල ගණන්)** | `src/data/courses.ts` |
| **FAQ ප්‍රශ්න සහ පිළිතුරු** | `src/data/faqs.ts` |
| **Trading Platforms & Bybit Bonus** | `src/data/platforms.ts` |
| **Hero Section (මුල් පිටුවේ Header එක)** | `src/components/sections/Hero.tsx` |
| **Sri Lanka Trading Hub (SLST Clock & Advantages)** | `src/components/sections/SriLankaTradingHub.tsx` |
| **Live Trade Proofs Showcase** | `src/components/sections/TradeProofs.tsx` |
| **Mentor Profile (භාතිය සූරියආරච්චි විස්තර)** | `src/components/sections/Mentor.tsx` |
| **WhatsApp Community Forum Section** | `src/components/sections/StudentCommunity.tsx` |
| **Floating WhatsApp Widget** | `src/components/ui/FloatingWhatsApp.tsx` |
| **Mobile Bottom App Dock** | `src/components/ui/MobileAppDock.tsx` |
| **Dark & Light Mode Colors** | `src/app/globals.css` සහ `tailwind.config.ts` |

---

## 🛡️ 4. Build එක Pass වන බව තහවුරු කරගැනීම (Sanity Check)
GitHub වෙත push කිරීමට පෙර build එකේ errors නැති බව බලන්න:
```bash
npm run typecheck   # TypeScript check
npm run build       # Next.js Full Production Build
```

> **සටහන:** සියලු සම්පූර්ණ විස්තර, Architecture සහ System Decisions බැලීමට [PROJECT_MEMORY.md](PROJECT_MEMORY.md) කියවන්න.
