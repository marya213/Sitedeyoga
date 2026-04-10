import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const LINKS = [
  { label: 'Accueil',  to: '/',         end: true  },
  { label: 'Cours',    to: '/cours',    end: false },
  { label: 'À propos', to: '/a-propos', end: false },
  { label: 'Contact',  to: '/contact',  end: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: 'rgba(245,245,240,.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #E8E8E3',
      }}
    >
      <div className="section-inner h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline"
          onClick={() => setOpen(false)}
        >
          <span
            className="nav-icon active flex-shrink-0"
            style={{ width: '2rem', height: '2rem', fontSize: '.875rem', fontWeight: 700 }}
          >
            ✦
          </span>
          <span
            className="hidden sm:inline font-serif font-semibold text-lg"
            style={{ color: 'var(--color-ink)', letterSpacing: '.01em' }}
          >
            Studio Kundalini
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {LINKS.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              style={({ isActive }) => ({
                fontSize: '.875rem',
                fontWeight: isActive ? 600 : 500,
                padding: '.45rem 1rem',
                borderRadius: '9999px',
                color: isActive ? 'var(--color-primary)' : 'var(--color-secondary)',
                background: isActive ? 'var(--color-primary-bg)' : 'transparent',
                transition: 'background .2s, color .2s',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Droite */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="btn btn-primary hidden md:inline-flex"
            style={{ padding: '.5rem 1.25rem', fontSize: '.8125rem' }}
          >
            Réserver
          </Link>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Fermer' : 'Menu'}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl transition-colors"
            style={{ background: open ? 'var(--color-primary-bg)' : 'transparent' }}
          >
            <span className="block h-0.5 w-5 transition-all duration-200"
              style={{ background: 'var(--color-ink)', transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }} />
            <span className="block h-0.5 w-5 transition-all duration-200"
              style={{ background: 'var(--color-ink)', opacity: open ? 0 : 1 }} />
            <span className="block h-0.5 w-5 transition-all duration-200"
              style={{ background: 'var(--color-ink)', transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(245,245,240,.98)',
            borderTop: '1px solid var(--color-border)',
            padding: '.75rem clamp(1.25rem, 5vw, 3rem) 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '.25rem',
          }}
        >
          {LINKS.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block',
                padding: '.625rem 1rem',
                borderRadius: '.875rem',
                fontSize: '.9375rem',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--color-primary)' : 'var(--color-ink)',
                background: isActive ? 'var(--color-primary-bg)' : 'transparent',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary mt-3"
            onClick={() => setOpen(false)}
          >
            Réserver une séance
          </Link>
        </div>
      )}
    </header>
  )
}
