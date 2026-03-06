import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-muted py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.18),transparent_38%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-primary">
            PawfectGlow Grooming Studio
          </span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Where
            <span className="block text-primary">Pawfect Meets Purrfect</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
            Gentle care, expert styling, and a stress-free grooming experience
            designed for happy paws and confident pet parents.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Link
              href="/booking"
              className="inline-flex rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-xl border border-border bg-card px-8 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-muted"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <Image
              src="/images/hero-dog.jpg"
              alt="A beautifully groomed golden retriever at PawfectGlow studio"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-lg backdrop-blur-sm">
            <p className="text-center text-sm font-semibold text-muted-foreground">
              Trusted local grooming with premium care for every coat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
