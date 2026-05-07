#!/bin/bash

# Article Storage CMS - Start Both Servers
# This script starts frontend and backend simultaneously

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║          🚀 Starting Article Storage CMS Servers 🚀           ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Check if node_modules exist, if not install
echo "📦 Checking dependencies..."
echo ""

if [ ! -d "frontend/node_modules" ]; then
    echo "Installing frontend dependencies..."
    cd frontend && npm install --silent && cd ..
    echo "✅ Frontend dependencies installed"
fi

if [ ! -d "backend/node_modules" ]; then
    echo "Installing backend dependencies..."
    cd backend && npm install --silent && cd ..
    echo "✅ Backend dependencies installed"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 Starting Frontend on http://localhost:5173..."
echo "🔌 Starting Backend on http://localhost:5000..."
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start both servers in parallel
(cd frontend && npm run dev) &
FRONTEND_PID=$!

(cd backend && npm run dev) &
BACKEND_PID=$!

# Function to cleanup on exit
cleanup() {
    echo ""
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🛑 Stopping servers..."
    kill $FRONTEND_PID 2>/dev/null
    kill $BACKEND_PID 2>/dev/null
    echo "✅ Servers stopped"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

# Trap Ctrl+C
trap cleanup SIGINT SIGTERM

# Wait for both processes
wait
