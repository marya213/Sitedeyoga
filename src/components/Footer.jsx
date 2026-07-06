import { Link } from "react-router-dom";

const INSTAGRAM_URL = "https://www.instagram.com/emmanuelledruneau_kundalini/";

export default function Footer() {
  return (
    <footer style={{ background: "#2D1B4E", color: "rgba(240,234,214,.65)" }}>
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
                style={{ color: "#C9A84C" }}
              >
                Studio Kundalini
              </span>
            </div>
          </div>

          {/* FAQ + social */}
          <div className="flex items-center gap-5 md:gap-6">
            <Link
              to="/faq"
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,.55)")
              }
            >
              FAQ
            </Link>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Kundalini"
              className="transition-transform"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="igGradient" cx="30%" cy="107%" r="150%">
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
                  fill="url(#igGradient)"
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
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
