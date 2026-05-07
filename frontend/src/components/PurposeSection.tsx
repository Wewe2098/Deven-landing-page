import { motion } from 'framer-motion'

export const PurposeSection = () => {
  return (
    <section
      id="purpose"
      className="bg-gradient-to-t from-[#0e0e0e] via-[#233b5d] to-[#0e0e0e] px-4 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="section-kicker text-center">Purpose & Stewardship</p>
        <h2 className="mb-3 text-4xl font-bold text-white text-center">Leading with Legacy</h2>
        <p className="mb-4 text-gray-300 italic text-center">
          "Success is measured by the systems we build, but a legacy is defined by the lives we impact."
        </p>
        <br />
        <h5 className="font-bold text-white text-center">The Angel Govender Legacy Project</h5>
        <p className="mb-6 text-gray-300">
          In memory of <span className="font-semibold text-white">Angel Govender</span>, this initiative is built on the foundation of human dignity.
          Operating in <span className="font-semibold text-white">Johannesburg South</span>, the project provides a holistic support structure focused
          on nutritional and essential community outreach for at-risk children and vulnerable,
          socially isolated adults.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <motion.div
            className="glow-rotate-border rounded-xl border border-white/10 bg-gray-900/85 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
          >
            <h4 className="mb-2 font-bold text-secondary">NUTRITIONAL SECURITY</h4>
            <p className="text-gray-300">
              Direct intervention programs to ensure no child or elderly resident goes without basic sustenance.
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
            <h4 className="mb-2 font-bold text-secondary">COMMUNITY OUTREACH</h4>
            <p className="text-gray-300">
              Targeted support systems designed to reintegrate and protect the most vulnerable members of society.
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
            <h4 className="mb-2 font-bold text-secondary">DIGNITY-FIRST FRAMEWORK</h4>
            <p className="text-gray-300">
              Applying corporate rigor to ensure social impact is sustainable, transparent, and high-impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
