# DirectAdmin Upload Package

Prepared on: 2026-05-13

## Files

- `frontend-directadmin-2026-05-13.zip` → upload-ready package
- `site/` → unzipped contents (same as the zip)
- `backend-api/backend-directadmin-api-2026-05-13.zip` → upload-ready backend API package
- `backend-api/app/` → unzipped backend contents (same as the zip)

## Upload steps (DirectAdmin File Manager)

1. Open **File Manager** and go to `/domains/devengovender.co.za/public_html/`.
2. Upload `frontend-directadmin-2026-05-13.zip`.
3. Extract the zip so `index.html` and `assets/` are directly inside `/domains/devengovender.co.za/public_html/`.
4. Ensure `.htaccess` is present in `/domains/devengovender.co.za/public_html/` (for SPA route fallback).
5. Clear any cache/CDN and reload the site.

## Same-domain API proxy

If the frontend is in `/domains/devengovender.co.za/public_html/` and the backend runs as a separate Node app on the same domain, use this in `/domains/devengovender.co.za/public_html/.htaccess`:

```apache
Options -MultiViews
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

# Replace 5000 with your Node app port
RewriteCond %{REQUEST_URI} ^/api [OR]
RewriteCond %{REQUEST_URI} ^/health
RewriteRule ^(.*)$ http://127.0.0.1:5000/$1 [P,L]

RewriteRule ^index\.html$ - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
```

For this setup, frontend should use `VITE_API_URL=/api`.

## Notes

- The frontend now falls back to direct Sanity queries if `/api` is unavailable.
- If you later run a backend API on the same domain, keep or configure `VITE_API_URL` for `/api` usage.
- Backend API deployment instructions are in `backend-api/README.md`.
