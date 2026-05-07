# Article Storage Backend

Express.js backend for article storage CMS with Sanity integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with Sanity credentials:
```bash
cp .env.example .env
```

3. Update `.env` with your Sanity project details

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## API Endpoints

- `GET /health` - Health check
- `GET /api/articles` - Get all articles
- `GET /api/articles/featured` - Get featured articles
- `GET /api/articles/category/:category` - Get articles by category
- `GET /api/articles/:slug` - Get article by slug
