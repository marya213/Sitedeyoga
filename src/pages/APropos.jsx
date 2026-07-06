import { useState, useEffect } from "react";
import { TEAM } from "../data/index";

const CAROUSEL_IMAGES = [
  { src: "/img/yoga.jpg", alt: "Cours de yoga" },
  { src: "/img/photo1.jpg", alt: "Studio de yoga" },
  { src: "/img/photo2.jpg", alt: "Séance de yoga" },
  { src: "/img/ph4.jpg", alt: "Séance de yoga" },
  { src: "/img/ph5.jpg", alt: "Séance de yoga" },
  { src: "/img/ph6.jpg", alt: "Séance de yoga" },
  { src: "/img/ph7.jpg", alt: "Séance de yoga" },
  { src: "/img/ph8.jpg", alt: "Séance de yoga" },
  { src: "/img/ph9.jpg", alt: "Séance de yoga" },
  { src: "/img/ph10.jpg", alt: "Séance de yoga" },
  { src: "/img/ph11.jpg", alt: "Séance de yoga" },
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        borderRadius: "1.25rem",
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(44,44,44,.1)",
        minHeight: "20rem",
        position: "relative",
      }}
    >
      {CAROUSEL_IMAGES.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          style={{
            position: i === 0 ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            minHeight: "20rem",
          }}
        />
      ))}
      {/* Indicateurs */}
      <div
        style={{
          position: "absolute",
          bottom: "0.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.4rem",
        }}
      >
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "1.5rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              background: i === current ? "#fff" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const VALUES = [
  {
    icon: "🌱",
    color: "#3D8B74",
    bg: "rgba(61,139,116,.13)",
    title: "Bienveillance",
    desc: "Chaque élève est accueilli là où il en est, sans jugement. Notre espace est un lieu de confiance et de respect mutuel.",
  },
  {
    icon: "✨",
    color: "#C9A84C",
    bg: "rgba(201,168,76,.15)",
    title: "Excellence",
    desc: "Nos instructeurs sont certifiés au plus haut niveau et se forment en continu pour offrir une expérience de qualité.",
  },
  {
    icon: "🤝",
    color: "#7B5EA7",
    bg: "rgba(123,94,167,.13)",
    title: "Communauté",
    desc: "Le studio est bien plus qu'un lieu de pratique — c'est une communauté vivante, chaleureuse et soudée.",
  },
];

export default function APropos() {
  return (
    <main className="pt-16">
      {/* ══ Header ════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "55vh", padding: "6rem clamp(1.25rem,5vw,3rem) 4rem" }}
      >
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/photo1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            backgroundColor: "#2D1B4E",
          }}
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #2D1B4E80 0%, #2D1B4E55 50%, #2D1B4Eb0 100%)",
          }}
        />

        <div className="relative z-10" style={{ maxWidth: "38rem" }}>
          <h1
            className="font-serif font-light mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#F0EAD6",
              textShadow: "0 2px 20px rgba(0,0,0,.35)",
            }}
          >
            À propos
          </h1>
          <p
            className="leading-relaxed"
            style={{
              color: "rgba(240,234,214,.9)",
              maxWidth: "42ch",
              marginInline: "auto",
              textShadow: "0 1px 12px rgba(0,0,0,.4)",
            }}
          >
            Le bien-être est accessible à tous lorsqu'il est enseigné avec
            rigueur et bienveillance.
          </p>
        </div>
      </section>

      {/* ══ Histoire ══════════════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5rem 0" }}>
        <div
          className="section-inner md:grid-cols-2"
          style={{ display: "grid", gap: "3rem", alignItems: "center" }}
        >
          {/* Texte */}
          <div>
            <h2
              className="font-serif font-light text-2xl md:text-4xl mb-6"
              style={{ color: "#F0EAD6" }}
            >
              Comment je suis arrivée au Yoga?
            </h2>
            <div
              className="text-sm leading-relaxed mb-8"
              style={{
                color: "rgba(240,234,214,.82)",
                display: "flex",
                flexDirection: "column",
                fontSize: "1rem",
                gap: "2rem",
              }}
            >
              <p>
                Le Kundalini Yoga m’a permis de me réapproprier mon corps et de
                mieux comprendre ce qui se joue en moi. En 15 ans de pratique,
                je ne propose pas un cours classique, mais le partage sincère
                d’une expérience qui m’a profondément transformée.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span
                className="font-serif font-semibold"
                style={{ fontSize: "3rem", lineHeight: 1, color: "#C9A84C" }}
              >
                15
              </span>
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(240,234,214,.55)", lineHeight: 1.4 }}
              >
                ans
                <br />
                de pratique
              </span>
            </div>
          </div>

          {/* Image */}
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(44,44,44,.1)",
              minHeight: "20rem",
            }}
          >
            <img
              src="/img/yoga.jpg"
              alt="Emmanuelle en posture de méditation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.style.background = "var(--color-primary-bg)";
                e.currentTarget.style.minHeight = "20rem";
              }}
            />
          </div>
        </div>
      </section>

      {/* ══ Valeurs ═══════════════════════════════════════════ */}
      <section style={{ background: "#F5F0E8", padding: "5rem 0" }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <h2 className="font-serif font-light text-3xl">Nos valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="card text-center">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "9999px",
                    background: v.bg,
                    fontSize: "1.5rem",
                    marginBottom: "1.25rem",
                    marginInline: "auto",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-serif text-xl font-semibold mb-2"
                  style={{ color: v.color }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
