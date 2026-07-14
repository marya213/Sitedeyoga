import { useState } from "react";
import NewsletterForm from "../components/NewsletterForm";

async function sendContactToFlodesk({ name, email, phone, subject, message }) {
  const apiKey = import.meta.env.VITE_FLODESK_API_KEY;
  const segmentId = import.meta.env.VITE_FLODESK_CONTACT_SEGMENT_ID;

  const credentials = btoa(`${apiKey}:`);

  const body = {
    email,
    first_name: name,
    status: "active",
    custom_fields: {
      numeroDeTel: phone,
      sujet: subject,
      message: message,
    },
  };

  if (segmentId) {
    body.segment_ids = [segmentId];
  }

  const res = await fetch("https://api.flodesk.com/v1/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `Erreur ${res.status}`);
  }

  return res.json();
}

const INFO_BLOCKS = [
  {
    icon: "📍",
    label: "Adresse",
    lines: ["Saint Brieuc centre "],
  },
  {
    icon: "📞",
    label: "Téléphone",
    lines: ["+33 6 63 57 04 26"],
  },
  {
    icon: "✉️",
    label: "Email",
    lines: ["emmanuelledruneau@gmail.com"],
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="igGradientContact" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect
          x="2.1"
          y="2.1"
          width="19.8"
          height="19.8"
          rx="5.6"
          fill="url(#igGradientContact)"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          stroke="#fff"
          strokeWidth="1.9"
          fill="none"
        />
        <circle cx="17.15" cy="6.9" r="1.3" fill="#fff" />
      </svg>
    ),
    label: "Instagram",
    lines: ["@Kundalini Yoga"],
    href: "https://www.instagram.com/emmanuelledruneau_kundalini/",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2.1" y="2.1" width="19.8" height="19.8" rx="5.6" fill="#1877F2" />
        <g transform="translate(5.81 2.1) scale(0.0387)">
          <path
            fill="#fff"
            d="M279.14 288l14.22-92.66h-86.36v-59.7c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S259.5 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </g>
      </svg>
    ),
    label: "Facebook",
    lines: ["Emmanuelle Druneau"],
    href: "https://www.facebook.com/profile.php?id=100008138531485",
  },
];

const HOURS = [
  { days: "Lundi", hours: "09 h 30" },
  { days: "Mardi", hours: "10 h 30" },
  { days: "Mercredi", hours: "11 h 00" },
];

const SUBJECTS = [
  "Réservation d'un cours",
  "Informations tarifaires",
  "Offre de bienvenue",
  "Demande particulière",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await sendContactToFlodesk(form);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

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
            Contact
          </h1>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--color-secondary)",
              maxWidth: "42ch",
              marginInline: "auto",
            }}
          >
            Une question, une réservation ou envie d'en savoir plus&nbsp;?.
          </p>
        </div>
      </section>

      {/* ══ Contenu principal ═════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5rem 0" }}>
        <div
          className="section-inner md:grid-cols-2"
          style={{
            display: "grid",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* ── Colonne gauche : infos ── */}
          <div className="lg:col-span-1">
            <h2
              className="font-serif font-light text-2xl md:text-3xl mb-3"
              style={{ color: "#F0EAD6" }}
            >
              Informations pratiques
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(240,234,214,.72)", maxWidth: "40ch" }}
            >
              Notre équipe est disponible 7j/7 pour répondre à vos questions et
              vous aider à trouver le cours qui vous correspond.
            </p>

            {/* Info blocks */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {INFO_BLOCKS.map((block) => (
                <div
                  key={block.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    className="nav-icon active flex-shrink-0"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    {block.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "rgba(240,234,214,.55)" }}
                    >
                      {block.label}
                    </div>
                    {block.lines.map((line) =>
                      block.href ? (
                        <a
                          key={line}
                          href={block.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm transition-colors"
                          style={{ color: "#F0EAD6" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#C9A84C")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#F0EAD6")
                          }
                        >
                          {line}
                        </a>
                      ) : (
                        <div
                          key={line}
                          className="text-sm"
                          style={{ color: "#F0EAD6" }}
                        >
                          {line}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            <NewsletterForm
              title="Newsletter bien-etre"
              description="Inscrivez-vous pour recevoir nos inspirations, evenements et offres exclusives."
              buttonLabel="Je m'inscris"
            />
          </div>

          {/* ── Colonne droite : formulaire ── */}
          <div className="card" style={{ padding: "2rem" }}>
            {status === "success" ? (
              /* État de succès */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "2rem 0",
                }}
              >
                <span style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  🌿
                </span>
                <h3
                  className="font-serif font-light text-2xl mb-3"
                  style={{ color: "var(--color-ink)" }}
                >
                  Message envoyé avec succès
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-secondary)", maxWidth: "28ch" }}
                >
                  Merci pour votre message. Notre équipe vous répondra dans les
                  plus brefs délais, sous 24 heures maximum.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ padding: ".75rem 1.75rem" }}
                  onClick={() => {
                    setStatus("idle");
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              /* Formulaire */
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <h3
                  className="font-serif font-light text-xl"
                  style={{ color: "var(--color-ink)" }}
                >
                  Envoyez-nous un message
                </h3>

                {/* Nom + Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(1,1fr)",
                    gap: "1rem",
                  }}
                  className="sm:grid-cols-2"
                >
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-secondary)" }}
                      htmlFor="name"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Marie Dupont"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-secondary)" }}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="marie@exemple.fr"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--color-secondary)" }}
                    htmlFor="phone"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={form.phone}
                    onChange={handleChange}
                    className="input"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--color-secondary)" }}
                    htmlFor="subject"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="" disabled>
                      Choisir un sujet…
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--color-secondary)" }}
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Dites-nous comment nous pouvons vous aider…"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="input"
                    style={{ resize: "none" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm" style={{ color: "#c0392b" }}>
                    {errorMsg || "Une erreur est survenue. Veuillez réessayer."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary"
                  style={{
                    padding: ".75rem 1.75rem",
                    marginTop: ".25rem",
                    opacity: status === "loading" ? 0.7 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
