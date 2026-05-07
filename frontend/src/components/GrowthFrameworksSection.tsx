import { motion } from 'framer-motion'
import { Rocket, Landmark, RefreshCw, type LucideIcon } from 'lucide-react'

const pillars = [
  {
    icon: Rocket,
    title: 'PILLAR 01: INTRAPRENEURSHIP',
    focus: 'Nurturing internal startups from initial concept through to market-leading scale.',
    outcome:
      'Architected data-led pricing suites and C2B marketplaces, delivering consistent YoY growth.',
  },
  {
    icon: Landmark,
    title: 'PILLAR 02: FINTECH ORCHESTRATION',
    focus: 'Integrating verified data and financial services to optimize the consumer journey.',
    outcome:
      'Managed complex integrations with Tier-1 Financial Institutions to drive affordability.',
  },
  {
    icon: RefreshCw,
    title: 'PILLAR 03: DIGITAL PIVOT',
    focus:
      'Orchestrating high-stakes shifts from legacy models to 100% digital-only environments.',
    outcome:
      'Led missions to retire legacy streams for high-margin, scalable digital products.',
  },
] as { icon: LucideIcon; title: string; focus: string; outcome: string }[]

export const GrowthFrameworksSection = () => {
  return (
    <section
      id="frameworks"
      className="bg-gradient-to-b from-[#0e0e0e] via-[#122742] to-[#0e0e0e] px-4 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="mb-4 max-w-5xl text-4xl font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Architecting Digital Marketplaces.
        </motion.h2>
        <motion.h2
          className="mb-4 max-w-5xl text-4xl font-bold text-[#507abd] md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Building Ecosystem Moats.
        </motion.h2>
        <p className="mb-14 max-w-4xl text-base text-gray-300 md:text-lg">
          Bridging the gap between Lean Startup agility and institutional scale.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="glow-rotate-border rounded-2xl border border-white/10 bg-gray-900/80 p-7 shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.35 }}
            >
              <pillar.icon className="mb-3 h-6 w-6 text-[#94a3b7]" strokeWidth={2.2} />
              <h3 className="mb-4 text-base font-bold tracking-wide text-white">{pillar.title}</h3>
              <p className="mb-3 text-sm font-semibold text-[#94a3b7]">FOCUS</p>
              <p className="mb-5 text-gray-300">{pillar.focus}</p>
              <p className="mb-2 text-sm font-semibold text-[#94a3b7]">OUTCOME</p>
              <p className="text-gray-300">{pillar.outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
