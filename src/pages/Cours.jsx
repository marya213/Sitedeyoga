import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PRICING,
  SCHEDULE,
  DAYS,
  COURS_DETAILS,
  COURS_DISTANCIEL,
} from "../data/index";
import Pill from "../components/ui/Pill";

const SLOT_BORDER = {
  studio: "#C9A84C",
  yoga: "#7E9B7A",
  hybride: "#D97706",
};

// JS getDay() : 0=dim, 1=lun … → DAYS index
const JS_TO_FR = [6, 0, 1, 2, 3, 4, 5];

function WeekSchedule() {
  const defaultDay = DAYS[JS_TO_FR[new Date().getDay()]] ?? DAYS[0];
  const [activeDay, setActiveDay] = useState(defaultDay);

  const dayClasses = SCHEDULE.filter((c) => c.day === activeDay).sort((a, b) =>
    a.time.localeCompare(b.time),
  );

  return (
    <div>
      {/* ── Onglets jours ── */}
      <div
        style={{
          display: "flex",
          gap: ".5rem",
          overflowX: "auto",
          paddingBottom: ".5rem",
          marginBottom: "2rem",
          scrollbarWidth: "none",
        }}
      >
        {DAYS.map((day) => {
          const active = day === activeDay;
          return (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              style={{
                padding: ".5rem 1.25rem",
                borderRadius: "9999px",
                border: `1px solid ${active ? "#C9A84C" : "rgba(201,168,76,.25)"}`,
                background: active ? "#C9A84C" : "transparent",
                color: active ? "#2D1B4E" : "rgba(240,234,214,.8)",
                fontWeight: active ? 700 : 400,
                fontSize: ".875rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all .2s",
              }}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* ── Cours du jour ── */}
      {dayClasses.length === 0 ? (
        <p
          style={{
            color: "rgba(240,234,214,.5)",
            textAlign: "center",
            padding: "2rem 0",
          }}
        >
          Pas de séance ce jour.
        </p>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "column", gap: ".875rem" }}
        >
          {dayClasses.map((cls) => (
            <div
              key={cls.id}
              className="card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1rem 1.5rem",
                borderLeft: `3px solid ${SLOT_BORDER[cls.type] ?? "#C9A84C"}`,
              }}
            >
              {/* Heure */}
              <div
                style={{
                  minWidth: "3.5rem",
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  className="font-serif font-semibold"
                  style={{ fontSize: "1.1rem", color: "var(--color-ink)" }}
                >
                  {cls.time}
                </span>
              </div>

              {/* Séparateur vertical */}
              <div
                style={{
                  width: "1px",
                  alignSelf: "stretch",
                  background: "var(--color-border)",
                  flexShrink: 0,
                }}
              />

              {/* Infos */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".75rem",
                    flexWrap: "wrap",
                    marginBottom: ".25rem",
                  }}
                >
                  <span
                    className="font-semibold text-sm"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {cls.name}
                  </span>
                  <Pill type={cls.type} />
                </div>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {cls.inst}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, ctaLabel, ctaTo }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div>
        <h3
          className="font-serif text-2xl font-semibold mb-1.5"
          style={{ color: "var(--color-ink)" }}
        >
          {course.name}
        </h3>
        <p
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-primary)" }}
        >
          🕐 {course.creneaux}
        </p>
      </div>

      <p className="text-xs" style={{ color: "var(--color-secondary)" }}>
        {course.style.join(" • ")}
      </p>

      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-ink)" }}
      >
        {course.pourQui}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
        {course.themes.map((t) => (
          <span
            key={t}
            className="pill pill-secondary"
            style={{ fontSize: ".625rem" }}
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        to={ctaTo}
        className="btn btn-primary"
        style={{
          marginTop: "auto",
          justifyContent: "center",
          padding: ".875rem 1.5rem",
        }}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}

const COURS_FILTERS = [
  { key: "presentiel", label: "Présentiel" },
  { key: "distanciel", label: "Distanciel" },
];

const ALL_COURS = [...COURS_DETAILS, ...COURS_DISTANCIEL];

const PROPOSITIONS = [
  {
    type: "yoga",
    title: "Présentiel",
    variants: "Pratique en salle",
    desc: "L'intensité et la connexion d'une pratique vécue ensemble.",
  },
  {
    type: "studio",
    title: "Studio de Yoga en ligne",
    variants: "Pratique en ligne",
    desc: "La puissance du yoga, où que vous soyez.",
  },
  {
    type: "hybride",
    title: "Hybride",
    variants: "Présentiel & studio",
    desc: "Quand l'énergie du présentiel rencontre la liberté du distanciel.",
  },
];

export default function Cours() {
  const [coursFilter, setCoursFilter] = useState("presentiel");
  const filteredCours = ALL_COURS.filter((c) => c.mode === coursFilter);

  return (
    <main className="pt-16">
      {/* ══ Header ════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "65vh", padding: "6rem clamp(1.25rem,5vw,3rem) 4rem" }}
      >
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/posture-meditation-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 25%",
            backgroundColor: "#2D1B4E",
          }}
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #2D1B4E80 0%, #2D1B4E55 50%, #2D1B4Ea8 100%)",
          }}
        />

        <div className="relative z-10" style={{ maxWidth: "44rem" }}>
          <h1
            className="font-serif font-light mb-4"
            style={{
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#F0EAD6",
              textShadow: "0 2px 20px rgba(0,0,0,.35)",
            }}
          >
            Nos cours
          </h1>
          <p
            className="leading-relaxed mb-8"
            style={{
              color: "rgba(240,234,214,.9)",
              maxWidth: "48ch",
              marginInline: "auto",
              textShadow: "0 1px 12px rgba(0,0,0,.4)",
            }}
          >
            Une pratique qui vous reconnecte à vous-même — chaque séance est
            unique, parce que vous êtes unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#tarifs"
              className="btn btn-primary"
              style={{ padding: ".75rem 1.75rem" }}
            >
              Voir les tarifs
            </a>
            <Link
              to="/contact"
              className="btn btn-outlined"
              style={{ padding: ".75rem 1.75rem" }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Disciplines + Tarifs sur fond photo ═══════════════ */}
      <div className="relative">
        {/* Image de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/img/posture-meditation-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#2D1B4E",
          }}
        />
        {/* Overlay dégradé */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #2D1B4E75 0%, #2D1B4E55 100%)",
          }}
        />

        {/* ══ Disciplines ═════════════════════════════════════ */}
        <section className="relative" style={{ padding: "5rem 0" }}>
          <div className="section-inner">
            <div className="text-center mb-12">
              <h2
                className="font-serif font-light text-3xl"
                style={{ color: "#F0EAD6", textShadow: "0 1px 12px rgba(0,0,0,.4)" }}
              >
                Les disciplines
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROPOSITIONS.map((d) => (
                <div key={d.type} className="card text-center">
                  <div className="mb-4">
                    <Pill type={d.type} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-1">
                    {d.title}
                  </h3>
                  <p
                    className="text-xs font-medium mb-3"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {d.variants}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Tarifs ══════════════════════════════════════════ */}
        <section id="tarifs" className="relative" style={{ padding: "5rem 0" }}>
          <div className="section-inner">
            <div className="text-center mb-12">
              <h2
                className="font-serif font-light text-3xl"
                style={{ color: "#F0EAD6", textShadow: "0 1px 12px rgba(0,0,0,.4)" }}
              >
                Choisissez votre formule
              </h2>
              <p
                className="text-sm mt-3"
                style={{ color: "rgba(240,234,214,.85)", textShadow: "0 1px 8px rgba(0,0,0,.35)" }}
              >
                Toutes les formules donnent accès aux cours en présentiel et en
                ligne.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                style={{
                  borderRadius: "1.25rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  minHeight: "100%",
                  background: "#fff",
                  border: plan.highlighted
                    ? "2px solid var(--color-primary)"
                    : "1px solid var(--color-border)",
                  boxShadow: "0 2px 8px rgba(44,44,44,.04)",
                }}
              >
                {/* Nom & prix */}
                <div>
                  {plan.badge && (
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{
                        color: plan.highlighted
                          ? "var(--color-primary)"
                          : "var(--color-secondary)",
                      }}
                    >
                      {plan.badge}
                    </p>
                  )}
                  <p
                    className="font-serif text-2xl font-semibold mb-1"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {plan.name}
                  </p>

                  {plan.priceTiers ? (
                    <div
                      className="mt-4"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5rem",
                      }}
                    >
                      {plan.priceTiers.map((tier) => (
                        <div
                          key={tier.label}
                          className="flex items-baseline justify-between gap-2 text-sm"
                        >
                          <span style={{ color: "var(--color-secondary)" }}>
                            {tier.label}
                          </span>
                          <span
                            className="font-serif font-semibold"
                            style={{
                              fontSize: "1.125rem",
                              color: "var(--color-primary)",
                            }}
                          >
                            {tier.price} €
                            {tier.oldPrice && (
                              <span
                                style={{
                                  marginLeft: ".4rem",
                                  fontSize: ".8125rem",
                                  fontWeight: 400,
                                  color: "var(--color-ink-faint)",
                                  textDecoration: "line-through",
                                }}
                              >
                                {tier.oldPrice} €
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 flex items-end gap-2 flex-wrap">
                      <p
                        className="font-serif font-semibold"
                        style={{
                          fontSize: "2.5rem",
                          lineHeight: 1,
                          color: "var(--color-primary)",
                        }}
                      >
                        {plan.price} €
                      </p>
                      {plan.oldPrice && (
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "var(--color-ink-faint)",
                            textDecoration: "line-through",
                          }}
                        >
                          {plan.oldPrice} €
                        </p>
                      )}
                    </div>
                  )}

                  {plan.priceNote && (
                    <p
                      className="text-xs mt-2"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      {plan.priceNote}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5rem",
                    flex: 1,
                  }}
                >
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                          width: ".95rem",
                          height: ".95rem",
                          marginTop: ".2rem",
                          fontSize: ".5rem",
                          fontWeight: 700,
                          background: "var(--color-primary-bg)",
                          color: "var(--color-primary)",
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: "var(--color-ink)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://espace-kundala.heymarvelous.com/buy/product/80596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    border: plan.highlighted
                      ? "1px solid rgba(45,27,78,.12)"
                      : "1px solid var(--color-border)",
                    background: "var(--color-neutral)",
                    color: "var(--color-ink)",
                    padding: ".75rem 1.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = plan.highlighted
                      ? "#f4f4f4"
                      : "rgba(201,168,76,.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--color-neutral)";
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>
    </main>
  );
}
