import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EVENTS, EVENT_TYPE_STYLES } from '../data/index'

const TODAY = new Date().toISOString().slice(0, 10)

const FILTER_TABS = [
  { key: 'tous', label: 'Tous' },
  { key: 'atelier', label: 'Ateliers' },
  { key: 'masterclass', label: 'Masterclass' },
  { key: 'concert', label: 'Concerts' },
  { key: 'stage', label: 'Stages' },
]

function formatDateLabel(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return {
    dayNum: date.getDate(),
    dayName: date.toLocaleDateString('fr-FR', { weekday: 'long' }),
    monthFull: date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

function TypePill({ type }) {
  const s = EVENT_TYPE_STYLES[type]
  return (
    <span
      className="pill"
      style={{
        background: s.bg,
        color: s.color,
        borderColor: s.border,
        fontSize: '.625rem',
        fontWeight: 700,
        letterSpacing: '.05em',
      }}
    >
      {s.label}
    </span>
  )
}

function SpotsBar({ total, left }) {
  const pct = Math.round((left / total) * 100)
  const color = left === 0 ? '#c0392b' : left <= 3 ? '#e67e22' : '#3D8B74'
  return (
    <div style={{ marginTop: '.5rem' }}>
      <div
        style={{
          height: '3px',
          background: 'rgba(0,0,0,.08)',
          borderRadius: '9999px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: color,
            borderRadius: '9999px',
            transition: 'width .4s',
          }}
        />
      </div>
      <p style={{ fontSize: '.6875rem', marginTop: '.25rem', color }}>
        {left === 0 ? 'Complet' : `${left} place${left > 1 ? 's' : ''} restante${left > 1 ? 's' : ''}`}
      </p>
    </div>
  )
}

function EventCard({ event, isToday }) {
  const s = EVENT_TYPE_STYLES[event.type]
  const isPast = event.date < TODAY
  const isFull = event.spotsLeft === 0

  return (
    <div
      className="card"
      style={{
        opacity: isPast ? 0.6 : 1,
        borderLeft: `3px solid ${s.dot}`,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '.75rem',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.625rem', flexWrap: 'wrap' }}>
          <TypePill type={event.type} />
          {isToday && !isPast && (
            <span
              className="pill"
              style={{
                background: 'rgba(201,168,76,.2)',
                color: '#9A6E1A',
                borderColor: 'rgba(201,168,76,.4)',
                fontSize: '.6rem',
                animation: 'pulse 2s infinite',
              }}
            >
              ● Aujourd'hui
            </span>
          )}
          {isFull && (
            <span
              className="pill"
              style={{ background: 'rgba(192,57,43,.1)', color: '#c0392b', borderColor: 'rgba(192,57,43,.2)', fontSize: '.6rem' }}
            >
              Complet
            </span>
          )}
        </div>
        <span
          style={{
            fontSize: '.8125rem',
            fontWeight: 700,
            color: 'var(--color-primary)',
            whiteSpace: 'nowrap',
          }}
        >
          {event.price} €
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-serif"
        style={{ fontSize: '1.1875rem', fontWeight: 600, color: 'var(--color-ink)', lineHeight: 1.3 }}
      >
        {event.name}
      </h3>

      {/* Meta */}
      <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '.8125rem', color: 'var(--color-ink-muted)', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
          <span style={{ opacity: .6 }}>🕐</span> {event.time} · {event.dur}
        </span>
        <span style={{ fontSize: '.8125rem', color: 'var(--color-ink-muted)', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
          <span style={{ opacity: .6 }}>👤</span> {event.inst}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: '.875rem', color: 'var(--color-secondary)', lineHeight: 1.65 }}>
        {event.desc}
      </p>

      {/* Spots + CTA */}
      {!isPast && (
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginTop: '.25rem' }}>
          <div style={{ flex: '1', minWidth: '120px' }}>
            <SpotsBar total={event.spots} left={event.spotsLeft} />
          </div>
          <Link
            to="/contact"
            className="btn"
            style={{
              padding: '.5rem 1.25rem',
              fontSize: '.8125rem',
              background: isFull ? 'transparent' : 'var(--color-neutral)',
              color: isFull ? 'var(--color-ink-faint)' : 'var(--color-ink)',
              border: isFull ? '1px solid rgba(0,0,0,.12)' : '1px solid var(--color-border)',
              pointerEvents: isFull ? 'none' : 'auto',
              opacity: isFull ? .5 : 1,
              whiteSpace: 'nowrap',
            }}
          >
            {isFull ? 'Complet' : 'S\'inscrire →'}
          </Link>
        </div>
      )}
    </div>
  )
}

function DateHeader({ dateStr, isToday }) {
  const { dayNum, dayName, monthFull } = formatDateLabel(dateStr)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <div
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '.75rem',
          background: isToday ? '#2D1B4E' : 'rgba(201,168,76,.15)',
          color: isToday ? '#C9A84C' : 'var(--color-ink)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: '1.125rem', fontWeight: 700, lineHeight: 1 }}>{dayNum}</span>
      </div>
      <div>
        <p style={{ fontSize: '.8125rem', fontWeight: 600, textTransform: 'capitalize', color: isToday ? '#2D1B4E' : 'var(--color-ink-muted)' }}>
          {isToday ? '✦ Aujourd\'hui — ' : ''}{dayName}
        </p>
        <p style={{ fontSize: '.75rem', color: 'var(--color-ink-faint)', textTransform: 'capitalize' }}>{monthFull}</p>
      </div>
    </div>
  )
}

export default function Evenements() {
  const [filter, setFilter] = useState('tous')
  const [showPast, setShowPast] = useState(false)

  const filtered = EVENTS.filter(e => filter === 'tous' || e.type === filter)
  const upcoming = filtered.filter(e => e.date >= TODAY)
  const past = [...filtered.filter(e => e.date < TODAY)].reverse()

  const grouped = upcoming.reduce((acc, e) => {
    acc[e.date] = acc[e.date] ? [...acc[e.date], e] : [e]
    return acc
  }, {})
  const sortedDates = Object.keys(grouped).sort()

  return (
    <main className="pt-16">
      {/* ══ Hero ═══════════════════════════════════════════════ */}
      <section style={{ background: '#2D1B4E', padding: '4rem 0 3rem' }}>
        <div className="section-inner text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'rgba(201,168,76,.7)' }}
          >
            Rendez-vous ponctuels
          </p>
          <h1
            className="font-serif font-light mb-4"
            style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#F0EAD6' }}
          >
            Événements
          </h1>
          <p
            style={{
              color: 'rgba(240,234,214,.7)',
              fontSize: '1.0625rem',
              maxWidth: '44ch',
              marginInline: 'auto',
              lineHeight: 1.7,
            }}
          >
            Ateliers, masterclass, concerts de sons et stages intensifs — des moments exceptionnels pour approfondir votre pratique.
          </p>
        </div>
      </section>

      {/* ══ Filtres + Événements ══════════════════════════════ */}
      <section style={{ background: 'var(--color-neutral)', padding: '4rem 0 5rem' }}>
        <div className="section-inner">

          {/* Filtres */}
          <div
            style={{
              display: 'flex',
              gap: '.375rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            {FILTER_TABS.map(tab => (
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

          {/* Événements à venir */}
          {sortedDates.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-ink-faint)' }}>
              <p className="font-serif text-2xl mb-2">Aucun événement à venir</p>
              <p style={{ fontSize: '.9375rem' }}>Revenez bientôt pour découvrir les prochains rendez-vous.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {sortedDates.map(date => {
                const isToday = date === TODAY
                return (
                  <div key={date}>
                    <DateHeader dateStr={date} isToday={isToday} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(201,168,76,.18)' }}>
                      {grouped[date].map(event => (
                        <EventCard key={event.id} event={event} isToday={isToday} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Événements passés */}
          {past.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <button
                onClick={() => setShowPast(v => !v)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.5rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-ink-faint)',
                  fontSize: '.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: 0,
                  marginBottom: showPast ? '1.5rem' : 0,
                }}
              >
                <span style={{ transform: showPast ? 'rotate(90deg)' : 'none', transition: 'transform .2s', display: 'inline-block' }}>▶</span>
                {showPast ? 'Masquer' : 'Voir'} les événements passés ({past.length})
              </button>

              {showPast && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {past.reduce((acc, e) => {
                    const last = acc[acc.length - 1]
                    if (!last || last.date !== e.date) acc.push({ date: e.date, items: [e] })
                    else last.items.push(e)
                    return acc
                  }, []).map(group => (
                    <div key={group.date}>
                      <DateHeader dateStr={group.date} isToday={false} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem', borderLeft: '2px solid rgba(0,0,0,.07)' }}>
                        {group.items.map(event => (
                          <EventCard key={event.id} event={event} isToday={false} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
