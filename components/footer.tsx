import { Heart, Instagram } from "lucide-react";

const footerLinks = [
  {
    title: "Služby",
    links: [
      "Dermální výplně",
      "Hydrafacial",
      "Laserové ošetření",
      "Chemické peelingy",
      "Mikrojehličkování",
      "PRP terapie",
    ],
  },
  {
    title: "Společnost",
    links: ["O nás", "Náš tým", "Kariéra", "Blog", "Novinky"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex sm:flex-row flex-wrap gap-16 md:gap-24">
          {/* Brand */}
          <div className="max-w-75">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold text-foreground">
                Lumiere
              </span>
              <span className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
                Aesthetics
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Kde se věda setkává s uměním krásy. Prémiová kosmetická ošetření v
              luxusním a uklidňujícím prostředí.
            </p>
          </div>

          <a
            href="https://www.instagram.com/dermaclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex justify-center items-center gap-3 hover:shadow-lg transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-200 to-orange-950 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <p className="sm:text-lg font-medium text-foreground">
                Sledujte nás na Instagramu
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                @lumiere_aesthetics
              </p>
            </div>
          </a>

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
            2026 Lumiere Aesthetics. Všechna práva vyhrazena.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Vytvořeno s{" "}
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> pro
            krásnou pleť
          </p>
        </div>
      </div>
    </footer>
  );
}
