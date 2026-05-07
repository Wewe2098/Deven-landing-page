# 🚀 Combined Server Startup Guide

You can now start both frontend and backend servers together with a single command!

---

## ⚡ Quick Start (Recommended)

### From the project root
```bash
npm run dev
```

This calls the root startup script and launches both apps.

### Direct script option

#### macOS & Linux
```bash
./start.sh
```

#### Windows
```bash
start.bat
```

That's it! Both servers will:
- ✅ Auto-install missing dependencies
- ✅ Start frontend on http://localhost:5173
- ✅ Start backend on http://localhost:5000
- ✅ Display both outputs in your terminal

**To stop:** Press `Ctrl+C`

---

## 📋 What the Scripts Do

### start.sh (macOS/Linux)
```bash
1. Checks if frontend/node_modules exists
2. If not, runs: npm install
3. Checks if backend/node_modules exists
4. If not, runs: npm install
5. Starts both servers in parallel
6. Cleans up both processes on exit
```

### start.bat (Windows)
```bash
1. Checks if frontend\node_modules exists
2. If not, runs: npm install
3. Checks if backend\node_modules exists
4. If not, runs: npm install
5. Opens two terminal windows
6. Runs frontend in first window
7. Runs backend in second window
```

---

## 📊 Before You Start

Make sure you have:
- ✅ Node.js 18+ installed
- ✅ npm or yarn installed
- ✅ Created Sanity project (at https://sanity.io)
- ✅ Updated .env files with credentials

**Not done?** Follow SETUP_GUIDE.md first

---

## 🎯 Expected Output

### macOS/Linux (start.sh)
```
╔════════════════════════════════════════════════════════════════╗
║          🚀 Starting Article Storage CMS Servers 🚀           ║
╚════════════════════════════════════════════════════════════════╝

📦 Checking dependencies...
✅ Frontend dependencies installed
✅ Backend dependencies installed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Starting Frontend on http://localhost:5173...
🔌 Starting Backend on http://localhost:5000...

Press Ctrl+C to stop both servers
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Both server outputs appear below]
```

### Windows (start.bat)
```
╔════════════════════════════════════════════════════════════════╗
║          🚀 Starting Article Storage CMS Servers 🚀           ║
╚════════════════════════════════════════════════════════════════╝

📦 Installing dependencies...
✅ Frontend dependencies installed
✅ Backend dependencies installed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Both servers started in separate windows
```

---

## 🌐 Access Your Application

Once running, access:

| Service | URL | Purpose |
|---------|-----|---------|
| **Frontend** | http://localhost:5173 | React UI |
| **Backend** | http://localhost:5000 | Express API |
| **Health Check** | http://localhost:5000/health | API status |

---

## 📝 Manual Setup (If Scripts Don't Work)

**Terminal 1:**
```bash
cd frontend
npm install
npm run dev
```

**Terminal 2:**
```bash
cd backend
npm install
npm run dev
```

---

## 🔧 Troubleshooting

### Scripts won't run (macOS/Linux)
```bash
# Make script executable
chmod +x start.sh

# Then run
./start.sh
```

### "Cannot find npm"
→ Reinstall Node.js from nodejs.org

### "Port 5173 already in use"
→ Kill process on port 5173 or use different port

### "Port 5000 already in use"
→ Kill process on port 5000 or use different port

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf frontend/node_modules backend/node_modules
rm frontend/package-lock.json backend/package-lock.json
./start.sh
```

---

## 🎬 Next Steps After Starting

1. **Open Frontend:** http://localhost:5173
2. **Check Backend Health:** http://localhost:5000/health
3. **Create Articles:** Log into Sanity Studio
4. **Test API:** Visit http://localhost:5000/api/articles
5. **See Articles:** Refresh frontend at http://localhost:5173

---

## ⚙️ Environment Configuration

Before running scripts, ensure both .env files are configured:

### frontend/.env
```
VITE_API_URL=http://localhost:5000/api
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### backend/.env
```
PORT=5000
NODE_ENV=development
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_TOKEN=your_sanity_token
FRONTEND_URL=http://localhost:5173
```

See SETUP_GUIDE.md for detailed environment setup

---

## 🆚 Comparison

| Method | Pros | Cons |
|--------|------|------|
| **Combined Script** | Simple, auto-install, one command | Both outputs in one terminal |
| **Manual (Separate Terminals)** | Separate outputs, easier debugging | Need 2 terminals, manual install |

**Recommendation:** Use scripts for development, manual for debugging

---

## 🛑 Stopping Servers

### macOS/Linux (start.sh)
```bash
Press Ctrl+C
# Both servers stop automatically
```

### Windows (start.bat)
```bash
Close the terminal windows
# Or press Ctrl+C in each window
```

### Manual Setup
```bash
# Terminal 1: Ctrl+C
# Terminal 2: Ctrl+C
```

---

## ✨ Pro Tips

### Run in background (macOS/Linux)
```bash
./start.sh &
```

### Run with logs (macOS/Linux)
```bash
./start.sh | tee startup.log
```

### Check if ports are in use
```bash
# macOS/Linux
lsof -i :5173 -i :5000

# Windows
netstat -ano | findstr "5173 5000"
```

---

## 📞 Still Having Issues?

1. Check SETUP_GUIDE.md "Troubleshooting" section
2. Verify Node.js version: `node --version`
3. Verify npm: `npm --version`
4. Check .env files are configured
5. Ensure Sanity project exists
6. Read error messages in terminal carefully

---

**You're ready to go! Run the startup script now! 🚀**
