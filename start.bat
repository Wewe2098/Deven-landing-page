@echo off
REM Article Storage CMS - Start All Services (Windows)
REM This script starts frontend, backend, and Sanity Studio simultaneously

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║          🚀 Starting Article Storage CMS Servers 🚀           ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if node_modules exist
if not exist "frontend\node_modules" (
    echo 📦 Installing frontend dependencies...
    cd frontend
    call npm install --silent
    cd ..
    echo ✅ Frontend dependencies installed
)

if not exist "backend\node_modules" (
    echo 📦 Installing backend dependencies...
    cd backend
    call npm install --silent
    cd ..
    echo ✅ Backend dependencies installed
)

if not exist "studio-my-article-landing-site\node_modules" (
    echo 📦 Installing Sanity Studio dependencies...
    cd studio-my-article-landing-site
    call npm install --silent
    cd ..
    echo ✅ Sanity Studio dependencies installed
)

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 🌐 Starting Frontend on http://localhost:5173...
echo 🔌 Starting Backend on http://localhost:5000...
echo 📝 Starting Sanity Studio on http://localhost:3333...
echo.
echo Press Ctrl+C to stop all services
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

REM Start all services in parallel
start "Frontend" cmd /k "cd frontend && npm run dev"
start "Backend" cmd /k "cd backend && npm run dev"
start "Sanity Studio" cmd /k "cd studio-my-article-landing-site && npm run dev"

echo ✅ Frontend, backend, and Sanity Studio started in separate windows
echo.
echo Close the windows to stop the servers
