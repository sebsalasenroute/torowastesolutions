# Toro Waste Solutions Website

Static website for Toro Waste Solutions, a Vancouver-based waste management company.

## Quick Start

1. Add your images to the `/images` folder (see list below)
2. Set up Formspree for form handling
3. Deploy to Vercel

## Formspree Setup

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID (looks like: `f/xyzabc123`)
3. In `contact.html`, replace `YOUR_FORM_ID` with your actual form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
4. The free tier includes 50 submissions/month with file attachments

## Required Images

Add these images to the `/images` folder:

| Filename | Description | Recommended Size |
|----------|-------------|------------------|
| `logo.png` | Company logo | 200x80px (or proportional) |
| `favicon.png` | Browser tab icon | 32x32px |
| `hero.jpg` | Homepage hero background | 1920x1080px (landscape) |
| `service-residential.jpg` | Residential service | 800x600px |
| `service-strata.jpg` | Strata/building service | 800x600px |
| `service-commercial.jpg` | Commercial service | 800x600px |
| `service-bins.jpg` | Bin/dumpster rentals | 800x600px |
| `service-construction.jpg` | Construction debris | 800x600px |
| `service-yard.jpg` | Yard waste | 800x600px |
| `service-appliances.jpg` | Appliance disposal | 800x600px |
| `service-estate.jpg` | Estate cleanout | 800x600px |

### Image Tips
- **Hero image**: A truck, team at work, or before/after shot works well
- **Service images**: Show the type of work being done or the result
- **Compress images**: Use [TinyPNG](https://tinypng.com) to reduce file sizes
- **Format**: JPG for photos, PNG for logo/favicon

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

## File Structure

```
toro-waste/
├── index.html          # Homepage
├── services.html       # Services page
├── contact.html        # Contact form page
├── vercel.json         # Vercel configuration
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Mobile menu & form handling
└── images/
    ├── logo.png        # (add your logo)
    ├── favicon.png     # (add favicon)
    ├── hero.jpg        # (add hero image)
    └── service-*.jpg   # (add service images)
```

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --charcoal: #2D2D2D;
  --white: #FFFFFF;
  --light-gray: #F5F5F5;
  --green: #2E5A3C;        /* Button/accent color */
  --green-hover: #234530;   /* Button hover */
}
```

### Content
- Edit text directly in HTML files
- Add/remove service areas in the areas grid
- Update testimonials as needed

## Contact Form Fields

The contact form collects:
- Name (required)
- Phone (required)
- Email (required)
- Address
- Service type (dropdown, required)
- Job description
- Photo upload (optional)
- Preferred contact method

All submissions go to: contact@torowastesolutions.com

---

Built for Toro Waste Solutions | Vancouver, BC
