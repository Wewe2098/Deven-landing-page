import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import 'dotenv/config'
import articlesRouter from './routes/articles.js'

const app = express()
const PORT = process.env.PORT || 5000
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

// Middleware
app.disable('x-powered-by')
app.use(helmet())
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Article Storage API is running' })
})

// API routes
app.use('/api', articlesRouter)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Article Storage API running on http://localhost:${PORT}`)
  console.log(`🔌 CORS enabled for: ${ALLOWED_ORIGINS.join(', ')}`)
})

export default app
