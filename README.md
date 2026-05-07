# Project README

# Article Storage - A Modern CMS Landing Page

A full-stack article storage system built with React, TypeScript, Tailwind CSS, and Express.js backend, powered by Sanity CMS.

## 🚀 Features

- **Frontend**: React 19 + TypeScript + Tailwind CSS + Framer Motion
- **Backend**: Express.js with Sanity CMS integration
- **CMS**: Sanity Studio for article management
- **Animations**: Smooth animations with Framer Motion
- **Responsive**: Mobile-first responsive design
- **API**: RESTful API for articles with filtering by featured, category, and slug

## 📁 Project Structure

```
dev-landing-page/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom hooks
│   │   ├── types/           # TypeScript types
│   │   ├── config/          # Configuration files
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── vite.config.ts       # Vite configuration
│   └── package.json
│
└── backend/                  # Express backend
    ├── src/
    │   ├── routes/          # API routes
    │   ├── services/        # Business logic
    │   ├── config/          # Configuration
    │   ├── types/           # TypeScript types
    │   └── server.ts        # Express server
    ├── tsconfig.json
    └── package.json
```

## � Quick Start

### Start Both Servers Together (Easiest)

From the project root:

```bash
npm run dev
```

This uses the root `package.json` and starts both apps together.

**Direct script option**

**macOS/Linux:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

This will automatically:
- ✅ Install dependencies (if needed)
- ✅ Start frontend on http://localhost:5173
- ✅ Start backend on http://localhost:5000

### Or Start Manually

**Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

**Backend Setup** (in another terminal)
```bash
cd backend
npm install
npm run dev
```

### Sanity Setup

1. Create a new Sanity project or use existing
2. Define article schema in Sanity Studio
3. Update backend `.env` with your project ID and token
4. Create some articles in Sanity Studio

## 📚 API Documentation

### Endpoints

- `GET /api/articles` - Get all articles
- `GET /api/articles/featured` - Get featured articles
- `GET /api/articles/category/:category` - Get articles by category
- `GET /api/articles/:slug` - Get single article by slug

## 🎨 Frontend Components

- **Header** - Navigation header with smooth animations
- **Hero** - Eye-catching hero section
- **ArticlesSection** - Featured and all articles display
- **ArticleCard** - Individual article card with hover effects
- **Footer** - Footer with links and information

## 🎬 Framer Motion Animations

- Staggered animations on page load
- Smooth card hover effects
- Animated buttons and links
- Scroll-triggered animations

## 🔗 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_TOKEN=your_sanity_token
FRONTEND_URL=http://localhost:5173
```

## 🚀 Deployment

### Frontend
Deploy to Vercel, Netlify, or any static hosting:
```bash
npm run build
# Deploy the dist folder
```

### Backend
Deploy to Heroku, Railway, or any Node.js hosting:
```bash
npm run build
npm start
```

## 📝 Article Schema (Sanity)

```javascript
{
  name: 'article',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' }
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
      fields: [
        { name: 'name', type: 'string' },
        { name: 'image', type: 'image' }
      ]
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category'
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
      title: 'Published At'
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured'
    }
  ]
}
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this project as a template

## 🙏 Acknowledgments

- Built with React, Express, and Sanity CMS
- UI inspired by modern web design patterns
- Animation powered by Framer Motion
