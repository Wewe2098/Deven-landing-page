import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Handshake,
  LineChart,
  CircleDollarSign,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react'

const advisory = [
  {
    icon: BrainCircuit,
    title: 'AI STRATEGY',
    text: 'Deploying GenAI, transforming experimental pilots into scalable systems that optimize marketplace velocity and performance.',
  },
  {
    icon: Handshake,
    title: 'PARTNERSHIPS',
    text: 'Advising on JV structures and alliances using LSE law and economics frameworks for resilient growth.',
  },
  {
    icon: LineChart,
    title: 'VENTURE EVALUATION',
    text: 'Evaluating MarTech and Fintech platforms with a disciplined lens on scalability and unit economics.',
  },
  {
    icon: CircleDollarSign,
    title: 'CAPITAL ALLOCATION',
    text: 'MBA-level financial modeling to assess risks and ROI, defining investment theses for new ventures.',
  },
  {
    icon: ShoppingBag,
    title: 'MARKETPLACE SCALE',
    text: 'Developing roadmaps for the "Future of Commerce" through AI-led personalization and data layers.',
  },
] as { icon: LucideIcon; title: string; text: string }[]

export const GlobalAdvisorySection = () => {
  return (
    <section
      id="advisory"
      className="border-y border-slate-200 bg-white px-4 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Global Advisory, Capital Allocation & AI Strategy
        </motion.p>
        <motion.h2
          className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Navigating Market Evolution & <span className="text-[#507abd]">AI Strategy</span>
        </motion.h2>
        <motion.p
          className="mb-12 max-w-5xl text-base text-slate-600 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Applying advanced frameworks from Wits Business School, the London School of Economics
          (LSE), and MIT Sloan to bridge traditional <br />
          business logic with <span className="text-[#507abd]">AI-driven commerce</span>.
          <br></br>
          Ensuring strategic growth is both value-accretive and technologically defensible through
          executive-level advisory.
        </motion.p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 lg:items-stretch">
          {advisory.map((item, index) => (
            <motion.div
              key={item.title}
              className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <item.icon className="mb-3 h-6 w-6 text-[#507abd]" strokeWidth={2.2} />
              <h3 className="mb-2 font-bold text-slate-800">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
