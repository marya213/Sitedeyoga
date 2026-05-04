import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm({
  title = "Newsletter",
  description = "Recevez nos actualites, ateliers et offres en avant-premiere.",
  buttonLabel = "S'inscrire",
  compact = false,
  theme = "light",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const isDark = theme === "dark";

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(cleanEmail)) {
      setError("Veuillez entrer une adresse email valide.");
      setIsSubscribed(false);
      return;
    }

    setError("");
    setIsSubscribed(true);
    setEmail("");
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

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
        <input
          type="email"
          className="input"
          placeholder="votre@email.fr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Adresse email newsletter"
          style={{
            background: isDark ? "rgba(245,240,232,.95)" : "#fff",
          }}
          required
        />

        <button
          type="submit"
          className={`btn ${isDark ? "btn-outlined" : "btn-primary"}`}
          style={{ width: compact ? "100%" : "fit-content" }}
        >
          {buttonLabel}
        </button>
      </form>

      {error ? (
        <p className="text-sm mt-3" style={{ color: "#FCA5A5" }}>
          {error}
        </p>
      ) : null}

      {isSubscribed ? (
        <p className="text-sm mt-3" style={{ color: isDark ? "#C9A84C" : "#7a5520" }}>
          Merci ! Vous etes bien inscrit(e) a la newsletter.
        </p>
      ) : null}
    </div>
  );
}
