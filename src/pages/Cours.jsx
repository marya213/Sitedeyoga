import { Link } from "react-router-dom";
import { PRICING } from "../data/index";
import Pill from "../components/ui/Pill";

const DISCIPLINES = [
  {
    type: "yoga",
    title: "Présentiel",
    variants: "Pratique en salle",
    desc: "L'intensité et la connexion d'une pratique vécue ensemble.",
  },
  {
    type: "studio",
    title: "Studio Yoga",
    variants: "Pratique en ligne",
    desc: "La puissance du yoga, où que vous soyez.",
  },
  {
    type: "hybride",
    title: "Hybride",
    variants: "Présentiel & studio",
    desc: "Quand l'énergie du présentiel rencontre la liberté du distanciel.",
  },
];

export default function Cours() {
  return (
    <main className="pt-16">
      {/* ══ Header ════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "65vh", padding: "6rem clamp(1.25rem,5vw,3rem) 4rem" }}
      >
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/posture-meditation-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
            backgroundColor: "#2D1B4E",
          }}
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #2D1B4E80 0%, #2D1B4E55 50%, #2D1B4Ea8 100%)",
          }}
        />

        <div className="relative z-10" style={{ maxWidth: "44rem" }}>
          <h1
            className="font-serif font-light mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#F0EAD6",
              textShadow: "0 2px 20px rgba(0,0,0,.35)",
            }}
          >
            Nos cours
          </h1>
          <p
            className="leading-relaxed mb-8"
            style={{
              color: "rgba(240,234,214,.9)",
              maxWidth: "48ch",
              marginInline: "auto",
              textShadow: "0 1px 12px rgba(0,0,0,.4)",
            }}
          >
            Une pratique qui vous reconnecte à vous-même — chaque séance est
            unique, parce que vous êtes unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#tarifs"
              className="btn btn-primary"
              style={{ padding: ".75rem 1.75rem" }}
            >
              Voir les tarifs
            </a>
            <Link
              to="/contact"
              className="btn btn-outlined"
              style={{ padding: ".75rem 1.75rem" }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Disciplines + Tarifs sur fond photo ═══════════════ */}
      <div className="relative">
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/posture-meditation-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#2D1B4E",
          }}
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #2D1B4E75 0%, #2D1B4E55 100%)",
          }}
        />

        {/* ══ Disciplines ═════════════════════════════════════ */}
        <section className="relative" style={{ padding: "5rem 0" }}>
          <div className="section-inner">
            <div className="text-center mb-12">
              <h2
                className="font-serif font-light text-3xl"
                style={{ color: "#F0EAD6", textShadow: "0 1px 12px rgba(0,0,0,.4)" }}
              >
                Les disciplines
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DISCIPLINES.map((d) => (
                <div key={d.type} className="card text-center">
                  <div className="mb-4">
                    <Pill type={d.type} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-1">
                    {d.title}
                  </h3>
                  <p
                    className="text-xs font-medium mb-3"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {d.variants}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Tarifs ══════════════════════════════════════════ */}
        <section id="tarifs" className="relative" style={{ padding: "5rem 0" }}>
          <div className="section-inner">
            <div className="text-center mb-12">
              <h2
                className="font-serif font-light text-3xl"
                style={{ color: "#F0EAD6", textShadow: "0 1px 12px rgba(0,0,0,.4)" }}
              >
                Choisissez votre formule
              </h2>
              <p
                className="text-sm mt-3"
                style={{ color: "rgba(240,234,214,.85)", textShadow: "0 1px 8px rgba(0,0,0,.35)" }}
              >
                Toutes les formules donnent accès aux cours en présentiel et en
                ligne.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                style={{
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  minHeight: "100%",
                  background: "#fff",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 2px 8px rgba(44,44,44,.04)",
                }}
              >
                {/* Nom & prix */}
                <div>
                  <p
                    className="font-serif text-3xl font-semibold mb-1"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {plan.name}
                  </p>
                  <div className="mt-5 flex items-end gap-1.5">
                    <p
                      className="font-serif font-semibold"
                      style={{
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        color: "var(--color-primary)",
                      }}
                    >
                      {plan.price}€
                    </p>
                  </div>
                  <p
                    className="text-sm mt-3 leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Features */}
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                    flex: 1,
                  }}
                >
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: ".95rem",
                          height: ".95rem",
                          marginTop: ".2rem",
                          fontSize: ".5rem",
                          fontWeight: 700,
                          background: "var(--color-primary-bg)",
                          color: "var(--color-primary)",
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: "var(--color-ink)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="btn"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    border: plan.highlighted
                      ? "1px solid rgba(45,27,78,.12)"
                      : "1px solid var(--color-border)",
                    background: "var(--color-neutral)",
                    color: "var(--color-ink)",
                    padding: ".75rem 1.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = plan.highlighted
                      ? "#f4f4f4"
                      : "rgba(201,168,76,.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--color-neutral)";
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>
    </main>
  );
}
