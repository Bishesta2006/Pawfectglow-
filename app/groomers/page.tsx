import type { Metadata } from "next"
import Image from "next/image"
import { Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Meet the Groomers",
  description:
    "Meet the expert groomers at PawfectGlow Grooming — skilled professionals who love what they do.",
}

const groomers = [
  {
    name: "Anisha Sharma",
    title: "Senior Groomer",
    image: "/images/groomer-1.jpg",
    icon: Award,
    experience: "8+ years experience",
    bio: "Anisha is a certified pet styling expert with a gentle touch. She specializes in breed-specific grooming and creative styling that makes every pet look their absolute best.",
  },
  {
    name: "Rajan Thapa",
    title: "Groomer",
    image: "/images/groomer-2.jpg",
    icon: Heart,
    experience: "5+ years experience",
    bio: "Rajan is our pet hygiene specialist with a calm demeanor that puts even the most anxious pets at ease. He excels in bathing, nail care, and maintaining pet wellness.",
  },
]

export default function GroomersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold text-foreground">
            Meet the Groomers
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Our skilled team is passionate about keeping your pets happy
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 md:grid-cols-2">
          {groomers.map((groomer) => {
            const Icon = groomer.icon
            return (
              <div
                key={groomer.name}
                className="overflow-hidden rounded-2xl bg-card shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={groomer.image}
                    alt={`${groomer.name} - ${groomer.title} at PawfectGlow`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon size={18} className="text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {groomer.title}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    {groomer.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {groomer.experience}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {groomer.bio}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
