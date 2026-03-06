"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Beaumont Avenue", "Beverly Hills, CA 90210"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (310) 555-0199", "+1 (310) 555-0200"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@lumiere-aesthetics.com", "appointments@lumiere-aesthetics.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM"],
  },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info side */}
          <div
            className={`${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Get in Touch
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              <span className="text-balance">
                {"We'd love to hear from you"}
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Ready to begin your beauty journey? Reach out to us through any of
              the channels below, or simply book an appointment online.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-3 font-semibold text-foreground">
                    {info.title}
                  </h3>
                  {info.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-1 text-sm text-muted-foreground"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl lg:aspect-[4/5]">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Lumiere Aesthetics clinic interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
