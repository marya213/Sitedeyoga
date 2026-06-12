import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const LINKS = [
  { label: 'Accueil',     to: '/',            end: true  },
  { label: 'Cours',       to: '/cours',       end: false },
  { label: 'Planning',    to: '/planning',    end: false },
  { label: 'Événements',  to: '/evenements',  end: false },
  { label: 'À propos',    to: '/a-propos',    end: false },
  { label: 'Contact',     to: '/contact',     end: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: 'rgba(45,27,78,.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(201,168,76,.2)',
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
            style={{ color: '#C9A84C', letterSpacing: '.01em' }}
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
                fontWeight: isActive ? 600 : 400,
                padding: '.45rem 1rem',
                borderRadius: '9999px',
                color: isActive ? '#C9A84C' : 'rgba(240,234,214,.78)',
                background: isActive ? 'rgba(201,168,76,.15)' : 'transparent',
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
            to="/inscription"
            className="btn btn-primary hidden md:inline-flex"
            style={{ padding: '.5rem 1.25rem', fontSize: '.8125rem' }}
          >
            S'inscrire
          </Link>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Fermer' : 'Menu'}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl transition-colors"
            style={{ background: open ? 'rgba(201,168,76,.15)' : 'transparent' }}
          >
            <span className="block h-0.5 w-5 transition-all duration-200"
              style={{ background: '#F0EAD6', transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }} />
            <span className="block h-0.5 w-5 transition-all duration-200"
              style={{ background: '#F0EAD6', opacity: open ? 0 : 1 }} />
            <span className="block h-0.5 w-5 transition-all duration-200"
              style={{ background: '#F0EAD6', transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(45,27,78,.98)',
            borderTop: '1px solid rgba(201,168,76,.2)',
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
                color: isActive ? '#C9A84C' : 'rgba(240,234,214,.8)',
                background: isActive ? 'rgba(201,168,76,.15)' : 'transparent',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/inscription"
            className="btn btn-primary mt-3"
            onClick={() => setOpen(false)}
          >
            S'inscrire
          </Link>
        </div>
      )}
    </header>
  )
}
