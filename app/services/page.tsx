import type { Metadata } from "next"
import Link from "next/link"
import { Scissors, Sparkles, Bath, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore our pet grooming packages — Basic Grooming, Premium Glow, and Haircut Only. Affordable prices in Butwal, Nepal.",
}

const packages = [
  {
    icon: Scissors,
    title: "Basic Grooming Package",
    price: "Rs. 1,500",
    features: ["Toenail Cutting", "Professional Haircut"],
    color: "bg-muted",
  },
  {
    icon: Sparkles,
    title: "Premium Glow Package",
    price: "Rs. 2,300",
    features: [
      "Professional Haircut",
      "Full Body Bathing",
      "Manicure",
      "Pedicure",
    ],
    color: "bg-primary/5",
    popular: true,
  },
  {
    icon: Bath,
    title: "Haircut Only",
    price: "Rs. 1,000",
    features: ["Professional Haircut", "Style & Finish"],
    color: "bg-muted",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold text-foreground">
            Services & Pricing
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Choose the perfect grooming package for your furry friend
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            return (
              <div
                key={pkg.title}
                className={`relative flex flex-col rounded-2xl bg-card p-8 shadow-lg transition-transform hover:-translate-y-1 ${pkg.popular ? "ring-2 ring-primary" : ""}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                  <Icon size={28} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  {pkg.title}
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-primary">
                  {pkg.price}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check size={16} className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className="mt-8 block rounded-xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
