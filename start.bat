@echo off
REM Article Storage CMS - Start Both Servers (Windows)
REM This script starts frontend and backend simultaneously

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

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 🌐 Starting Frontend on http://localhost:5173...
echo 🔌 Starting Backend on http://localhost:5000...
echo.
echo Press Ctrl+C to stop both servers
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

REM Start both servers in parallel
start "Frontend" cmd /k "cd frontend && npm run dev"
start "Backend" cmd /k "cd backend && npm run dev"

echo ✅ Both servers started in separate windows
echo.
echo Close the windows to stop the servers
