"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Sparkles, Heart, Shield } from "lucide-react"

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section id="about" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/about.jpg"
                alt="Dr. Elena, lead aesthetician at Lumiere Aesthetics"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card p-6 shadow-xl md:bottom-8 md:right-[-2rem]">
              <p className="font-serif text-3xl font-bold text-primary">15+</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content side */}
          <div
            className={`${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              About Us
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              <span className="text-balance">
                Where science meets the art of beauty
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At Lumiere Aesthetics, we believe that true beauty comes from
              within. Founded by Dr. Elena Marchetti, our clinic combines
              advanced medical expertise with a deeply personal approach to
              aesthetic care. Every treatment is tailored to enhance your unique
              features and restore your natural confidence.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team of board-certified specialists uses only the finest
              products and cutting-edge techniques to deliver results that look
              and feel natural. We are committed to creating a warm, safe space
              where you can relax and let us take care of the rest.
            </p>

            {/* Values */}
            <div className="mt-10 flex flex-col gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Expert Care",
                  description:
                    "Board-certified specialists with decades of combined experience",
                },
                {
                  icon: Heart,
                  title: "Personal Approach",
                  description:
                    "Customized treatment plans designed for your unique needs",
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  description:
                    "FDA-approved treatments in a state-of-the-art facility",
                },
              ].map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
