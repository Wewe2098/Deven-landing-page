import { motion } from 'framer-motion'

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="bg-[radial-gradient(circle_at_top_right,rgba(80,122,189,0.2),transparent_40%),linear-gradient(to_bottom,#0f1725,#0e0e0e)] px-4 py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">Strategic Architect Profile</p>
          <h2 className="mb-3 text-4xl font-bold text-white">Strategic Architect Profile</h2>
          <h3 className="mb-5 text-2xl font-semibold text-secondary">30 Years of Compounding Expertise</h3>
          <p className="mb-4 text-gray-300">
            I operate at the intersection of three decades of operational leadership and the
            cutting edge of academic rigor. My career has been defined by a single objective:
            Engineering Defensibility in a Volatile Digital Economy.
          </p>
          <p className="text-gray-300">
            With a foundation built through scaling technology startups and leading digital
            growth, I have evolved into a Strategic Architect.
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            className="glow-rotate-border rounded-xl border border-white/10 bg-gray-900/85 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <h4 className="mb-2 font-bold text-secondary">INSTITUTIONAL INTELLIGENCE</h4>
            <p className="text-gray-300">
              Decades of navigating high-stakes corporate environments and subsidiary structures
              within the Marketplace ecosystem.
            </p>
          </motion.div>
          <motion.div
            className="glow-rotate-border rounded-xl border border-white/10 bg-gray-900/85 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            whileHover={{ y: -4 }}
          >
            <h4 className="mb-2 font-bold text-secondary">ENTREPRENEURIAL DNA</h4>
            <p className="text-gray-300">
              A track record of launching and scaling two tech startups from inception to
              monetization, maintaining a "Day 1" mindset.
            </p>
          </motion.div>
          <motion.div
            className="glow-rotate-border rounded-xl border border-white/10 bg-gray-900/85 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            whileHover={{ y: -4 }}
          >
            <h4 className="mb-2 font-bold text-secondary">ACADEMIC FOUNDATION</h4>
            <p className="text-gray-300">
              A master-level focus on Capital Allocation, M&A Law, and AI Strategy to identify
              signals that drive outsized value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
