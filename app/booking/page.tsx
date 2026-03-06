"use client"

import { useState } from "react"
import { CalendarDays, CheckCircle } from "lucide-react"

const packages = [
  "Basic Grooming Package - Rs. 1,500",
  "Premium Glow Package - Rs. 2,300",
  "Haircut Only - Rs. 1,000",
]

interface FormData {
  ownerName: string
  phone: string
  petName: string
  servicePackage: string
  date: string
  time: string
  instructions: string
}

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  )
  const [form, setForm] = useState<FormData>({
    ownerName: "",
    phone: "",
    petName: "",
    servicePackage: "",
    date: "",
    time: "",
    instructions: "",
  })

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.ownerName.trim()) newErrors.ownerName = "Owner name is required"
    if (!form.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^\+?[\d\s-]{7,15}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number"
    if (!form.petName.trim()) newErrors.petName = "Pet name is required"
    if (!form.servicePackage)
      newErrors.servicePackage = "Please select a service"
    if (!form.date) newErrors.date = "Please select a date"
    if (!form.time) newErrors.time = "Please select a time"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[field]
        return copy
      })
    }
  }

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center py-16">
        <div className="mx-auto max-w-md rounded-2xl bg-card p-10 text-center shadow-lg">
          <CheckCircle size={48} className="mx-auto text-primary" />
          <h2 className="mt-4 text-2xl font-extrabold text-foreground">
            Appointment Booked!
          </h2>
          <p className="mt-2 text-muted-foreground">
            Thank you, {form.ownerName}! Your appointment for {form.petName} has
            been scheduled on {form.date} at {form.time}. We will contact you to
            confirm.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setForm({
                ownerName: "",
                phone: "",
                petName: "",
                servicePackage: "",
                date: "",
                time: "",
                instructions: "",
              })
            }}
            className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Book Another
          </button>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold text-foreground">
            Book an Appointment
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Schedule a grooming session for your furry friend
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card p-8 shadow-lg"
            noValidate
          >
            <div className="mb-6 flex items-center gap-2">
              <CalendarDays size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Appointment Details
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {/* Owner Name */}
              <div>
                <label
                  htmlFor="ownerName"
                  className="mb-1 block text-sm font-semibold text-foreground"
                >
                  Pet Owner Name
                </label>
                <input
                  id="ownerName"
                  type="text"
                  value={form.ownerName}
                  onChange={(e) => updateField("ownerName", e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your full name"
                />
                {errors.ownerName && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.ownerName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-semibold text-foreground"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="+977-9800000000"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Pet Name */}
              <div>
                <label
                  htmlFor="petName"
                  className="mb-1 block text-sm font-semibold text-foreground"
                >
                  Pet Name
                </label>
                <input
                  id="petName"
                  type="text"
                  value={form.petName}
                  onChange={(e) => updateField("petName", e.target.value)}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your pet's name"
                />
                {errors.petName && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.petName}
                  </p>
                )}
              </div>

              {/* Service Package */}
              <div>
                <label
                  htmlFor="servicePackage"
                  className="mb-1 block text-sm font-semibold text-foreground"
                >
                  Service Package
                </label>
                <select
                  id="servicePackage"
                  value={form.servicePackage}
                  onChange={(e) =>
                    updateField("servicePackage", e.target.value)
                  }
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="">Select a package</option>
                  {packages.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
                {errors.servicePackage && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.servicePackage}
                  </p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-1 block text-sm font-semibold text-foreground"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  {errors.date && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.date}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="mb-1 block text-sm font-semibold text-foreground"
                  >
                    Preferred Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    value={form.time}
                    onChange={(e) => updateField("time", e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  {errors.time && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div>
                <label
                  htmlFor="instructions"
                  className="mb-1 block text-sm font-semibold text-foreground"
                >
                  Special Instructions (optional)
                </label>
                <textarea
                  id="instructions"
                  value={form.instructions}
                  onChange={(e) => updateField("instructions", e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Any special needs or notes..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
