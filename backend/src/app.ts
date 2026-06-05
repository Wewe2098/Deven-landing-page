import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import articlesRouter from './routes/articles.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const ALLOWED_ORIGINS = (process.env.FRONTEND_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
})

app.disable('x-powered-by')
app.use(helmet({
  // Allow serving local static assets without strict CSP in production
  contentSecurityPolicy: IS_PRODUCTION ? false : undefined,
}))
app.use(cors({
  origin: (origin, callback) => {
    // In production with same-origin serving, allow requests without an Origin header
    if (!origin || ALLOWED_ORIGINS.includes(origin) || IS_PRODUCTION) {
      callback(null, true)
      return
    }
    callback(new Error('CORS origin not allowed'))
  },
  credentials: true,
}))
app.use(express.json({ limit: '100kb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiLimiter)

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Article Storage API is running' })
})

app.use('/api', articlesRouter)

// ── Afrihost / Production: serve compiled frontend from backend ──────────────
// The frontend dist folder is expected at: <project-root>/frontend/dist
// Adjust FRONTEND_DIST_PATH env var if your layout differs.
if (IS_PRODUCTION) {
  const distPath = process.env.FRONTEND_DIST_PATH
    ? path.resolve(process.env.FRONTEND_DIST_PATH)
    : path.resolve(__dirname, '../../frontend/dist')
  const hasFrontendDist = fs.existsSync(distPath)

  if (hasFrontendDist) {
    app.use(express.static(distPath))

    // SPA fallback – any route not matched by API returns index.html
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'))
    })
  } else {
    // API-only mode (no local frontend dist present)
    app.use((req, res) => {
      res.status(404).json({ error: 'Not found' })
    })
  }
} else {
  app.use((req, res) => {
    res.status(404).json({ error: 'Not found' })
  })
}

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

export default app
