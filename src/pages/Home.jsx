import { Link } from "react-router-dom";

const COURS_BRIEF = [
  {
    title: "Énergie & Équilibre",
    desc: "Un yoga dynamique et accessible à tous, pour libérer le stress, stimuler l'énergie et retrouver clarté intérieure.",
  },
  {
    title: "Corps en Mouvement",
    desc: "Le yoga des femmes : douceur, confiance en soi et énergie féminine, en accord avec les cycles du corps.",
  },
  {
    title: "Souffle & Sérénité",
    desc: "Un cours tout en douceur dédié au calme, à la détente et à la récupération intérieure.",
  },
];

const FEATURES = [
  {
    icon: "🧘",
    title: "Yoga",
    pill: "yoga",
    desc: "Kundalini, Vinyasa, Hatha et Yin — souplesse, force et sérénité.",
  },
  {
    icon: "🏋️",
    title: "Studio",
    pill: "studio",
    desc: "HIIT, Cardio et Force fonctionnelle — des séances dynamiques.",
  },
  {
    icon: "🎥",
    title: "Hybride",
    pill: "hybride",
    desc: "Méditation, Pranayama et Mantra, en présentiel ou en direct.",
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
        className="relative flex flex-col items-center justify-center text-center text-white mt-12 min-h-[calc(100vh-4rem-3rem)]"
        style={{
          padding: "3rem clamp(1.25rem,5vw,3rem)",
          backgroundColor: "#2D1B4E",
        }}
      >
        {/* Vidéo de fond */}
        <video
          className="absolute inset-0"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundColor: "#2D1B4E",
          }}
          src="/video/martinique.mp4"
          poster="/img/photo2.jpg"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #3D206040 0%, #2D1B4E30 50%, #2D1B4Ea8 100%)",
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
              textShadow: "0 2px 20px rgba(0,0,0,.35)",
            }}
          >
            L’harmonie du corps et de l’esprit avec{" "}
            <em
              className="not-italic font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Kundalini Yoga
            </em>
          </h1>

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

      {/* ══ Propositions ══════════════════════════════════════ */}
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
              Nos propositions
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

      {/* ══ Les cours ═════════════════════════════════════════ */}
      <section style={{ background: "#F5F0E8", padding: "5rem 0" }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              Les cours
            </p>
            <h2 className="font-serif font-light text-3xl md:text-4xl mb-3">
              Trois cours pour trois besoins
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {COURS_BRIEF.map((c) => (
              <div key={c.title} className="card text-center">
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {c.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/cours"
              className="text-sm font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              → Découvrir les cours en détail
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Citation ══════════════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5rem 0" }}>
        <div
          className="section-inner text-center"
          style={{ maxWidth: "38rem" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "rgba(201,168,76,.7)" }}
          >
            Avis client
          </p>
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
            Ce rendez-vous hebdomadaire est devenu essentiel à mon équilibre,
            physique comme émotionnel. Les cours d’Emmanuelle sont dispensés
            avec une bienveillance rare.
          </blockquote>
          <p
            className="text-sm font-medium"
            style={{ color: "rgba(240,234,214,.6)" }}
          >
            — Claire B., membre depuis 2024
          </p>
        </div>
      </section>
    </main>
  );
}
