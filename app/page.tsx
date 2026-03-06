import { HeroSection } from "@/components/home/hero-section"
import { OpeningHours } from "@/components/home/opening-hours"
import { ServicesPreview } from "@/components/home/services-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OpeningHours />
      <ServicesPreview />
      <CTASection />
    </>
  )
}
