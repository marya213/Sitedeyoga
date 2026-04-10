export const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

export const SCHEDULE = [
  { id: 1,  day: 'Lundi',    time: '07:00', name: 'Éveil Kundalini',     type: 'yoga',    dur: '60 min', inst: 'Sophie M.' },
  { id: 2,  day: 'Lundi',    time: '12:30', name: 'HIIT Studio',         type: 'studio',  dur: '45 min', inst: 'Marc V.'   },
  { id: 3,  day: 'Lundi',    time: '18:00', name: 'Yoga Vinyasa',        type: 'yoga',    dur: '60 min', inst: 'Léa R.'    },
  { id: 4,  day: 'Lundi',    time: '20:00', name: 'Méditation Live',     type: 'hybride', dur: '45 min', inst: 'Sophie M.' },
  { id: 5,  day: 'Mardi',    time: '07:00', name: 'Cardio Studio',       type: 'studio',  dur: '50 min', inst: 'Marc V.'   },
  { id: 6,  day: 'Mardi',    time: '18:00', name: 'Yin Yoga',            type: 'yoga',    dur: '75 min', inst: 'Léa R.'    },
  { id: 7,  day: 'Mardi',    time: '20:00', name: 'Hybride Soir',        type: 'hybride', dur: '60 min', inst: 'Léa R.'    },
  { id: 8,  day: 'Mercredi', time: '07:00', name: 'Éveil Kundalini',     type: 'yoga',    dur: '60 min', inst: 'Sophie M.' },
  { id: 9,  day: 'Mercredi', time: '12:30', name: 'HIIT Midi',           type: 'studio',  dur: '30 min', inst: 'Marc V.'   },
  { id: 10, day: 'Mercredi', time: '19:00', name: 'Pranayama en Direct', type: 'hybride', dur: '60 min', inst: 'Sophie M.' },
  { id: 11, day: 'Jeudi',    time: '07:00', name: 'Yoga Hatha',          type: 'yoga',    dur: '60 min', inst: 'Léa R.'    },
  { id: 12, day: 'Jeudi',    time: '18:00', name: 'Force & Cardio',      type: 'studio',  dur: '50 min', inst: 'Marc V.'   },
  { id: 13, day: 'Jeudi',    time: '20:00', name: 'Mantra & Méditation', type: 'hybride', dur: '45 min', inst: 'Sophie M.' },
  { id: 14, day: 'Vendredi', time: '07:00', name: 'Éveil Kundalini',     type: 'yoga',    dur: '60 min', inst: 'Sophie M.' },
  { id: 15, day: 'Vendredi', time: '12:30', name: 'HIIT Express',        type: 'studio',  dur: '30 min', inst: 'Marc V.'   },
  { id: 16, day: 'Vendredi', time: '18:00', name: 'Vinyasa Flow',        type: 'yoga',    dur: '60 min', inst: 'Léa R.'    },
  { id: 17, day: 'Vendredi', time: '20:00', name: 'Hybride Vendredi',    type: 'hybride', dur: '60 min', inst: 'Léa R.'    },
  { id: 18, day: 'Samedi',   time: '09:00', name: 'Yoga du Weekend',     type: 'yoga',    dur: '90 min', inst: 'Sophie M.' },
  { id: 19, day: 'Samedi',   time: '11:00', name: 'Studio Weekend',      type: 'studio',  dur: '60 min', inst: 'Marc V.'   },
  { id: 20, day: 'Samedi',   time: '14:00', name: 'Hybride Matin',       type: 'hybride', dur: '60 min', inst: 'Léa R.'    },
  { id: 21, day: 'Dimanche', time: '10:00', name: 'Yin Yoga Profond',    type: 'yoga',    dur: '90 min', inst: 'Léa R.'    },
  { id: 22, day: 'Dimanche', time: '17:00', name: 'Méditation Mantra',   type: 'hybride', dur: '60 min', inst: 'Sophie M.' },
];

export const PRICING = [
  {
    name: 'Découverte',
    price: '22',
    period: 'séance unique',
    badge: null,
    desc: 'Idéal pour une première visite, sans engagement.',
    features: ['1 cours au choix', 'Tapis fourni', 'Accueil personnalisé', 'Valable 7 jours'],
    cta: 'Essayer maintenant',
    highlighted: false,
  },
  {
    name: 'Régulier',
    price: '180',
    period: 'carnet 10 séances',
    badge: '⭐ Populaire',
    desc: 'La formule préférée de nos membres pour une pratique stable.',
    features: ['10 cours au choix', 'Valable 3 mois', 'Présentiel & distanciel', 'Replay 48h inclus', 'Priorité de réservation'],
    cta: 'Choisir ce carnet',
    highlighted: true,
  },
  {
    name: 'Illimité',
    price: '89',
    period: '/ mois · sans engagement',
    badge: null,
    desc: 'Pour les pratiquants assidus qui veulent tout accès.',
    features: ['Cours illimités', 'Présentiel & distanciel', 'Réservation prioritaire', 'Replay illimité', 'Atelier mensuel offert'],
    cta: "S'abonner",
    highlighted: false,
  },
];

export const TEAM = [
  {
    initials: 'SM',
    name: 'Sophie Martin',
    color: '#d8e2d2',
    title: 'Fondatrice & Instructrice Kundalini',
    specialty: 'Kundalini · Méditation · Pranayama',
    bio: "Certifiée KRI Level 2 depuis 2010, Sophie a fondé le studio après 5 ans d'enseignement en Inde et en Europe. Sa pédagogie allie rigueur traditionnelle et bienveillance moderne.",
  },
  {
    initials: 'MV',
    name: 'Marc Viguier',
    color: '#ddd5cf',
    title: 'Coach Fitness & HIIT',
    specialty: 'HIIT · Cardio · Force fonctionnelle',
    bio: "Ancien sportif de haut niveau reconverti en coach bien-être, Marc apporte rigueur et chaleur humaine à chaque séance. Il adapte chaque programme à la réalité de chacun.",
  },
  {
    initials: 'LR',
    name: 'Léa Renard',
    color: '#ede0cc',
    title: 'Professeure de Yoga 200h RYT',
    specialty: 'Hatha · Vinyasa · Yin Yoga',
    bio: "Certifiée 200h RYT, Léa enseigne depuis 8 ans avec une approche douce et alignée sur l'anatomie fonctionnelle. Elle guide chaque élève dans le respect de son corps.",
  },
];

export const TYPE_STYLES = {
  studio: {
    pill: 'bg-primary/10 text-primary border border-primary/20',
    slot: 'bg-primary/10 border-l-2 border-primary text-primary-dark',
    dot: 'bg-primary',
    label: '🏋️ Studio',
  },
  yoga: {
    pill: 'bg-secondary/10 text-secondary border border-secondary/20',
    slot: 'bg-secondary/10 border-l-2 border-secondary text-secondary',
    dot: 'bg-secondary',
    label: '🧘 Yoga',
  },
  hybride: {
    pill: 'bg-tertiary/15 text-amber-700 border border-tertiary/30',
    slot: 'bg-tertiary/10 border-l-2 border-tertiary text-amber-800',
    dot: 'bg-tertiary',
    label: '🎥 Hybride',
  },
};
