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
                alt="MUDr. Elena, vedoucí estetička v Lumiere Aesthetics"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card p-6 shadow-xl md:bottom-8 md:right-[-2rem]">
              <p className="font-serif text-3xl font-bold text-primary">15+</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Let profesionální péče
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
              O nás
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              <span className="text-balance">
                Kde se věda setkává s uměním krásy
              </span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              V Lumiere Aesthetics věříme, že skutečná krása vychází zevnitř.
              Naše klinika kombinuje pokročilé lékařské znalosti s hluboce
              osobním přístupem k estetické péči. Každé ošetření je přizpůsobeno
              tak, aby zvýraznilo vaše jedinečné rysy a obnovilo vaše přirozené
              sebevědomí.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Náš tým certifikovaných specialistů používá pouze ty nejkvalitnější
              produkty a nejmodernější techniky, aby dosáhl výsledků, které vypadají
              a působí přirozeně. Pečujeme o ženy i muže a vytváříme příjemné,
              bezpečné prostředí, kde se můžete uvolnit.
            </p>

            {/* Values */}
            <div className="mt-10 flex flex-col gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Odborná péče",
                  description:
                    "Certifikovaní specialisté s desítkami let zkušeností",
                },
                {
                  icon: Heart,
                  title: "Osobní přístup",
                  description:
                    "Individuální plány ošetření navržené pro vaše potřeby",
                },
                {
                  icon: Shield,
                  title: "Bezpečnost na prvním místě",
                  description:
                    "Schválené procedury v moderně vybaveném zařízení",
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
