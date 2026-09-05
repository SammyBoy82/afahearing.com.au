import HeroSection from '@/components/HeroSection'
import SectionOptions from '@/components/SectionOptions'
import AboutSection from '@/components/AboutSection'
import ServicesPreview from '@/components/ServicesPreview'
import HearingScreeningTest from '@/components/HearingScreeningTest'
import ContactSection from '@/components/ContactSection'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <SectionOptions />
      <HeroSection />
      <ServicesPreview />
      <HearingScreeningTest />
      <AboutSection />
      <ContactSection />
      <CallToAction />
    </>
  )
}
