# ✅ Startup Scripts Added!

## What's New

You can now start **both frontend and backend servers together** with a single command!

---

## 🚀 New Files Created

### 1. **start.sh** (macOS/Linux)
- Single command to start both servers
- Auto-installs dependencies if needed
- Handles cleanup on exit
- Make executable: `chmod +x start.sh`
- Run: `./start.sh`

### 2. **start.bat** (Windows)
- Single command to start both servers
- Opens two separate terminal windows
- Auto-installs dependencies if needed
- Run: `start.bat`

### 3. **STARTUP_GUIDE.md**
- Complete startup documentation
- How to use the scripts
- Troubleshooting
- Pro tips and tricks

---

## ⚡ Quick Start

### One Command to Start Everything:

**macOS/Linux:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

---

## 📊 What Happens

The scripts automatically:

1. ✅ Check if `frontend/node_modules` exists
2. ✅ If not → run `npm install` in frontend
3. ✅ Check if `backend/node_modules` exists  
4. ✅ If not → run `npm install` in backend
5. ✅ Start frontend on `http://localhost:5173`
6. ✅ Start backend on `http://localhost:5000`
7. ✅ Display both outputs
8. ✅ Handle cleanup when you press Ctrl+C

---

## 📁 Updated Documentation

These files now mention the startup scripts:

- ✅ **QUICKSTART.md** - Added script option
- ✅ **README.md** - Added startup section
- ✅ **SETUP_GUIDE.md** - Added at the top
- ✅ **DOCUMENTATION_INDEX.md** - Added link to STARTUP_GUIDE.md

---

## 🎯 How to Use

### Method 1: Combined Scripts (RECOMMENDED ⭐)
```bash
# macOS/Linux
./start.sh

# Windows
start.bat
```

**Pros:**
- Single command
- Auto-installs deps
- Both in one place
- Easy to stop (Ctrl+C)

### Method 2: Separate Terminals (Alternative)
```bash
# Terminal 1
cd frontend && npm install && npm run dev

# Terminal 2
cd backend && npm install && npm run dev
```

**Pros:**
- Separate outputs
- Easier debugging
- More control

---

## ✨ Features

### start.sh (macOS/Linux)
```bash
✅ Auto-dependency check
✅ Parallel execution
✅ Pretty output formatting
✅ Graceful cleanup
✅ Single Ctrl+C to stop both
```

### start.bat (Windows)
```bash
✅ Auto-dependency check
✅ Separate terminal windows
✅ Pretty output formatting
✅ Easy to manage
✅ Close windows to stop
```

---

## 📞 Need Help?

See **STARTUP_GUIDE.md** for:
- Detailed instructions
- Troubleshooting guide
- Pro tips
- Expected output
- Port configuration

---

## 🎉 You're All Set!

Now you can start the entire CMS with just:

```bash
./start.sh    # macOS/Linux
start.bat     # Windows
```

**No more remembering two commands! 🎉**
