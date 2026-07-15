# Nova Style Lounge — Hosting, SEO & Launch Guide
## From zero to live on Google in 7 steps

---

## WHAT'S IN YOUR DEPLOY FOLDER

```
nova-deploy/
  index.html          Your complete website (SEO + security included)
  favicon.svg         Browser tab icon
  robots.txt          Tells Google what to crawl
  sitemap.xml         Map of your pages for Google
  netlify.toml        Hosting config (auto-redirects, HTTPS)
  _headers            Security headers (anti-hacking)
  images/
    README.txt        Photo guide — what to shoot & add
```

---

## STEP 1 — GET A FREE DOMAIN (optional but recommended)
**Best free option:** Freenom.com → search "novastyleloungekandy" → get `.tk` or `.ml` free  
**Better option (LKR ~2,500/yr):** Buy `novastyleloungekandy.com` from:
- GoDaddy.com (often has first-year deals)
- Namecheap.com (reliable, competitive pricing)

> **SEO note:** A `.com` domain ranks better than free domains. Invest in it.

---

## STEP 2 — CREATE A FREE NETLIFY ACCOUNT
Netlify is where your website lives. It's free, fast, and gives you HTTPS automatically.

1. Go to **netlify.com** → click **Sign Up**
2. Sign up with your email (or GitHub account)
3. Verify your email

---

## STEP 3 — DEPLOY YOUR WEBSITE (2 minutes)
This is the easiest part.

**Method A — Drag and Drop (quickest):**
1. Log into Netlify
2. On your dashboard, find the box that says **"Drag and drop your site folder here"**
3. Open your file manager on your computer
4. Drag the entire `nova-deploy` folder into that Netlify box
5. Wait ~30 seconds → your site is LIVE at a URL like `amazing-sunshine-123.netlify.app`

**Method B — GitHub (recommended for easy future updates):**
1. Create a free account at **github.com**
2. Click **New Repository** → name it `nova-style-lounge` → Public → Create
3. Upload all files from your `nova-deploy` folder to the repository
4. In Netlify: **Add new site → Import from Git → GitHub**
5. Select your repository → Deploy
6. Future updates: just edit files on GitHub, site updates automatically

---

## STEP 4 — CONNECT YOUR CUSTOM DOMAIN
*(Skip this if using the free .netlify.app address for now)*

1. In Netlify dashboard → click your site → **Domain settings**
2. Click **Add custom domain** → type `novastyleloungekandy.com`
3. Netlify will show you two nameservers (like `dns1.p01.nsone.net`)
4. Log into where you bought your domain (GoDaddy/Namecheap)
5. Find **DNS Settings** or **Nameservers** → replace with Netlify's nameservers
6. Wait 10–30 minutes for it to propagate

**HTTPS (SSL) is automatic** — Netlify enables it free via Let's Encrypt once your domain connects.  
Your site will be secured with the padlock 🔒 automatically.

---

## STEP 5 — BEFORE GOING LIVE (critical checklist)

### Update these placeholders in index.html:
Search for `UPDATE:` or `XX` in the file and replace:

- `+94-XX-XXX-XXXX` → Shan's actual WhatsApp number
- `novastyleloungekandy.com` → your actual domain throughout
- `hello@novastyleloungekandy.com` → your actual email
- WhatsApp float button `href="https://wa.me/"` → `href="https://wa.me/94XXXXXXXXX"` (no + or spaces)
- Instagram links → your actual @handle
- TikTok links → your actual @handle

### Add photos (see images/README.txt):
At minimum before launch: `hero-interior.jpg` and `og-nova-kandy.jpg`

### Update the sitemap date:
In `sitemap.xml`, change `2025-05-01` to today's actual date.

### Test the site:
- Open on mobile phone — check it looks right
- Click every nav link
- Fill and submit the contact form
- Check the WhatsApp button works

---

## STEP 6 — SEO: GET ON GOOGLE

### 6A. Google Search Console (tells Google you exist)
1. Go to **search.google.com/search-console**
2. Sign in with your Google account
3. Click **Add Property** → enter your domain → Continue
4. Choose **URL prefix** method → enter `https://novastyleloungekandy.com`
5. Download the verification HTML file Google gives you
6. Upload that file to your `nova-deploy` folder (redeploy to Netlify)
7. Click **Verify** in Search Console
8. Go to **Sitemaps** → add `https://novastyleloungekandy.com/sitemap.xml` → Submit
9. Google will start crawling within 1–2 days

### 6B. Google Business Profile (most important for local ranking)
This is what makes you appear on Google Maps and in "Salons near me" searches.

1. Go to **business.google.com**
2. Sign in → **Add your business**
3. Business name: `Nova Style Lounge`
4. Category: **Hair Salon** (primary) + **Barber Shop** (secondary)
5. Address: Hideout Lounge, Kandy + your full address
6. Service area: Kandy
7. Phone: Shan's WhatsApp number
8. Website: your domain
9. Google will send a **postcard to your address** with a verification code (takes 5–7 days)
10. Enter the code → your listing goes live

**After verification — complete your profile:**
- Add ALL photos (interior, exterior, Shan working)
- Write a description using these keywords: *private salon Kandy, appointment-only grooming, luxury haircut Kandy, specialist barber Kandy*
- Add your hours (exact match your website)
- Turn on messaging so clients can WhatsApp you directly

### 6C. Keywords to target (use these naturally in any future content)
**High priority (people actually search these):**
- "salon Kandy"
- "barber Kandy"
- "haircut Kandy"
- "luxury salon Kandy"
- "private salon Kandy"
- "beard styling Kandy"

**Medium priority:**
- "best salon in Kandy"
- "hair stylist Kandy"
- "grooming Kandy"
- "barber near Kandy"
- "ladies salon Kandy"

**Long-tail (specific, less competition, easier to rank):**
- "appointment only salon Kandy"
- "private grooming experience Kandy"
- "hotel hair service Kandy"
- "in suite grooming Kandy"
- "Hideout Lounge Kandy"

---

## STEP 7 — ONGOING SECURITY & MAINTENANCE

### What's already protecting you (built-in):
✅ HTTPS encryption (auto-renewed every 90 days by Netlify)  
✅ Security headers (X-Frame-Options, CSP, HSTS — in your `_headers` file)  
✅ No database or server code — static sites have near-zero attack surface  
✅ Form honeypot — blocks most spam bots from the contact form  
✅ HTTP → HTTPS redirect (in netlify.toml)  
✅ www → non-www redirect (in netlify.toml)  

### Set up free form handling (so inquiries actually reach you):
The contact form currently shows a success message but doesn't email you.
Fix this in 5 minutes:

**Option A — Web3Forms (easiest, free):**
1. Go to **web3forms.com** → Create account → Get your Access Key
2. In `index.html`, find `<form onsubmit="handleSubmit(event)">`
3. Change to: `<form action="https://api.web3forms.com/submit" method="POST">`
4. Add inside the form: `<input type="hidden" name="access_key" value="YOUR_KEY">`
5. Remove the `onsubmit` JavaScript — Web3Forms handles the redirect

**Option B — Formspree (slightly more control, free tier: 50/month):**
1. Go to **formspree.io** → Sign up → New Form → copy your endpoint
2. Change form action to your Formspree endpoint
3. Done — submissions go straight to your email

### Monthly maintenance checklist:
- [ ] Check Google Search Console for any crawl errors
- [ ] Reply to any Google Business reviews (builds trust + ranking)
- [ ] Post 1 new photo to Google Business every 2–4 weeks
- [ ] Post to Instagram/TikTok 2–3x per week (links back to your site = SEO signal)
- [ ] Update `sitemap.xml` date if you make content changes

---

## RANKING TIMELINE (realistic expectations)

| Timeframe | What to expect |
|-----------|----------------|
| Day 1–3 | Site live, Google starts crawling |
| Week 1–2 | Appears in Google Search Console |
| Week 2–4 | Google Business profile verified + live |
| Month 1–2 | Starts appearing for long-tail searches (e.g. "private salon Kandy") |
| Month 2–4 | Competitive keywords ("salon Kandy") — with reviews + content |
| Month 4–6 | Top 5 for local searches with consistent Google Business activity |

**The single biggest lever:** Google Business reviews.  
Every time a satisfied client leaves a 5-star review, your local ranking jumps.  
Ask Shan to text clients a direct review link after each session.

---

## QUICK REFERENCE — KEY LINKS

| Service | URL | Cost |
|---------|-----|------|
| Hosting | netlify.com | Free |
| Domain | namecheap.com | ~LKR 2,500/yr |
| Google Search Console | search.google.com/search-console | Free |
| Google Business Profile | business.google.com | Free |
| Form handling | web3forms.com | Free |
| Image compression | tinypng.com | Free |
| Schema validator | schema.org/SchemaValidator | Free |
| SEO audit | pagespeed.web.dev | Free |

---

*Nova Style Lounge — Brand Pack 2025*
