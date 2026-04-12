"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingSectionProps {
  onBookAppointment: () => void
}

const pricingPlans = [
  {
    name: "Základní",
    subtitle: "Ideální start",
    price: "2 900",
    currency: "Kč",
    description: "Ideální pro nové klienty, kteří chtějí osvěžit svou pleť",
    features: [
      "Úvodní konzultace pleti",
      "Základní ošetření obličeje",
      "Personalizovaný plán péče",
      "Poradenství po ošetření",
    ],
    popular: false,
  },
  {
    name: "Signature",
    subtitle: "Nejoblíbenější",
    price: "6 900",
    currency: "Kč",
    description: "Náš nejoblíbenější balíček kombinující více omlazovacích procedur",
    features: [
      "Komplexní analýza pleti",
      "Hydrafacial ošetření",
      "LED světelná terapie",
      "Prémiová séra v ceně",
      "Následná konzultace",
      "10% sleva na další ošetření",
    ],
    popular: true,
  },
  {
    name: "Premium",
    subtitle: "Kompletní zážitek",
    price: "12 900",
    currency: "Kč",
    description: "Kompletní luxusní zážitek pro totální transformaci pleti",
    features: [
      "Pokročilá diagnostika pleti",
      "Dermální výplně",
      "Chemický peeling",
      "Mikrojehličková terapie",
      "Prémiový set péče domů",
      "Přednostní rezervace",
      "Bezplatné korekce",
    ],
    popular: false,
  },
]

export function PricingSection({ onBookAppointment }: PricingSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Ceník
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            <span className="text-balance">Investujte do svého sebevědomí</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Transparentní ceny bez skrytých poplatků. Každý balíček je navržen
            tak, aby přinesl výjimečné výsledky s prémiovou péčí.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-500 ${
                plan.popular
                  ? "border-primary bg-card shadow-xl shadow-primary/10"
                  : "border-border bg-card hover:shadow-lg"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${0.15 * index}s` : "0s",
                opacity: isVisible ? undefined : 0,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Nejoblíbenější
                </div>
              )}

              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  {plan.subtitle}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.currency}</span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onBookAppointment}
                className={`mt-8 w-full rounded-full py-6 text-sm font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Objednat tento balíček
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
