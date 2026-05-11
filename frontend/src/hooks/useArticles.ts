import { useState, useEffect } from 'react'
import { sanityClient } from '../config/sanity'
import type { Article } from '../types'

const ARTICLE_FIELDS = `
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
`

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const data = await sanityClient.fetch<Article[]>(
          `*[_type == "article"] | order(publishedAt desc) {${ARTICLE_FIELDS}}`
        )
        setArticles(data || [])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles')
        setArticles([])
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
        const data = await sanityClient.fetch<Article[]>(
          `*[_type == "article" && featured == true] | order(publishedAt desc) {${ARTICLE_FIELDS}}`
        )
        setArticles(data || [])
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch featured articles')
        setArticles([])
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
        const data = await sanityClient.fetch<Article | null>(
          `*[_type == "article" && slug.current == $slug][0] {${ARTICLE_FIELDS}}`,
          { slug }
        )
        setArticle(data || null)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch article')
        setArticle(null)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  return { article, loading, error }
}
