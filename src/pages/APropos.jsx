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
          background: "#F5F0E8",
          borderBottom: "1px solid rgba(201,168,76,.2)",
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
        style={{ background: "#2D1B4E", padding: "5rem 0" }}
      >
        <div
          className="section-inner md:grid-cols-2"
          style={{ display: "grid", gap: "3rem", alignItems: "center" }}
        >
          {/* Texte */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "rgba(240,234,214,.6)" }}
            >
              2018 – Aujourd'hui
            </p>
            <h2 className="font-serif font-light text-3xl md:text-4xl mb-6"
                style={{ color: "#F0EAD6" }}>
              Un studio fondé sur la passion et la transmission
            </h2>
            <div
              className="text-sm leading-relaxed mb-10"
              style={{ color: "rgba(240,234,214,.82)", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <p>Le Kundalini Yoga m'a permis de faire une véritable rencontre avec moi-même. De me réapproprier mon corps. De ressentir, en profondeur, ce qui se manifeste en moi.</p>
              <p>En 15 ans de pratique, il a été un véritable révélateur de mes émotions. Il m'a permis de comprendre ce qui se jouait à l'intérieur de moi&nbsp;: mes comportements répétés, mes scénarios inconscients… et de me confronter à ce qu'il y avait de moins agréable, de moins glorieux aussi.</p>
              <p>Oui… choisir de pratiquer le Kundalini Yoga vient bousculer ce qui est bien rangé à l'intérieur de soi.</p>
              <p>Je dis souvent dans mes cours que le Kundalini Yoga&nbsp;: <em style={{ color: "#F0EAD6" }}>"C'est comme une boule à neige que l'on vient secouer"</em>. Ça remue le corps, l'esprit, les émotions… Puis, peu à peu, tout vient se déposer.</p>
              <p>C'est un espace de tempête intérieure&nbsp;: l'énergie se lève, circule, le mental s'agite, résiste… On traverse. Et puis le calme revient, dans la relaxation.</p>
              <p>Comme dans la vie.</p>
              <p>On passe par l'inconfort d'une posture, d'un mouvement exigeant, d'un souffle difficile à maintenir… Et il faut "tenir bon" — comme je le dis souvent en cours. Puis, à un moment, quelque chose lâche&nbsp;: les résistances physiques… et parfois des émotions retenues depuis trop longtemps.</p>
              <p>C'est un véritable chemin initiatique. Chaque séance est unique, parce que vous êtes unique.</p>
              <p>Choisir d'expérimenter le Kundalini Yoga, ce n'est pas simplement s'offrir une pause d'une heure, ni "faire du yoga parce que c'est bon pour la santé".</p>
              <p>C'est une rencontre avec soi, séance après séance. Une reconnexion à sa propre grandeur, à sa sagesse intérieure. Une manière de cultiver ce qu'il y a de plus juste et de plus vivant en soi.</p>
              <p>Je ne viens pas vous proposer un cours de yoga "classique". Je viens vous transmettre ce que j'ai vécu, ce que cette pratique m'a permis de traverser, et comment elle m'a transformée, année après année.</p>
              <p>En cheminant avec moi, semaine après semaine, vous irez à votre propre rencontre…</p>
              <p>mais aussi, parfois, à la rencontre de parts de vous que vous n'auriez pas forcément envie de voir.</p>
              <p>Ces parts d'ombre font aussi partie du chemin.</p>
              <p>Grandir, s'élever en conscience, avec honnêteté et discernement — c'est ce que je vous propose.</p>
              <p style={{ color: "#C9A84C", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", marginTop: ".5rem" }}>Sat Nam</p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {STORY_STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-serif font-semibold text-2xl"
                    style={{ color: "#C9A84C" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ color: "rgba(240,234,214,.6)" }}
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
      <section style={{ background: "#F5F0E8", padding: "5rem 0" }}>
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
