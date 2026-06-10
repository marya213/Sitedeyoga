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
    title: "Bienveillance",
    desc: "Chaque élève est accueilli là où il en est, sans jugement. Notre espace est un lieu de confiance et de respect mutuel.",
  },
  {
    icon: "✨",
    title: "Excellence",
    desc: "Nos instructeurs sont certifiés au plus haut niveau et se forment en continu pour offrir une expérience de qualité.",
  },
  {
    icon: "🤝",
    title: "Communauté",
    desc: "Le studio est bien plus qu'un lieu de pratique — c'est une communauté vivante, chaleureuse et soudée.",
  },
];

export default function APropos() {
  return (
    <main className="pt-16">
      {/* ══ Header ════════════════════════════════════════════ */}
      <section
        style={{
          background: "#F5F0E8",
          borderBottom: "1px solid rgba(201,168,76,.2)",
          padding: "4rem 0 3rem",
        }}
      >
        <div className="section-inner text-center">
          <h1
            className="font-serif font-light mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3rem)" }}
          >
            À propos
          </h1>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--color-secondary)",
              maxWidth: "42ch",
              marginInline: "auto",
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
              className="text-sm leading-relaxed mb-10"
              style={{
                color: "rgba(240,234,214,.82)",
                display: "flex",
                flexDirection: "column",
                fontSize: "1rem",
                gap: "2rem",
              }}
            >
              <p>
                Emmanuelle, 47 ans et mère de deux garçons, a longtemps vécu
                avec une forte anxiété et un besoin constant d’anticiper les
                situations. Bien qu’attirée par la recherche du bien-être et la
                compréhension de soi, ses premières expériences avec le yoga
                traditionnel ne l’ont pas convaincue. Après la naissance de son
                deuxième enfant, elle découvre le Kundalini Yoga grâce à une
                professeure qui devient un véritable guide dans son parcours.
                Pendant dix ans, elle pratique régulièrement, ce qui lui permet
                de mieux comprendre ses émotions, de se reconnecter à son corps
                et de transformer progressivement son rapport à elle-même.
                Désireuse d’approfondir cette pratique, elle suit ensuite trois
                années de formation en Kundalini Yoga et en développement
                personnel. Cette expérience marque une étape importante de sa
                vie et renforce son désir de transmettre ce qu’elle a appris.
                Depuis cinq ans, elle enseigne le Kundalini Yoga. À travers
                l’accompagnement de ses élèves, elle continue d’apprendre et
                partage avec eux son expérience ainsi que les bienfaits profonds
                de cette pratique.
              </p>
            </div>
          </div>

          {/* Carrousel */}
          <ImageCarousel />
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
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  {v.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">
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
