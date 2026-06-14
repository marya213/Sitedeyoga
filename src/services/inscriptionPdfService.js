import { jsPDF } from "jspdf";

const FIELDS = [
  "Nom",
  "Prénom",
  "Email",
  "Adresse",
  "Téléphone",
  "Date de naissance",
];

const CONDITIONS = [
  "Toute inscription est ferme et définitive.",
  "Les abonnements sont non remboursables sauf cas de force majeure.",
  "Merci d'informer le professeur en cas de problème de santé ou de changement de situation médicale.",
];

const CONTACT = {
  adresse: "35 rue de Brest - 22000 Saint-Brieuc",
  nom: "Emmanuelle Druneau",
  telephone: "06.63.57.04.26",
  email: "potencieldejoie@gmail.com",
};

const PAGE_HEIGHT = 297;
const MARGIN_X = 20;
const MARGIN_BOTTOM = 20;

export function downloadInscriptionPdf(event) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - MARGIN_X * 2;
  const lineEnd = pageWidth - MARGIN_X;
  let y = 25;

  const ensureSpace = (needed) => {
    if (y + needed > PAGE_HEIGHT - MARGIN_BOTTOM) {
      doc.addPage();
      y = 25;
    }
  };

  const addWrappedLines = (text, lineHeight) => {
    doc.splitTextToSize(text, contentWidth).forEach((line) => {
      ensureSpace(lineHeight);
      doc.text(line, MARGIN_X, y);
      y += lineHeight;
    });
  };

  // Titre
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Formulaire d'inscription", MARGIN_X, y);
  y += 10;

  // Événement
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(event.titre, MARGIN_X, y);
  y += 7;

  const details = [event.date, event.heure, event.localisation]
    .filter(Boolean)
    .join(" · ");
  if (details) {
    doc.setFontSize(10);
    doc.setTextColor(110, 110, 110);
    doc.text(details, MARGIN_X, y);
    doc.setTextColor(0, 0, 0);
    y += 7;
  }
  y += 6;

  // Informations personnelles
  doc.setFontSize(12);
  FIELDS.forEach((label) => {
    ensureSpace(13);
    doc.text(`${label} :`, MARGIN_X, y);
    doc.line(MARGIN_X + 45, y + 1, lineEnd, y + 1);
    y += 13;
  });
  y += 3;

  // Modalités de paiement
  ensureSpace(9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Modalités de paiement", MARGIN_X, y);
  y += 9;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  ensureSpace(8);
  doc.text("Possibilité de paiement en plusieurs fois :", MARGIN_X, y);
  doc.text("[ ] Oui     [ ] Non", MARGIN_X + 95, y);
  y += 10;

  ensureSpace(8);
  doc.text("Mode de paiement :", MARGIN_X, y);
  y += 7;
  ensureSpace(8);
  doc.text("[ ] Espèce     [ ] Chèque     [ ] Virement bancaire", MARGIN_X, y);
  y += 12;

  // Conditions générales
  ensureSpace(9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Conditions générales", MARGIN_X, y);
  y += 9;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  CONDITIONS.forEach((condition) => addWrappedLines(`•  ${condition}`, 5.5));
  y += 4;

  // Certification
  doc.setFontSize(10.5);
  addWrappedLines(
    "Je soussigné(e), ____________________________, certifie que les " +
      "informations ci-dessus sont exactes et m'engage à respecter les " +
      "conditions générales de participation aux cours de Yoga.",
    6
  );
  y += 6;

  // Date / Signature
  doc.setFontSize(11);
  ensureSpace(14);
  doc.text("Date :", MARGIN_X, y);
  doc.line(MARGIN_X + 20, y + 1, MARGIN_X + 80, y + 1);
  y += 14;

  ensureSpace(16);
  doc.text("Signature :", MARGIN_X, y);
  doc.line(MARGIN_X + 28, y + 1, MARGIN_X + 88, y + 1);
  y += 16;

  // Coordonnées de contact
  ensureSpace(20);
  doc.setFontSize(9.5);
  doc.setTextColor(110, 110, 110);
  doc.text(`Envoyez la fiche d'inscription au : ${CONTACT.adresse}`, MARGIN_X, y);
  y += 5;
  doc.text(`Contact : ${CONTACT.nom}`, MARGIN_X, y);
  y += 5;
  doc.text(`Téléphone : ${CONTACT.telephone}`, MARGIN_X, y);
  y += 5;
  doc.text(`Email : ${CONTACT.email}`, MARGIN_X, y);
  doc.setTextColor(0, 0, 0);

  doc.save(`inscription-${slugify(event.titre)}.pdf`);
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
