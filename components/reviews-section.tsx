"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Petra Nováková",
    treatment: "Dermální výplně",
    rating: 5,
    text: "Výsledky předčily moje očekávání. Paní doktorka opravdu naslouchala tomu, co chci, a dosáhla nejpřirozenějších výsledků. Cítím se jako lepší verze sebe sama.",
    date: "před 2 týdny",
  },
  {
    name: "Martin Svoboda",
    treatment: "Hydrafacial",
    rating: 5,
    text: "Od chvíle, kdy jsem vešel, jsem se cítil naprosto v pohodě. Hydrafacial zanechal moji pleť absolutně zářivou. Kolegové se ptají, co je moje tajemství!",
    date: "před měsícem",
  },
  {
    name: "Jana Dvořáková",
    treatment: "Laserové ošetření",
    rating: 5,
    text: "Po letech řešení nerovnoměrného tónu pleti mi laserové ošetření dalo čistou, zářivou pleť, o které jsem vždy snila. Tým byl neuvěřitelně podporující.",
    date: "před 3 týdny",
  },
  {
    name: "Tomáš Procházka",
    treatment: "Chemický peeling",
    rating: 5,
    text: "Měl jsem obavy z prvního chemického peelingu, ale tým mě naprosto uklidnil. Moje pleť nikdy nevypadala lépe a následná péče byla skvělá.",
    date: "před měsícem",
  },
  {
    name: "Lucie Černá",
    treatment: "Mikrojehličkování",
    rating: 5,
    text: "Mikrojehličkování kompletně změnilo texturu mé pleti. Klinika je krásná, personál přátelský a výsledky mluví samy za sebe.",
    date: "před 2 měsíci",
  },
  {
    name: "David Horák",
    treatment: "PRP terapie",
    rating: 5,
    text: "Vyzkoušel jsem PRP terapii pro omlazení pleti a jsem ohromený výsledky. Moje pleť vypadá o roky mladší. Lumiere Aesthetics je ve své vlastní lize.",
    date: "před 6 týdny",
  },
]

export function ReviewsSection() {
  const { ref, isVisible } = useScrollAnimation(0.05)

  return (
    <section id="reviews" className="bg-secondary/50 py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Recenze klientů
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            <span className="text-balance">
              Co říkají naši klienti
            </span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Skutečné příběhy od skutečných lidí. Zjistěte, proč nám tisíce
            klientů svěřují svou cestu za krásou.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${0.1 * index}s` : "0s",
                opacity: isVisible ? undefined : 0,
              }}
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {`„${review.text}"`}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-primary">{review.treatment}</p>
                </div>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
