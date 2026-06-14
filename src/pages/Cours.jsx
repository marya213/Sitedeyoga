import { useState } from "react";
import { Link } from "react-router-dom";
import { PRICING, SCHEDULE, DAYS } from "../data/index";
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

const DISCIPLINES = [
  {
    type: "yoga",
    title: "Presentiel",
    variants: "Pratique en salle",
    desc: "L'intensite et la connexion d'une pratique vecue ensemble.",
  },
  {
    type: "studio",
    title: "Studio Yoga",
    variants: "Pratique en ligne",
    desc: "La puissance du yoga, ou que vous soyez.",
  },
  {
    type: "hybride",
    title: "Hybride",
    variants: "Presentiel & studio",
    desc: "Quand l'energie du presentiel rencontre la liberte du distanciel.",
  },
];

export default function Cours() {
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
            Nos cours
          </h1>
          <p
            className="leading-relaxed mb-3"
            style={{
              color: "var(--color-secondary)",
              maxWidth: "48ch",
              marginInline: "auto",
            }}
          >
            Le Kundalini Yoga m'a permis de faire une véritable rencontre avec
            moi-même. De me réapproprier mon corps. De ressentir, en profondeur,
            ce qui se manifeste en moi.
          </p>
          <p
            className="leading-relaxed mb-8"
            style={{
              color: "var(--color-secondary)",
              maxWidth: "48ch",
              marginInline: "auto",
            }}
          >
            Chaque séance est unique, parce que vous êtes unique.
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
              className="btn btn-secondary"
              style={{ padding: ".75rem 1.75rem" }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* ══ Disciplines ═══════════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5rem 0" }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <h2
              className="font-serif font-light text-3xl"
              style={{ color: "#F0EAD6" }}
            >
              Les disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DISCIPLINES.map((d) => (
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

      {/* ══ Tarifs ════════════════════════════════════════════ */}
      <section id="tarifs" style={{ background: "#F5F0E8", padding: "5rem 0" }}>
        <div className="section-inner">
          <div className="text-center mb-12">
            <h2 className="font-serif font-light text-3xl">
              Choisissez votre formule
            </h2>
            <p
              className="text-sm mt-3"
              style={{ color: "var(--color-secondary)" }}
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
                  borderRadius: ".25rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  minHeight: "100%",
                  background: "#fff",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 2px 8px rgba(44,44,44,.04)",
                }}
              >
                {/* Nom & prix */}
                <div>
                  <p
                    className="font-serif text-3xl font-semibold mb-1"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {plan.name}
                  </p>
                  <div className="mt-5 flex items-end gap-1.5">
                    <p
                      className="font-serif font-semibold"
                      style={{
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        color: "var(--color-primary)",
                      }}
                    >
                      {plan.price}€
                    </p>
                  </div>
                  <p
                    className="text-sm mt-3 leading-relaxed"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {plan.desc}
                  </p>
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
    </main>
  );
}
