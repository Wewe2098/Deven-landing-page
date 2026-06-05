#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   SSH_USER=<user> SSH_HOST=<host> SSH_PORT=<port> bash deploy/directadmin/upload_via_ssh.sh
# Example:
#   SSH_USER=root SSH_HOST=156.155.253.191 SSH_PORT=22 bash deploy/directadmin/upload_via_ssh.sh

SSH_USER="${SSH_USER:-root}"
SSH_HOST="${SSH_HOST:-156.155.253.191}"
SSH_PORT="${SSH_PORT:-22}"

DOMAIN_ROOT="${DOMAIN_ROOT:-/domains/devengovender.co.za}"
PUBLIC_HTML="${PUBLIC_HTML:-$DOMAIN_ROOT/public_html}"
BACKEND_ROOT="${BACKEND_ROOT:-$DOMAIN_ROOT/backend-api}"
BACKEND_APP_DIR="${BACKEND_APP_DIR:-$BACKEND_ROOT/app}"

LOCAL_FRONTEND_ZIP="deploy/directadmin/frontend-directadmin-2026-05-13.zip"
LOCAL_BACKEND_ZIP="deploy/directadmin/backend-api/backend-directadmin-api-2026-05-13.zip"
LOCAL_FRONTEND_ENV="deploy/directadmin/frontend.env.devengovender.co.za"
LOCAL_BACKEND_ENV="deploy/directadmin/backend-api/backend.env.devengovender.co.za"

REMOTE_TMP="/tmp/devengovender-deploy-$(date +%s)"

echo "==> Creating remote temp folder: $REMOTE_TMP"
ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "mkdir -p '$REMOTE_TMP' '$BACKEND_ROOT' '$PUBLIC_HTML'"

echo "==> Uploading zips and env templates"
scp -P "$SSH_PORT" "$LOCAL_FRONTEND_ZIP" "$SSH_USER@$SSH_HOST:$REMOTE_TMP/frontend.zip"
scp -P "$SSH_PORT" "$LOCAL_BACKEND_ZIP" "$SSH_USER@$SSH_HOST:$REMOTE_TMP/backend.zip"
scp -P "$SSH_PORT" "$LOCAL_FRONTEND_ENV" "$SSH_USER@$SSH_HOST:$REMOTE_TMP/frontend.env"
scp -P "$SSH_PORT" "$LOCAL_BACKEND_ENV" "$SSH_USER@$SSH_HOST:$REMOTE_TMP/backend.env"

echo "==> Extracting frontend into $PUBLIC_HTML"
ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "\
  command -v unzip >/dev/null 2>&1 || { echo 'unzip not installed'; exit 1; } ; \
  unzip -oq '$REMOTE_TMP/frontend.zip' -d '$REMOTE_TMP' ; \
  cp -R '$REMOTE_TMP/site/.' '$PUBLIC_HTML/' ; \
  cp '$REMOTE_TMP/frontend.env' '$PUBLIC_HTML/.env.production.template' ; \
  [ -f '$PUBLIC_HTML/.htaccess' ] || { echo '.htaccess missing in public_html'; exit 1; } \
"

echo "==> Extracting backend into $BACKEND_ROOT"
ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "\
  rm -rf '$BACKEND_APP_DIR' ; \
  mkdir -p '$BACKEND_ROOT' ; \
  unzip -oq '$REMOTE_TMP/backend.zip' -d '$BACKEND_ROOT' ; \
  cp '$REMOTE_TMP/backend.env' '$BACKEND_APP_DIR/.env' ; \
  cd '$BACKEND_APP_DIR' ; \
  npm install --omit=dev \
"

echo "==> Cleaning up remote temp files"
ssh -p "$SSH_PORT" "$SSH_USER@$SSH_HOST" "rm -rf '$REMOTE_TMP'"

echo "==> Done"
echo "Frontend path: $PUBLIC_HTML"
echo "Backend app path: $BACKEND_APP_DIR"
echo "Remember to update:"
echo "  - $BACKEND_APP_DIR/.env (SANITY_API_TOKEN and PORT)"
echo "  - $PUBLIC_HTML/.htaccess (replace 5000 with actual Node app port)"
