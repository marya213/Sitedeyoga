export const DAYS = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export const SCHEDULE = [
  { id: 1, day: "Lundi",    time: "09:30", name: "Kundalini Yoga", type: "yoga", inst: "Emmanuelle Druneau" },
  { id: 2, day: "Mardi",    time: "10:30", name: "Kundalini Yoga", type: "yoga", inst: "Emmanuelle Druneau" },
  { id: 3, day: "Mercredi", time: "11:00", name: "Kundalini Yoga", type: "yoga", inst: "Emmanuelle Druneau" },
];

export const PRICING = [
  {
    name: "Présentiel",
    price: "310/an",
    desc: "Option carnet de 10 cours: 140€",
    features: [
      "1 cours/semaine en salle",
      "Lundi 9h30",
      "Mardi 19h30",
      "Mercredi 11h00",
      "+1 cours zoom lundi 7h",
    ],
    cta: "S'abonner",
    highlighted: false,
  },
  {
    name: "Studio Yoga",
    price: "25/mois ou 250€/an",
    features: [
      "4 cours live, en ligne/semaine",
      "Accès à une vidéothèque de + de 100 vidéos",
      "Accès illimité au studio de Yoga en ligne pour pratiquer à son rythme",
    ],
    cta: "S'abonner",
    highlighted: true,
  },
  {
    name: "Hybride",
    price: "45/mois ou 430€/an",
    features: [
      "1 cours/semaine en présentiel en salle",
      "4 cours live, en ligne/semaine",
      "Accès à une vidéothèque de + de 100 vidéos",
      "Accès illimité au studio de Yoga en ligne",
    ],
    cta: "S'abonner",
    highlighted: false,
  },
];

export const TEAM = [
  {
    initials: "SM",
    name: "Sophie Martin",
    color: "#d8e2d2",
    title: "Fondatrice & Instructrice Kundalini",
    specialty: "Kundalini · Méditation · Pranayama",
    bio: "Certifiée KRI Level 2 depuis 2010, Sophie a fondé le studio après 5 ans d'enseignement en Inde et en Europe. Sa pédagogie allie rigueur traditionnelle et bienveillance moderne.",
  },
  {
    initials: "MV",
    name: "Marc Viguier",
    color: "#ddd5cf",
    title: "Coach Fitness & HIIT",
    specialty: "HIIT · Cardio · Force fonctionnelle",
    bio: "Ancien sportif de haut niveau reconverti en coach bien-être, Marc apporte rigueur et chaleur humaine à chaque séance. Il adapte chaque programme à la réalité de chacun.",
  },
  {
    initials: "LR",
    name: "Léa Renard",
    color: "#ede0cc",
    title: "Professeure de Yoga 200h RYT",
    specialty: "Hatha · Vinyasa · Yin Yoga",
    bio: "Certifiée 200h RYT, Léa enseigne depuis 8 ans avec une approche douce et alignée sur l'anatomie fonctionnelle. Elle guide chaque élève dans le respect de son corps.",
  },
];

export const TYPE_STYLES = {
  studio: {
    pill: "bg-primary/10 text-primary border border-primary/20",
    slot: "bg-primary/10 border-l-2 border-primary text-primary-dark",
    dot: "bg-primary",
    label: "🏋️ Studio",
  },
  yoga: {
    pill: "bg-secondary/10 text-secondary border border-secondary/20",
    slot: "bg-secondary/10 border-l-2 border-secondary text-secondary",
    dot: "bg-secondary",
    label: "🧘 Yoga",
  },
  hybride: {
    pill: "bg-tertiary/15 text-amber-700 border border-tertiary/30",
    slot: "bg-tertiary/10 border-l-2 border-tertiary text-amber-800",
    dot: "bg-tertiary",
    label: "🎥 Hybride",
  },
};
