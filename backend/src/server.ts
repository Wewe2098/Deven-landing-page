import 'dotenv/config'
import app from './app.js'

const PORT = process.env.PORT || 5000
const ALLOWED_ORIGINS = (process.env.FRONTEND_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Article Storage API running on http://localhost:${PORT}`)
  console.log(`🔌 CORS enabled for: ${ALLOWED_ORIGINS.join(', ')}`)
})

export default app
