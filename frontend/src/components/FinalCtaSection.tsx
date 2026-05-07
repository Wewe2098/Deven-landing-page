import { motion } from 'framer-motion'

export const FinalCtaSection = () => {
  return (
    <section id="connect" className="border-y border-slate-200 bg-white px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          className="mb-4 text-4xl font-bold text-[#507abd] md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Navigating the Next Wave of Digital Evolution.
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-3xl text-lg font-light text-slate-600"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Available for high-level strategic advisory, board-level consultation, and global growth
          partnerships.
        </motion.p>

        <motion.a
          href="http://linkedin.com/in/devengovender"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg border-2 border-[#507abd] bg-[#507abd] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-transparent hover:text-[#507abd]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16 }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Connect
        </motion.a>
      </div>
    </section>
  )
}
