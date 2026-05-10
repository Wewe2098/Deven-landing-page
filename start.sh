#!/bin/bash

# Article Storage CMS - Start All Services
# This script starts frontend, backend, and Sanity Studio simultaneously

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

if [ ! -d "studio-my-article-landing-site/node_modules" ]; then
    echo "Installing Sanity Studio dependencies..."
    cd studio-my-article-landing-site && npm install --silent && cd ..
    echo "✅ Sanity Studio dependencies installed"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 Starting Frontend on http://localhost:5173..."
echo "🔌 Starting Backend on http://localhost:5000..."
echo "📝 Starting Sanity Studio on http://localhost:3333..."
echo ""
echo "Press Ctrl+C to stop all services"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start all services in parallel
(cd frontend && npm run dev) &
FRONTEND_PID=$!

(cd backend && npm run dev) &
BACKEND_PID=$!

(cd studio-my-article-landing-site && npm run dev) &
STUDIO_PID=$!

# Function to cleanup on exit
cleanup() {
    echo ""
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🛑 Stopping services..."
    kill $FRONTEND_PID 2>/dev/null
    kill $BACKEND_PID 2>/dev/null
    kill $STUDIO_PID 2>/dev/null
    echo "✅ Services stopped"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 0
}

# Trap Ctrl+C
trap cleanup SIGINT SIGTERM

# Wait for all processes
wait
