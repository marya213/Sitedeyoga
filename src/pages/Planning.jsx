import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DAYS, SCHEDULE, TYPE_STYLES } from '../data/index'

const JS_TO_FR = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
const TODAY_FR = JS_TO_FR[new Date().getDay()]

const TYPE_FILTERS = [
  { key: 'tous', label: 'Tous' },
  { key: 'yoga', label: '🧘 Yoga' },
  { key: 'studio', label: '💻 Studio en ligne' },
]

function ClassCard({ cls }) {
  const s = TYPE_STYLES[cls.type]
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: '1rem',
        background: '#fff',
        borderRadius: '.875rem',
        border: '1px solid rgba(201,168,76,.15)',
        overflow: 'hidden',
        boxShadow: '0 1px 6px rgba(45,27,78,.05)',
        transition: 'box-shadow .2s, transform .2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(45,27,78,.11)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(45,27,78,.05)'; e.currentTarget.style.transform = 'none' }}
    >
      {/* Barre colorée gauche */}
      <div style={{ width: '4px', flexShrink: 0, background: s.dot }} />

      {/* Contenu */}
      <div style={{ padding: '1rem 1rem 1rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '.375rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem' }}>
          <span
            className="pill"
            style={{ background: s.slot.includes('primary') ? 'rgba(201,168,76,.12)' : s.slot.includes('secondary') ? 'rgba(123,94,167,.1)' : 'rgba(139,74,107,.1)', color: s.dot, borderColor: 'transparent', fontSize: '.625rem' }}
          >
            {s.label}
          </span>
          <span style={{ fontSize: '.8125rem', fontWeight: 700, color: 'var(--color-primary)' }}>
            {cls.time}
          </span>
        </div>

        <h3 className="font-serif" style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-ink)', lineHeight: 1.3 }}>
          {cls.name}
        </h3>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '.8125rem', color: 'var(--color-ink-muted)' }}>⏱ {cls.dur}</span>
          <span style={{ fontSize: '.8125rem', color: 'var(--color-ink-muted)' }}>👤 {cls.inst}</span>
        </div>
      </div>

      {/* CTA réserver */}
      <div style={{ display: 'flex', alignItems: 'center', paddingRight: '1rem' }}>
        <Link
          to="/contact"
          className="btn"
          style={{
            padding: '.375rem .875rem',
            fontSize: '.75rem',
            background: 'var(--color-neutral)',
            color: 'var(--color-ink)',
            border: '1px solid var(--color-border)',
            whiteSpace: 'nowrap',
          }}
        >
          Réserver
        </Link>
      </div>
    </div>
  )
}

export default function Planning() {
  const defaultDay = DAYS.includes(TODAY_FR) ? TODAY_FR : 'Lundi'
  const [activeDay, setActiveDay] = useState(defaultDay)
  const [filter, setFilter] = useState('tous')

  const dayCounts = DAYS.reduce((acc, day) => {
    acc[day] = SCHEDULE.filter(c => c.day === day && (filter === 'tous' || c.type === filter)).length
    return acc
  }, {})

  const classes = SCHEDULE
    .filter(c => c.day === activeDay && (filter === 'tous' || c.type === filter))
    .sort((a, b) => a.time.localeCompare(b.time))

  return (
    <main className="pt-16">
      {/* ══ Hero ═══════════════════════════════════════════════ */}
      <section style={{ background: '#2D1B4E', padding: '4rem 0 3rem' }}>
        <div className="section-inner text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(201,168,76,.7)' }}>
            Cours récurrents
          </p>
          <h1 className="font-serif font-light mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#F0EAD6' }}>
            Planning des cours
          </h1>
          <p style={{ color: 'rgba(240,234,214,.7)', fontSize: '1.0625rem', maxWidth: '44ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Retrouvez tous les cours réguliers semaine après semaine. Filtrez par type et choisissez votre créneau.
          </p>
        </div>
      </section>

      {/* ══ Planning ═══════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-neutral)', padding: '4rem 0 5rem' }}>
        <div className="section-inner">

          {/* Filtres type */}
          <div style={{ display: 'flex', gap: '.375rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {TYPE_FILTERS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className="btn"
                style={{
                  padding: '.4rem 1rem',
                  fontSize: '.8125rem',
                  fontWeight: filter === tab.key ? 600 : 400,
                  background: filter === tab.key ? '#2D1B4E' : 'transparent',
                  color: filter === tab.key ? '#C9A84C' : 'var(--color-ink-muted)',
                  border: filter === tab.key ? '1px solid transparent' : '1px solid rgba(201,168,76,.2)',
                  borderRadius: '9999px',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sélecteur de jours */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '.375rem',
              marginBottom: '2rem',
            }}
          >
            {DAYS.map(day => {
              const isActive = activeDay === day
              const isToday = day === TODAY_FR
              const count = dayCounts[day]
              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '.25rem',
                    padding: '.625rem .25rem',
                    borderRadius: '.875rem',
                    border: isToday && !isActive ? '1.5px solid rgba(201,168,76,.4)' : '1.5px solid transparent',
                    background: isActive ? '#2D1B4E' : 'transparent',
                    cursor: 'pointer',
                    transition: 'background .15s',
                  }}
                >
                  <span style={{
                    fontSize: '.625rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '.05em',
                    color: isActive ? '#C9A84C' : isToday ? 'var(--color-primary)' : 'var(--color-ink-faint)',
                  }}>
                    {day.slice(0, 3)}
                  </span>
                  {isToday && (
                    <span style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '9999px',
                      background: isActive ? '#C9A84C' : 'var(--color-primary)',
                    }} />
                  )}
                  <span style={{
                    fontSize: '.6875rem',
                    fontWeight: 500,
                    color: isActive ? 'rgba(240,234,214,.6)' : 'var(--color-ink-faint)',
                  }}>
                    {count} cours
                  </span>
                </button>
              )
            })}
          </div>

          {/* Titre du jour actif */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '.75rem' }}>
            <h2 className="font-serif font-light" style={{ fontSize: '1.75rem', color: 'var(--color-ink)' }}>
              {activeDay}
            </h2>
            {activeDay === TODAY_FR && (
              <span className="pill" style={{ background: 'rgba(201,168,76,.18)', color: '#9A6E1A', borderColor: 'rgba(201,168,76,.35)', fontSize: '.625rem' }}>
                ● Aujourd'hui
              </span>
            )}
          </div>

          {/* Liste des cours */}
          {classes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--color-ink-faint)' }}>
              <p className="font-serif text-xl mb-2">Aucun cours ce jour</p>
              <p style={{ fontSize: '.9375rem' }}>Essayez un autre filtre ou un autre jour.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {classes.map(cls => <ClassCard key={cls.id} cls={cls} />)}
            </div>
          )}
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section style={{ background: '#2D1B4E', padding: '4rem clamp(1.25rem,5vw,3rem)' }}>
        <div style={{ maxWidth: '36rem', marginInline: 'auto', textAlign: 'center' }}>
          <h2 className="font-serif font-light mb-3" style={{ fontSize: 'clamp(1.5rem,3.5vw,2rem)', color: '#F0EAD6' }}>
            Prêt·e à réserver ?
          </h2>
          <p style={{ color: 'rgba(240,234,214,.68)', fontSize: '.9375rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>
            Choisissez votre formule et réservez votre premier cours en quelques clics.
          </p>
          <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/cours" className="btn" style={{ background: 'var(--color-neutral)', color: '#2C1810', padding: '.875rem 2rem' }}>
              Voir les tarifs
            </Link>
            <Link to="/contact" className="btn btn-outlined" style={{ padding: '.875rem 2rem' }}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
