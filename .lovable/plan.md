## Plan

### 1. Sync Skills with resume PDF
The resume's core skill list already matches `Skills.tsx`. However, the resume's Internships & Projects sections mention additional technologies not surfaced anywhere on the site. I'll add these to the appropriate categories in `src/components/Skills.tsx`:

- **Frameworks & Libraries** → add `WebSockets`, `Random Forest`, `Isolation Forest`
- **Tools** → add `OCR (Tesseract)`, `Microsoft Translator API`
- **Core Competencies** → add `Real-time Event Streaming (Kafka/WebSockets)`, `OCR & Document Processing`, `Bot Detection & Behavioral Analytics`

(No skill will be removed — additive only.)

### 2. Verify LinkedIn URL everywhere
Audit and normalize `https://www.linkedin.com/in/naveen-d-g` across:
- `src/components/Footer.tsx` (already correct)
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Navbar.tsx` (if referenced)
- `index.html` meta tags (if any)

### 3. "Other issues" audit
Run a quick check for:
- Console/network errors on the running preview
- Broken links or 404s on the resume PDF
- Any leftover `Lovable App` / template meta tags in `index.html`

Fix anything found; report if nothing is broken.

### 4. GitHub + Vercel (guidance only — not code)
I cannot execute git or Vercel deploys from here. I will provide exact click-by-click steps in chat:
- **GitHub**: Top-right of Lovable editor → GitHub → **Connect to GitHub** → authorize → create repo. After that, every change auto-syncs.
- **Vercel**: vercel.com → **Add New Project** → Import the GitHub repo Lovable created → framework preset **Vite** → add env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PROJECT_ID`) → Deploy.
- Note: Your site is already live on Lovable at `https://naveendg-portfolio.lovable.app` — Vercel is optional.

### Files touched
- `src/components/Skills.tsx` (additive edits)
- `src/components/Hero.tsx`, `src/components/Contact.tsx` (LinkedIn URL check — edit only if wrong)
- `index.html` (only if template defaults remain)

No backend, database, or dependency changes.
