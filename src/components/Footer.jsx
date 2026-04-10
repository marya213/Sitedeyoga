import { Link } from "react-router-dom";

const LINKS = [
  { label: 'Accueil',  to: '/'         },
  { label: 'Cours',    to: '/cours'    },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Contact',  to: '/contact'  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1c221a', color: 'rgba(255,255,255,.65)' }}>
      <div
        className="section-inner py-14"
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}
      >
        {/* Grid 3 cols sur md */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: '2.5rem' }}
             className="md:grid-cols-3">

          {/* Marque */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="nav-icon active flex-shrink-0"
                style={{ width: '2rem', height: '2rem', fontSize: '.875rem', fontWeight: 700 }}
              >
                ✦
              </span>
              <span className="font-serif font-semibold text-base" style={{ color: '#fff' }}>
                Studio Kundalini
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,.5)', maxWidth: '22ch' }}>
              Un espace de bien-être, de mouvement et de transformation au cœur de Paris.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'rgba(255,255,255,.35)', fontFamily: 'var(--font-sans)' }}>
              Navigation
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
              {LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,.55)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: 'rgba(255,255,255,.35)', fontFamily: 'var(--font-sans)' }}>
              Contact
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', fontSize: '.875rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem' }}>
                <span style={{ color: 'var(--color-tertiary)', flexShrink: 0 }}>📍</span>
                <span style={{ color: 'rgba(255,255,255,.55)' }}>12 rue de la Paix<br />75001 Paris</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <span style={{ color: 'var(--color-tertiary)' }}>✉️</span>
                <a href="mailto:bonjour@studiokundalini.fr"
                   className="transition-colors"
                   style={{ color: 'rgba(255,255,255,.55)' }}
                   onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                   onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.55)'}>
                  bonjour@studiokundalini.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bas */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.08)' }}>
        <div className="section-inner py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
             style={{ color: 'rgba(255,255,255,.3)' }}>
          <span>© 2026 Studio Kundalini · Tous droits réservés</span>
          <span>Paris, France</span>
        </div>
      </div>
    </footer>
  )
}
