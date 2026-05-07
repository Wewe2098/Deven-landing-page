# Architecture & Data Flow Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         SANITY CMS STUDIO                           │
│                    (Article Management)                             │
│  - Create/Edit/Delete Articles                                      │
│  - Manage Categories & Tags                                         │
│  - Upload Images & Media                                            │
└─────────────────────────┬───────────────────────────────────────────┘
                          │
                    Sanity API
                          │
        ┌─────────────────┴────────────────────┐
        │                                      │
        ▼                                      ▼
   ┌──────────────┐                   ┌──────────────┐
   │   BACKEND    │                   │   FRONTEND   │
   │  EXPRESS.JS  │◄──────────────────│    REACT     │
   │              │    HTTP/REST      │  TYPESCRIPT  │
   └──────┬───────┘                   └──────▲───────┘
          │                                  │
          │ GET /api/articles               │
          │ GET /api/articles/featured      │
          │ GET /api/articles/:slug         │
          │ GET /api/articles/category/:cat │
          │                                  │
          └──────────────────────────────────┘
                    Port 5000                Port 5173
```

---

## Data Flow Diagram

### 1. Page Load Flow
```
User Opens App
    │
    ▼
React App (localhost:5173)
    │
    ├─ Execute useArticles hook
    │   │
    │   ├─ Fetch /api/articles
    │   │   │
    │   │   ▼
    │   └─ Backend receives request (port 5000)
    │       │
    │       ├─ Query Sanity: *[_type == "article"]
    │       │   │
    │       │   ▼
    │       └─ Sanity returns articles
    │           │
    │           ├─ Format response
    │           │
    │           ▼
    │           └─ Send JSON to frontend
    │
    ├─ Update React state
    │
    └─ Render article cards
         │
         ▼
    Display on page
```

### 2. Featured Articles Flow
```
useFeaturedArticles hook
    │
    ▼
GET /api/articles/featured
    │
    ▼
Backend Route Handler
    │
    ├─ Execute GROQ query:
    │  *[_type == "article" && featured == true]
    │
    ▼
Sanity Filter & Return
    │
    ▼
Backend Format Response
    │
    ▼
Frontend Receives
    │
    ▼
ArticlesSection Component
    │
    └─ Render Featured Section
```

### 3. Component Hierarchy
```
App
├── Header
│   └── Navigation Links
│
├── Hero
│   ├── Title
│   ├── Subtitle
│   └── CTA Buttons
│
├── ArticlesSection
│   ├── Featured Articles
│   │   └── ArticleCard (multiple)
│   │       ├── Image
│   │       ├── Category Badge
│   │       ├── Title
│   │       ├── Description
│   │       ├── Author Info
│   │       └── Read More Link
│   │
│   └── All Articles
│       └── ArticleCard (multiple)
│           └── Same as above
│
└── Footer
    ├── About Section
    ├── Quick Links
    └── Social Links
```

---

## API Request/Response Cycle

### Request: GET /api/articles
```
┌─ Browser ────────────────────────────────────┐
│                                              │
│  Fetch: http://localhost:5000/api/articles  │
│                                              │
└──────────────┬───────────────────────────────┘
               │
               ▼
┌─ Express Server ────────────────────────────────┐
│                                                 │
│  router.get('/articles', async (req, res) => {│
│    const articles = await getAllArticles()    │
│    res.json({ articles, total: n })          │
│  })                                            │
│                                                 │
└──────────────┬──────────────────────────────────┘
               │
               ▼
┌─ Sanity Client ────────────────────────────┐
│                                            │
│  Query: *[_type == "article"] | order...  │
│                                            │
└──────────────┬───────────────────────────┘
               │
               ▼
┌─ Browser ────────────────────────────────┐
│                                          │
│  Response: {                             │
│    articles: [                           │
│      { _id, title, slug, image, ... }   │
│    ],                                    │
│    total: 5                              │
│  }                                       │
│                                          │
└──────────────────────────────────────────┘
```

---

## State Management Flow

```
Frontend State
    │
    ├─ articles (Article[])
    │   └─ Data from getAllArticles query
    │
    ├─ featured (Article[])
    │   └─ Data from getFeaturedArticles query
    │
    ├─ loading (boolean)
    │   └─ Fetch in progress
    │
    └─ error (string | null)
        └─ Error message if fetch failed

                ▼

Component Re-render

                ▼

Display Updates:
├─ Show loading spinner
├─ Show error message
├─ Render article cards
└─ Show empty state
```

---

## Sanity Schema Structure

```
Article Document
├── _id (string)
│   └─ Unique identifier
├── title (string)
│   └─ Article heading
├── slug (slug)
│   └─ URL-friendly identifier
├── description (text)
│   └─ Short excerpt
├── content (array)
│   └─ Rich text blocks
├── image (image)
│   └─ Featured image
├── author (object)
│   ├── name (string)
│   └── image (image)
├── category (string)
│   └─ Article category
├── tags (array)
│   └─ Tags array
├── publishedAt (datetime)
│   └─ Publication date
└── featured (boolean)
    └─ Featured flag
```

---

## Environment Variable Flow

### Frontend
```
.env.VITE_API_URL
    │
    ▼
import.meta.env.VITE_API_URL
    │
    ▼
useArticles hook
    │
    ▼
axios.get(API_URL + '/articles')
```

### Backend
```
.env Variables
├── SANITY_PROJECT_ID
├── SANITY_DATASET
├── SANITY_API_VERSION
├── SANITY_TOKEN
├── PORT
├── NODE_ENV
└── FRONTEND_URL
    │
    ▼
process.env (in Node.js)
    │
    ├─ CORS configuration
    ├─ Sanity client setup
    └─ Server initialization
```

---

## Error Handling Flow

```
API Request
    │
    ▼
Try Block
    │
    ├─ Success?
    │   │
    │   ├─ Yes → Return data
    │   │
    │   └─ No → Catch error
    │           │
    │           ▼
    │       Catch Block
    │           │
    │           ├─ Log error
    │           ├─ Format error message
    │           │
    │           ▼
    │           └─ Return error response
    │
    ▼
Frontend Receives
    │
    ├─ Is response OK?
    │   │
    │   ├─ Yes → Display data
    │   │
    │   └─ No → Display error message
```

---

## Authentication Flow (Future Enhancement)

```
Login Page
    │
    ▼
Submit Credentials
    │
    ▼
Backend Auth Route
    │
    ├─ Verify credentials
    ├─ Generate JWT token
    │
    ▼
Return Token
    │
    ▼
Store in localStorage
    │
    ▼
Add to Request Headers
    │
    ├─ Authorization: Bearer TOKEN
    │
    ▼
Protected Routes
    │
    └─ Admin Dashboard
        ├─ Create Article
        ├─ Edit Article
        └─ Delete Article
```

---

## Real-time Update Flow (Future)

```
Article Created in Sanity
    │
    ▼
Sanity Webhook
    │
    ▼
Backend Receives Event
    │
    ├─ Invalidate cache
    │
    ▼
WebSocket/Socket.io Event
    │
    ▼
Frontend Receives
    │
    ├─ Refresh articles
    │
    ▼
Display Latest Content
```

---

## Performance Optimization Path

```
Image Upload
    │
    ├─ Sanity Image CDN
    │
    ├─ Automatic optimization
    │   ├─ Format conversion
    │   ├─ Compression
    │   ├─ Resizing
    │   └─ Responsive sizes
    │
    ▼
Frontend receives
    │
    ├─ Optimized URL
    ├─ Lazy loading
    │
    ▼
Display optimized image
```

---

## Caching Strategy

```
First Load
    │
    ├─ Fetch from Sanity
    ├─ Store in React state
    │
    ▼
User Navigate Away
    │
    ├─ State preserved (optionally)
    │
    ▼
User Return
    │
    ├─ Option 1: Use cached data (fast)
    ├─ Option 2: Refetch fresh data (latest)
```

---

## Deployment Architecture

```
Development
    ├─ localhost:5173 (Frontend)
    ├─ localhost:5000 (Backend)
    └─ Local Sanity Studio

Production
    ├─ Vercel/Netlify (Frontend)
    │   └─ https://yourdomain.com
    │
    ├─ Railway/Render (Backend)
    │   └─ https://api.yourdomain.com
    │
    └─ Sanity (CMS)
        └─ Managed cloud
```

---

## Summary

```
┌────────────────────────────────────────────────────────┐
│                    User Browser                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │          React Frontend (Port 5173)              │ │
│  │  - Header, Hero, Articles, Footer               │ │
│  │  - Framer Motion Animations                     │ │
│  │  - Tailwind CSS Styling                         │ │
│  │  - Custom Hooks (useArticles)                   │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
                      │
         HTTP REST API (Axios)
                      │
┌────────────────────────────────────────────────────────┐
│          Express Backend (Port 5000)                   │
│  ┌──────────────────────────────────────────────────┐ │
│  │  - API Routes (/api/articles/*)                 │ │
│  │  - Article Service (GROQ Queries)               │ │
│  │  - Sanity Client Integration                    │ │
│  │  - CORS & Error Handling                        │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
                      │
              GROQ Query API
                      │
┌────────────────────────────────────────────────────────┐
│            Sanity CMS (Cloud)                          │
│  ┌──────────────────────────────────────────────────┐ │
│  │  - Article Documents                            │ │
│  │  - Media Library                                │ │
│  │  - CMS Studio (Management)                      │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

This architecture ensures clean separation of concerns, scalability, and maintainability!
