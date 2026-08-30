# MIN ALICE — Cereals & Legumes

A lightweight static website rebuilt for MIN ALICE using only HTML5, CSS3 and vanilla JavaScript.

## Files

- `index.html` — homepage
- `about.html` — company/about page
- `products.html` — searchable product catalogue
- `order.html` — order/quotation form with WhatsApp message generation
- `contact.html` — contact form
- `css/style.css` — complete responsive design
- `js/script.js` — navigation, catalogue filters, order logic and site configuration

## Before publishing

Open `js/script.js` and replace:

```text
phoneDisplay: "Your phone number"
emailDisplay: "your.email@example.com"
whatsappNumber: "254700000000"
```

Use the real business details. The WhatsApp number must contain digits only, including the Kenya country code, for example:

```text
2547XXXXXXXX
```

Then open `contact.html` and replace:

```text
https://formsubmit.co/YOUR_EMAIL@example.com
```

with the real email address that should receive website enquiries.

## Local testing in VS Code

1. Open the `MIN-ALICE` folder in VS Code.
2. Open `index.html` in a browser.
3. For the easiest development workflow, install the VS Code **Live Server** extension and use "Open with Live Server".
4. Test the navigation, product search, order form and contact form on desktop and mobile.

## GitHub Pages

Create a GitHub repository, upload the contents of this folder, then enable:

Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

Because this project is static, no Node.js, PHP, Python or database is required.

## Important

The product descriptions are intentionally general. Confirm actual stock, varieties, packaging sizes, prices, delivery areas, phone number, email address and business address before launch.
