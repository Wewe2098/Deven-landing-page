import { useState, useEffect } from 'react'
import axios from 'axios'
import type { Article } from '../types'
import { sanityClient } from '../config/sanity'

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim()
const isInvalidProdLocalhost = !import.meta.env.DEV && Boolean(configuredApiUrl?.includes('localhost'))
const API_URL = (isInvalidProdLocalhost
  ? '/api'
  : configuredApiUrl || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api')
).replace(/\/$/, '')

const articleProjection = `{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  description,
  content,
  author,
  image{
    alt,
    asset->{
      url
    }
  },
  category,
  tags,
  publishedAt,
  featured
}`

const fetchAllArticlesFromSanity = async () =>
  sanityClient.fetch<Article[]>(`*[_type == "article"] | order(publishedAt desc) ${articleProjection}`)

const fetchFeaturedArticlesFromSanity = async () =>
  sanityClient.fetch<Article[]>(`*[_type == "article" && featured == true] | order(publishedAt desc) ${articleProjection}`)

const fetchArticleBySlugFromSanity = async (slug: string) =>
  sanityClient.fetch<Article | null>(
    `*[_type == "article" && slug.current == $slug][0] ${articleProjection}`,
    { slug },
  )

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_URL}/articles`)
        setArticles(response.data.articles || response.data)
        setError(null)
      } catch (err) {
        try {
          const sanityArticles = await fetchAllArticlesFromSanity()
          setArticles(sanityArticles || [])
          setError(null)
        } catch (sanityError) {
          setError(sanityError instanceof Error ? sanityError.message : 'Failed to fetch articles')
          setArticles([])
        }
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return { articles, loading, error }
}

export const useFeaturedArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_URL}/articles/featured`)
        setArticles(response.data.articles || response.data)
        setError(null)
      } catch (err) {
        try {
          const sanityArticles = await fetchFeaturedArticlesFromSanity()
          setArticles(sanityArticles || [])
          setError(null)
        } catch (sanityError) {
          setError(sanityError instanceof Error ? sanityError.message : 'Failed to fetch featured articles')
          setArticles([])
        }
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return { articles, loading, error }
}

export const useArticle = (slug?: string) => {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(Boolean(slug))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) {
      return
    }

    const fetchArticle = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_URL}/articles/${slug}`)
        setArticle(response.data || null)
        setError(null)
      } catch (err) {
        try {
          const sanityArticle = await fetchArticleBySlugFromSanity(slug)
          setArticle(sanityArticle || null)
          setError(null)
        } catch (sanityError) {
          setError(sanityError instanceof Error ? sanityError.message : 'Failed to fetch article')
          setArticle(null)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  return { article, loading, error }
}
