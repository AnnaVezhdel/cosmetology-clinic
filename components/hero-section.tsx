"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  onBookAppointment: () => void
}

export function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Krásná zářivá pleť"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 lg:px-8">
        <div className="max-w-2xl">
          <p
            className="animate-fade-up text-sm font-medium uppercase tracking-[0.3em] text-primary"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Prémiová estetická klinika
          </p>
          <h1
            className="animate-fade-up mt-6 font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <span className="text-balance">Odhalte svou přirozenou krásu</span>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            Zažijte umění estetické dokonalosti. Náš tým odborníků kombinuje
            nejmodernější technologie s jemným, personalizovaným přístupem, 
            abyste se cítili sebevědomě ve své vlastní kůži.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <Button
              onClick={onBookAppointment}
              size="lg"
              className="group rounded-full bg-primary px-8 py-6 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
            >
              Objednat konzultaci
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full border-primary/30 px-8 py-6 text-base font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5"
            >
              <a href="#services">Prohlédnout služby</a>
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-up absolute bottom-12 left-6 right-6 lg:left-8 lg:right-8"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-border/50 bg-card/80 px-8 py-6 backdrop-blur-sm md:justify-between">
            {[
              { value: "15+", label: "Let zkušeností" },
              { value: "10 000+", label: "Spokojených klientů" },
              { value: "50+", label: "Procedur" },
              { value: "98%", label: "Spokojenost" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
