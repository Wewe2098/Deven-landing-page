# DevenGovender.co.za Production Checklist

Prepared on: 2026-05-13

## Frontend upload path

- Upload and extract [frontend-directadmin-2026-05-13.zip](frontend-directadmin-2026-05-13.zip) into `/domains/devengovender.co.za/public_html/`
- Frontend env template: [frontend.env.devengovender.co.za](frontend.env.devengovender.co.za)
- Final files should exist at:
  - `/domains/devengovender.co.za/public_html/index.html`
  - `/domains/devengovender.co.za/public_html/.htaccess`
  - `/domains/devengovender.co.za/public_html/assets/`

## Backend package

- Upload and extract [backend-api/backend-directadmin-api-2026-05-13.zip](backend-api/backend-directadmin-api-2026-05-13.zip)
- Backend env template: [backend-api/backend.env.devengovender.co.za](backend-api/backend.env.devengovender.co.za)
- Node app startup file: `dist/server.js`
- Backend `.env` values:
  - `SANITY_PROJECT_ID=y7j5j2mt`
  - `SANITY_DATASET=production`
  - `SANITY_API_VERSION=2024-01-01`
  - `SANITY_API_TOKEN=your_sanity_token`
  - `NODE_ENV=production`
  - `FRONTEND_URL=https://www.devengovender.co.za`

## Same-domain `.htaccess`

Put this in `/domains/devengovender.co.za/public_html/.htaccess` and replace `5000` with your actual DirectAdmin Node app port:

```apache
Options -MultiViews
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

RewriteCond %{REQUEST_URI} ^/api [OR]
RewriteCond %{REQUEST_URI} ^/health
RewriteRule ^(.*)$ http://127.0.0.1:5000/$1 [P,L]

RewriteRule ^index\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

## Frontend runtime target

- For same-domain hosting, build/use frontend with `VITE_API_URL=/api`
- Use [frontend.env.devengovender.co.za](frontend.env.devengovender.co.za) as the live frontend env reference

## Verify after deploy

- Site: `https://www.devengovender.co.za`
- Health: `https://www.devengovender.co.za/health`
- Articles API: `https://www.devengovender.co.za/api/articles`