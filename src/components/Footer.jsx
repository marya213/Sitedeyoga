import { Link } from "react-router-dom";

const LINKS = [
  { label: "Cours", to: "/cours" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1c221a", color: "rgba(255,255,255,.65)" }}>
      <div
        className="section-inner py-20 px-6 sm:px-8 lg:px-0"
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}
      >
        {/* Marque + navigation (même ligne sur desktop) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="nav-icon active flex-shrink-0"
                style={{
                  width: "2rem",
                  height: "2rem",
                  fontSize: ".875rem",
                  fontWeight: 700,
                }}
              >
                ✦
              </span>
              <span
                className="font-serif font-semibold text-base"
                style={{ color: "#fff" }}
              >
                Studio Kundalini
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,.5)", maxWidth: "22ch" }}
            >
              Un espace de bien-être, de mouvement et de transformation au cœur
              de Paris.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-end md:text-right">
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{
                color: "rgba(255,255,255,.35)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 md:items-end">
              {LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,.55)")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bas */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div
          className="section-inner py-5 px-6 sm:px-8 lg:px-0 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ color: "rgba(255,255,255,.3)" }}
        >
          <span>© 2026 Studio Kundalini · Tous droits réservés</span>
        </div>
      </div>
    </footer>
  );
}
