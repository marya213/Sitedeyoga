import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: "🧘",
    title: "Yoga",
    pill: "yoga",
    desc: "Kundalini, Vinyasa, Hatha et Yin — une gamme complète de pratiques pour cultiver souplesse, force intérieure et sérénité.",
  },
  {
    icon: "🏋️",
    title: "Studio",
    pill: "studio",
    desc: "HIIT, Cardio et Force fonctionnelle — des séances dynamiques pour challenger votre corps dans un espace équipé.",
  },
  {
    icon: "🎥",
    title: "Hybride",
    pill: "hybride",
    desc: "Méditation, Pranayama et Mantra en présentiel ou en direct depuis chez vous — flexibilité sans compromis.",
  },
];

/* ── Pill inline ── */
function Pill({ type }) {
  const styles = {
    yoga: {
      bg: "rgba(139,74,107,.13)",
      color: "#8B4A6B",
      label: "🧘 Yoga",
    },
    studio: {
      bg: "rgba(201,168,76,.15)",
      color: "#7a5520",
      label: "🏋️ Studio",
    },
    hybride: {
      bg: "rgba(45,27,78,.12)",
      color: "#7B5EA7",
      label: "🎥 Hybride",
    },
  };
  const s = styles[type];
  return (
    <span
      className="pill"
      style={{ background: s.bg, color: s.color, borderColor: s.bg }}
    >
      {s.label}
    </span>
  );
}

export default function Home() {
  return (
    <main className="pt-16">
      {/* ══ Hero ══════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white"
        style={{
          minHeight: "calc(100vh - 4rem)",
          padding: "5rem clamp(1.25rem,5vw,3rem)",
        }}
      >
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/img/photo2.jpg')",
            backgroundSize: "110%",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#2D1B4E",
          }}
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #3D2060cc 0%, #2D1B4E99 50%, #2D1B4Ee0 100%)",
          }}
        />

        {/* Contenu */}
        <div className="relative z-10" style={{ maxWidth: "44rem" }}>
          <h1
            className="font-serif font-light mb-6"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
              lineHeight: 1.1,
              color: "var(--color-neutral)",
            }}
          >
            Retrouvez l’harmonie du corps et de l’esprit grâce au yoga avec{" "}
            <em
              className="not-italic font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Kundalini Yoga
            </em>
          </h1>

          <p
            className="mb-10 leading-relaxed"
            style={{
              color: "rgba(255,255,255,.78)",
              fontSize: "1.0625rem",
              maxWidth: "38ch",
              marginInline: "auto",
            }}
          >
            Yoga, fitness et méditation dans un espace bienveillant. Chaque
            séance est une invitation à aller plus loin.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14 ">
            <Link
              to="/cours"
              className="btn btn-primary"
              style={{ padding: ".875rem 2rem" }}
            >
              Découvrir les cours
            </Link>
            <Link
              to="/contact"
              className="btn btn-outlined"
              style={{ padding: ".875rem 2rem" }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Disciplines ═══════════════════════════════════════ */}
      <section
        style={{ background: "var(--color-neutral)", padding: "5rem 0" }}
      >
        <div className="section-inner">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              Ce que nous proposons
            </p>
            <h2 className="font-serif font-light text-3xl md:text-4xl">
              Nos pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="card text-center">
                <div className="mb-4">
                  <Pill type={f.pill} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Citation ══════════════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5rem 0" }}>
        <div
          className="section-inner text-center"
          style={{ maxWidth: "38rem" }}
        >
          <span
            className="font-serif select-none"
            style={{
              fontSize: "5rem",
              lineHeight: 1,
              color: "#C9A84C",
              opacity: 0.35,
            }}
          >
            "
          </span>
          <blockquote
            className="font-serif italic font-light"
            style={{
              fontSize: "clamp(1.125rem,2.5vw,1.375rem)",
              color: "#F0EAD6",
              lineHeight: 1.65,
              marginTop: "-1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            Cela fait un an et demi que je suis les cours de Kundalini avec Emmanuelle, et ce rendez-vous est devenu essentiel à mon équilibre, autant sur le plan physique qu’émotionnel. Je ne connaissais pas le Kundalini, et au fil de ma pratique, j’en découvre chaque jour un peu plus la puissance.

Ces cours sont d’autant plus réconfortants et revitalisants qu’ils sont dispensés avec beaucoup de bienveillance, d’optimisme et d’attention par Emmanuelle.
          </blockquote>
          <p
            className="text-sm font-medium"
            style={{ color: "rgba(240,234,214,.6)" }}
          >
            — Claire B., membre depuis 2024
          </p>
        </div>
      </section>

      {/* ══ CTA final ═════════════════════════════════════════ */}
      <section
        className="text-center text-white"
        style={{
          background: "#2D1B4E",
          padding: "5rem clamp(1.25rem,5vw,3rem)",
        }}
      >
        <div style={{ maxWidth: "36rem", marginInline: "auto" }}>
          <h2
            className="font-serif font-light mb-4"
            style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#F0EAD6" }}
          >
            Prêt·e à commencer ?
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{ color: "rgba(240,234,214,.72)", fontSize: ".9375rem" }}
          >
            Rejoignez notre communauté et découvrez votre premier cours avec
            notre Pass Découverte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/cours"
              className="btn"
              style={{
                background: "var(--color-neutral)",
                color: "#2C1810",
                padding: ".875rem 2rem",
              }}
            >
              Voir les cours
            </Link>
            <Link
              to="/contact"
              className="btn btn-outlined"
              style={{ padding: ".875rem 2rem" }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
