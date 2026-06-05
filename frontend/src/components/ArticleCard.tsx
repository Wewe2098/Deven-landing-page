import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Article } from '../types'

interface ArticleCardProps {
  article: Article
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.div
      className="glow-rotate-border overflow-hidden rounded-2xl border border-white/10 bg-gray-900/95 shadow-lg transition-all hover:shadow-2xl"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {article.image && (
        <div className="relative h-36 overflow-hidden bg-gray-800">
          <motion.img
            src={article.image.asset.url}
            alt={article.image.alt || article.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      <div className="p-4">
        {article.category && (
          <span className="mb-2 inline-block rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-dark">
            {article.category}
          </span>
        )}
        
        <h3 className="mb-2 line-clamp-2 text-base font-bold text-white">
          {article.title}
        </h3>
        
        <p className="mb-3 line-clamp-3 text-sm leading-5 text-gray-400">
          {article.description || article.content}
        </p>

        <div className="mb-4 flex items-center justify-between">
          {article.author && (
            <div className="flex items-center gap-2">
              {article.author.image && (
                <img 
                  src={article.author.image} 
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm text-gray-300">{article.author.name}</span>
            </div>
          )}
          {article.publishedAt && (
            <span className="text-sm text-gray-400">
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded bg-gray-800 px-2 py-1 text-xs text-gray-300">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <motion.div
          className="inline-block text-sm font-semibold uppercase tracking-wider text-secondary hover:text-accent"
          whileHover={{ x: 4 }}
        >
          <Link to={`/article/${article.slug}`}>Read More →</Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
