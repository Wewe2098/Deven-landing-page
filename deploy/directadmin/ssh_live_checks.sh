#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   bash deploy/directadmin/ssh_live_checks.sh <ssh-user> <ssh-host> [ssh-port]
# Example:
#   bash deploy/directadmin/ssh_live_checks.sh root 156.155.253.191 22

SSH_USER="${1:-root}"
SSH_HOST="${2:-156.155.253.191}"
SSH_PORT="${3:-22}"

DOMAIN_ROOT="/domains/devengovender.co.za"
PUBLIC_HTML="$DOMAIN_ROOT/public_html"
BACKEND_APP_DIR="$DOMAIN_ROOT/backend-api/app"

ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" bash -s <<'REMOTE'
set -euo pipefail

DOMAIN_ROOT="/domains/devengovender.co.za"
PUBLIC_HTML="$DOMAIN_ROOT/public_html"
BACKEND_APP_DIR="$DOMAIN_ROOT/backend-api/app"

echo "=== HOST ==="
hostname
whoami
pwd

echo

echo "=== FILES ==="
ls -la "$PUBLIC_HTML" | head -n 40 || true
[ -f "$PUBLIC_HTML/.htaccess" ] && echo ".htaccess: OK" || echo ".htaccess: MISSING"
[ -f "$PUBLIC_HTML/index.html" ] && echo "index.html: OK" || echo "index.html: MISSING"

echo

echo "=== BACKEND APP DIR ==="
ls -la "$BACKEND_APP_DIR" | head -n 40 || true
[ -f "$BACKEND_APP_DIR/dist/server.js" ] && echo "dist/server.js: OK" || echo "dist/server.js: MISSING"
[ -f "$BACKEND_APP_DIR/.env" ] && echo ".env: OK" || echo ".env: MISSING"

echo

echo "=== PORTS ==="
ss -lntp 2>/dev/null | grep -E ':5000|:3000|:4000|:8080' || true

echo

echo "=== LOCAL ENDPOINTS ON SERVER ==="
for u in \
  http://127.0.0.1:5000/health \
  http://127.0.0.1:5000/api/articles \
  http://127.0.0.1/health \
  http://127.0.0.1/api/articles
  do
    echo "--- $u"
    curl -sS -i "$u" | head -n 20 || true
    echo
  done

echo

echo "=== APACHE REWRITE CHECK ==="
if [ -f "$PUBLIC_HTML/.htaccess" ]; then
  grep -nE 'RewriteCond %{REQUEST_URI} \^/api|RewriteRule \^\(\.\*\)\$ http://127\.0\.0\.1:[0-9]+/\$1 \[P,L\]' "$PUBLIC_HTML/.htaccess" || true
fi

echo

echo "=== PM2 STATUS (if used) ==="
pm2 ls 2>/dev/null || true

echo

echo "=== DONE ==="
REMOTE
