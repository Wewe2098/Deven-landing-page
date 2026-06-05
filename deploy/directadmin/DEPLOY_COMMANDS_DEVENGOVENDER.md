# DevenGovender.co.za DirectAdmin Deploy Commands

Prepared on: 2026-05-13

Use this as the final handoff note for deploying to `/domains/devengovender.co.za/`.

## 1) Frontend upload target

Upload and extract:

- `frontend-directadmin-2026-05-13.zip`

Into:

- `/domains/devengovender.co.za/public_html/`

After extraction, these should exist:

- `/domains/devengovender.co.za/public_html/index.html`
- `/domains/devengovender.co.za/public_html/.htaccess`
- `/domains/devengovender.co.za/public_html/assets/`

## 2) Frontend `.env` values

Reference file:

- `deploy/directadmin/frontend.env.devengovender.co.za`

Production values:

```env
VITE_API_URL=/api
VITE_SANITY_PROJECT_ID=y7j5j2mt
VITE_SANITY_DATASET=production
VITE_SITE_URL=https://www.devengovender.co.za
```

## 3) Frontend `.htaccess`

Put this in:

- `/domains/devengovender.co.za/public_html/.htaccess`

Replace `5000` with your actual DirectAdmin Node app port.

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

## 4) Backend upload target

Upload and extract:

- `backend-api/backend-directadmin-api-2026-05-13.zip`

Suggested app root after extraction:

- `/domains/devengovender.co.za/backend-api/app/`

Node app startup file:

- `dist/server.js`

## 5) Backend `.env` values

Reference file:

- `deploy/directadmin/backend-api/backend.env.devengovender.co.za`

Production values:

```env
SANITY_PROJECT_ID=y7j5j2mt
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_sanity_token
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://www.devengovender.co.za
```

Optional only if backend also serves frontend itself:

```env
FRONTEND_DIST_PATH=/domains/devengovender.co.za/public_html
```

## 6) DirectAdmin UI values

Use these in the Node.js app screen:

- **Application root**: extracted backend `app` folder
- **Application URL**: your selected backend app/subdomain
- **Application startup file**: `dist/server.js`
- **Node environment**: `production`

## 7) If terminal is available in DirectAdmin app root

Run:

```bash
npm install --omit=dev
```

If you have SSH access later and the backend app is extracted to `/domains/devengovender.co.za/backend-api/app/`, the command would be:

```bash
cd /domains/devengovender.co.za/backend-api/app && npm install --omit=dev
```

## 8) Verification URLs

Check these after deploy:

- `https://www.devengovender.co.za`
- `https://www.devengovender.co.za/health`
- `https://www.devengovender.co.za/api/articles`

## 9) Still needs your live values

You still need to supply:

- the real `SANITY_API_TOKEN`
- the actual DirectAdmin Node app port to replace `5000` in `.htaccess`
- the final extracted backend app path if it differs from the suggested one

## 10) Files to use

- `deploy/directadmin/frontend-directadmin-2026-05-13.zip`
- `deploy/directadmin/backend-api/backend-directadmin-api-2026-05-13.zip`
- `deploy/directadmin/frontend.env.devengovender.co.za`
- `deploy/directadmin/backend-api/backend.env.devengovender.co.za`
- `deploy/directadmin/DEVENGOVENDER_PRODUCTION_CHECKLIST.md`
