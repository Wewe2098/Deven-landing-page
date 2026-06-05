import React from 'react'
import { motion } from 'framer-motion'
import heroPortrait from '../assets/GM_MG_4.png'

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      id="hero"
      className="flex min-h-[68vh] items-center justify-center bg-[#0e0e0e] bg-mesh px-4 py-10 sm:px-6 md:py-12 lg:py-14"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-10 xl:gap-12">
        <div className="order-1 text-center lg:order-1 lg:text-left">
        <motion.h1 
          className="mb-4 text-4xl font-bold text-white md:text-6xl xl:text-7xl"
          variants={itemVariants}
        >
          Building Value.
        </motion.h1>
        <motion.p
          className="mb-4 text-4xl font-bold text-white md:text-6xl xl:text-7xl"
          variants={itemVariants}
        >
          Scaling Innovation.
        </motion.p>

        <motion.p
          className="mb-4 text-4xl font-bold text-[#507abd] md:text-6xl xl:text-7xl"
          variants={itemVariants}
        >
          Engineering Growth.
        </motion.p>
        
        <motion.p 
          className="mx-auto mb-8 max-w-2xl text-base text-gray-300 md:text-lg lg:mx-0"
          variants={itemVariants}
        >
          Senior executive and strategic advisor with over 30 years of experience turning
          technology concepts into profitable market leaders. From startup inception to navigating
          M&A integrations, I bridge the gap between high-level strategy and operational reality.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 lg:justify-start"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/devengovender"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <motion.button
              className="rounded-lg border-2 border-gray-500 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-gray-200 transition hover:border-[#507abd] hover:text-[#507abd]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.a>
        </motion.div>
        </div>

        <motion.div variants={itemVariants} className="order-2 flex justify-center lg:translate-x-4 lg:justify-end xl:translate-x-6">
          <img
            src={heroPortrait}
            alt="Deven Govender"
            className="mx-auto w-full max-w-sm object-right sm:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
