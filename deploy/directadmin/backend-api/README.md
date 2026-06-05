# DirectAdmin Backend API Package

Prepared on: 2026-05-13

## Files

- `backend-directadmin-api-2026-05-13.zip` → upload-ready backend package
- `app/` → unzipped contents (same as the zip)

## Deploy in DirectAdmin / Node App

1. Create a Node.js app (recommended subdomain: `api.yourdomain.co.za`).
2. Upload `backend-directadmin-api-2026-05-13.zip` and extract it.
3. Set app root to the extracted `app` folder.
4. Install dependencies:
   - `npm install --omit=dev`
5. Create `.env` in `app/` from `.env.example` and set:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET`
   - `SANITY_API_VERSION`
   - `SANITY_API_TOKEN` (optional if dataset is public)
   - `NODE_ENV=production`
   - `PORT` (or use platform default)
   - `FRONTEND_URL=https://www.yourdomain.co.za`
6. Startup file: `dist/server.js`
7. Start/restart Node app.

## Verification

- Health: `https://api.yourdomain.co.za/health`
- Articles: `https://api.yourdomain.co.za/api/articles`

## Same-domain setup

If you want the frontend on `https://www.devengovender.co.za` and the Node API behind the same domain at `/api`, use Apache in `/domains/devengovender.co.za/public_html/.htaccess` to proxy requests to your Node app port.

Use this exact block in the frontend `.htaccess`:

```apache
Options -MultiViews
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

# Uncomment and set your actual Node app port
RewriteCond %{REQUEST_URI} ^/api [OR]
RewriteCond %{REQUEST_URI} ^/health
RewriteRule ^(.*)$ http://127.0.0.1:5000/$1 [P,L]

RewriteRule ^index\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

Replace `5000` with the actual internal port assigned to your DirectAdmin Node.js app.

In this setup:

- Frontend stays in `/domains/devengovender.co.za/public_html/`
- Backend runs as a Node app separately
- Browser calls `https://www.yourdomain.co.za/api/...`
- Apache forwards `/api` and `/health` to Node

Set backend `.env` like this for same-domain use:

- `NODE_ENV=production`
- `FRONTEND_URL=https://www.yourdomain.co.za`

Set frontend env/build like this for same-domain use:

- `VITE_API_URL=/api`

## Notes

- This build supports API-only mode automatically when no frontend dist folder is present.
- If you host frontend and backend together in one Node app, set `FRONTEND_DIST_PATH` accordingly.
