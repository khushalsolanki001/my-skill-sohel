# Deployment Guide for Sohel Khan Portfolio

## Build Commands
```bash
# Install dependencies (if needed)
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)
1. Go to https://pages.cloudflare.com/
2. Create new project
3. Upload the `dist` folder contents
4. Add custom domain: `portfolio.zkverify.in`
5. Update DNS with CNAME record

### Option 2: Netlify
1. Go to https://netlify.com/
2. Drag and drop the `dist` folder
3. Add custom domain in site settings
4. Update DNS records

### Option 3: Vercel
1. Go to https://vercel.com/
2. Import project or upload `dist` folder
3. Add custom domain in project settings
4. Update DNS records

## DNS Configuration
Add this CNAME record to your DNS:
```
Type: CNAME
Name: portfolio
Value: [your-hosting-provider-url]
TTL: Auto
```

## File Structure After Build
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── [other static files]
```

Upload everything inside the `dist` folder to your hosting provider.
