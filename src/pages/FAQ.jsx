import { useState } from 'react'

const FAQ_DATA = [
  {
    category: 'Débuter',
    icon: '🌱',
    items: [
      {
        q: 'Faut-il avoir une expérience en yoga pour commencer ?',
        a: 'Aucune expérience n\'est nécessaire. Tous nos cours débutants sont conçus pour vous accueillir là où vous en êtes. Les instructeurs adaptent les postures à chaque niveau et proposent toujours des alternatives accessibles.',
      },
      {
        q: 'Quel cours choisir pour débuter ?',
        a: 'Nous recommandons le Hatha Yoga ou le Yin Yoga pour une première approche en douceur. Le Kundalini peut également être une magnifique porte d\'entrée si vous êtes curieux·se de ses aspects énergétiques et méditatifs.',
      },
      {
        q: 'Que faut-il apporter à son premier cours ?',
        a: 'Des vêtements confortables et respirants, de l\'eau, et une tenue pour pratiquer pieds nus. Les tapis et blocs sont disponibles sur place. Si vous avez votre propre tapis, vous pouvez bien sûr l\'apporter.',
      },
      {
        q: 'Y a-t-il un âge minimum ou maximum pour pratiquer ?',
        a: 'Nos cours sont ouverts à partir de 16 ans. Il n\'y a pas d\'âge maximum — nous accueillons des pratiquant·es de tous âges. Pour les personnes souffrant de pathologies particulières, nous vous invitons à consulter votre médecin en amont et à en informer votre instructeur·trice.',
      },
    ],
  },
  {
    category: 'Les cours',
    icon: '🧘',
    items: [
      {
        q: 'Combien de personnes y a-t-il par cours ?',
        a: 'Les cours en présentiel sont limités à 12 participant·es pour garantir un suivi personnalisé. Les cours en ligne peuvent accueillir jusqu\'à 20 personnes en direct.',
      },
      {
        q: 'Les cours en ligne sont-ils en direct ou en replay ?',
        a: 'Les cours en studio sont dispensés en direct (live). Un replay est disponible pendant 48h pour les abonné·es Studio Yoga et Hybride en cas d\'absence.',
      },
      {
        q: 'Peut-on annuler ou reporter un cours ?',
        a: 'Oui, toute annulation doit être effectuée au minimum 12h avant le début du cours pour ne pas perdre son crédit. Passé ce délai, la séance est décomptée. Pour les stages et événements, les conditions d\'annulation spécifiques sont précisées lors de l\'inscription.',
      },
      {
        q: 'Quelle est la différence entre Kundalini, Vinyasa, Hatha et Yin Yoga ?',
        a: 'Le Kundalini est une pratique dynamique et énergétique mêlant postures, respirations, mantras et méditation. Le Vinyasa est un enchaînement fluide de postures synchronisé à la respiration. Le Hatha est plus statique, idéal pour apprendre les bases. Le Yin Yoga consiste à tenir des postures profondes et passives pendant plusieurs minutes pour travailler les fascias.',
      },
    ],
  },
  {
    category: 'Abonnements & tarifs',
    icon: '💳',
    items: [
      {
        q: 'Comment fonctionne le Pass Découverte ?',
        a: 'Le Pass Découverte vous permet d\'essayer un premier cours en présentiel à tarif réduit. Contactez-nous via la page Contact pour en bénéficier. Il est valable une seule fois par personne.',
      },
      {
        q: 'Peut-on changer de formule en cours d\'année ?',
        a: 'Oui, il est possible de passer d\'une formule à une autre. La différence de tarif est calculée au prorata des mois restants. Contactez-nous pour étudier ensemble la meilleure option.',
      },
      {
        q: 'Y a-t-il des tarifs réduits (étudiants, demandeurs d\'emploi) ?',
        a: 'Oui, nous proposons des tarifs solidaires sur demande. N\'hésitez pas à nous contacter en précisant votre situation — nous croyons que le yoga doit être accessible à toutes et tous.',
      },
      {
        q: 'Comment réserver un cours ou s\'inscrire à un événement ?',
        a: 'Rendez-vous sur la page Contact ou envoyez-nous un message directement. Nous vous confirmons votre place par e-mail dans les 24h et vous envoyons les informations pratiques.',
      },
    ],
  },
  {
    category: 'Infos pratiques',
    icon: '📍',
    items: [
      {
        q: 'Où se situe le studio ?',
        a: 'Le studio est situé au cœur de Paris. L\'adresse exacte vous est communiquée lors de votre inscription. Nous sommes accessibles en métro et en vélo (stationnement Vélib\' à proximité).',
      },
      {
        q: 'Y a-t-il des vestiaires et des douches ?',
        a: 'Oui, le studio dispose de vestiaires avec casiers sécurisés et de douches. Nous vous recommandons d\'arriver 10 minutes avant le début du cours pour vous installer sereinement.',
      },
      {
        q: 'Le matériel (tapis, blocs, sangles) est-il fourni ?',
        a: 'Tapis, blocs, sangles et couvertures sont mis à disposition gratuitement. Si vous avez votre propre matériel, vous êtes bien sûr invité·e à l\'apporter.',
      },
      {
        q: 'Peut-on pratiquer enceinte ?',
        a: 'Certains cours sont adaptables pendant la grossesse, notamment le Yin Yoga et la méditation. Merci d\'en informer votre instructeur·trice avant le cours. Pour le Kundalini, certaines pratiques sont déconseillées pendant le premier trimestre — nous vous accompagnerons pour adapter chaque séance.',
      },
    ],
  },
]

function AccordionItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(201,168,76,.15)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.25rem 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <span
          className="font-serif"
          style={{ fontSize: '1.0625rem', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.4, flex: 1 }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: '1.5rem',
            height: '1.5rem',
            borderRadius: '9999px',
            background: isOpen ? '#2D1B4E' : 'rgba(201,168,76,.15)',
            color: isOpen ? '#C9A84C' : 'var(--color-ink-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '.75rem',
            fontWeight: 700,
            transition: 'background .2s, color .2s, transform .2s',
            transform: isOpen ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '500px' : 0,
          overflow: 'hidden',
          transition: 'max-height .35s ease',
        }}
      >
        <p
          style={{
            fontSize: '.9375rem',
            color: 'var(--color-secondary)',
            lineHeight: 1.75,
            paddingBottom: '1.25rem',
            paddingRight: '2rem',
          }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <main className="pt-16">
      {/* ══ Hero ═══════════════════════════════════════════════ */}
      <section style={{ background: '#2D1B4E', padding: '4rem 0 3rem' }}>
        <div className="section-inner text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(201,168,76,.7)' }}>
            Questions fréquentes
          </p>
          <h1 className="font-serif font-light mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)', color: '#F0EAD6' }}>
            Tout ce que vous voulez savoir
          </h1>
          <p style={{ color: 'rgba(240,234,214,.7)', fontSize: '1.0625rem', maxWidth: '44ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Vous ne trouvez pas la réponse à votre question ? Contactez-nous directement, nous répondons dans les 24h.
          </p>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-neutral)', padding: '4rem 0 5rem' }}>
        <div className="section-inner" style={{ maxWidth: '52rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {FAQ_DATA.map(section => (
              <div key={section.category}>
                {/* En-tête catégorie */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.375rem' }}>{section.icon}</span>
                  <h2 className="font-serif font-semibold" style={{ fontSize: '1.375rem', color: 'var(--color-ink)' }}>
                    {section.category}
                  </h2>
                </div>

                {/* Accordéon */}
                <div
                  className="card"
                  style={{ padding: '0 1.75rem', borderRadius: '1rem' }}
                >
                  {section.items.map((item, idx) => {
                    const id = `${section.category}-${idx}`
                    return (
                      <AccordionItem
                        key={id}
                        q={item.q}
                        a={item.a}
                        isOpen={openId === id}
                        onToggle={() => toggle(id)}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
