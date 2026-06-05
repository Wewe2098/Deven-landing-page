import React from 'react'
import { motion } from 'framer-motion'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      id="contact"
      className="mt-0 border-t border-white/10 bg-dark px-4 py-14 text-white sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <h3 className="text-xl font-bold text-secondary mb-4">DEVEN GOVENDER</h3>
            <div className="mt-2 space-y-1 text-sm text-gray-400">
              <p>Strategic Growth Leader</p>
              <p>MBA (Wits)</p>
              <p>AI Strategy (MIT)</p>
              <p>M&amp;A (LSE)</p>
              <p>PDBA (Wits)</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            whileHover={{ y: -4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Strategic Pillars</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#frameworks" className="hover:text-secondary">Digital Transformation</a></li>
              <li><a href="/#frameworks" className="hover:text-secondary">AI Business Strategy</a></li>
              <li><a href="/#frameworks" className="hover:text-secondary">M&A & Partnerships</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            whileHover={{ y: -4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Intelligence Hub</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#articles" className="hover:text-secondary">Latest Insights</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            whileHover={{ y: -4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://www.linkedin.com/in/devengovender" target="_blank" rel="noreferrer" className="hover:text-secondary">LinkedIn</a></li>
              <li><a href="https://www.devengovender.co.za" target="_blank" rel="noreferrer" className="hover:text-secondary">www.devengovender.co.za</a></li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Deven Govender. All Rights Reserved.
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-gray-500">Strategic Advisory | Global Marketplace Evolution</span>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
