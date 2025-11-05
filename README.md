# Pro Fit Bathroom and Kitchen WordPress Theme

A modern, responsive WordPress theme designed specifically for Pro Fit Bathroom and Kitchen - specialists in complete bathroom and kitchen renovations.

## Features

- **Modern Design**: Clean, professional layout with blue and white color scheme
- **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **JavaScript Animations**: Smooth scroll animations, parallax effects, and interactive elements
- **Google Reviews Section**: Dedicated section to showcase customer testimonials
- **Service Showcase**: Highlight all renovation services with attractive cards
- **SEO Friendly**: Optimized for search engines
- **Fast Loading**: Optimized code for quick page loads
- **Easy Customization**: Well-organized code for easy modifications

## Services Highlighted

- Full Bathroom Renovations
- Full Kitchen Renovations
- Plumbing Services
- Electrical Work
- Painting & Decorating
- Carpentry & Joinery (Doors, Cabinets)
- Tiling
- Plastering

## Installation

1. **Upload Theme**
   - Download the theme folder
   - Go to WordPress Admin → Appearance → Themes
   - Click "Add New" → "Upload Theme"
   - Choose the theme ZIP file and click "Install Now"
   - Click "Activate" to activate the theme

2. **Alternative Method**
   - Upload the theme folder to `/wp-content/themes/` directory via FTP
   - Go to WordPress Admin → Appearance → Themes
   - Find "Pro Fit Bathroom and Kitchen" and click "Activate"

## Setup Instructions

### 1. Configure Menus
- Go to Appearance → Menus
- Create a new menu and add pages/links
- Assign it to "Primary Menu" location
- Suggested menu items: Home, Services, Reviews, About, Contact

### 2. Set Up Home Page
- The theme uses `index.php` as the home page template
- It includes all sections: Hero, Services, Reviews, About, and CTA

### 3. Customize Contact Information
The contact details are currently in the header:
- Phone: +44 7454 933651
- Email: info@hotmail.com

To change these, edit `header.php` and `footer.php` files.

### 4. Add Google Reviews
Edit `functions.php` and update the `get_profitkitchenbath_reviews()` function with real customer reviews.

For live Google Reviews integration, consider using a plugin like:
- Widget for Google Reviews
- Google Reviews Widget
- Trustindex.io

### 5. Add Logo (Optional)
- Go to Appearance → Customize → Site Identity
- Upload your company logo
- Recommended size: 200px × 80px

### 6. Customize Colors (Optional)
Edit `style.css` and modify the CSS variables in the `:root` selector:
```css
:root {
    --primary-blue: #1e40af;
    --secondary-blue: #3b82f6;
    --light-blue: #dbeafe;
    /* etc. */
}
```

## Theme Structure

```
dad-website/
├── style.css           # Main stylesheet with theme info
├── functions.php       # Theme functions and setup
├── index.php          # Home page template
├── header.php         # Header template
├── footer.php         # Footer template
├── page.php           # Single page template
├── single.php         # Single post template
├── 404.php            # 404 error page
├── screenshot.png     # Theme screenshot (recommended)
├── js/
│   └── main.js       # Custom JavaScript
└── images/           # Theme images (create this folder)
```

## Customization Guide

### Adding New Services
Edit `functions.php` and modify the `get_profitkitchenbath_services()` function:

```php
array(
    'icon'        => 'fa-icon-name', // Font Awesome icon
    'title'       => 'Service Name',
    'description' => 'Service description text.',
),
```

### Changing Color Scheme
All colors are defined as CSS variables in `style.css`. Search for `:root` and modify values.

### Adding Pages
Create new pages in WordPress Admin → Pages → Add New, and they will automatically use the `page.php` template.

## JavaScript Features

- **Smooth Scrolling**: Click on anchor links for smooth navigation
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Scroll Animations**: Elements fade in as you scroll
- **Parallax Effect**: Hero section has subtle parallax scrolling
- **Ripple Effect**: Service cards have click ripple animation
- **Header Scroll Effect**: Header shrinks slightly on scroll

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Use image optimization plugins (e.g., Smush, ShortPixel)
2. Install a caching plugin (e.g., WP Super Cache, W3 Total Cache)
3. Use a CDN for faster content delivery
4. Keep WordPress and plugins updated

## Required Plugins (Recommended)

- **Contact Form 7** or **WPForms**: For contact forms
- **Yoast SEO** or **Rank Math**: For SEO optimization
- **Google Reviews Widget**: For displaying real Google reviews
- **WP Maintenance Mode**: For launch preparation

## Support & Documentation

For questions or customization help, contact:
- Email: info@hotmail.com
- Phone: +44 7454 933651

## Credits

- Font Awesome Icons: https://fontawesome.com/
- Built with WordPress best practices
- Responsive design principles

## License

This theme is licensed under the GNU General Public License v2 or later.

## Changelog

### Version 1.0
- Initial release
- Responsive design
- JavaScript animations
- Google Reviews section
- Service showcase
- Contact information integration

---

**Pro Fit Bathroom and Kitchen** - Professional Renovations Made Easy
