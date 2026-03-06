import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-16">
      <div className="mx-auto max-w-md px-4 text-center">
        <p className="text-8xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-2 text-muted-foreground">
          Oops! Looks like this page wandered off. Let us help you find your way
          back home.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
