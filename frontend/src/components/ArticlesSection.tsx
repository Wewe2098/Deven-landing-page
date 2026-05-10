import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArticleCard } from './ArticleCard'
import { useArticles } from '../hooks/useArticles'

export const ArticlesSection: React.FC = () => {
  const { articles, loading, error } = useArticles()
  const latestArticle = articles[0]
  const remainingArticles = articles.slice(1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="w-full">
      <motion.section
        id="articles"
        className="bg-primary px-4 py-20 sm:px-6 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12">
            <p className="section-kicker">Latest Article & Archive</p>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Strategic Insights | AI Intelligence</h2>
            <p className="mb-5 max-w-3xl text-gray-300">
              The newest article leads the section, with the rest of the archive flowing beneath it as you scroll.
            </p>
            <div className="h-1 w-20 bg-secondary"></div>
          </motion.div>

          {loading && (
            <div className="text-center py-12">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block"
              >
                <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full"></div>
              </motion.div>
              <p className="text-gray-400 mt-4">Loading articles...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-900 text-red-200 p-4 rounded-lg">
              Error loading articles: {error}
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found. Check back soon!</p>
            </div>
          )}

          {!loading && latestArticle && (
            <>
              <motion.article
                className="glow-rotate-border mb-12 overflow-hidden rounded-3xl border border-white/10 bg-gray-900/95 shadow-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr]">
                  {latestArticle.image?.asset?.url && (
                    <div className="relative min-h-[20rem] bg-gray-800 lg:min-h-full">
                      <img
                        src={latestArticle.image.asset.url}
                        alt={latestArticle.image.alt || latestArticle.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                      Latest Article
                    </p>
                    <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                      {latestArticle.title}
                    </h3>
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                      {latestArticle.category && (
                        <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-dark">
                          {latestArticle.category}
                        </span>
                      )}
                      {latestArticle.publishedAt && (
                        <span>{new Date(latestArticle.publishedAt).toLocaleDateString()}</span>
                      )}
                      {latestArticle.author?.name && <span>By {latestArticle.author.name}</span>}
                    </div>
                    <p className="mb-6 text-base leading-7 text-gray-300 md:text-lg">
                      {latestArticle.description || latestArticle.content}
                    </p>

                    {latestArticle.tags && latestArticle.tags.length > 0 && (
                      <div className="mb-8 flex flex-wrap gap-2">
                        {latestArticle.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      to={`/article/${latestArticle.slug}`}
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-dark transition hover:bg-accent"
                    >
                      Read Latest Article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>

              {remainingArticles.length > 0 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                        Previous Articles
                      </p>
                      <h3 className="text-2xl font-bold text-white md:text-3xl">
                        Scroll for more insights
                      </h3>
                    </div>
                  </div>

                  <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
                    {remainingArticles.map((article) => (
                      <ArticleCard key={article._id} article={article} />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </motion.section>
    </div>
  )
}
