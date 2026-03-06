import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
          Ready to Treat Your Pet?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-lg text-primary-foreground/80">
          Give your furry friend the royal grooming experience they deserve.
          Book your appointment today!
        </p>
        <Link
          href="/booking"
          className="mt-8 inline-flex rounded-xl bg-card px-10 py-4 text-sm font-bold text-primary shadow-lg transition-transform hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </section>
  )
}
