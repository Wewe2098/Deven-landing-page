import { motion } from 'framer-motion'

const credentials = [
  {
    title: 'MBA',
    org: 'Wits Business School | 2023 – 2025',
    focus:
      'Advanced management frameworks, Digital Marketplace Dynamics, and B2C, B2B scaling.',
    impact:
      'Leveraging NQF Level 9 rigor to solve high-stakes challenges in a global tech ecosystem.',
    electives: [
      'Business in Africa',
      'Business Venture Start-Ups',
      'Management Consulting',
      'Leadership Quest',
    ],
  },
  {
    title: 'AI STRATEGY',
    org: 'MIT Sloan | 2025',
    focus: 'Operationalizing Machine Learning and Generative AI to drive enterprise value.',
    impact: 'Transitioning AI from pilots to scalable systems that maximize marketplace velocity.',
  },
  {
    title: 'M&A ECONOMICS',
    org: 'LSE | 2022',
    focus: 'Acquisition Integration, Corporate Valuation, and Legal Frameworks of Global JVs.',
  },
]

const additionalPrograms = [
  {
    title: 'Core Concepts in Digital Business',
    org: 'Wits Business School | 2019 – 2020',
    detail: 'Principles of the Digitalizing Economy.',
  },
  {
    title: 'Management Advancement Program',
    org: 'Wits Business School | 2010 – 2021',
    detail: '',
  },
  {
    title: 'Postgraduate Diploma in Business Administration',
    org: 'Wits Business School | 2020 – 2022',
    detail: 'Foundational business leadership and high-level organizational strategy (NQF Level 8).',
  },
]

export const CredentialsSection = () => {
  return (
    <section id="credentials" className="bg-slate-50 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Academic Foundations & Credentials</p>
        <h2 className="mb-4 text-4xl font-bold text-slate-900">Executive Development & Capital Intelligence</h2>
        <p className="mb-8 text-slate-600">
          Aligning MBA-level strategy with specialized credentials from MIT and LSE to drive
          value-accretive growth and technological transformation.
        </p>
        <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12 xl:grid-flow-dense">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              className={`flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${
                item.title === 'MBA'
                  ? 'md:col-span-2 xl:col-span-6'
                  : item.title === 'AI STRATEGY'
                    ? 'xl:col-span-3'
                    : 'xl:col-span-3'
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="mb-1 text-xl font-bold text-[#507abd]">{item.title}</h3>
              <p className="mb-3 text-sm text-slate-500">{item.org}</p>
              <p className="mb-3 text-sm font-semibold text-slate-900">STRATEGIC FOCUS</p>
              <p className="mb-4 text-slate-600">{item.focus}</p>
              {item.impact && (
                <>
                  <p className="mb-2 text-sm font-semibold text-slate-900">IMPACT</p>
                  <p className="text-slate-600">{item.impact}</p>
                </>
              )}

              {item.title === 'MBA' && 'electives' in item && (
                <>
                  <p className="mb-2 mt-5 text-sm font-semibold text-slate-900">Core Electives</p>
                  <ul className="list-disc space-y-1 pl-5 text-slate-600">
                    {item.electives.map((elective) => (
                      <li key={elective}>{elective}</li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          ))}

          {additionalPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              className={`flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm ${
                program.title === 'Postgraduate Diploma in Business Administration'
                  ? 'md:col-span-2 xl:col-span-6'
                  : 'xl:col-span-3'
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (credentials.length + index) * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <h3 className="mb-1 text-lg font-bold text-[#507abd]">{program.title}</h3>
              <p className="mb-3 text-sm text-slate-500">{program.org}</p>
              {program.detail && <p className="text-slate-600">{program.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
