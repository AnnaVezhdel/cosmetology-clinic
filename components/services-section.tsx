"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Droplets,
  Syringe,
  Scan,
  Sun,
  Scissors,
  Flower2,
} from "lucide-react"

const services = [
  {
    icon: Syringe,
    title: "Dermal Fillers",
    description:
      "Restore volume, smooth wrinkles, and enhance facial contours with premium hyaluronic acid fillers.",
    image: "/images/botox-treatment.jpg",
  },
  {
    icon: Droplets,
    title: "Hydrafacial",
    description:
      "Deep cleansing, exfoliation, and hydration treatment for instantly radiant and refreshed skin.",
    image: "/images/facial-treatment.jpg",
  },
  {
    icon: Scan,
    title: "Laser Resurfacing",
    description:
      "Advanced fractional laser technology to improve skin texture, tone, and reduce signs of aging.",
    image: "/images/skin-care.jpg",
  },
  {
    icon: Sun,
    title: "Chemical Peels",
    description:
      "Medical-grade peels to reveal fresh, luminous skin and address pigmentation and fine lines.",
    image: "/images/hero.jpg",
  },
  {
    icon: Scissors,
    title: "Micro-Needling",
    description:
      "Stimulate collagen production and improve skin texture with our precision micro-needling treatments.",
    image: "/images/clinic-interior.jpg",
  },
  {
    icon: Flower2,
    title: "PRP Therapy",
    description:
      "Harness your body's natural healing power to rejuvenate skin and promote hair restoration.",
    image: "/images/about.jpg",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section id="services" className="bg-secondary/50 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Our Services
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            <span className="text-balance">
              Treatments tailored to your beauty
            </span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            From subtle refinements to transformative procedures, we offer a
            comprehensive range of aesthetic treatments performed by our expert
            team.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${0.1 * index}s` : "0s",
                opacity: isVisible ? undefined : 0,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/10 transition-colors group-hover:bg-foreground/5" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
