"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Isabella Rossi",
    treatment: "Dermal Fillers",
    rating: 5,
    text: "The results exceeded my expectations. Dr. Marchetti truly listened to what I wanted and delivered the most natural-looking results. I feel like the best version of myself.",
    date: "2 weeks ago",
  },
  {
    name: "Charlotte Webb",
    treatment: "Hydrafacial",
    rating: 5,
    text: "From the moment I walked in, I felt completely at ease. The Hydrafacial left my skin absolutely glowing. My friends keep asking what my secret is!",
    date: "1 month ago",
  },
  {
    name: "Sophia Laurent",
    treatment: "Laser Resurfacing",
    rating: 5,
    text: "After years of dealing with uneven skin tone, the laser treatment gave me the clear, radiant complexion I always dreamed of. The team was incredibly supportive throughout.",
    date: "3 weeks ago",
  },
  {
    name: "Amara Okafor",
    treatment: "Chemical Peel",
    rating: 5,
    text: "I was nervous about my first chemical peel, but the team made me feel so comfortable. My skin has never looked better, and the aftercare support was wonderful.",
    date: "1 month ago",
  },
  {
    name: "Elena Vasquez",
    treatment: "Micro-Needling",
    rating: 5,
    text: "The micro-needling sessions have completely transformed my skin texture. The clinic is beautiful, the staff is warm, and the results speak for themselves.",
    date: "2 months ago",
  },
  {
    name: "Lily Chen",
    treatment: "PRP Therapy",
    rating: 5,
    text: "I tried PRP therapy for skin rejuvenation and I am amazed at the results. My skin looks years younger. Lumiere Aesthetics is truly in a league of its own.",
    date: "6 weeks ago",
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
            Client Reviews
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl">
            <span className="text-balance">
              Hear from our lovely clients
            </span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Real stories from real people. Discover why thousands of clients
            trust us with their beauty journey.
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
                {`"${review.text}"`}
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
