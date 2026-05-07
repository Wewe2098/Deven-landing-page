import { Router } from 'express'
import {
  getAllArticles,
  getFeaturedArticles,
  getArticleBySlug,
  getArticlesByCategory,
} from '../services/articleService.js'
import type { Article, ArticleResponse } from '../types/index.js'

const router = Router()
const SAFE_PARAM_REGEX = /^[a-zA-Z0-9-]+$/

const isSafeParam = (value: string): boolean => {
  if (!value) return false
  if (value.length > 100) return false
  return SAFE_PARAM_REGEX.test(value)
}

// Get all articles
router.get('/articles', async (req, res) => {
  try {
    const articles: Article[] = await getAllArticles()
    const response: ArticleResponse = {
      articles,
      total: articles.length,
    }
    res.json(response)
  } catch (error) {
    console.error('Error fetching articles:', error)
    res.status(500).json({ error: 'Failed to fetch articles' })
  }
})

// Get featured articles
router.get('/articles/featured', async (req, res) => {
  try {
    const articles: Article[] = await getFeaturedArticles()
    const response: ArticleResponse = {
      articles,
      total: articles.length,
    }
    res.json(response)
  } catch (error) {
    console.error('Error fetching featured articles:', error)
    res.status(500).json({ error: 'Failed to fetch featured articles' })
  }
})

// Get articles by category
router.get('/articles/category/:category', async (req, res) => {
  try {
    const { category } = req.params
    if (!isSafeParam(category)) {
      res.status(400).json({ error: 'Invalid category format' })
      return
    }
    const articles: Article[] = await getArticlesByCategory(category)
    const response: ArticleResponse = {
      articles,
      total: articles.length,
    }
    res.json(response)
  } catch (error) {
    console.error('Error fetching articles by category:', error)
    res.status(500).json({ error: 'Failed to fetch articles by category' })
  }
})

// Get article by slug
router.get('/articles/:slug', async (req, res) => {
  try {
    const { slug } = req.params
    if (!isSafeParam(slug)) {
      res.status(400).json({ error: 'Invalid slug format' })
      return
    }
    const article: Article | null = await getArticleBySlug(slug)
    if (!article) {
      res.status(404).json({ error: 'Article not found' })
      return
    }
    res.json(article)
  } catch (error) {
    console.error('Error fetching article by slug:', error)
    res.status(500).json({ error: 'Failed to fetch article' })
  }
})

export default router
