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
              className="font-serif font-light text-3xl md:text-4xl mb-6"
              style={{ color: "#F0EAD6" }}
            >
              Un studio fondé sur la passion et la transmission
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
                Le Kundalini Yoga m’a permis de vivre une véritable rencontre
                avec moi-même, de me réapproprier mon corps et de mieux
                comprendre ce qui se joue à l’intérieur de moi. En 15 ans de
                pratique, il est devenu un véritable révélateur de mes émotions
                et de mes mécanismes inconscients. Chaque séance est un voyage
                intérieur : elle bouscule, remue, puis apaise. On traverse
                l’inconfort, les résistances, parfois même des émotions
                enfouies, avant de retrouver peu à peu le calme dans la
                relaxation. Je ne propose pas un cours de yoga classique, mais
                le partage d’une pratique qui m’a profondément transformée et
                qui invite, séance après séance, à une rencontre sincère avec
                soi-même.
              </p>
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
