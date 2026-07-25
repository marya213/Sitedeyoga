import { Link } from "react-router-dom";
import { COURS_DETAILS, REVIEWS } from "../data/index";

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

      {/* ══ Pratique & propositions ═══════════════════════════ */}
      <section
        style={{ background: "var(--color-neutral)", padding: "5.5rem 0 5rem" }}
      >
        <div className="section-inner">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              Ce que nous proposons
            </p>
            <h2 className="font-serif font-light text-3xl md:text-4xl mb-5">
              La pratique du Kundalini Yoga
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--color-secondary)",
                maxWidth: "42ch",
                marginInline: "auto",
              }}
            >
              Le Kundalini Yoga est pour moi un chemin de reconnexion et de
              transformation intérieure. À travers le souffle, le mouvement et
              la méditation, j’accompagne chacun à se déposer, retrouver son
              énergie et avancer à son rythme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {COURS_DETAILS.map((c) => (
              <div key={c.slug} className="card text-center flex flex-col">
                <div
                  className="flex items-center justify-center mb-3"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "9999px",
                    background: c.bg,
                    fontSize: "1.375rem",
                    marginInline: "auto",
                  }}
                >
                  {c.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">
                  {c.name}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: c.color }}
                >
                  {c.scheduleShort}
                </p>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--color-secondary)", flex: 1 }}
                >
                  {c.tagline}
                </p>
                <Link
                  to={`/cours#${c.slug}`}
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-tertiary)" }}
                >
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/cours" className="btn btn-secondary">
              Voir tous les cours en détail
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Vidéo — Découvrir le Kundalini Yoga ═══════════════ */}
      <section style={{ background: "#F5F0E8", padding: "5rem 0 6rem" }}>
        <div className="section-inner">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              Comprendre la pratique
            </p>
            <h2 className="font-serif font-light text-3xl md:text-4xl">
              Qu’est-ce que le Kundalini Yoga ?
            </h2>
          </div>

          <div
            className="aspect-video"
            style={{
              maxWidth: "48rem",
              marginInline: "auto",
              borderRadius: "1.25rem",
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(44,44,44,.12)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/2BVBQgZvkWM"
              title="Qu’est-ce que le Yoga Kundalini ?"
              style={{ width: "100%", height: "100%", border: 0, display: "block" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ══ Avis clients ══════════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5.5rem 0" }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "rgba(201,168,76,.7)" }}
            >
              Avis Google
            </p>
            <h2
              className="font-serif font-light text-3xl md:text-4xl"
              style={{ color: "#F0EAD6" }}
            >
              Ce qu’en disent mes élèves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                style={{
                  background: "rgba(240,234,214,.06)",
                  border: "1px solid rgba(201,168,76,.25)",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  className="font-serif select-none"
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    color: "#C9A84C",
                    opacity: 0.5,
                    marginBottom: ".5rem",
                  }}
                >
                  "
                </span>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(240,234,214,.85)", flex: 1 }}
                >
                  {r.text}
                </p>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#F0EAD6" }}>
                    {r.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(240,234,214,.5)" }}
                  >
                    {r.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
