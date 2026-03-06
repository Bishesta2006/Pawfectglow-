"use client"

import { useState } from "react"
import { Star, CheckCircle, MessageSquare } from "lucide-react"

const existingReviews = [
  {
    name: "Priya Adhikari",
    rating: 5,
    comment:
      "PawfectGlow did an amazing job with my Golden Retriever! He came out looking like a brand new dog. The staff was so gentle and caring. Highly recommend!",
  },
  {
    name: "Sujan Gurung",
    rating: 5,
    comment:
      "My cat is usually very nervous around strangers, but the groomers at PawfectGlow were incredibly patient. The Premium Glow package is worth every rupee!",
  },
  {
    name: "Manisha Poudel",
    rating: 4,
    comment:
      "Great grooming services at an affordable price. My Poodle looked absolutely stunning after the haircut. Will definitely be coming back for regular visits.",
  },
]

function StarRating({
  rating,
  interactive,
  onRate,
}: {
  rating: number
  interactive?: boolean
  onRate?: (r: number) => void
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          onClick={() => interactive && onRate?.(star)}
          className={`${interactive ? "cursor-pointer" : "cursor-default"}`}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
        >
          <Star
            size={20}
            className={
              star <= rating
                ? "fill-primary text-primary"
                : "fill-none text-border"
            }
          />
        </button>
      ))}
    </div>
  )
}

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = "Name is required"
    if (rating === 0) newErrors.rating = "Please select a rating"
    if (!comment.trim()) newErrors.comment = "Comment is required"
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold text-foreground">
            Customer Feedback
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            See what our happy customers have to say
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {existingReviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl bg-card p-6 shadow-lg"
              >
                <StarRating rating={review.rating} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {`"${review.comment}"`}
                </p>
                <p className="mt-4 text-sm font-bold text-foreground">
                  - {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-lg px-4">
          {submitted ? (
            <div className="rounded-2xl bg-card p-10 text-center shadow-lg">
              <CheckCircle size={48} className="mx-auto text-primary" />
              <h2 className="mt-4 text-2xl font-extrabold text-foreground">
                Thank You!
              </h2>
              <p className="mt-2 text-muted-foreground">
                Your feedback has been submitted successfully. We appreciate
                your kind words!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setName("")
                  setRating(0)
                  setComment("")
                }}
                className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card p-8 shadow-lg"
              noValidate
            >
              <div className="mb-6 flex items-center gap-2">
                <MessageSquare size={24} className="text-primary" />
                <h2 className="text-xl font-bold text-foreground">
                  Leave Your Feedback
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-semibold text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (errors.name) {
                        setErrors((p) => {
                          const c = { ...p }
                          delete c.name
                          return c
                        })
                      }
                    }}
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-foreground">
                    Rating
                  </label>
                  <StarRating
                    rating={rating}
                    interactive
                    onRate={(r) => {
                      setRating(r)
                      if (errors.rating) {
                        setErrors((p) => {
                          const c = { ...p }
                          delete c.rating
                          return c
                        })
                      }
                    }}
                  />
                  {errors.rating && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.rating}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="mb-1 block text-sm font-semibold text-foreground"
                  >
                    Your Comment
                  </label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value)
                      if (errors.comment) {
                        setErrors((p) => {
                          const c = { ...p }
                          delete c.comment
                          return c
                        })
                      }
                    }}
                    rows={4}
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Tell us about your experience..."
                  />
                  {errors.comment && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.comment}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
