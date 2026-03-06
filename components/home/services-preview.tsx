import Link from "next/link"
import { Scissors, Sparkles, Bath } from "lucide-react"

const packages = [
  {
    icon: Scissors,
    title: "Basic Grooming",
    price: "Rs. 1,500",
    features: ["Toenail Cutting", "Haircut"],
  },
  {
    icon: Sparkles,
    title: "Premium Glow",
    price: "Rs. 2,300",
    features: ["Haircut", "Bathing", "Manicure", "Pedicure"],
    popular: true,
  },
  {
    icon: Bath,
    title: "Haircut Only",
    price: "Rs. 1,000",
    features: ["Professional Haircut", "Style & Finish"],
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-foreground">
            Our Services
          </h2>
          <p className="mt-2 text-muted-foreground">
            Choose the perfect grooming package for your furry friend
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            return (
              <div
                key={pkg.title}
                className={`relative flex flex-col rounded-2xl bg-card p-6 shadow-lg transition-transform hover:-translate-y-1 ${pkg.popular ? "ring-2 ring-primary" : ""}`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {pkg.title}
                </h3>
                <p className="mt-1 text-2xl font-extrabold text-primary">
                  {pkg.price}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/booking"
                  className="mt-6 block rounded-xl bg-primary py-2.5 text-center text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
