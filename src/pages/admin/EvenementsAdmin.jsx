import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  subscribeToEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../../services/eventsService";
import { fileToCompressedDataUrl } from "../../services/imageService";

const EMPTY_FORM = {
  titre: "",
  image: "",
  description: "",
  date: "",
  heure: "",
  localisation: "",
  cout: "",
};

function AdminLogin() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(`${err.code ?? "erreur"} — ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-16">
      <section style={{ background: "#2D1B4E", minHeight: "calc(100vh - 4rem)", padding: "5rem 0" }}>
        <div className="section-inner" style={{ maxWidth: "26rem", marginInline: "auto" }}>
          <div className="card" style={{ padding: "2.5rem" }}>
            <h1 className="font-serif font-light text-2xl mb-1" style={{ color: "var(--color-ink)" }}>
              Espace admin
            </h1>
            <p className="text-sm mb-6" style={{ color: "var(--color-secondary)" }}>
              Connectez-vous pour gérer les événements.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <p className="text-sm" style={{ color: "#c0392b" }}>{error}</p>
              )}
              <button type="submit" disabled={loading} className="btn btn-primary" style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? "Connexion…" : "Se connecter"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function EventForm({ initialData, onSubmit, onCancel, submitting }) {
  const [form, setForm] = useState(initialData ?? EMPTY_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.image || "");

  useEffect(() => {
    if (!imageFile) return undefined;
    const objectUrl = URL.createObjectURL(imageFile);
    setImagePreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files?.[0] ?? null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, imageFile);
  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <h2 className="font-serif font-light text-xl" style={{ color: "var(--color-ink)" }}>
        {initialData ? "Modifier l'événement" : "Nouvel événement"}
      </h2>

      <div>
        <label htmlFor="titre" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
          Titre *
        </label>
        <input id="titre" name="titre" type="text" className="input" value={form.titre} onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="image" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
          Image
        </label>
        <input id="image" name="image" type="file" accept="image/*" className="input" onChange={handleImageChange} />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Aperçu"
            style={{ marginTop: ".75rem", width: "100%", maxHeight: "180px", objectFit: "cover", borderRadius: ".75rem" }}
          />
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
          Description *
        </label>
        <textarea id="description" name="description" className="input" rows={4} value={form.description} onChange={handleChange} required style={{ resize: "vertical" }} />
      </div>

      <div style={{ display: "grid", gap: "1rem" }} className="sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
            Date *
          </label>
          <input id="date" name="date" type="date" className="input" value={form.date} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="heure" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
            Heure *
          </label>
          <input id="heure" name="heure" type="time" className="input" value={form.heure} onChange={handleChange} required />
        </div>
      </div>

      <div style={{ display: "grid", gap: "1rem" }} className="sm:grid-cols-2">
        <div>
          <label htmlFor="localisation" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
            Localisation *
          </label>
          <input id="localisation" name="localisation" type="text" className="input" value={form.localisation} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="cout" className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-secondary)" }}>
            Coût en € (optionnel)
          </label>
          <input id="cout" name="cout" type="number" min="0" step="0.01" className="input" placeholder="Gratuit" value={form.cout} onChange={handleChange} />
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button type="submit" disabled={submitting} className="btn btn-primary" style={{ opacity: submitting ? 0.7 : 1 }}>
          {submitting ? "Enregistrement…" : initialData ? "Enregistrer les modifications" : "Ajouter l'événement"}
        </button>
        {initialData && (
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Annuler
          </button>
        )}
      </div>
    </form>
  );
}

function EventRow({ event, onEdit, onDelete }) {
  return (
    <div
      className="card"
      style={{
        padding: "1.25rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <div>
        <p className="font-serif" style={{ fontSize: "1.0625rem", fontWeight: 600, color: "var(--color-ink)" }}>
          {event.titre}
        </p>
        <p style={{ fontSize: ".8125rem", color: "var(--color-ink-muted)" }}>
          {event.date} · {event.heure} · {event.localisation}
          {event.cout != null && event.cout !== "" ? ` · ${event.cout} €` : " · Gratuit"}
        </p>
      </div>
      <div style={{ display: "flex", gap: ".5rem" }}>
        <button type="button" onClick={() => onEdit(event)} className="btn btn-secondary" style={{ padding: ".5rem 1.125rem", fontSize: ".8125rem" }}>
          Modifier
        </button>
        <button
          type="button"
          onClick={() => onDelete(event.id)}
          className="btn"
          style={{ padding: ".5rem 1.125rem", fontSize: ".8125rem", background: "rgba(192,57,43,.1)", color: "#c0392b" }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default function EvenementsAdmin() {
  const { user, loading, logout } = useAuth();
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (!user) return undefined;
    return subscribeToEvents(setEvents, (err) => setError(err.message));
  }, [user]);

  useEffect(() => {
    if (!successMsg) return undefined;
    const timer = setTimeout(() => setSuccessMsg(""), 4000);
    return () => clearTimeout(timer);
  }, [successMsg]);

  useEffect(() => {
    const pending = sessionStorage.getItem("admin-evenements-toast");
    if (pending) {
      sessionStorage.removeItem("admin-evenements-toast");
      setSuccessMsg(pending);
    }
  }, []);

  if (loading) {
    return (
      <main className="pt-16">
        <div className="section-inner" style={{ padding: "5rem 0", textAlign: "center" }}>
          Chargement…
        </div>
      </main>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  const handleSubmit = async (formData, imageFile) => {
    setSubmitting(true);
    setError("");
    setSuccessMsg("");
    try {
      const image = imageFile ? await fileToCompressedDataUrl(imageFile) : formData.image || "";
      const payload = {
        titre: formData.titre.trim(),
        image,
        description: formData.description.trim(),
        date: formData.date,
        heure: formData.heure,
        localisation: formData.localisation.trim(),
        cout: formData.cout === "" ? null : Number(formData.cout),
      };
      if (editingEvent) {
        await updateEvent(editingEvent.id, payload);
        sessionStorage.setItem("admin-evenements-toast", "Événement modifié avec succès.");
      } else {
        await addEvent(payload);
        sessionStorage.setItem("admin-evenements-toast", "Événement ajouté avec succès.");
      }
      window.location.reload();
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet événement ?")) return;
    try {
      await deleteEvent(id);
      if (editingEvent?.id === id) setEditingEvent(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="pt-16">
      {successMsg && (
        <div role="status" className="toast-success">
          <span style={{ fontSize: "1.05rem" }}>✓</span>
          {successMsg}
        </div>
      )}

      <section style={{ background: "#2D1B4E", padding: "3rem 0" }}>
        <div className="section-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(201,168,76,.7)" }}>
              Administration
            </p>
            <h1 className="font-serif font-light" style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#F0EAD6" }}>
              Gestion des événements
            </h1>
          </div>
          <button type="button" onClick={logout} className="btn btn-outlined">
            Se déconnecter
          </button>
        </div>
      </section>

      <section style={{ background: "var(--color-neutral)", padding: "3rem 0 5rem" }}>
        <div className="section-inner" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {error && (
            <p className="text-sm" style={{ color: "#c0392b" }}>{error}</p>
          )}

          <EventForm
            key={editingEvent?.id ?? "new"}
            initialData={editingEvent}
            onSubmit={handleSubmit}
            onCancel={() => setEditingEvent(null)}
            submitting={submitting}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 className="font-serif font-light text-xl" style={{ color: "var(--color-ink)" }}>
              Événements ({events.length})
            </h2>
            {events.length === 0 ? (
              <p style={{ color: "var(--color-ink-faint)" }}>Aucun événement pour le moment.</p>
            ) : (
              events.map((event) => (
                <EventRow key={event.id} event={event} onEdit={setEditingEvent} onDelete={handleDelete} />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
