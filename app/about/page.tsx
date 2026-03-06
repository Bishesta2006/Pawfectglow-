import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, Shield, Award, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PawfectGlow Grooming — our story, values, and commitment to keeping pets clean, happy, and stylish in Butwal, Nepal.",
}

const values = [
  {
    icon: Heart,
    title: "Caring",
    description:
      "We treat every pet with the love and gentleness they deserve, as if they were our own.",
  },
  {
    icon: Shield,
    title: "Trustworthy",
    description:
      "Your pet's safety is our top priority. We use only pet-safe, premium products.",
  },
  {
    icon: Award,
    title: "Professional",
    description:
      "Our groomers are trained professionals with years of experience in pet styling.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "We deliver top-quality grooming results that keep your pets looking their best.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold text-foreground">About Us</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            The story behind PawfectGlow Grooming
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row">
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/about-studio.jpg"
                alt="Inside the PawfectGlow grooming studio"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-foreground">
              Our Story
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              PawfectGlow Grooming was born from a simple love for animals and a
              desire to provide the best pet care in Butwal, Nepal. We noticed a
              gap in professional, hygienic, and caring grooming services for
              pets in our community.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Today, we are proud to be the go-to grooming studio for pet owners
              who want nothing but the best for their furry family members. Our
              team of skilled groomers treats every pet with patience, love, and
              expert care.
            </p>
            <Link
              href="/booking"
              className="mt-6 inline-flex rounded-xl bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground">
            Our Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => {
              const Icon = val.icon
              return (
                <div
                  key={val.title}
                  className="rounded-2xl bg-card p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {val.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
