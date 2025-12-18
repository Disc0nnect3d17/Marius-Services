# 🚀 Quick Start Guide

## Get Running in 3 Steps

### Step 1: Install (5 min)

```bash
cd c:\Users\mfota\Desktop\Marius-Services\nextjs-migration
npm install
```

### Step 2: Copy Images (5 min)

```powershell
# Copy your images folder
xcopy /E /I ..\images public\images
```

Or manually copy the `images` folder into `public/images`

### Step 3: Run! (1 min)

```bash
npm run dev
```

Visit: **http://localhost:3000**

---

## Deploy to Vercel (5 min)

```bash
npm install -g vercel
vercel
```

That's it! Your site is live! 🎉

---

## Commands Cheat Sheet

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start           # Run production build locally

# Deploy
vercel              # Deploy to Vercel
vercel --prod       # Deploy to production
```

---

## File Structure Quick Reference

```
app/
  ├── layout.tsx          # Header + Footer wrapper
  ├── page.tsx            # Home page (/)
  ├── globals.css         # All your styles
  ├── services/
  │   └── page.tsx        # /services
  └── portfolio/
      └── page.tsx        # /portfolio

components/
  ├── Header.tsx          # Navigation
  └── Footer.tsx          # Footer

data/
  ├── services.ts         # Services data
  └── reviews.ts          # Reviews data

public/
  ├── images/            # Your images go here
  └── js/
      └── main.js        # Client JavaScript
```

---

## URLs

- **Home:** `/` (app/page.tsx)
- **Services:** `/services` (app/services/page.tsx)
- **Portfolio:** `/portfolio` (app/portfolio/page.tsx)

---

## Add a New Page

1. Create `app/about/page.tsx`:

```tsx
export default function About() {
  return <h1>About Us</h1>
}
```

2. URL is automatically: `/about`

3. Add to navigation in `components/Header.tsx`

---

## Update Content

- **Services:** Edit `data/services.ts`
- **Reviews:** Edit `data/reviews.ts`
- **Home page:** Edit `app/page.tsx`
- **Header:** Edit `components/Header.tsx`
- **Footer:** Edit `components/Footer.tsx`
- **Styles:** Edit `app/globals.css`

---

## Image Paths

```tsx
// ❌ Old (WordPress)
<img src="http://localhost/Marius/wp-content/uploads/2025/11/image.jpg" />

// ✅ New (Next.js)
<img src="/images/image.jpg" />
```

---

## Troubleshooting

**Port 3000 already in use?**
```bash
npx kill-port 3000
npm run dev
```

**Images not showing?**
- Put images in `public/images/`
- Use path `/images/filename.jpg`

**Build error?**
```bash
npm run build
# Read the error and fix it
```

---

## Next Steps

1. ✅ Run locally (`npm run dev`)
2. ✅ Copy images to `public/images/`
3. ✅ Update image paths
4. ✅ Test everything works
5. ✅ Deploy to Vercel (`vercel`)
6. 🎉 Your site is live!

---

**Need help?** Check [README.md](README.md) or [MIGRATION-CHECKLIST.md](MIGRATION-CHECKLIST.md)
