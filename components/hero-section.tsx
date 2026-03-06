"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Beautiful radiant skin"
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
            Premium Cosmetic Clinic
          </p>
          <h1
            className="max-w-xl animate-fade-up mt-6 font-serif text-5xl font-bold leading-tight text-foreground lg:text-7xl"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <span className="text-balance">Reveal your natural radiance</span>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            Experience the art of aesthetic excellence. Our expert team combines
            cutting-edge technology with a gentle, personalized approach to help
            you feel confident in your own skin.
          </p>
          <div
            className="animate-fade-up mt-6 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <Button
              onClick={onBookAppointment}
              size="lg"
              className="group rounded-full bg-primary px-8 py-6 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full border-primary/30 px-8 py-6 text-base font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/5"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-up mt-6 md:mt-10 w-full"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-border/50 bg-card/80 px-8 py-6 backdrop-blur-sm md:justify-between">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10K+", label: "Happy Clients" },
              { value: "50+", label: "Treatments" },
              { value: "98%", label: "Satisfaction Rate" },
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
  );
}
