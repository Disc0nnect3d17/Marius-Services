# Pro Fit Bathroom and Kitchen Theme - Quick Start Guide

## 📦 Installation Steps

### Option 1: Upload via WordPress Admin (Recommended)

1. **Zip the theme folder**
   - Right-click on the `dad-website` folder
   - Select "Send to" → "Compressed (zipped) folder"
   - Name it `profitkitchenbath.zip`

2. **Upload to WordPress**
   - Log in to your WordPress admin panel
   - Go to **Appearance** → **Themes**
   - Click **Add New** → **Upload Theme**
   - Click **Choose File** and select `profitkitchenbath.zip`
   - Click **Install Now**
   - After installation, click **Activate**

### Option 2: Upload via FTP

1. Connect to your server via FTP (use FileZilla or similar)
2. Navigate to `/wp-content/themes/`
3. Upload the entire `dad-website` folder
4. Rename it to `profitkitchenbath` (optional)
5. Go to WordPress Admin → **Appearance** → **Themes**
6. Find and activate "Pro Fit Bathroom and Kitchen"

---

## ⚙️ Initial Configuration (5 Minutes)

### Step 1: Set Up Your Home Page

The home page is already built into `index.php` with:
- ✅ Hero section with your company name
- ✅ Services section (6 services)
- ✅ Google Reviews section
- ✅ About section
- ✅ Contact call-to-action

**No additional setup needed!** Just activate the theme.

### Step 2: Create a Menu

1. Go to **Appearance** → **Menus**
2. Create a new menu (name it "Primary Menu")
3. Add these pages:
   - Home (use Custom Link: `#`)
   - Services (use Custom Link: `#services`)
   - Reviews (use Custom Link: `#reviews`)
   - About (use Custom Link: `#about`)
   - Contact (use Custom Link: `#contact`)
4. Check "Primary Menu" in "Display location"
5. Click **Save Menu**

### Step 3: Add Your Logo (Optional)

1. Go to **Appearance** → **Customize**
2. Click **Site Identity**
3. Click **Select Logo**
4. Upload your logo image (recommended: 200px × 80px)
5. Click **Publish**

---

## 🎨 Customization Options

### Change Contact Information

**In `header.php` (lines 22-29):**
```php
<a href="tel:+447454933651">
    <i class="fas fa-phone"></i>
    <span>+44 7454 933651</span>
</a>
<a href="mailto:info@hotmail.com">
    <i class="fas fa-envelope"></i>
    <span>info@hotmail.com</span>
</a>
```

**In `footer.php` (lines 22-28):**
Update the same contact details.

### Update Google Reviews

**In `functions.php`, find `get_profitkitchenbath_reviews()` function:**
```php
array(
    'name'   => 'Customer Name',
    'rating' => 5,
    'text'   => 'Your actual review text here...',
),
```

Add or modify reviews in this array.

### Change Color Scheme

**In `style.css`, modify the `:root` variables:**
```css
:root {
    --primary-blue: #1e40af;      /* Main blue color */
    --secondary-blue: #3b82f6;    /* Lighter blue */
    --light-blue: #dbeafe;        /* Very light blue */
    --dark-blue: #1e3a8a;         /* Dark blue */
}
```

### Modify Services

**In `functions.php`, find `get_profitkitchenbath_services()` function:**
```php
array(
    'icon'        => 'fa-bath',              // Font Awesome icon class
    'title'       => 'Service Title',
    'description' => 'Service description',
),
```

**Font Awesome Icons:**
- Browse icons at: https://fontawesome.com/icons
- Example icons: `fa-bath`, `fa-kitchen-set`, `fa-hammer`, `fa-paint-roller`

---

## 🔌 Recommended Plugins

### Essential Plugins:

1. **Contact Form 7** or **WPForms Lite**
   - For adding contact forms
   - Install: Plugins → Add New → Search

2. **Yoast SEO** or **Rank Math**
   - For SEO optimization
   - Free and easy to configure

3. **Smush** or **ShortPixel**
   - For image optimization
   - Improves page load speed

### Optional Plugins:

4. **Widget for Google Reviews**
   - Display real Google reviews
   - Replaces the placeholder reviews

5. **WP Super Cache** or **W3 Total Cache**
   - Speed up your website
   - Simple one-click setup

---

## 📱 Mobile Menu

The theme includes a responsive mobile menu that automatically appears on small screens.

**How it works:**
- Hamburger menu icon appears on screens < 768px
- Click to toggle menu open/close
- JavaScript handles smooth animations

---

## 🎭 JavaScript Features Included

✅ **Smooth Scrolling** - Click menu items for smooth navigation
✅ **Scroll Animations** - Elements fade in as you scroll
✅ **Parallax Effect** - Hero section moves on scroll
✅ **Mobile Menu** - Toggle navigation on mobile
✅ **Ripple Effect** - Click service cards for ripple animation
✅ **Header Shrink** - Header gets smaller when scrolling down

All features work automatically - no configuration needed!

---

## 🖼️ Adding Images

### For About Section:

Place your team/work images in the `images/` folder, then update `index.php`:

```php
<img src="<?php echo get_template_directory_uri(); ?>/images/your-image.jpg" 
     alt="Your description">
```

### For Service Images (Optional):

You can replace Font Awesome icons with images by modifying the service cards in `index.php`.

---

## 📊 Adding a Contact Form

### Using Contact Form 7:

1. Install **Contact Form 7** plugin
2. Go to **Contact** → **Add New**
3. Copy the shortcode (e.g., `[contact-form-7 id="123"]`)
4. Create a new page: **Pages** → **Add New**
5. Paste the shortcode
6. Publish and add to your menu

### Manual Contact Section:

Add this to `index.php` before the closing `<?php get_footer(); ?>`:

```php
<section class="contact-form-section" style="padding: 5rem 0;">
    <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <?php echo do_shortcode('[contact-form-7 id="YOUR_FORM_ID"]'); ?>
    </div>
</section>
```

---

## 🔍 SEO Tips

1. **Install Yoast SEO** plugin
2. Go to **SEO** → **General** → **Configuration Wizard**
3. Fill in:
   - Company name: Pro Fit Bathroom and Kitchen
   - Business type: Local Business
   - Location: Your service area
4. Add focus keywords to pages: "bathroom renovation", "kitchen renovation", etc.

---

## 🚀 Go Live Checklist

- [ ] Theme activated
- [ ] Menu created and assigned
- [ ] Contact information updated
- [ ] Google Reviews added/updated
- [ ] Logo uploaded (optional)
- [ ] Contact form plugin installed
- [ ] SEO plugin configured
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Test contact form submissions

---

## 📞 Support

If you need help customizing the theme:

**Contact Information:**
- Phone: +44 7454 933651
- Email: info@hotmail.com

**WordPress Resources:**
- Official Documentation: https://wordpress.org/support/
- Theme Customization: https://wordpress.org/support/article/wordpress-widgets/

---

## 🎉 You're All Set!

Your professional renovation website is ready to attract customers. The theme is fully responsive, includes smooth animations, and showcases your services beautifully.

**Next Steps:**
1. Add your actual project photos
2. Collect and add real customer testimonials
3. Create blog posts about your work
4. Share your website on social media
5. Consider Google My Business integration

**Good luck with Pro Fit Bathroom and Kitchen!** 🛁🍳✨
