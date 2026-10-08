# WonderQuest: Little Explorer — Marketing Website

A modern, production-ready, highly engaging marketing website for **WonderQuest: Little Explorer**, an award-winning children's educational game/app designed for kids aged 3–8.

Built with **React 19**, **Vite 8**, and **Tailwind CSS v4**, this application combines playful, kid-friendly charm with professional, parent-trustworthy transparency.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🎬 Real Demo Video in Video Lightbox

The "Watch Demo" buttons across the site open an accessible video lightbox modal:
- **HD Animated Story (MP4)**: Native HTML5 video player with controls, seek, volume, autoplay, and pause on modal close.
- **YouTube Trailer**: Responsive 16:9 embedded player.
- **Accessible & Responsive**: Dismisses on Escape key, backdrop click, and traps focus.

---

## ✉️ EmailJS Integration (Receiving Emails at your-admin@example.com)

Parent messages from the contact form route to **`your-admin@example.com`** using the official `@emailjs/browser` SDK.

### Easy 2-Minute EmailJS Setup:
1. **Create Free Account**:
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.
2. **Add Email Service**:
   - Navigate to **Email Services** -> **Add New Service** -> Choose **Gmail**.
   - Connect **`your-admin@example.com`**.
   - Copy your **Service ID** (e.g., `service_abc123`).
3. **Create Email Template**:
   - Go to **Email Templates** -> **Create New Template**.
   - In **Settings / To Email**, enter: `your-admin@example.com` (or `{{to_email}}`).
   - In **From Name**, enter: `{{name}}`.
   - In **Reply To**, enter: `{{email}}`.
   - In **Content**, enter:
     ```
      A message from {{name}} has been received!

      {{time}}

      Parent Email: {{email}}
      Child Age: {{child_age}}
      Topic: {{title}}

      Message:
      {{message}}
     ```
   - Save and copy your **Template ID** (e.g., `template_xyz789`).
4. **Get Public Key**:
   - Go to **Account** -> **API Keys** -> Copy your **Public Key** (e.g., `user_xxxxxx` or `public_xxxxxx`).
5. **Paste into `.env`**:
   Open `.env` in the project root:
   ```env
   VITE_RECIPIENT_EMAIL=your-admin@example.com
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

---

## 🎨 Architecture & Project Structure

The project decouples all content and data from UI components so non-developers or a Headless CMS can update copy without touching React JSX:

```
kids-web/
├── public/
│   ├── favicon.svg          # High-res SVG brand favicon
│   ├── robots.txt           # Search engine crawling rules
│   └── sitemap.xml          # XML sitemap for SEO indexing
├── src/
│   ├── assets/              # Static media assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── AppStoreBadges.jsx  # Apple App Store & Google Play vector buttons
│   │   │   ├── Badge.jsx           # Reusable rounded pill badges
│   │   │   ├── Button.jsx          # Tactile kid-friendly buttons with feedback
│   │   │   ├── Characters.jsx      # Scalable SVG character illustrations (Pippin, Luna, etc.)
│   │   │   ├── Footer.jsx          # Newsletter signup, legal links, socials
│   │   │   ├── LegalModal.jsx      # Accessible modal for Privacy, Terms, & COPPA
│   │   │   ├── Navbar.jsx          # Sticky frosted nav with mobile menu & smooth scroll
│   │   │   ├── SectionHeader.jsx   # Consistent section titles & descriptive tags
│   │   │   └── VideoLightbox.jsx   # Real playable MP4 & YouTube demo video modal
│   │   ├── pages/
│   │   │   ├── HomePage.jsx        # Landing page orchestrating all 8 sections
│   │   │   └── BlogPage.jsx        # Route placeholder demonstrating CMS readiness
│   │   └── sections/
│   │       ├── HeroSection.jsx         # 1. Hero with App Store badges & sandbox mockup
│   │       ├── AboutSection.jsx        # 2. Game story lore, target age (3-8), 4 characters
│   │       ├── FeaturesSection.jsx     # 3. 6 feature cards with age-category filters
│   │       ├── GallerySection.jsx      # 4. Interactive iPhone/iPad switcher & carousel
│   │       ├── BenefitsSection.jsx     # 5. COPPA/privacy, bedtime timer simulator
│   │       ├── TestimonialsSection.jsx # 6. Verified parent reviews & 4.9★ accolades
│   │       ├── FaqSection.jsx          # 7. Accessible 8-question accordion
│   │       └── ContactSection.jsx      # 8. Working EmailJS contact form (your-admin@example.com)
│   ├── data/
│   │   ├── content.js       # Centralized copy and configuration
│   │   ├── blogPosts.js     # Structured blog/article data
│   │   └── legalData.js     # Privacy Policy, Terms, and COPPA text
│   ├── routes/
│   │   └── AppRoutes.jsx    # React Router setup with createBrowserRouter
│   ├── utils/
│   │   └── confetti.js      # Celebration effects respecting prefers-reduced-motion
│   ├── App.jsx              # Master layout with Navbar, Footer, Modals, & Outlet
│   ├── index.css            # Tailwind theme tokens & font setup
│   └── main.jsx             # React DOM root with RouterProvider
├── .env                     # EmailJS and environment keys
├── .env.example             # Documented environment variables
├── ASSETS.md                # Asset directory with sources and licenses
├── README.md                # Project documentation
└── package.json
```

---

## 🛡️ Working Contact Form & Spam Protection

- **Recipient Address**: Configured to `your-admin@example.com`.
- **Client-Side Validation**: Checks Name (min 2 chars), valid email regex, and Message length.
- **Honeypot Protection**: A hidden `_gotcha` input traps automated spam bots without CAPTCHA friction for parents.
- **Submit Cooldown**: Clients are rate-limited to one send every 20 seconds.
- **Celebration Feedback**: Super celebration confetti bursts when messages send successfully!

---

## 🔒 Security Notes

- **No secrets in source**: EmailJS IDs/keys are read only from `.env` (`VITE_*` vars). Never hardcode them — anything shipped to the browser is public.
- **EmailJS hardening**: In the EmailJS dashboard, set **Allowed domains** to your production domain (e.g. `wonderquestgame.com`) so the public key cannot be abused from other sites.
- **Security headers**: `public/_headers` ships CSP, `X-Frame-Options`, `nosniff`, HSTS, and `Referrer-Policy` for Netlify/Cloudflare Pages-style hosts (keep in sync with `vite.config.js`).
- **Iframe sandboxing**: The YouTube trailer iframe uses `sandbox`, `youtube-nocookie.com`, and a strict `referrerPolicy`.

---

## ♿ Accessibility & Performance

- **Semantic Landmarks**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Single H1**: Semantic heading hierarchy (H1 -> H2 -> H3)
- **Reduced Motion**: All animations and confetti automatically disable when `prefers-reduced-motion: reduce` is detected.
- **WCAG AA Contrast**: Deep slate typography on soft pastel backgrounds for effortless readability by parents.
- **Structured Data**: JSON-LD scripts for `MobileApplication`, `FAQPage`, and `Organization`.
