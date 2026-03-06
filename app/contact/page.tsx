"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold text-foreground">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {"We'd love to hear from you!"}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
          {/* Contact Info + Map */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Get In Touch
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">
                      +977-9762890485
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">
                      pawfectglow@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">
                      Butwal, Nepal
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="PawfectGlow Grooming Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2848412232474!2d83.46369401038193!3d27.677589926705206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868026134fab%3A0xe8621ad296809ae2!2sKshitiz%20International%20College!5e0!3m2!1sen!2snp!4v1772623887639!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl bg-card p-10 shadow-lg">
                <div className="text-center">
                  <CheckCircle size={48} className="mx-auto text-primary" />
                  <h2 className="mt-4 text-2xl font-extrabold text-foreground">
                    Message Sent!
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                    className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-card p-8 shadow-lg"
                noValidate
              >
                <div className="mb-6 flex items-center gap-2">
                  <Send size={24} className="text-primary" />
                  <h2 className="text-xl font-bold text-foreground">
                    Send Us a Message
                  </h2>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="mb-1 block text-sm font-semibold text-foreground"
                    >
                      Your Name
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors((p) => {
                            const c = { ...p };
                            delete c.name;
                            return c;
                          });
                        }
                      }}
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contactEmail"
                      className="mb-1 block text-sm font-semibold text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors((p) => {
                            const c = { ...p };
                            delete c.email;
                            return c;
                          });
                        }
                      }}
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contactMessage"
                      className="mb-1 block text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors((p) => {
                            const c = { ...p };
                            delete c.message;
                            return c;
                          });
                        }
                      }}
                      rows={5}
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
