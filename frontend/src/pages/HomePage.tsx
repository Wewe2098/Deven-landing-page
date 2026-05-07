import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ExperienceTicker } from '../components/ExperienceTicker'
import { StrategicSections } from '../components/StrategicSections'
import { ArticlesSection } from '../components/ArticlesSection'
import { FinalCtaSection } from '../components/FinalCtaSection'
import { Footer } from '../components/Footer'

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark">
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
