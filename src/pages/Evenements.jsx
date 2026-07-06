import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { subscribeToEvents } from "../services/eventsService";
import { downloadInscriptionPdf } from "../services/inscriptionPdfService";

const TODAY = new Date().toISOString().slice(0, 10);

// TODO(yoga): remplacer par le lien de paiement Stripe définitif
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REMPLACER_PAR_LE_LIEN_STRIPE";
// TODO(yoga): remplacer par le lien Notion définitif
const NOTION_INFO_LINK = "https://notion.so/REMPLACER_PAR_LE_LIEN_NOTION";

function formatDateLabel(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return {
    dayNum: date.getDate(),
    dayName: date.toLocaleDateString("fr-FR", { weekday: "long" }),
    monthFull: date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

function EventCard({ event, isToday }) {
  const isPast = event.date < TODAY;
  const hasCost = event.cout !== null && event.cout !== undefined && event.cout !== "";

  return (
    <div
      className="card"
      style={{
        opacity: isPast ? 0.6 : 1,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div className={event.image ? "flex flex-col sm:flex-row" : "flex flex-col"}>
        {event.image && (
          <img
            src={event.image}
            alt={event.titre}
            loading="lazy"
            className="w-full h-[180px] sm:h-auto sm:w-64 sm:flex-shrink-0"
            style={{ objectFit: "cover", display: "block" }}
          />
        )}

        <div
          style={{
            flex: 1,
            minWidth: 0,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: ".75rem",
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {isToday && !isPast && (
              <span
                className="pill"
                style={{
                  background: "rgba(201,168,76,.2)",
                  color: "#9A6E1A",
                  borderColor: "rgba(201,168,76,.4)",
                  fontSize: ".6rem",
                  animation: "pulse 2s infinite",
                }}
              >
                ● Aujourd'hui
              </span>
            )}
            <span
              style={{
                fontSize: ".8125rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                whiteSpace: "nowrap",
                marginLeft: "auto",
              }}
            >
              {hasCost ? `${event.cout} €` : "Gratuit"}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-serif"
            style={{
              fontSize: "1.1875rem",
              fontWeight: 600,
              color: "var(--color-ink)",
              lineHeight: 1.3,
            }}
          >
            {event.titre}
          </h3>

          {/* Meta */}
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: ".8125rem",
                color: "var(--color-ink-muted)",
                display: "flex",
                alignItems: "center",
                gap: ".3rem",
              }}
            >
              <span style={{ opacity: 0.6 }}>🕐</span> {event.heure}
            </span>
            <span
              style={{
                fontSize: ".8125rem",
                color: "var(--color-ink-muted)",
                display: "flex",
                alignItems: "center",
                gap: ".3rem",
              }}
            >
              <span style={{ opacity: 0.6 }}>📍</span> {event.localisation}
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: ".875rem",
              color: "var(--color-secondary)",
              lineHeight: 1.65,
            }}
          >
            {event.description}
          </p>

          {/* CTA */}
          {!isPast && (
            <div style={{ marginTop: ".25rem", display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => downloadInscriptionPdf(event)}
                className="btn"
                style={{
                  padding: ".5rem 1.25rem",
                  fontSize: ".8125rem",
                  background: "var(--color-neutral)",
                  color: "var(--color-ink)",
                  border: "1px solid var(--color-border)",
                }}
              >
                S'inscrire via le formulaire →
              </button>
              {hasCost && (
                <>
                  <a
                    href={STRIPE_PAYMENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      padding: ".5rem 1.25rem",
                      fontSize: ".8125rem",
                      background: "var(--color-primary)",
                      color: "#fff",
                      border: "1px solid var(--color-primary)",
                    }}
                  >
                    Payer →
                  </a>
                  <a
                    href={NOTION_INFO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      padding: ".5rem 1.25rem",
                      fontSize: ".8125rem",
                      background: "var(--color-neutral)",
                      color: "var(--color-ink)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    En savoir plus
                  </a>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DateHeader({ dateStr, isToday }) {
  const { dayNum, dayName, monthFull } = formatDateLabel(dateStr);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: ".75rem",
          background: isToday ? "#2D1B4E" : "rgba(201,168,76,.15)",
          color: isToday ? "#C9A84C" : "var(--color-ink)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: "1.125rem", fontWeight: 700, lineHeight: 1 }}>
          {dayNum}
        </span>
      </div>
      <div>
        <p
          style={{
            fontSize: ".8125rem",
            fontWeight: 600,
            textTransform: "capitalize",
            color: isToday ? "#2D1B4E" : "var(--color-ink-muted)",
          }}
        >
          {isToday ? "✦ Aujourd'hui — " : ""}
          {dayName}
        </p>
        <p
          style={{
            fontSize: ".75rem",
            color: "var(--color-ink-faint)",
            textTransform: "capitalize",
          }}
        >
          {monthFull}
        </p>
      </div>
    </div>
  );
}

export default function Evenements() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToEvents(
      (data) => {
        setEvents(data);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  const upcoming = events.filter((e) => e.date >= TODAY);
  const past = [...events.filter((e) => e.date < TODAY)].reverse();

  const grouped = upcoming.reduce((acc, e) => {
    acc[e.date] = acc[e.date] ? [...acc[e.date], e] : [e];
    return acc;
  }, {});
  const sortedDates = Object.keys(grouped).sort();

  return (
    <main className="pt-16">
      {/* Hero */}
      <section style={{ background: "#2D1B4E", padding: "4rem 0 3rem" }}>
        <div className="section-inner text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "rgba(201,168,76,.7)" }}
          >
            Rendez-vous ponctuels
          </p>
          <h1
            className="font-serif font-light mb-4"
            style={{ fontSize: "clamp(2rem,5vw,3rem)", color: "#F0EAD6" }}
          >
            Événements
          </h1>
          <p
            style={{
              color: "rgba(240,234,214,.7)",
              fontSize: "1.0625rem",
              maxWidth: "44ch",
              marginInline: "auto",
              lineHeight: 1.7,
            }}
          >
            Ateliers, masterclass, concerts de sons et stages intensifs — des
            moments exceptionnels pour approfondir votre pratique.
          </p>
        </div>
      </section>

      {/* ══ Événements à venir */}
      <section
        style={{ background: "var(--color-neutral)", padding: "4rem 0 5rem" }}
      >
        <div className="section-inner">
          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--color-ink-faint)" }}>
              Chargement des événements…
            </div>
          ) : error ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#c0392b" }}>
              Impossible de charger les événements pour le moment.
            </div>
          ) : sortedDates.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "var(--color-ink-faint)",
              }}
            >
              <p className="font-serif text-2xl mb-2">
                Aucun événement à venir
              </p>
              <p style={{ fontSize: ".9375rem" }}>
                Revenez bientôt pour découvrir les prochains rendez-vous.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
              }}
            >
              {sortedDates.map((date) => {
                const isToday = date === TODAY;
                return (
                  <div key={date}>
                    <DateHeader dateStr={date} isToday={isToday} />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        paddingLeft: "1rem",
                        borderLeft: "2px solid rgba(201,168,76,.18)",
                      }}
                    >
                      {grouped[date].map((event) => (
                        <EventCard
                          key={event.id}
                          event={event}
                          isToday={isToday}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/*  Événements passés */}
          {past.length > 0 && (
            <div style={{ marginTop: "4rem" }}>
              <h2
                className="font-serif font-light text-2xl mb-6"
                style={{ color: "var(--color-ink)" }}
              >
                Événements passés
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                {past
                  .reduce((acc, e) => {
                    const last = acc[acc.length - 1];
                    if (!last || last.date !== e.date)
                      acc.push({ date: e.date, items: [e] });
                    else last.items.push(e);
                    return acc;
                  }, [])
                  .map((group) => (
                    <div key={group.date}>
                      <DateHeader dateStr={group.date} isToday={false} />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          paddingLeft: "1rem",
                          borderLeft: "2px solid rgba(0,0,0,.07)",
                        }}
                      >
                        {group.items.map((event) => (
                          <EventCard
                            key={event.id}
                            event={event}
                            isToday={false}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
