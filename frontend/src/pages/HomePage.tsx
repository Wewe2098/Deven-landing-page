import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ExperienceTicker } from '../components/ExperienceTicker'
import { StrategicSections } from '../components/StrategicSections'
import { ArticlesSection } from '../components/ArticlesSection'
import { FinalCtaSection } from '../components/FinalCtaSection'
import { Footer } from '../components/Footer'
import { Seo } from '../components/Seo'

export const HomePage = () => {
  const siteUrl = 'https://www.devengovender.co.za'

  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="Deven Govender | Strategic Advisor & AI Strategy Expert | South Africa"
        description="Senior executive & strategic advisor with 30+ years scaling digital marketplaces, leading AI strategy, and driving M&A integrations. MBA (Wits), MIT Sloan AI Strategy, LSE M&A."
        keywords="strategic advisor South Africa, AI strategy consultant, digital marketplace expert, Deven Govender, M&A advisory, fintech strategy, OLX Prosus AutoTrader"
        ogImage="https://www.devengovender.co.za/og-image.jpg"
        twitterImage="https://www.devengovender.co.za/og-image.jpg"
        ogImageWidth="1200"
        ogImageHeight="630"
        ogLocale="en_ZA"
        url={`${siteUrl}/`}
        type="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Deven Govender',
          url: siteUrl,
          description:
            'Senior executive & strategic advisor with 30+ years scaling digital marketplaces, leading AI strategy, and driving M&A integrations. MBA (Wits), MIT Sloan AI Strategy, LSE M&A.',
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
