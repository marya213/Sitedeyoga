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

const STATS = [
  { value: "400+", label: "Membres actifs" },
  { value: "22", label: "Créneaux / semaine" },
  { value: "6 ans", label: "d'expérience" },
];

const TESTIMONIALS = [
  {
    init: "C",
    name: "Claire B.",
    text: "Après 6 mois de pratique, ma relation au stress a complètement changé. Les techniques de respiration m'ont transformée.",
  },
  {
    init: "M",
    name: "Marc T.",
    text: "Je pratique en distanciel et la qualité des cours en ligne est impressionnante. Sophie est une professeure exceptionnelle.",
  },
  {
    init: "I",
    name: "Isabelle M.",
    text: "Le carnet 10 séances est vraiment bien pensé. La flexibilité présentiel / distanciel correspond parfaitement à mon mode de vie.",
  },
];

/* ── Pill inline ── */
function Pill({ type }) {
  const styles = {
    yoga: {
      bg: "var(--color-secondary-bg)",
      color: "var(--color-secondary)",
      label: "🧘 Yoga",
    },
    studio: {
      bg: "var(--color-primary-bg)",
      color: "var(--color-primary)",
      label: "🏋️ Studio",
    },
    hybride: {
      bg: "var(--color-tertiary-bg)",
      color: "#a0622a",
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
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg,#1a2514cc 0%,#1e2a1899 50%,#1a2514e0 100%)",
          }}
        />

        {/* Contenu */}
        <div className="relative z-10" style={{ maxWidth: "44rem" }}>
          <span
            className="pill pill-tertiary mb-6 inline-block"
            style={{ fontSize: ".6875rem", letterSpacing: ".12em" }}
          >
            Paris · Bien-être &amp; Mouvement
          </span>

          <h1
            className="font-serif font-light text-white mb-6"
            style={{ fontSize: "clamp(2.5rem,6vw,4rem)", lineHeight: 1.1 }}
          >
            Retrouvez l’harmonie du corps et de l’esprit grâce au yoga avec{" "}
            <em
              className="not-italic font-semibold"
              style={{ color: "var(--color-tertiary)" }}
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
            Yoga, fitness et méditation dans un espace bienveillant. Chaque séance est une invitation à aller plus loin.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
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

          {/* Stats */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-serif font-semibold text-2xl"
                  style={{ color: "var(--color-tertiary)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(255,255,255,.55)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute flex flex-col items-center gap-2"
          style={{
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.45,
          }}
        >
          <span
            style={{
              fontSize: ".625rem",
              letterSpacing: ".18em",
              color: "rgba(255,255,255,.6)",
              textTransform: "uppercase",
            }}
          >
            Défiler
          </span>
          <div
            style={{
              width: 1,
              height: "2rem",
              background: "rgba(255,255,255,.3)",
            }}
          />
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
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div
          className="section-inner text-center"
          style={{ maxWidth: "38rem" }}
        >
          <span
            className="font-serif select-none"
            style={{
              fontSize: "5rem",
              lineHeight: 1,
              color: "var(--color-tertiary)",
              opacity: 0.25,
            }}
          >
            "
          </span>
          <blockquote
            className="font-serif italic font-light"
            style={{
              fontSize: "clamp(1.125rem,2.5vw,1.375rem)",
              color: "var(--color-ink)",
              lineHeight: 1.65,
              marginTop: "-1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            Le studio Kundalini a changé ma façon d'aborder le mouvement. Chaque
            cours avec Sophie est une expérience profonde et ressourçante. Je
            recommande à 100&nbsp;%.
          </blockquote>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-secondary)" }}
          >
            — Claire B., membre depuis 2024
          </p>
        </div>
      </section>

      {/* ══ CTA final ═════════════════════════════════════════ */}
      <section
        className="text-center text-white"
        style={{
          background: "var(--color-primary)",
          padding: "5rem clamp(1.25rem,5vw,3rem)",
        }}
      >
        <div style={{ maxWidth: "36rem", marginInline: "auto" }}>
          <h2
            className="font-serif font-light text-white mb-4"
            style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)" }}
          >
            Prêt·e à commencer ?
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,.72)", fontSize: ".9375rem" }}
          >
            Rejoignez notre communauté et découvrez votre premier cours avec
            notre Pass Découverte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/cours"
              className="btn"
              style={{
                background: "#fff",
                color: "var(--color-primary)",
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
