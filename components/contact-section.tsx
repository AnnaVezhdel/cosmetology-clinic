"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

const contactInfo = [
  {
    icon: MapPin,
    title: "Navštivte nás",
    lines: ["Pařížská 15", "Praha 1, 110 00"],
  },
  {
    icon: Phone,
    title: "Zavolejte nám",
    lines: ["+420 222 333 444", "+420 222 333 445"],
  },
  {
    icon: Mail,
    title: "Napište nám",
    lines: ["info@lumiere-aesthetics.cz", "objednani@lumiere-aesthetics.cz"],
  },
  {
    icon: Clock,
    title: "Otevírací doba",
    lines: ["Po - Pá: 9:00 - 19:00", "So: 10:00 - 17:00"],
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
              Kontakt
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              <span className="text-balance">
                Rádi vás uvidíme
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Jste připraveni začít svou cestu za krásou? Kontaktujte nás
              prostřednictvím kteréhokoliv z níže uvedených kanálů, nebo si
              jednoduše rezervujte termín online.
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
                alt="Interiér kliniky Lumiere Aesthetics"
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
