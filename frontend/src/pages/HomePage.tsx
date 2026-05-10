import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ExperienceTicker } from '../components/ExperienceTicker'
import { StrategicSections } from '../components/StrategicSections'
import { ArticlesSection } from '../components/ArticlesSection'
import { FinalCtaSection } from '../components/FinalCtaSection'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'

export const HomePage = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin

  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="Deven Govender | Strategic Advisor, AI & Marketplace Growth"
        description="Senior executive and strategic advisor helping organizations engineer growth through AI, technology strategy, and marketplace innovation."
        keywords="Deven Govender, strategic advisor, AI strategy, marketplace growth, digital transformation, executive leadership"
        url={`${siteUrl}/`}
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Deven Govender',
          url: siteUrl,
          description:
            'Senior executive and strategic advisor helping organizations engineer growth through AI, technology strategy, and marketplace innovation.',
          publisher: {
            '@type': 'Person',
            name: 'Deven Govender',
          },
        }}
      />
      <Header />
      <Hero />
      <ExperienceTicker />
      <StrategicSections />
      <ArticlesSection />
      <FinalCtaSection />
      <Footer />
    </div>
  )
}
