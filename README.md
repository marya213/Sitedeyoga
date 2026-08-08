# 🧘 Studio Kundalini — Le site internet d'Emmanuelle

Bienvenue ! Ce document explique, en langage simple, ce qu'est ce dossier, comment fonctionne votre site internet, et où trouver de l'aide. Vous n'avez **aucune connaissance en informatique ou en programmation** à avoir pour le lire : chaque terme un peu technique est expliqué au fur et à mesure.

Ne vous inquiétez pas si certaines parties ne vous concernent pas directement (elles sont là pour un futur développeur) — les sections importantes **pour vous** sont signalées par le repère 👉 **Ce qui vous concerne**.

---

## 📖 Sommaire

1. [C'est quoi, ce dossier ?](#1--cest-quoi-ce-dossier)
2. [Comment voir votre site en ligne](#2--comment-voir-votre-site-en-ligne)
3. [Les pages de votre site](#3--les-pages-de-votre-site)
4. [Gérer vos événements vous-même](#4--gérer-vos-événements-vous-même)
5. [D'où viennent les informations affichées sur le site](#5--doù-viennent-les-informations-affichées-sur-le-site)
6. [Les « briques techniques » utilisées (en langage simple)](#6--les-briques-techniques-utilisées-en-langage-simple)
7. [Demander une modification](#7--demander-une-modification)
8. [Sécurité — les règles à respecter](#8--sécurité--les-règles-à-respecter)
9. [Petit glossaire](#9--petit-glossaire)
10. [Besoin d'aide ?](#10--besoin-daide-)

---

## 1. 🗂️ C'est quoi, ce dossier ?

👉 **Ce qui vous concerne**

Ce dossier contient **tout le code source** de votre site internet, c'est-à-dire l'ensemble des fichiers « recette » qui permettent à votre site d'exister et de fonctionner. Un peu comme les plans et les matériaux d'une maison : vous n'avez pas besoin de savoir lire les plans pour habiter la maison, mais il est utile de savoir qu'ils existent et où ils se trouvent si un jour un artisan (un développeur) doit intervenir.

Vous n'avez **jamais besoin d'ouvrir ce dossier ni de toucher à un seul fichier** pour utiliser votre site au quotidien. Le seul endroit où vous agissez vous-même, c'est la **page d'administration des événements** (voir [section 4](#4--gérer-vos-événements-vous-même)).

Ce code est actuellement stocké sur **GitHub**, un service qui conserve l'historique de toutes les versions du site (un peu comme un « Google Drive » spécialisé pour le code, avec un bouton « annuler » qui remonte aussi loin que nécessaire dans le temps).

---

## 2. 🌐 Comment voir votre site en ligne

👉 **Ce qui vous concerne**

Votre site est hébergé par un service appelé **Vercel**. « Hébergé » signifie que le site est stocké sur des ordinateurs puissants (des « serveurs ») allumés en permanence quelque part dans le monde, afin que n'importe qui, n'importe quand, puisse taper votre adresse internet et voir votre site s'afficher.

Concrètement :

- Chaque fois qu'une modification est validée dans le code (par votre développeur), le site se met à jour **automatiquement** en quelques minutes, sans aucune action de votre part.
- L'adresse (URL) de votre site sera : **`https://votre-domaine-a-definir`** *(à compléter dès que le nom de domaine définitif sera choisi et connecté — votre développeur vous communiquera l'adresse finale)*.
- En attendant, une adresse temporaire fournie par Vercel (du type `https://studio-kundalini.vercel.app`) permet déjà de consulter le site.

Vous n'avez rien à faire pour que cette mise à jour ait lieu : c'est automatique.

---

## 3. 📄 Les pages de votre site

👉 **Ce qui vous concerne**

Voici les pages que vos visiteurs peuvent consulter, et ce que chacune contient :

| Page | Adresse | Contenu |
|---|---|---|
| **Accueil** | `/` | La première page vue par vos visiteurs : vidéo de présentation, vos 3 propositions de cours, une vidéo « Qu'est-ce que le Kundalini Yoga », les avis Google de vos élèves. |
| **Cours** | `/cours` | Le détail de chaque cours que vous proposez (Énergie & Équilibre, Corps en Mouvement, Souffle & Sérénité, Studio en ligne), avec les tarifs. |
| **Planning** | `/planning` | Le tableau des créneaux de cours dans la semaine. |
| **Événements** | `/evenements` | La liste de vos événements ponctuels (stages, ateliers…) — **c'est cette liste que vous mettez à jour vous-même**, voir section 4. |
| **FAQ** | `/faq` | Les questions fréquentes de vos élèves et futurs élèves. |
| **À propos** | `/a-propos` | Votre présentation, votre parcours. |
| **Contact** | `/contact` | Le formulaire de contact et vos coordonnées. |
| **Administration** | `/admin/evenements` | La page privée, protégée par mot de passe, qui vous permet de gérer vos événements. Voir le **guide PDF séparé** qui vous a été fourni. |

Toutes ces pages sont reliées entre elles par le menu de navigation en haut de chaque page (le « header »), identique partout, et par le pied de page en bas (le « footer ») qui contient vos liens Instagram et Facebook.

---

## 4. 🗓️ Gérer vos événements vous-même

👉 **Ce qui vous concerne — c'est la partie la plus importante pour votre usage quotidien**

Un guide **au format PDF**, séparé de ce document, vous a été fourni. Il explique **étape par étape, avec vos identifiants de connexion**, comment :

- vous connecter à la page d'administration,
- ajouter un nouvel événement (stage, atelier…),
- modifier un événement existant,
- supprimer un événement passé ou annulé,
- vous déconnecter en toute sécurité.

Conservez ce PDF dans un endroit sûr, car il contient votre mot de passe. N'hésitez pas à le relire à chaque fois que vous ajoutez un événement, le temps de prendre l'habitude.

Chaque événement que vous créez apparaît **immédiatement et automatiquement** sur la page « Événements » de votre site public, sans aucune autre action de votre part et sans intervention du développeur.

---

## 5. 🧾 D'où viennent les informations affichées sur le site

Pour votre information (non indispensable à connaître) :

- **Les événements** (page `/evenements`) sont stockés dans une base de données en ligne appelée **Firebase** (propriété de Google). C'est cette base que vous modifiez via la page d'administration.
- **Les cours, le planning, les tarifs, les avis clients et l'équipe** sont pour l'instant écrits directement dans le code du site (fichier `src/data/index.js`). Cela signifie que **pour modifier un tarif, un horaire de cours ou un avis, il faut passer par votre développeur** — ce n'est pas encore une information que vous pouvez éditer vous-même comme les événements.
- **Le formulaire de contact et l'inscription à la newsletter** envoient les informations vers un service appelé **Flodesk**, qui gère l'envoi d'emails.

Si vous souhaitez pouvoir modifier vous-même les cours, tarifs ou avis sans passer par le développeur, cela peut être développé plus tard sur le même principe que la page événements — n'hésitez pas à en discuter avec votre développeur.

---

## 6. 🧩 Les « briques techniques » utilisées (en langage simple)

Cette section est **informative**, pour que vous compreniez grossièrement de quoi votre site est fait si on vous en parle. Vous n'avez besoin de rien retenir par cœur.

- **React** — le langage de construction utilisé pour assembler les pages de votre site, comme des briques de Lego. C'est un outil très répandu et activement maintenu, ce qui garantit que votre site pourra facilement évoluer dans le temps.
- **Vite** — l'outil qui assemble tous les fichiers du code en un site internet fonctionnel, prêt à être mis en ligne.
- **Vercel** — l'hébergeur qui garde votre site allumé et accessible 24h/24 (voir section 2).
- **Firebase** — le service (de Google) qui stocke vos événements et gère la connexion sécurisée à la page d'administration (votre email + mot de passe).
- **Flodesk** — le service qui envoie les emails issus de votre formulaire de contact et gère votre newsletter.
- **GitHub** — l'endroit où le code est conservé et où son historique complet est gardé (voir section 1).

Aucun de ces outils n'a besoin d'être « acheté » ou « installé » par vous : ils fonctionnent en arrière-plan, gérés par votre développeur.

---

## 7. ✉️ Demander une modification

👉 **Ce qui vous concerne**

Pour toute demande de modification qui ne concerne **pas** la gestion de vos événements (par exemple : changer un texte, ajouter une photo, corriger un tarif, ajouter une page, modifier les horaires de cours), le plus simple est de contacter directement votre développeur avec :

1. **La page concernée** (ex : « la page Cours »).
2. **Ce qui doit changer précisément** (ex : « remplacer 315 € par 330 € pour l'abonnement 1 cours/semaine »).
3. **Si possible, une capture d'écran** de l'endroit concerné, avec une flèche ou un cercle si besoin.

Cela permet des échanges rapides et évite les allers-retours.

---

## 8. 🔒 Sécurité — les règles à respecter

👉 **Ce qui vous concerne — très important**

- **Ne partagez jamais** votre email et mot de passe de connexion à la page d'administration, sauf avec des personnes de totale confiance qui doivent elles-mêmes gérer les événements.
- **Ne vous connectez pas** à la page d'administration depuis un ordinateur public (cybercafé, bibliothèque…) sans vous déconnecter ensuite via le bouton « Se déconnecter ».
- Si vous pensez que votre mot de passe a été vu par quelqu'un d'autre, **prévenez votre développeur** pour qu'il soit changé rapidement.
- Ce mot de passe est différent de vos mots de passe email ou réseaux sociaux : ne le réutilisez pas ailleurs, et inversement, n'utilisez pas un mot de passe déjà utilisé ailleurs pour ce compte.

---

## 9. 📚 Petit glossaire

| Terme | Explication simple |
|---|---|
| **Code / code source** | L'ensemble des instructions écrites qui font fonctionner le site. Équivalent numérique des plans d'un bâtiment. |
| **Hébergement** | Le fait de stocker un site sur des ordinateurs allumés en permanence pour qu'il soit accessible en ligne. |
| **URL / adresse** | L'adresse internet que l'on tape dans le navigateur pour arriver sur un site (ex : `https://exemple.com`). |
| **Navigateur** | Le logiciel utilisé pour naviguer sur internet : Google Chrome, Safari, Microsoft Edge, Firefox… |
| **Base de données** | Un grand classeur numérique organisé qui stocke des informations (ici, vos événements). |
| **Admin / administration** | La zone privée et protégée par mot de passe qui permet de gérer certains contenus du site. |
| **Déploiement** | Le fait de mettre en ligne une nouvelle version du site après une modification du code. |
| **Domaine** | Le nom unique de votre site sur internet (ex : `studio-kundalini.fr`). |
| **Repository / dépôt** | Le dossier de code stocké sur GitHub, avec tout son historique de versions. |

---

## 10. 🆘 Besoin d'aide ?

👉 **Ce qui vous concerne**

- Pour toute question sur **l'ajout ou la modification d'un événement** → consultez le guide PDF fourni séparément.
- Pour toute autre question ou demande de modification du site → contactez votre développeur.
- En cas de doute, mieux vaut poser la question plutôt que d'essayer de « bidouiller » la page d'administration : les actions d'ajout, modification et suppression d'événements sont **immédiates et définitives** (il n'y a pas de « corbeille » pour un événement supprimé par erreur).

---

*Document rédigé pour faciliter la prise en main de votre site par une personne non technique. N'hésitez pas à demander des clarifications sur toute partie qui resterait obscure.*
