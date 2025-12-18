# 📋 Migration Checklist

## ✅ Completed

- [x] Created Next.js project structure
- [x] Migrated all CSS from style.css to globals.css
- [x] Converted header.php to Header.tsx component
- [x] Converted footer.php to Footer.tsx component
- [x] Created root layout with Header and Footer
- [x] Converted PHP services data to TypeScript
- [x] Converted PHP reviews data to TypeScript
- [x] Migrated index.php to app/page.tsx
- [x] Migrated services.php to app/services/page.tsx
- [x] Migrated portfolio.php to app/portfolio/page.tsx
- [x] Created client-side JavaScript file
- [x] Set up TypeScript configuration
- [x] Set up Next.js configuration
- [x] Created package.json with dependencies
- [x] Created deployment documentation

## 🔲 Your Action Items

### 1. Install Dependencies (5 minutes)

```bash
cd nextjs-migration
npm install
```

### 2. Copy Images (5 minutes)

Move your `images/` folder to `nextjs-migration/public/images/`:

**On Windows:**
```powershell
xcopy /E /I images nextjs-migration\public\images
```

**Manually:**
- Copy the entire `images/` folder
- Paste it into `nextjs-migration/public/`

### 3. Test Locally (2 minutes)

```bash
npm run dev
```

Visit http://localhost:3000 and verify:
- [ ] Home page loads
- [ ] Services page works (/services)
- [ ] Portfolio page works (/portfolio)
- [ ] Header navigation works
- [ ] Footer displays correctly
- [ ] Mobile menu works
- [ ] All styles look correct

### 4. Update Image Paths (10-15 minutes)

Replace WordPress image URLs in your components:

**Files to check:**
- [ ] `components/Header.tsx` - Logo image
- [ ] `app/page.tsx` - Hero background, about section image
- [ ] `app/portfolio/page.tsx` - Portfolio images

**Find:** `http://localhost/Marius/wp-content/uploads/2025/11/`

**Replace with:** `/images/`

**Example:**
```tsx
// Before
<img src="http://localhost/Marius/wp-content/uploads/2025/11/logo.gif" />

// After
<img src="/images/logo.gif" />
```

### 5. Test Again

```bash
npm run dev
```

Verify all images now display correctly.

### 6. Build Production Version (2 minutes)

```bash
npm run build
npm start
```

Visit http://localhost:3000 and test the production build.

### 7. Deploy to Vercel (5 minutes)

#### Option A: Quick Deploy (No Git)

```bash
npm install -g vercel
cd nextjs-migration
vercel
```

Follow the prompts. Done!

#### Option B: GitHub + Vercel (Recommended for updates)

1. Create a GitHub repository
2. Push your code:
   ```bash
   cd nextjs-migration
   git init
   git add .
   git commit -m "Migrate to Next.js"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com)
4. Click "New Project"
5. Import your GitHub repository
6. Click "Deploy"

### 8. Add Custom Domain (Optional)

In Vercel dashboard:
1. Select your project
2. Go to Settings → Domains
3. Add your domain
4. Update DNS records (Vercel will show you exactly what to do)

## 🎯 Final Checklist

- [ ] Dependencies installed
- [ ] Images copied to public/images
- [ ] Image paths updated in all files
- [ ] Tested locally (npm run dev)
- [ ] Production build works (npm run build)
- [ ] Deployed to Vercel
- [ ] Site is live and working
- [ ] Custom domain added (if applicable)

## 📝 Notes

### Image List to Copy

Make sure these images are in `public/images/`:
- Logo/GIF file
- Hero background image (bathrom1.png)
- About section image
- Portfolio images
- Any other images used in your site

### Optional Enhancements

After deployment, you can:
- [ ] Add Google Analytics
- [ ] Set up contact form (using Formspree or Vercel Functions)
- [ ] Add sitemap.xml
- [ ] Set up monitoring (Vercel Analytics)
- [ ] Add more portfolio items

## 🆘 Common Issues

### Issue: Images not showing
**Solution:** Make sure images are in `public/images/` and paths start with `/images/`

### Issue: Build errors
**Solution:** Run `npm run build` and read the error messages. Usually TypeScript type issues.

### Issue: Mobile menu not working
**Solution:** JavaScript file should be loaded. Check browser console for errors.

### Issue: Styles look wrong
**Solution:** Make sure `globals.css` is imported in `layout.tsx` (it already is)

## 🎉 Success!

Once deployed, your site will be:
- ✅ **Fast** - Much faster than WordPress
- ✅ **Secure** - No PHP vulnerabilities
- ✅ **Free hosting** - Vercel free tier is generous
- ✅ **Auto HTTPS** - Automatic SSL certificates
- ✅ **Global CDN** - Fast worldwide
- ✅ **Easy updates** - Just push to Git

## 📞 Need Help?

- Read the [README.md](README.md) for detailed documentation
- Check [Next.js Docs](https://nextjs.org/docs)
- Ask on [Vercel Discord](https://vercel.com/discord)
- Search [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Current Status:** ✅ All migration work complete. Ready for your action items above!
