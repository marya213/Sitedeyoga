import { useState } from "react";

const SEXE_OPTIONS = ["Femme", "Homme", "Autre / non précisé"];

async function sendToFlodesk({ prenom, nom, email, sexe, age }) {
  const apiKey = import.meta.env.VITE_FLODESK_API_KEY;
  const segmentId = import.meta.env.VITE_FLODESK_SEGMENT_ID;

  const credentials = btoa(`${apiKey}:`);

  const body = {
    email,
    first_name: prenom,
    last_name: nom,
    status: "active",
    custom_fields: {
      sexe: sexe,
      age: String(age),
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

export default function Inscription() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    sexe: "",
    age: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
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
      await sendToFlodesk(form);
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
            S'inscrire
          </h1>
          <p
            className="leading-relaxed"
            style={{
              color: "var(--color-secondary)",
              maxWidth: "44ch",
              marginInline: "auto",
            }}
          >
            Rejoignez le studio et commencez votre parcours Kundalini Yoga.
            Remplissez le formulaire ci-dessous pour vous inscrire.
          </p>
        </div>
      </section>

      {/* ══ Formulaire ════════════════════════════════════════ */}
      <section style={{ background: "#2D1B4E", padding: "5rem 0" }}>
        <div
          className="section-inner"
          style={{ maxWidth: "36rem", marginInline: "auto" }}
        >
          <div className="card" style={{ padding: "2.5rem" }}>
            {status === "success" ? (
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
                <h2
                  className="font-serif font-light text-2xl mb-3"
                  style={{ color: "var(--color-ink)" }}
                >
                  Inscription confirmée !
                </h2>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-secondary)", maxWidth: "30ch" }}
                >
                  Bienvenue dans la communauté. Vous recevrez bientôt un email
                  de confirmation.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ padding: ".75rem 1.75rem" }}
                  onClick={() => {
                    setStatus("idle");
                    setForm({ prenom: "", nom: "", email: "", sexe: "", age: "" });
                  }}
                >
                  Nouvelle inscription
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <h2
                  className="font-serif font-light text-xl mb-1"
                  style={{ color: "var(--color-ink)" }}
                >
                  Formulaire d'inscription
                </h2>

                {/* Prénom + Nom */}
                <div
                  style={{ display: "grid", gap: "1rem" }}
                  className="sm:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Prénom *
                    </label>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      placeholder="Marie"
                      value={form.prenom}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Nom *
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      placeholder="Dupont"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Email *
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

                {/* Sexe + Âge */}
                <div
                  style={{ display: "grid", gap: "1rem" }}
                  className="sm:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="sexe"
                      className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Sexe *
                    </label>
                    <select
                      id="sexe"
                      name="sexe"
                      value={form.sexe}
                      onChange={handleChange}
                      required
                      className="input"
                    >
                      <option value="" disabled>
                        Choisir…
                      </option>
                      {SEXE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      Âge *
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      placeholder="35"
                      min="10"
                      max="110"
                      value={form.age}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                </div>

                {/* Erreur */}
                {status === "error" && (
                  <p
                    className="text-sm"
                    style={{ color: "#FCA5A5" }}
                  >
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
                  {status === "loading" ? "Envoi en cours…" : "S'inscrire"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
