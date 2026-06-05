import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Growth Frameworks', href: '/#frameworks' },
  { label: 'Advisory', href: '/#advisory' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Credentials', href: '/#credentials' },
  { label: 'Purpose', href: '/#purpose' },
  { label: 'Articles', href: '/#articles' },
  { label: 'Get in Touch', href: 'https://www.linkedin.com/in/devengovender' },
]

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <div aria-hidden className="h-16" />
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 px-4 py-3 text-[#475569] shadow-md backdrop-blur-md md:px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <motion.div
            className="min-w-0 font-sans text-sm tracking-[0.08em] text-[#475569] sm:text-base md:text-lg"
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/">
              <span className="font-bold">DEVEN GOVENDER</span>
              <span className="hidden sm:inline"> | </span>
              <span className="hidden font-original sm:inline">Strategic Leader & Investor</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <ul className="font-sans hidden gap-4 text-[11px] font-medium uppercase tracking-wider text-[#475569] xl:flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.08 + index * 0.04 }}
              >
                <a href={link.href} className="transition hover:text-[#507abd]">{link.label}</a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-5 bg-[#475569] transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-[#475569] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-[#475569] transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="mt-3 grid grid-cols-1 gap-2 border-t border-gray-200 pt-4 sm:grid-cols-2 xl:hidden">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="rounded-md px-2 py-1.5 font-sans text-sm font-medium text-[#475569] transition-colors hover:bg-slate-100 hover:text-[#507abd]"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        )}
      </motion.header>
    </>
  )
}
