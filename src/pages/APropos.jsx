import { TEAM } from "../data/index";

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

const STORY_STATS = [
  { value: "400+", label: "Membres actifs" },
  { value: "3", label: "Instructeurs certifiés" },
  { value: "6 ans", label: "d'ouverture" },
];

export default function APropos() {
  return (
    <main className="pt-16">
      {/* ══ Header ════════════════════════════════════════════ */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--color-border)",
          padding: "4rem 0 3rem",
        }}
      >
        <div className="section-inner text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-secondary)" }}
          >
            Notre histoire
          </p>
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
            Un lieu né d'une conviction&nbsp;: le bien-être est accessible à
            tous lorsqu'il est enseigné avec rigueur et bienveillance.
          </p>
        </div>
      </section>

      {/* ══ Histoire ══════════════════════════════════════════ */}
      <section
        style={{ background: "var(--color-neutral)", padding: "5rem 0" }}
      >
        <div
          className="section-inner md:grid-cols-2"
          style={{ display: "grid", gap: "3rem", alignItems: "center" }}
        >
          {/* Texte */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              2018 – Aujourd'hui
            </p>
            <h2 className="font-serif font-light text-3xl md:text-4xl mb-6">
              Un studio fondé sur la passion et la transmission
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Studio Kundalini est né en 2018 de la vision de Sophie Martin,
              certifiée KRI Level 2, qui souhaitait créer un espace parisien
              alliant la profondeur des traditions orientales à l'efficacité des
              méthodes modernes de fitness.
            </p>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "var(--color-secondary)" }}
            >
              Depuis, le studio a accueilli plus de 400 membres et s'est entouré
              de Marc Viguier et Léa Renard pour proposer une offre complète et
              inclusive, du Kundalini le plus introspectif au HIIT le plus
              intense.
            </p>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {STORY_STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif font-semibold text-2xl"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
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
              alt="Intérieur du studio"
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
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              Ce qui nous guide
            </p>
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
