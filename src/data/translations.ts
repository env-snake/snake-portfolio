export const translations = {
  en: {
    nav: { home: 'HOME', about: 'ABOUT', process: 'PROCESS', projects: 'PROJECTS', pricing: 'PRICING', contact: 'CONTACT' },
    hero: {
      slogans: ['Creative', 'Innovative', 'Immersive'],
      title: 'Maps',
      subtitle: "I'm Snake, a level designer crafting immersive environments for Source Engine games.",
      cta1: 'View Projects',
      cta2: 'Contact me'
    },
    about: {
      title: 'About Me',
      bio1: "Hi! I'm a professional map maker with 8 years of experience creating maps for Source Engine. Started with simple aim maps for CS 1.6, and now develop complex competitive maps for CS:GO and CS2.",
      bio2: "My specialization is creating balanced maps with thoughtful gameplay and atmospheric visuals. I work with Hammer Editor, Blender for modeling, Substance Painter for textures.",
      stats: [
        { value: '50+', label: 'COMPLETED MAPS' },
        { value: '8', label: 'YEARS EXPERIENCE' },
        { value: '30K+', label: 'WORKSHOP DOWNLOADS' }
      ],
      skills: ['Hammer Editor', 'Blockout & Optimization', 'Level Design', 'Lighting & Atmosphere', '3D Modeling']
    },
    process: {
      title: 'Work Process',
      subtitle: 'How a map is created',
      steps: [
        { id: 1, title: 'Brief', desc: 'Discuss idea, concept and map requirements' },
        { id: 2, title: 'Blockout', desc: 'Create basic geometry and test gameplay' },
        { id: 3, title: 'Detailing', desc: 'Add textures, models and atmosphere' },
        { id: 4, title: 'Optimization', desc: 'Configure lighting and performance' },
        { id: 5, title: 'Testing', desc: 'Conduct playtests and fix bugs' },
        { id: 6, title: 'Release', desc: 'Final version and Workshop publication' }
      ]
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose your package',
      packages: [
        {
          name: 'Basic',
          price: '$200',
          features: [
            'Simple CS:GO/CS2 map',
            'Basic optimization',
            '1 revision round',
            'Timeline: 7-10 days'
          ],
          popular: false
        },
        {
          name: 'Standard',
          price: '$450',
          features: [
            'Medium complexity map',
            'Full optimization',
            'Custom textures',
            '3 revision rounds',
            'Timeline: 14-21 days'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$900',
          features: [
            'Complex map of any type',
            'Maximum detail',
            'Unique models and textures',
            'Unlimited revisions',
            'Timeline: 30-45 days'
          ],
          popular: false
        }
      ]
    },
    projects: {
      title: 'Projects',
      items: [
        { id: '1', title: 'Industrial Complex', desc: 'A detailed industrial map with atmospheric lighting and optimized gameplay flow.' },
        { id: '2', title: 'Underground Facility', desc: 'Dark and immersive underground environment with dynamic lighting.' },
        { id: '3', title: 'City Streets', desc: 'Urban environment with detailed architecture and realistic atmosphere.' },
        { id: '4', title: 'Research Lab', desc: 'High-tech laboratory setting with attention to environmental storytelling.' },
        { id: '5', title: 'Abandoned Warehouse', desc: 'Post-apocalyptic warehouse with dramatic lighting and composition.' },
        { id: '6', title: 'Mountain Base', desc: 'Outdoor military installation with breathtaking vistas and tactical layout.' }
      ]
    },
    contact: {
      title: 'Get In Touch',
      status: 'Open for Commissions',
      statusDesc: "I'm available for commission work and collaborations. Feel free to reach out to discuss your project!",
      methods: [
        { icon: 'MessageCircle', title: 'Discord', value: 'mzmey', link: 'https://discord.com' },
        { icon: 'Palette', title: 'ArtStation', value: 'artstation.com/zmey48', link: 'https://www.artstation.com/zmey48' },
        { icon: 'Users', title: 'Discord Server', value: 'Join Community', link: 'https://discord.gg/RTxe6C88gB' },
        { icon: 'Gamepad2', title: 'Steam', value: 'Snake', link: 'https://steamcommunity.com/id/MZmey/' }
      ]
    },
    footer: '© 2025 Snake Development Club'
  },
  fr: {
    nav: { home: 'ACCUEIL', about: 'À PROPOS', process: 'PROCESSUS', projects: 'PROJETS', pricing: 'TARIFS', contact: 'CONTACT' },
    hero: {
      slogans: ['Créatif', 'Innovant', 'Immersif'],
      title: 'Cartes',
      subtitle: "Je suis Snake, un level designer créant des environnements immersifs pour les jeux Source Engine.",
      cta1: 'Voir les Projets',
      cta2: 'Me Contacter'
    },
    about: {
      title: 'À Propos',
      bio1: "Bonjour! Je suis un créateur de cartes professionnel avec 8 ans d'expérience dans la création de cartes pour Source Engine. J'ai commencé avec de simples cartes d'entraînement pour CS 1.6, et maintenant je développe des cartes compétitives complexes pour CS:GO et CS2.",
      bio2: "Ma spécialisation est la création de cartes équilibrées avec un gameplay réfléchi et des visuels atmosphériques. Je travaille avec Hammer Editor, Blender pour la modélisation, Substance Painter pour les textures.",
      stats: [
        { value: '50+', label: 'CARTES COMPLÉTÉES' },
        { value: '8', label: "ANNÉES D'EXPÉRIENCE" },
        { value: '30K+', label: 'TÉLÉCHARGEMENTS WORKSHOP' }
      ],
      skills: ['Hammer Editor', 'Blockout & Optimisation', 'Level Design', 'Éclairage & Atmosphère', 'Modélisation 3D']
    },
    process: {
      title: 'Processus de Travail',
      subtitle: 'Comment une carte est créée',
      steps: [
        { id: 1, title: 'Brief', desc: 'Discuter de l\'idée, du concept et des exigences de la carte' },
        { id: 2, title: 'Blockout', desc: 'Créer la géométrie de base et tester le gameplay' },
        { id: 3, title: 'Détaillage', desc: 'Ajouter des textures, des modèles et de l\'atmosphère' },
        { id: 4, title: 'Optimisation', desc: 'Configurer l\'éclairage et les performances' },
        { id: 5, title: 'Tests', desc: 'Effectuer des playtests et corriger les bugs' },
        { id: 6, title: 'Publication', desc: 'Version finale et publication sur Workshop' }
      ]
    },
    pricing: {
      title: 'Tarifs',
      subtitle: 'Choisissez votre forfait',
      packages: [
        {
          name: 'Basic',
          price: '$200',
          features: [
            'Carte CS:GO/CS2 simple',
            'Optimisation de base',
            '1 tour de révision',
            'Délai: 7-10 jours'
          ],
          popular: false
        },
        {
          name: 'Standard',
          price: '$450',
          features: [
            'Carte de complexité moyenne',
            'Optimisation complète',
            'Textures personnalisées',
            '3 tours de révision',
            'Délai: 14-21 jours'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$900',
          features: [
            'Carte complexe de tout type',
            'Détail maximal',
            'Modèles et textures uniques',
            'Révisions illimitées',
            'Délai: 30-45 jours'
          ],
          popular: false
        }
      ]
    },
    projects: {
      title: 'Projets',
      items: [
        { id: '1', title: 'Complexe Industriel', desc: 'Une carte industrielle détaillée avec éclairage atmosphérique et flux de jeu optimisé.' },
        { id: '2', title: 'Installation Souterraine', desc: 'Environnement souterrain sombre et immersif avec éclairage dynamique.' },
        { id: '3', title: 'Rues de la Ville', desc: 'Environnement urbain avec architecture détaillée et atmosphère réaliste.' },
        { id: '4', title: 'Laboratoire de Recherche', desc: 'Laboratoire high-tech avec attention à la narration environnementale.' },
        { id: '5', title: 'Entrepôt Abandonné', desc: 'Entrepôt post-apocalyptique avec éclairage dramatique et composition.' },
        { id: '6', title: 'Base de Montagne', desc: 'Installation militaire extérieure avec vues époustouflantes et disposition tactique.' }
      ]
    },
    contact: {
      title: 'Me Contacter',
      status: 'Ouvert aux Commissions',
      statusDesc: "Je suis disponible pour des travaux de commission et des collaborations. N'hésitez pas à me contacter pour discuter de votre projet!",
      methods: [
        { icon: 'MessageCircle', title: 'Discord', value: 'mzmey', link: 'https://discord.com' },
        { icon: 'Palette', title: 'ArtStation', value: 'artstation.com/zmey48', link: 'https://www.artstation.com/zmey48' },
        { icon: 'Users', title: 'Serveur Discord', value: 'Rejoindre la Communauté', link: 'https://discord.gg/RTxe6C88gB' },
        { icon: 'Gamepad2', title: 'Steam', value: 'Snake', link: 'https://steamcommunity.com/id/MZmey/' }
      ]
    },
    footer: '© 2025 Snake Development Club'
  }
};
