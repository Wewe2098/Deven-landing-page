import sanityClient from '../config/sanity.js'
import type { Article } from '../types/index.js'

export const getAllArticles = async (): Promise<Article[]> => {
  try {
    const query = `*[_type == "article"] | order(publishedAt desc) {
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
    const articles = await sanityClient.fetch(query)
    return articles || []
  } catch (error) {
    console.error('Error fetching articles from Sanity:', error)
    throw error
  }
}

export const getFeaturedArticles = async (): Promise<Article[]> => {
  try {
    const query = `*[_type == "article" && featured == true] | order(publishedAt desc) {
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
    const articles = await sanityClient.fetch(query)
    return articles || []
  } catch (error) {
    console.error('Error fetching featured articles from Sanity:', error)
    throw error
  }
}

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  try {
    const query = `*[_type == "article" && slug.current == $slug][0] {
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
    const article = await sanityClient.fetch(query, { slug })
    return article || null
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error)
    throw error
  }
}

export const getArticlesByCategory = async (category: string): Promise<Article[]> => {
  try {
    const query = `*[_type == "article" && category == $category] | order(publishedAt desc) {
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
    const articles = await sanityClient.fetch(query, { category })
    return articles || []
  } catch (error) {
    console.error(`Error fetching articles for category ${category}:`, error)
    throw error
  }
}
