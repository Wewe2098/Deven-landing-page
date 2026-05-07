export interface Article {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: string
  description?: string
  content: string
  author?: {
    name: string
    image?: string
  }
  image?: {
    alt?: string
    asset: {
      url: string
    }
  }
  category?: string
  tags?: string[]
  publishedAt?: string
  featured?: boolean
}

export interface ArticleResponse {
  articles: Article[]
  total: number
}
