import React from 'react'
import { motion } from 'framer-motion'
import { ArticleCard } from './ArticleCard'
import { useArticles, useFeaturedArticles } from '../hooks/useArticles'

export const ArticlesSection: React.FC = () => {
  const { articles, loading, error } = useArticles()
  const { articles: featured } = useFeaturedArticles()

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
      {/* Featured Articles */}
      {featured.length > 0 && (
        <motion.section 
          id="featured"
          className="bg-dark px-4 py-20 sm:px-6 md:py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="mb-12">
              <p className="section-kicker">Strategic Insights</p>
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                The Intersection of AI, Capital & Marketplace Evolution
              </h2>
              <p className="mb-2 text-sm font-semibold uppercase text-secondary">Featured Article</p>
              <h3 className="mb-3 text-2xl font-bold text-white">
                The Mobility Moat: Engineering Trust in Digital Marketplaces
              </h3>
              <p className="mb-3 text-gray-300 italic">
                “In a zero-trust digital economy, the platform that successfully integrates
                verified data layers into the consumer journey doesn't just win on UX—it builds
                an impenetrable ecosystem moat.”
              </p>
              <p className="text-sm text-gray-400">
                Categories: #MarketplaceDynamics #Fintech #TrustArchitecture
              </p>
              <div className="h-1 w-20 bg-secondary"></div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featured.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* All Articles */}
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
            <p className="section-kicker">Other Articles | AI Insights</p>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Other Articles | AI Insights</h2>
            <p className="mb-5 max-w-3xl text-gray-300">
              Stay updated with shorter insights on AI transformation, capital shifts, and
              emerging marketplace signals.
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

          {!loading && articles.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  )
}
