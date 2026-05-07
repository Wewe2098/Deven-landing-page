import { motion } from 'framer-motion'

const logo1 = new URL('../assets/company-logo/logo-1.png', import.meta.url).href
const logo2 = new URL('../assets/company-logo/logo-2.png', import.meta.url).href
const logo3 = new URL('../assets/company-logo/logo-3.png', import.meta.url).href
const logo4 = new URL('../assets/company-logo/logo-4.png', import.meta.url).href
const logo5 = new URL('../assets/company-logo/logo-5.png', import.meta.url).href
const logo6 = new URL('../assets/company-logo/logo-6.png', import.meta.url).href
const logo7 = new URL('../assets/company-logo/logo-7.png', import.meta.url).href
const logo8 = new URL('../assets/company-logo/logo-8.png', import.meta.url).href
const logo9 = new URL('../assets/company-logo/logo-9.png', import.meta.url).href
const logo10 = new URL('../assets/company-logo/logo-10.png', import.meta.url).href
const logoAt = new URL('../assets/company-logo/logo-at.png', import.meta.url).href

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logoAt]

export const ExperienceTicker = () => {
  return (
    <section id="companies" className="relative z-20 -mt-10 overflow-hidden border-y border-gray-200 bg-white py-8 md:-mt-16">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 sm:px-6 md:gap-10">
        <div className="shrink-0">
          <p className="whitespace-nowrap text-sm font-medium uppercase tracking-widest text-[#475569]/70">
            Experience across
          </p>
          <p className="text-lg font-bold text-[#475569]">7+ leading companies</p>
        </div>

        <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            initial={{ translateX: '-50%' }}
            animate={{ translateX: '0%' }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="-translate-x-1/2 py-2 flex flex-none gap-4 md:gap-6"
          >
            {[...logos, ...logos].map((logo, idx) => (
              <motion.div
                key={`logo-${idx}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
                className="shrink-0 rounded-full border border-gray-300 bg-gray-50 px-3 py-2"
              >
                <img
                  src={logo}
                  alt={`Company logo ${idx % logos.length + 1}`}
                  className="h-8 w-auto rounded-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </section>
  )
}
