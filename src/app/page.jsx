import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { ROICalculator } from '@/components/ROICalculator'
import { SoftOffer } from '@/components/SoftOffer'
import { Pricing } from '@/components/Pricing'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <ROICalculator />
        <Pricing />
        <SoftOffer />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
