import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function subscribeToFlodesk(email) {
  const apiKey = import.meta.env.VITE_FLODESK_API_KEY;
  const segmentId = import.meta.env.VITE_FLODESK_NEWSLETTER_SEGMENT_ID;

  const credentials = btoa(`${apiKey}:`);

  const body = { email, status: "active" };
  if (segmentId) body.segments = [segmentId];

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
}

export default function NewsletterForm({
  title = "Newsletter",
  description = "Recevez nos actualites, ateliers et offres en avant-premiere.",
  buttonLabel = "S'inscrire",
  compact = false,
  theme = "light",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const isDark = theme === "dark";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(cleanEmail)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    setError("");
    setStatus("loading");

    try {
      await subscribeToFlodesk(cleanEmail);
      setStatus("success");
      setEmail("");
    } catch (err) {
      setError(err.message || "Une erreur est survenue. Veuillez réessayer.");
      setStatus("idle");
    }
  };

  return (
    <div
      className={compact ? "" : "card"}
      style={compact ? {} : { padding: "1.5rem", background: isDark ? "#3A255C" : undefined }}
    >
      <h3
        className={`font-serif font-light ${compact ? "text-lg mb-2" : "text-2xl mb-2"}`}
        style={{ color: isDark ? "#F0EAD6" : "var(--color-ink)" }}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed ${compact ? "text-sm mb-4" : "text-sm mb-5"}`}
        style={{ color: isDark ? "rgba(240,234,214,.7)" : "var(--color-secondary)" }}
      >
        {description}
      </p>

      {status === "success" ? (
        <p className="text-sm" style={{ color: isDark ? "#C9A84C" : "#7a5520" }}>
          Merci ! Vous êtes bien inscrit(e) à la newsletter.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
          <input
            type="email"
            className="input"
            placeholder="votre@email.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Adresse email newsletter"
            style={{ background: isDark ? "rgba(245,240,232,.95)" : "#fff" }}
            required
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className={`btn ${isDark ? "btn-outlined" : "btn-primary"}`}
            style={{
              width: compact ? "100%" : "fit-content",
              opacity: status === "loading" ? 0.7 : 1,
              cursor: status === "loading" ? "not-allowed" : "pointer",
            }}
          >
            {status === "loading" ? "Envoi…" : buttonLabel}
          </button>

          {error && (
            <p className="text-sm" style={{ color: "#FCA5A5" }}>
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
