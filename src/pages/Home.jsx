import { useEffect, useState } from "react";
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

const TESTIMONIALS = [
  {
    name: "Emmanuelle M",
    text: "A la recherche d'un cours de yoga en visio, j'ai découvert le kundalini avec Emmanuelle et je recommande à 100%. Emmanuelle est dynamique, toujours souriante, bienveillante et à l'écoute de ses élèves. Quel plaisir de faire une activité qui tonifie le corps, apaise le mental et nous fait nous reconnecter à nous-même.",
  },
  {
    name: "Anne M",
    text: "Je pratique avec Emmanuelle depuis un an, les matinées de yoga et les stages ponctuels me conviennent bien, ils m'apportent un coup de boost et une sensation d'allègement, comme un nettoyage du corps, du cœur et de l'esprit. Tantra + kundalini + huiles essentielles + simplicité et bienveillance = je ne peux plus m'en passer pour mon équilibre.",
  },
  {
    name: "Carole",
    text: "Je recommande à 100 % les cours d'Emmanuelle. J'ai découvert le Kundalini Yoga, le Tantra Yoga et les méditations actives grâce à une matinée yoga il y a bientôt un an. Véritable coup de foudre pour moi ! Emmanuelle est une professeure douce, bienveillante et à l'écoute. Ses cours sont bien structurés et diversifiés. On travaille le corps et l'esprit, on se pose et on est attentif à nos ressentis. On pratique de notre mieux avec ce qu'on a, sans performance !",
  },
  {
    name: "Yannick Billon",
    text: "Attentive, à l'écoute, joyeuse, Emmanuelle transmet sa passion pour le Yoga avec cœur et enthousiasme.",
  },
  {
    name: "Jean-Louis Bergonzoli",
    text: "Si vous voulez découvrir le Kundalini yoga, Emmanuelle saura vous embarquer avec des postures, une relaxation et une méditation chantée. Elle illumine la séance par sa gentillesse, son plaisir de faire plaisir. Et n'hésitez pas à visiter sa plateforme qui offre tant de moyens de se détendre et retrouver la sérénité. Merci Emmanuelle pour ce que tu nous apportes.",
  },
  {
    name: "Valérie Marie",
    text: "Excellente professionnelle et professeure de Yoga Kundalini ! C'est un bonheur de suivre ses cours ! Je n'en ai pas manqué un depuis plus de deux ans que je pratique le yoga Kundalini avec elle. Emmanuelle est toujours très disponible, elle s'adapte et propose des séances en zoom aussi qui sont aussi très intéressantes. Je vous conseille tellement ! Le yoga change la perception de la vie.",
  },
  {
    name: "Isabelle Onfray",
    text: "J'ai découvert le kundalini yoga avec Emmanuelle. J'apprécie sa douceur, sa bienveillance et son attention envers chacun. Elle sait prendre soin et partager sa pratique avec professionnalisme. Je la remercie pour ses cours qui sont de véritables voyages intérieurs.",
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => setCurrent((i + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div style={{ maxWidth: "42rem", marginInline: "auto" }}>
      <div
        style={{
          position: "relative",
          minHeight: "17rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Avis précédent"
          className="hidden sm:flex"
          style={{
            position: "absolute",
            left: "-3rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "9999px",
            border: "1px solid rgba(201,168,76,.4)",
            background: "transparent",
            color: "#C9A84C",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          ←
        </button>

        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            aria-hidden={i !== current}
            className="text-center"
            style={{
              position: i === current ? "relative" : "absolute",
              inset: 0,
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
              pointerEvents: i === current ? "auto" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: ".9rem",
              padding: "0 1rem",
            }}
          >
            <blockquote
              className="font-serif italic font-light"
              style={{
                fontSize: "clamp(1.0625rem,2.2vw,1.25rem)",
                color: "#F0EAD6",
                lineHeight: 1.65,
              }}
            >
              « {t.text} »
            </blockquote>
            <p className="text-sm font-medium" style={{ color: "rgba(240,234,214,.6)" }}>
              — {t.name}
            </p>
          </div>
        ))}

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Avis suivant"
          className="hidden sm:flex"
          style={{
            position: "absolute",
            right: "-3rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "9999px",
            border: "1px solid rgba(201,168,76,.4)",
            background: "transparent",
            color: "#C9A84C",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>

      {/* Indicateurs */}
      <div style={{ display: "flex", justifyContent: "center", gap: ".4rem", marginTop: "1.5rem" }}>
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            onClick={() => goTo(i)}
            aria-label={`Avis de ${t.name}`}
            aria-current={i === current}
            style={{
              width: i === current ? "1.5rem" : ".5rem",
              height: ".5rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              background: i === current ? "#C9A84C" : "rgba(201,168,76,.3)",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

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

      {/* ══ Avis ══════════════════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5rem 0" }}>
        <div className="section-inner text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "rgba(201,168,76,.7)" }}
          >
            Avis client
          </p>
          
          <TestimonialsCarousel />
        </div>
      </section>
    </main>
  );
}
