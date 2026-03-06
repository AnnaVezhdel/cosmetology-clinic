import { Heart } from "lucide-react"

const footerLinks = [
  {
    title: "Services",
    links: [
      "Dermal Fillers",
      "Hydrafacial",
      "Laser Resurfacing",
      "Chemical Peels",
      "Micro-Needling",
      "PRP Therapy",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    links: ["FAQ", "Privacy Policy", "Terms of Service", "Accessibility"],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-foreground">
                Lumiere
              </span>
              <span className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
                Aesthetics
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Where science meets the art of beauty. Premium cosmetic treatments
              in a luxurious, calming environment.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            2026 Lumiere Aesthetics. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> for
            beautiful skin
          </p>
        </div>
      </div>
    </footer>
  )
}
