export const KUNDALINI_URL =
  "https://espace-kundala.heymarvelous.com/buy/product/80596";

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
  { id: 1, day: "Lundi",    time: "07:00", name: "Studio de Yoga en ligne (live)", type: "studio", inst: "Emmanuelle Druneau", dur: "30 min" },
  { id: 2, day: "Lundi",    time: "11:00", name: "Énergie & Équilibre", type: "yoga", inst: "Emmanuelle Druneau", dur: "1h30" },
  { id: 3, day: "Lundi",    time: "18:30", name: "Énergie & Équilibre", type: "yoga", inst: "Emmanuelle Druneau", dur: "1h30" },
  { id: 4, day: "Mardi",    time: "18:30", name: "Corps en Mouvement", type: "yoga", inst: "Emmanuelle Druneau", dur: "1h" },
  { id: 5, day: "Mardi",    time: "20:00", name: "Énergie & Équilibre", type: "yoga", inst: "Emmanuelle Druneau", dur: "1h30" },
  { id: 6, day: "Mercredi", time: "11:00", name: "Souffle & Sérénité", type: "yoga", inst: "Emmanuelle Druneau", dur: "1h" },
  { id: 7, day: "Jeudi",    time: "19:00", name: "Studio de Yoga en ligne (live)", type: "studio", inst: "Emmanuelle Druneau", dur: "1h" },
  { id: 8, day: "Vendredi", time: "12:30", name: "Studio de Yoga en ligne (live)", type: "studio", inst: "Emmanuelle Druneau", dur: "30 min" },
];

// Détail des 3 cours réguliers proposés en présentiel
export const COURS_DETAILS = [
  {
    name: "Énergie & Équilibre",
    mode: "presentiel",
    creneaux: "Lundi 11h ou 18h30 · Mardi 20h",
    style: ["Yoga long", "Méditation", "Respiration", "Mantra", "Relaxation"],
    pourQui:
      "Un yoga accessible à tous, dynamique et énergisant, pour relâcher le stress, stimuler son énergie et retrouver clarté et équilibre intérieur.",
    themes: [
      "Stress, anxiété",
      "Énergie",
      "Recentrage",
      "Système nerveux",
      "Clarté mentale",
      "Relaxation",
      "Renforcement",
    ],
  },
  {
    name: "Corps en Mouvement",
    mode: "presentiel",
    creneaux: "Mardi 18h30",
    style: ["Yoga court", "Méditation", "Respiration", "Mouvement debout", "Mantra", "Relaxation"],
    pourQui:
      "Le « yoga des femmes » pour retrouver énergie, douceur et stabilité dans son corps.",
    themes: [
      "Corps, émotions",
      "Équilibre",
      "Confiance en soi",
      "Douceur, puissance intérieure",
      "Transitions hormonales, cycles menstruels",
      "Énergie féminine",
    ],
  },
  {
    name: "Souffle & Sérénité",
    mode: "presentiel",
    creneaux: "Mercredi 11h",
    style: ["Yoga court", "Méditation", "Respiration", "Mantra", "Relaxation"],
    pourQui:
      "Pour les personnes en quête de calme, de détente et de récupération intérieure.",
    themes: [
      "Calme",
      "Intériorisation",
      "Détente",
      "Mouvements doux",
      "Pranayamas",
      "Relation à soi",
      "Sommeil, récupération",
    ],
  },
];

// Cours régulier proposé en distanciel (Studio de Yoga en ligne)
export const COURS_DISTANCIEL = [
  {
    name: "Énergie et équilibres",
    mode: "distanciel",
    creneaux: "Lundi 7h · Jeudi 19h · Vendredi 12h30 (en direct) + vidéothèque à volonté",
    style: ["Yoga en ligne", "Méditation", "Respiration", "Mantra", "Relaxation"],
    pourQui:
      "Le même esprit qu'en salle, à distance : des lives réguliers et une vidéothèque pour pratiquer où et quand vous voulez.",
    themes: [
      "Stress, anxiété",
      "Énergie",
      "Recentrage",
      "Clarté mentale",
      "Flexibilité du planning",
    ],
  },
];

export const PRICING = [
  {
    name: "Abonnement Présentiel",
    mode: "presentiel",
    badge: "Année scolaire",
    priceTiers: [
      { label: "1 cours / semaine", price: "315", oldPrice: null },
      { label: "2 cours / semaine", price: "540", oldPrice: "630" },
      { label: "3 cours / semaine", price: "720", oldPrice: "945" },
    ],
    features: [
      "34 cours sur l'année scolaire",
      "Adhésion à la fédération incluse",
      "Assurance incluse",
      "+ 1 cours de Studio en ligne offert (lundi 7h)",
    ],
    cta: "S'abonner",
    highlighted: false,
  },
  {
    name: "Carnet de 10 cours",
    mode: "presentiel",
    badge: "Valable 6 mois",
    price: "143",
    priceNote: "puis 128 € pour les carnets suivants",
    features: [
      "Formule ponctuelle et flexible",
      "Valable pour 10 cours en présentiel",
      "Adhésion à la fédération incluse",
      "Assurance incluse",
      "+ 1 cours de Studio en ligne offert (lundi 7h)",
    ],
    cta: "S'abonner",
    highlighted: false,
  },
  {
    name: "Cours à l'unité",
    mode: "presentiel",
    price: "18",
    features: ["Pour essayer ou compléter votre formule, sans engagement"],
    cta: "Réserver",
    ctaUrl: "https://buy.stripe.com/bJecN68Z7d4N4cB6Cs53O0e",
    highlighted: false,
  },
  {
    name: "Studio de Yoga en Ligne",
    mode: "distanciel",
    badge: "12 mois",
    price: "250",
    features: [
      "Accès illimité aux cours en ligne pendant 1 an",
      "Vidéothèque et cours en direct (lives)",
    ],
    cta: "S'abonner",
    highlighted: false,
  },
  {
    name: "Offre Combinée",
    mode: "both",
    badge: "✨ La plus avantageuse",
    price: "430",
    oldPrice: "665",
    priceNote: "Présentiel + Studio en ligne · 12 mois",
    features: [
      "1 cours en présentiel par semaine",
      "Accès illimité au Studio en ligne pendant 12 mois + cours en direct",
      "Une pratique complète, en présentiel et à la maison, à votre rythme",
    ],
    cta: "S'abonner",
    highlighted: true,
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
    label: "💻 Studio en ligne",
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
