# Article Storage CMS - Quick Start Guide

## 🚀 Fastest Way to Start

### From project root, run ONE command:

```bash
npm run dev
```

This uses the root `package.json` and starts both apps together.

**Direct script option:**

**macOS/Linux:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

Both servers start automatically! ✨

---

## 🎯 What's Been Built

You now have a complete full-stack article storage CMS with:

### Frontend
- ✅ React 19 + TypeScript
- ✅ Tailwind CSS with custom color scheme
- ✅ Framer Motion animations
- ✅ Responsive components:
  - Header with navigation
  - Hero section
  - Featured articles showcase
  - Article grid with cards
  - Footer
- ✅ Custom hooks for Sanity data fetching
- ✅ TypeScript interfaces for type safety

### Backend
- ✅ Express.js REST API
- ✅ Sanity CMS integration
- ✅ GROQ queries for articles
- ✅ API endpoints:
  - GET /api/articles
  - GET /api/articles/featured
  - GET /api/articles/category/:category
  - GET /api/articles/:slug
- ✅ CORS enabled for frontend
- ✅ Error handling and logging

### CMS
- ✅ Sanity client configured
- ✅ Types for articles
- ✅ Ready for schema deployment

---

## 📋 Setup Steps

### 1. Create Sanity Project
```bash
# Visit https://sanity.io and create a project
# Or use CLI:
npm create sanity@latest -- --project sanity-article-cms --dataset production
```

### 2. Get Your Sanity Credentials
- Project ID
- Dataset name (usually "production")
- API token (for backend access)

### 3. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
```

Update `frontend/.env`:
```
VITE_API_URL=http://localhost:5000/api
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

Start frontend:
```bash
npm run dev
# Opens at http://localhost:5173
```

### 4. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
```

Update `backend/.env`:
```
PORT=5000
NODE_ENV=development
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_TOKEN=your_sanity_api_token
FRONTEND_URL=http://localhost:5173
```

Start backend:
```bash
npm run dev
# Runs at http://localhost:5000
```

### 5. Create Article Schema in Sanity
Deploy this schema to your Sanity project:

```javascript
// In sanity-article-cms/schemaTypes or via mcp_sanity_deploy_schema
{
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Content'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Featured Image'
    },
    {
      name: 'author',
      type: 'object',
      title: 'Author',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'image', type: 'image', title: 'Author Image' }
      ]
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          'Technology',
          'Business',
          'Innovation',
          'Design',
          'Other'
        ]
      }
    },
    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Tags'
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Article',
      initialValue: false
    }
  ]
}
```

### 6. Create Sample Articles
In your Sanity Studio, create a few articles with:
- Title
- Slug (auto-generated from title)
- Description
- Content
- Image
- Author
- Category
- Tags
- Publish date
- Mark some as "Featured"

---

## 🚀 Your Site Structure

### Pages & Sections
1. **Hero** - Main landing section with CTA buttons
2. **Featured Articles** - Highlighted articles (featured: true)
3. **All Articles** - Grid of all articles with cards
4. **Footer** - Links and info

### Color Scheme (Tailwind)
- **Primary**: Dark (#1F2937)
- **Secondary**: Green (#10B981)
- **Accent**: Amber (#F59E0B)
- **Dark**: Very Dark (#111827)
- **Light**: Off-white (#F9FAFB)

### Animations
- Page load staggered animations
- Card hover effects (lift + scale)
- Smooth scrolling
- Button interactions
- Image zoom on hover

---

## 🔗 File Locations

### Frontend Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Landing hero section
│   │   ├── ArticleCard.tsx  # Individual article card
│   │   ├── ArticlesSection.tsx # Articles grid
│   │   └── Footer.tsx       # Footer
│   ├── hooks/
│   │   └── useArticles.ts   # Data fetching hooks
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── config/
│   │   └── sanity.ts        # Sanity client config
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles (Tailwind)
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.ts           # Vite bundler config
```

### Backend Structure
```
backend/
├── src/
│   ├── routes/
│   │   └── articles.ts      # API endpoints
│   ├── services/
│   │   └── articleService.ts # Business logic
│   ├── config/
│   │   └── sanity.ts        # Sanity client
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   └── server.ts            # Express server
├── tsconfig.json            # TypeScript config
└── package.json
```

---

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Run ESLint
```

### Backend
```bash
cd backend
npm run dev              # Start dev server
npm run build            # Build for production
npm run type-check       # Check TypeScript
```

---

## 🌐 API Usage Examples

### Get All Articles
```javascript
fetch('http://localhost:5000/api/articles')
  .then(res => res.json())
  .then(data => console.log(data.articles))
```

### Get Featured Articles
```javascript
fetch('http://localhost:5000/api/articles/featured')
  .then(res => res.json())
  .then(data => console.log(data.articles))
```

### Get Article by Slug
```javascript
fetch('http://localhost:5000/api/articles/my-article-slug')
  .then(res => res.json())
  .then(article => console.log(article))
```

### Get Articles by Category
```javascript
fetch('http://localhost:5000/api/articles/category/Technology')
  .then(res => res.json())
  .then(data => console.log(data.articles))
```

---

## 📱 Responsive Design

The site is fully responsive with Tailwind's responsive utilities:
- Mobile: Single column layout
- Tablet: 2 column grid
- Desktop: 3 column grid

Tested breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

---

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: "#your-color",
  secondary: "#your-color",
  accent: "#your-color",
  // ...
}
```

### Modify Animations
Edit animation duration in components:
```typescript
transition={{ duration: 0.5 }} // Change duration
delay: 0.1 // Change delay
```

### Add New Components
Create in `frontend/src/components/` and import in App.tsx

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Heroku)
```bash
npm run build
npm start
```

Update environment variables in your hosting platform.

---

## 🐛 Troubleshooting

### Articles not loading?
1. Check Sanity credentials in .env
2. Verify backend is running on port 5000
3. Check browser console for CORS errors
4. Ensure articles exist in Sanity with publishedAt date

### CORS errors?
- Make sure `FRONTEND_URL` in backend .env matches your frontend URL
- For production: update CORS origin to your live frontend URL

### Styling issues?
- Run `npm install` in frontend
- Clear node_modules and reinstall if needed
- Make sure tailwind.config.js is in root of frontend folder

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Express.js](https://expressjs.com)
- [Sanity Documentation](https://www.sanity.io/docs)

---

## ✨ Next Steps

1. **Customize Design**: Update colors, fonts, and layouts
2. **Add Features**: Search, filtering, categories
3. **Implement Comments**: Add user comments to articles
4. **Add Admin Panel**: User authentication and article management
5. **Deploy**: Push to production hosting

---

**Happy coding! 🚀**
