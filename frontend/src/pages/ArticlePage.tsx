import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useArticle } from '../hooks/useArticles'

export const ArticlePage = () => {
  const { slug } = useParams()
  const { article, loading, error } = useArticle(slug)

  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main className="px-4 py-10 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-accent"
          >
            ← Back to articles
          </Link>

          {loading && (
            <div className="py-20 text-center text-gray-400">Loading article...</div>
          )}

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-950/40 p-6 text-red-200">
              {error}
            </div>
          )}

          {!loading && !error && !article && (
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
              <h1 className="mb-3 text-2xl font-bold">Article not found</h1>
              <p className="mb-6 text-gray-400">This article may not exist yet or has been unpublished.</p>
              <Link to="/" className="rounded-lg bg-secondary px-5 py-3 font-semibold text-dark">
                Go home
              </Link>
            </div>
          )}

          {article && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-950/70 shadow-2xl"
            >
              {article.image?.asset?.url && (
                <img
                  src={article.image.asset.url}
                  alt={article.image.alt || article.title}
                  className="h-72 w-full object-cover md:h-[28rem]"
                />
              )}

              <div className="p-6 md:p-10">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                  {article.category && (
                    <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-dark">
                      {article.category}
                    </span>
                  )}
                  {article.publishedAt && (
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  )}
                  {article.author?.name && <span>By {article.author.name}</span>}
                </div>

                <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                  {article.title}
                </h1>

                {article.description && (
                  <p className="mb-8 text-lg leading-8 text-gray-300">{article.description}</p>
                )}

                {article.tags && article.tags.length > 0 && (
                  <div className="mb-8 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="prose prose-invert max-w-none whitespace-pre-line text-gray-200">
                  {article.content}
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
