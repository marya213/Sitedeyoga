import { Link } from "react-router-dom";
import { PRICING } from "../data/index";
import Pill from "../components/ui/Pill";

const DISCIPLINES = [
  { type: "yoga",    title: "Yoga",    variants: "Kundalini · Vinyasa · Hatha · Yin",
    desc: "Des pratiques ancestrales adaptées à tous les niveaux. Chaque cours est une invitation à explorer votre corps et votre souffle." },
  { type: "studio",  title: "Studio",  variants: "HIIT · Cardio · Force fonctionnelle",
    desc: "Des entraînements intenses et efficaces pour développer votre condition physique, adaptés à chaque niveau." },
  { type: "hybride", title: "Hybride", variants: "Méditation · Pranayama · Mantra",
    desc: "Cours disponibles en présentiel et en ligne simultanément. La flexibilité du distanciel sans sacrifier la chaleur du collectif." },
];

export default function Cours() {
  return (
    <main className="pt-16">

      {/* ══ Header ════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '4rem 0 3rem' }}>
        <div className="section-inner text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
             style={{ color: 'var(--color-secondary)' }}>
            Offre complète
          </p>
          <h1 className="font-serif font-light mb-4"
              style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
            Nos cours
          </h1>
          <p className="leading-relaxed mb-8"
             style={{ color: 'var(--color-secondary)', maxWidth: '40ch', marginInline: 'auto' }}>
            Trois disciplines, vingt-deux créneaux par semaine, trois instructeurs
            passionnés.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#tarifs" className="btn btn-primary" style={{ padding: '.75rem 1.75rem' }}>
              Voir les tarifs
            </a>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '.75rem 1.75rem' }}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Disciplines ═══════════════════════════════════════ */}
      <section style={{ background: 'var(--color-neutral)', padding: '5rem 0' }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
               style={{ color: 'var(--color-secondary)' }}>
              Ce que nous proposons
            </p>
            <h2 className="font-serif font-light text-3xl">Les disciplines</h2>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '1.25rem' }}
            className="md:grid-cols-3"
          >
            {DISCIPLINES.map(d => (
              <div key={d.type} className="card text-center">
                <div className="mb-4">
                  <Pill type={d.type} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">{d.title}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: 'var(--color-secondary)' }}>
                  {d.variants}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Tarifs ════════════════════════════════════════════ */}
      <section id="tarifs" style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3"
               style={{ color: 'var(--color-secondary)' }}>
              Tarifs
            </p>
            <h2 className="font-serif font-light text-3xl">Choisissez votre formule</h2>
            <p className="text-sm mt-3" style={{ color: 'var(--color-secondary)' }}>
              Toutes les formules donnent accès aux cours en présentiel et en ligne.
            </p>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '1.25rem', alignItems: 'stretch' }}
            className="md:grid-cols-3"
          >
            {PRICING.map(plan => (
              <div
                key={plan.name}
                style={{
                  borderRadius: '1.25rem',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  background: plan.highlighted ? 'var(--color-primary)' : '#fff',
                  border: plan.highlighted ? 'none' : '1px solid var(--color-border)',
                  boxShadow: plan.highlighted
                    ? '0 16px 40px rgba(79,99,66,.22)'
                    : '0 2px 8px rgba(44,44,44,.04)',
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <span
                    className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: plan.highlighted ? 'rgba(255,255,255,.18)' : 'var(--color-primary-bg)',
                      color:      plan.highlighted ? '#fff' : 'var(--color-primary)',
                    }}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Nom & prix */}
                <div className="text-center">
                  <p className="text-sm font-semibold mb-2"
                     style={{ color: plan.highlighted ? 'rgba(255,255,255,.7)' : 'var(--color-secondary)' }}>
                    {plan.name}
                  </p>
                  <p className="font-serif font-light"
                     style={{ fontSize: '3.25rem', lineHeight: 1, color: plan.highlighted ? '#fff' : 'var(--color-ink)' }}>
                    {plan.price}€
                  </p>
                  <p className="text-xs font-medium mt-2"
                     style={{ color: plan.highlighted ? 'rgba(255,255,255,.55)' : 'var(--color-secondary)' }}>
                    {plan.period}
                  </p>
                  <p className="text-sm mt-3 leading-relaxed"
                     style={{ color: plan.highlighted ? 'rgba(255,255,255,.72)' : 'var(--color-secondary)' }}>
                    {plan.desc}
                  </p>
                </div>

                {/* Features */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '.625rem', flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: '1.125rem',
                          height: '1.125rem',
                          marginTop: '.1rem',
                          fontSize: '.6rem',
                          fontWeight: 700,
                          background: plan.highlighted ? 'rgba(255,255,255,.22)' : 'var(--color-primary-bg)',
                          color:      plan.highlighted ? '#fff' : 'var(--color-primary)',
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: plan.highlighted ? 'rgba(255,255,255,.82)' : 'var(--color-ink)' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="btn"
                  style={{
                    background: plan.highlighted ? '#fff'                    : 'var(--color-primary)',
                    color:      plan.highlighted ? 'var(--color-primary)'    : '#fff',
                    padding: '.75rem 1.5rem',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = plan.highlighted ? 'var(--color-neutral)' : 'var(--color-primary-dk)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = plan.highlighted ? '#fff' : 'var(--color-primary)'
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
