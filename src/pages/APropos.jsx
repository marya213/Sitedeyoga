import { TEAM } from "../data/index";

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
              className="font-serif font-light text-3xl md:text-4xl mb-6"
              style={{ color: "#F0EAD6" }}
            >
              Un studio fondé sur la passion et la transmission
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
