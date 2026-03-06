import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
const MAP_EMBED_SRC = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2848412232474!2d83.46369401038193!3d27.677589926705206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868026134fab%3A0xe8621ad296809ae2!2sKshitiz%20International%20College!5e0!3m2!1sen!2snp!4v1772623887639!5m2!1sen!2snp`;
const MAP_OPEN_LINK = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2848412232474!2d83.46369401038193!3d27.677589926705206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868026134fab%3A0xe8621ad296809ae2!2sKshitiz%20International%20College!5e0!3m2!1sen!2snp!4v1772623887639!5m2!1sen!2snp`;

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">PawfectGlow Grooming</h3>
            <p className="mt-1 text-sm italic text-card/70">
              Where Pawfect Meets Purrfect
            </p>
            <p className="mt-4 text-sm leading-relaxed text-card/80">
              Professional grooming services designed to keep your furry friends
              clean, happy, and stylish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services & Pricing" },
                { href: "/gallery", label: "Gallery" },
                { href: "/booking", label: "Book Appointment" },
                { href: "/groomers", label: "Meet the Groomers" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-card/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-card/80">
                <Phone size={16} className="text-primary" />
                +977-9762890485
              </li>
              <li className="flex items-center gap-2 text-sm text-card/80">
                <Mail size={16} className="text-primary" />
                pawfectglow@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-card/80">
                <MapPin size={16} className="text-primary" />
                Butwal, Nepal
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-4 flex gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1BGnzV2oik/",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/glowpawfect",
                },
                {
                  label: "TikTok",
                  href: "",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-card/10 px-3 py-1.5 text-xs font-semibold text-card/80 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card/70">
                Find Us
              </p>
              <div className="overflow-hidden rounded-xl border border-card/20">
                <iframe
                  title="PawfectGlow location map"
                  src={MAP_EMBED_SRC}
                  className="h-28 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                href={MAP_OPEN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-xs font-semibold text-primary hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-card/20 pt-6 text-center text-sm text-card/60">
          &copy; {new Date().getFullYear()} PawfectGlow Grooming. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
