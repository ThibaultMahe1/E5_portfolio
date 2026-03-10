const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: 'Site web centre équestre de Pontchâteau',
    description: 'Application Web vitrine pour promouvoir le centre équestre de Pontchâteau.',
    image: `${base}project/E6_legere/photo_site.png`,
    tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MariaDB'],
    github: 'https://github.com/ThibaultMahe1/E6_app_l-gere',
    category: 'web',
    color: 'from-blue-500 to-cyan-500',
    // ── Détails pour la page projet (E5) ──
    contexte: `Ce projet a été réalisé dans le cadre du BTS SIO SLAM. Le centre équestre de Pontchâteau souhaitait disposer d'un site web vitrine moderne pour présenter ses activités, ses tarifs et ses événements à de potentiels cavaliers et familles. Il s'agissait d'un projet de développement web full-stack, avec une forte orientation sur l'expérience utilisateur et la présentation visuelle.`,
    objectifs: [
      'Concevoir une application web responsive et moderne',
      'Présenter les activités et tarifs du centre équestre',
      'Permettre aux visiteurs de contacter facilement le centre',
      'Mettre en valeur les événements et actualités',
    ],
    technologies: [
      {
        name: 'Laravel',
        description: 'Framework PHP utilisé pour le back-end, la gestion des routes et le rendu des vues.',
      },
      {
        name: 'PHP',
        description: 'Langage serveur principal pour la logique métier.',
      },
      {
        name: 'Tailwind CSS',
        description: 'Framework CSS utilitaire pour un design moderne et responsive.',
      },
      {
        name: 'MariaDB',
        description: 'Système de gestion de base de données relationnelle.',
      },
    ],
    competences: [
      'Gérer le patrimoine informatique',
      'Répondre aux incidents et aux demandes d\'assistance et de service',
      'Développer la présence en ligne de l\'organisation',
      'Travailler en mode projet',
      'Mettre à disposition des utilisateurs un service informatique',
      'Organiser son développement professionnel',
    ],
    role: 'Développeur full-stack',
    duree: '6 semaines',
    environnement: ['VS Code', 'Git', 'GitHub', 'Composer', 'DBeaver'],
    captures: [`${base}project/E6_legere/photo_site.png`, `${base}project/E6_legere/photo_site2.png`, `${base}project/E6_legere/photo_site3.png`, `${base}project/E6_legere/photo_site4.png`],
    bilan: `Ce projet m'a permis de consolider mes compétences en développement web avec Laravel et de mieux comprendre les besoins d'un client dans un contexte professionnel.`,
  },
  {
    id: 2,
    title: 'Application lourde – Gestion centre équestre',
    description: 'Application de bureau développée en C# avec Avalonia pour gérer le site web du centre équestre de Pontchâteau : utilisateurs, événements, tarifs, galeries et chevaux.',
    image: `${base}project/E6_lourde/app_lourde.png`,
    tags: ['C#', 'Avalonia'],
    github: 'https://github.com/ThibaultMahe1/E6_app_lourde',
    category: 'desktop',
    color: 'from-purple-500 to-indigo-500',
    contexte: `Ce projet a été réalisé dans le cadre du BTS SIO SLAM, en complément du site web vitrine du centre équestre de Pontchâteau. Le centre avait besoin d'un outil de gestion interne permettant d'administrer le contenu du site web sans passer directement par la base de données. L'application lourde offre une interface de bureau complète pour gérer les utilisateurs, les événements, les tarifs, les galeries d'images et les chevaux du club.`,
    objectifs: [
      'Développer une application de bureau pour la gestion du site web du centre équestre',
      'Permettre la gestion des utilisateurs (création, modification, suppression)',
      'Créer et gérer les événements du centre',
      'Gérer les tarifs et les prix des activités',
      'Ajouter et organiser des images et galeries',
      'Gérer les fiches des chevaux du club',
    ],
    technologies: [
      {
        name: 'C#',
        description: 'Langage principal pour le développement de l\'application de bureau.',
      },
      {
        name: 'Avalonia',
        description: 'Framework UI cross-platform pour créer des interfaces de bureau modernes en C#.',
      },
    ],
    competences: [
      'Gérer le patrimoine informatique',
      'Répondre aux incidents et aux demandes d\'assistance et de service',
      'Développer la présence en ligne de l\'organisation',
      'Travailler en mode projet',
      'Mettre à disposition des utilisateurs un service informatique',
      'Organiser son développement professionnel',
    ],
    role: 'Développeur desktop',
    duree: '6 semaines',
    environnement: ['Visual Studio', 'Git', 'GitHub', 'DBeaver', 'MariaDB'],
    captures: [`${base}project/E6_lourde/app_lourde.png`],
    bilan: `Ce projet m'a permis de découvrir le développement d'applications lourdes avec C# et le framework Avalonia. Il complète le projet web du centre équestre en offrant un outil de gestion interne efficace. J'ai pu approfondir mes compétences en architecture logicielle, en interaction avec une base de données depuis une application desktop et en conception d'interfaces utilisateur riches.`,
  },

    {
    id: 3,
    title: 'Site web educatif pour enfants',
    description: 'Application Web éducative pour aider les enfants à apprendre les bases des mathématiques.',
    image: `${base}project/site_educatif/acceuil.png`,
    tags: ['PHP', 'CSS', 'MariaDB', 'JavaScript', 'HTML'],
    github: 'https://github.com/NoanBregeon/Projet_Renfor_PHP',
    category: 'web',    
    color: 'from-blue-500 to-cyan-500',
    // ── Détails pour la page projet (E5) ──
    contexte: `Ce projet a été réalisé dans le cadre du BTS SIO SLAM. L'objectif était de créer une application web éducative destinée aux enfants pour les aider à apprendre les bases des mathématiques de manière ludique. Le projet a été développé en utilisant PHP pour le back-end, avec une base de données MariaDB pour stocker les questions et les scores des utilisateurs. Le front-end a été conçu avec HTML, CSS et JavaScript pour offrir une expérience interactive et engageante.`,
    objectifs: [
        'Concevoir une application web éducative pour les enfants',
        'Créer une interface utilisateur attrayante et facile à utiliser',
        'Développer une logique de jeu pour rendre l\'apprentissage amusant',
        'Permettre aux utilisateurs de suivre leurs progrès et scores',
    ],
    technologies: [
      {
        name: 'PHP',
        description: 'Langage serveur principal pour la logique métier.',
      },
      {
        name: 'HTML',
        description: 'Langage de balisage utilisé pour structurer le contenu de l\'application.',
      },
      {
        name: 'CSS',
        description: 'Langage de style utilisé pour concevoir l\'interface utilisateur.',
      },
      {
        name: 'JavaScript',
        description: 'Langage de programmation utilisé pour rendre l\'application interactive.',
      },
      {
        name: 'MariaDB',
        description: 'Système de gestion de base de données relationnelle.',
      },
    ],
    competences: [
        'Gérer le patrimoine informatique',
        'Répondre aux incidents et aux demandes d\'assistance et de service',
        'Développer la présence en ligne de l\'organisation',
        'Travailler en mode projet',
        'Mettre à disposition des utilisateurs un service informatique',
        'Organiser son développement professionnel',
    ],
    role: 'Développeur full-stack',
    duree: '1 semaine',
    environnement: ['VS Code', 'Git', 'GitHub', 'DBeaver'],
    captures: [`${base}project/site_educatif/acceuil.png`, `${base}project/site_educatif/selection_niveau.png`, `${base}project/site_educatif/niveau.png`],
    bilan: `Ce projet m'a permis de consolider mes compétences en développement web avec PHP, HTML, CSS et JavaScript, ainsi que de mieux comprendre les besoins d'un client dans un contexte éducatif.`,
  },

  {
    id: 4,
    title: 'GoatPay – Système de paiement sécurisé',
    description: 'Application web de paiement sécurisé permettant l\'inscription, la connexion et le paiement par carte bancaire avec chiffrement AES-256.',
    image: `${base}project/goatpay/acueil.png`,
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    github: 'https://github.com/ThibaultMahe1/projet-securit-',
    category: 'web',
    color: 'from-orange-500 to-red-500',
    contexte: `Ce projet a été réalisé dans le cadre du BTS SIO SLAM en 2ème année. L'objectif était de concevoir un système de paiement sécurisé en PHP natif (sans framework). GoatPay permet aux utilisateurs de s'inscrire, se connecter et effectuer des paiements par carte bancaire. Les données sensibles (numéro de carte, date d'expiration) sont chiffrées en base de données via AES-256. Un espace administrateur permet de consulter tous les paiements et d'effectuer des remboursements.`,
    objectifs: [
      'Concevoir un système de paiement sécurisé de bout en bout',
      'Implémenter le chiffrement AES-256 des données bancaires',
      'Mettre en place une authentification sécurisée avec hashage des mots de passe',
      'Développer un panel administrateur avec statistiques et remboursements',
      'Assurer la protection CSRF sur tous les formulaires',
      'Limiter les tentatives de connexion pour prévenir le brute-force',
    ],
    technologies: [
      {
        name: 'PHP 8',
        description: 'Langage serveur principal utilisé sans framework pour la logique métier et la sécurité.',
      },
      {
        name: 'MySQL',
        description: 'Base de données relationnelle pour stocker les utilisateurs, paiements et données chiffrées.',
      },
      {
        name: 'JavaScript',
        description: 'Validation des formulaires en temps réel côté client.',
      },
      {
        name: 'CSS',
        description: 'Mise en page et design de l\'interface utilisateur.',
      },
    ],
    competences: [
      'Gérer le patrimoine informatique',
      'Répondre aux incidents et aux demandes d\'assistance et de service',
      'Développer la présence en ligne de l\'organisation',
      'Travailler en mode projet',
      'Mettre à disposition des utilisateurs un service informatique',
      'Organiser son développement professionnel',
    ],
    role: 'Développeur full-stack',
    duree: '2 jours',
    environnement: ['VS Code', 'Git', 'GitHub', 'MySQL', 'PHP 8'],
    captures: [`${base}project/goatpay/acueil.png`,`${base}project/goatpay/payement.png`],
    bilan: `Ce projet m'a permis d'approfondir mes connaissances en sécurité web : chiffrement des données sensibles, protection CSRF, hashage des mots de passe et limitation des tentatives de connexion. Il m'a également permis de travailler en PHP natif sans framework, ce qui renforce la compréhension des mécanismes fondamentaux du développement web.`,
  },


];


export const categories = [
  { id: 'all', name: 'Tous', color: 'from-gray-500 to-gray-600' },
  { id: 'web', name: 'Web', color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', name: 'Backend', color: 'from-orange-500 to-yellow-500' },
  { id: 'desktop', name: 'Desktop', color: 'from-purple-500 to-indigo-500' },
];

export default projects;
