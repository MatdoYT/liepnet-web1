import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'lv' | 'ru' | 'fr' | 'el' | 'de' | 'lt' | 'et' | 'sv';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    about: 'About',
    services: 'Services',
    gaming: 'Gaming',
    
    // Gaming page
    gamingDescription: 'Professional gaming network solutions and optimization services for the ultimate gaming experience.',
    gamingServices: 'Gaming Services',
    gameServerSetup: 'Game Server Setup',
    networkOptimization: 'Network Optimization',
    latencyReduction: 'Latency Reduction',
    customGameConfigs: 'Custom Game Configurations',
    supportedGames: 'Supported Games',
    gamingTips: 'Gaming Tips & Tricks',
    optimizeConnection: 'Optimize Your Connection',
    reduceInput: 'Reduce Input Lag',
    improveFramerate: 'Improve Framerate',
    troubleshooting: 'Gaming Troubleshooting',
    
    // 404 Pages
    pageNotFound: 'Page Not Found',
    pageNotFoundMessage: 'We\'ve searched everywhere but didn\'t find the page you\'re looking for.',
    returnToHome: 'Return to Home',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    german: 'Deutsch',
    lithuanian: 'Lithuanian',
    estonian: 'Estonian',
    swedish: 'Swedish',
    
    // Hero section (you'll need to add these to your components)
    heroTitle: 'Welcome to LIEPNET',
    heroSubtitle: 'Your trusted technology partner',
    
    // Content section
    whatIsLiepnet: 'WHAT IS LIEPNET™?',
    liepnetDescription: 'LIEPNET™ provides a range of services, including logo development, hosting, business WI-FI and network planning, meteorological information, and tech tips for everyone.',
    
    // Services
    meteorologicalNetwork: 'Meteorological network',
    meteorologicalDesc: 'The LIEPNET™ meteorological network in Latvia.',
    hosting: 'Hosting',
    hostingDesc: 'LIEPNET™ hosting services',
    logoDesign: 'Logo development', 
    logoDesc: 'Does your business need a new refreshed look?',
    gamingDesc: 'Bored? Then check out our games!',
    wifiNetworking: 'WI-FI & network planning',
    wifiDesc: 'Does your business have WI-FI or connectivity issues? Is your tech outdated?',
    forumsTechTips: 'Forums & tech tips',
    forumsDesc: 'Explore the LIEPNET™ forums and tech tips!',
    radio: 'Radio',
    radioDesc: 'LIEPNET™ Radio Player',
    maps: 'Maps',
    mapsDesc: 'Explore the LIEPNET™ maps',
    more: 'More...',
    moreDesc: 'See more of our services',
    
    // Buttons
    explore: 'Explore',
    start: 'Start',
    order: 'Order',
    play: 'Play',
    request: 'Request',
    listen: 'Listen',
    
    // Goals
    accomplishments: 'OUR GOALS',
    accomplishmentsDesc: 'These are the LIEPNET™ goals',
    awardWinner: 'Meteorological network',
    awardDesc: 'Our goal is to create the first crowdsourced meterological network in Latvia, with at least one station per KM². This density could function as a highly precise radar visually.',
    globalReach: 'LIEPNET™ Hosting', 
    globalDesc: 'Our goal with LIEPNET™ Hosting is to provide affordable hosting solutions for small tasks like Discord bot hosting and small Minecraft server hosting. We aim to create a network with a few nodes around the world that have the best connection between the LIEPNET™ CORE and rebroadcast services for optimal connectivity.',
    industryLeader: 'LIEPNET™ Services',
    industryDesc: 'Our goal is to make all of our services high-quality and inexpensive; however, we also want to make as many of our services free as possible because we feel that free makes things more accessible to a wider audience. We also intend to develop more services such as maps, radio, radio maps, forums, gaming, and so on. Our goals with these services are to make them simple to use and free; initially, we want to make them available to all users in Latvia, then gradually expand to the rest of Europe and eventually globally.',
    achievementImage: 'Achievement Image',
    
    // Footer
    footerFoundedText: 'Founded in February of 2025, Latvia.',
    contactInformation: 'Contact Information',
    ownerCeo: 'Owner/CEO of LIEPNET',
    executiveManager: 'Executive Manager of LIEPNET GREECE',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    footerQuote: 'Everything happens for a reason, even if it\'s hard to understand the reason.',
  },
  lv: {
    // Navigation
    about: 'Par mums',
    services: 'Pakalpojumi',
    gaming: 'Spēles',
    
    // Gaming page
    gamingDescription: 'Profesionāli spēļu tīkla risinājumi un optimizācijas pakalpojumi maksimālai spēļu pieredzei.',
    gamingServices: 'Spēļu pakalpojumi',
    gameServerSetup: 'Spēļu serveru iestatīšana',
    networkOptimization: 'Tīkla optimizācija',
    latencyReduction: 'Latences samazināšana',
    customGameConfigs: 'Pielāgotas spēļu konfigurācijas',
    supportedGames: 'Atbalstītās spēles',
    gamingTips: 'Spēļu padomi un triki',
    optimizeConnection: 'Optimizējiet savienojumu',
    reduceInput: 'Samazinājiet ievades aizkavi',
    improveFramerate: 'Uzlabojiet kadru ātrumu',
    troubleshooting: 'Spēļu problēmu novēršana',
    
    // 404 Pages
    pageNotFound: 'Lapa nav atrasta',
    pageNotFoundMessage: 'Mēs esam meklējuši visur, bet nevarējām atrast lapu, kuru meklējat.',
    returnToHome: 'Atgriezties sākumā',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    german: 'Deutsch',
    lithuanian: 'Lietuvių',
    estonian: 'Eesti',
    swedish: 'Svenska',
    
    // Hero section
    heroTitle: 'Laipni lūdzam LIEPNET',
    heroSubtitle: 'Jūsu uzticamais tehnoloģiju partneris',
    
    // Content section
    whatIsLiepnet: 'KAS IR LIEPNET™?',
    liepnetDescription: 'LIEPNET™ piedāvā dažādus pakalpojumus, tostarp logo izstrādi, hostingu, uzņēmumu WI-FI un tīkla plānošanu, meteoroloģisko informāciju un tehnoloģiju padomus visiem.',
    
    // Services
    meteorologicalNetwork: 'Meteoroloģiskais tīkls',
    meteorologicalDesc: 'LIEPNET™ meteoroloģiskais tīkls Latvijā.',
    hosting: 'Hostings',
    hostingDesc: 'LIEPNET™ hostinga pakalpojumi',
    logoDesign: 'Logo izstrāde',
    logoDesc: 'Vai jūsu uzņēmumam nepieciešams jauns, atjaunots izskats?',
    gamingDesc: 'Garlaicību? Tad apskatiet mūsu spēles!',
    wifiNetworking: 'WI-FI un tīkla plānošana',
    wifiDesc: 'Vai jūsu uzņēmumam ir WI-FI vai savienojamības problēmas? Vai jūsu tehnoloģijas ir novecojušas?',
    forumsTechTips: 'Forumi un tehnoloģiju padomi',
    forumsDesc: 'Izpētiet LIEPNET™ forumus un tehnoloģiju padomus!',
    radio: 'Radio',
    radioDesc: 'LIEPNET™ Radio atskaņotājs',
    maps: 'Kartes',
    mapsDesc: 'Izpētiet LIEPNET™ kartes',
    more: 'Vairāk...',
    moreDesc: 'Skatiet vairāk mūsu pakalpojumu',
    
    // Buttons
    explore: 'Izpētīt',
    start: 'Sākt',
    order: 'Pasūtīt',
    play: 'Spēlēt',
    request: 'Pieprasīt',
    listen: 'Klausīties',
    
    // Goals
    accomplishments: 'MŪSU MĒRĶI',
    accomplishmentsDesc: 'Šie ir LIEPNET™ mērķi',
    awardWinner: 'Meteoroloģiskais tīkls',
    awardDesc: 'Mūsu mērķis ir izveidot pirmo kolektīvo meteoroloģisko tīklu Latvijā, ar vismaz vienu staciju uz KM². Šis blīvums varētu darboties kā ļoti precīzs radars vizuāli.',
    globalReach: 'LIEPNET™ Hostings',
    globalDesc: 'Mūsu mērķis ar LIEPNET™ Hostingu ir nodrošināt pieejamus hostinga risinājumus maziem uzdevumiem, piemēram, Discord botu hostingam un mazu Minecraft serveru hostingam. Mēs cenšamies izveidot tīklu ar dažiem mezgliem visā pasaulē, kuriem ir vislabākais savienojums starp LIEPNET™ CORE un retranslācijas pakalpojumiem optimālai savienojamībai.',
    industryLeader: 'LIEPNET™ Pakalpojumi',
    industryDesc: 'Mūsu mērķis ir padarīt visus mūsu pakalpojumus augstas kvalitātes un lētus; tomēr mēs arī vēlamies padarīt pēc iespējas vairāk mūsu pakalpojumu bezmaksas, jo mēs uzskatām, ka bezmaksas padara lietas pieejamākas plašākai auditorijai. Mēs arī plānojam izstrādāt vairāk pakalpojumu, piemēram, kartes, radio, radio kartes, forumus, spēles un tā tālāk. Mūsu mērķi ar šiem pakalpojumiem ir padarīt tos vienkāršus lietošanā un bezmaksas; sākotnēji mēs vēlamies padarīt tos pieejamus visiem lietotājiem Latvijā, pēc tam pakāpeniski paplašināt uz pārējo Eiropu un galu galā globāli.',
    achievementImage: 'Sasnieguma attēls',
    
    // Footer
    footerFoundedText: 'Dibināts 2025. gada februārī, Latvijā.',
    contactInformation: 'Kontaktinformācija',
    ownerCeo: 'Īpašnieks/LIEPNET vadītājs',
    executiveManager: 'LIEPNET GREECE izpilddirektors',
    followUs: 'Sekojiet mums',
    allRightsReserved: 'Visas tiesības aizsargātas.',
    footerQuote: 'Viss notiek ar iemeslu, pat ja iemeslu ir grūti saprast.',
  },
  ru: {
    // Navigation
    about: 'О нас',
    services: 'Услуги',
    gaming: 'Игры',
    
    // Gaming page
    gamingDescription: 'Профессиональные игровые сетевые решения и сервисы оптимизации для максимального игрового опыта.',
    gamingServices: 'Игровые сервисы',
    gameServerSetup: 'Настройка игровых серверов',
    networkOptimization: 'Оптимизация сети',
    latencyReduction: 'Снижение задержки',
    customGameConfigs: 'Пользовательские игровые конфигурации',
    supportedGames: 'Поддерживаемые игры',
    gamingTips: 'Игровые советы и трюки',
    optimizeConnection: 'Оптимизируйте соединение',
    reduceInput: 'Уменьшите задержку ввода',
    improveFramerate: 'Улучшите частоту кадров',
    troubleshooting: 'Устранение игровых проблем',
    
    // 404 Pages
    pageNotFound: 'Страница не найдена',
    pageNotFoundMessage: 'Мы искали везде, но не смогли найти страницу, которую вы ищете.',
    returnToHome: 'Вернуться на главную',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    german: 'Deutsch',
    lithuanian: 'Lietuvių',
    estonian: 'Eesti',
    swedish: 'Svenska',
    
    // Hero section
    heroTitle: 'Добро пожаловать в LIEPNET',
    heroSubtitle: 'Ваш надежный технологический партнер',
    
    // Content section
    whatIsLiepnet: 'ЧТО ТАКОЕ LIEPNET™?',
    liepnetDescription: 'LIEPNET™ предоставляет широкий спектр услуг, включая разработку логотипов, хостинг, планирование бизнес WI-FI и сетей, метеорологическую информацию и технические советы для всех.',
    
    // Services
    meteorologicalNetwork: 'Метеорологическая сеть',
    meteorologicalDesc: 'Метеорологическая сеть LIEPNET™ в Латвии.',
    hosting: 'Хостинг',
    hostingDesc: 'Услуги хостинга LIEPNET™',
    logoDesign: 'Разработка логотипа',
    logoDesc: 'Нужен ли вашему бизнесу новый обновленный вид?',
    gamingDesc: 'Скучно? Тогда попробуйте наши игры!',
    wifiNetworking: 'WI-FI и планирование сетей',
    wifiDesc: 'Есть ли у вашего бизнеса проблемы с WI-FI или подключением? Устарели ли ваши технологии?',
    forumsTechTips: 'Форумы и технические советы',
    forumsDesc: 'Изучите форумы LIEPNET™ и технические советы!',
    radio: 'Радио',
    radioDesc: 'Радиоплеер LIEPNET™',
    maps: 'Карты',
    mapsDesc: 'Изучите карты LIEPNET™',
    more: 'Больше...',
    moreDesc: 'Посмотрите больше наших услуг',
    
    // Buttons
    explore: 'Исследовать',
    start: 'Начать',
    order: 'Заказать',
    play: 'Играть',
    request: 'Запросить',
    listen: 'Слушать',
    
    // Goals
    accomplishments: 'НАШИ ЦЕЛИ',
    accomplishmentsDesc: 'Это цели LIEPNET™',
    awardWinner: 'Метеорологическая сеть',
    awardDesc: 'Наша цель - создать первую краудсорсинговую метеорологическую сеть в Латвии, с минимум одной станцией на КМ². Такая плотность могла бы функционировать как высокоточный радар визуально.',
    globalReach: 'LIEPNET™ Хостинг',
    globalDesc: 'Наша цель с LIEPNET™ Хостинг - предоставить доступные решения хостинга для небольших задач, таких как хостинг Discord ботов и небольших серверов Minecraft. Мы стремимся создать сеть с несколькими узлами по всему миру, которые имеют лучшее соединение между LIEPNET™ CORE и службами ретрансляции для оптимальной связности.',
    industryLeader: 'Сервисы LIEPNET™',
    industryDesc: 'Наша цель - сделать все наши сервисы высококачественными и недорогими; однако мы также хотим сделать как можно больше наших сервисов бесплатными, потому что мы считаем, что бесплатность делает вещи более доступными для более широкой аудитории. Мы также намерены разрабатывать больше сервисов, таких как карты, радио, радиокарты, форумы, игры и так далее. Наши цели с этими сервисами - сделать их простыми в использовании и бесплатными; первоначально мы хотим сделать их доступными для всех пользователей в Латвии, затем постепенно расширяться на остальную Европу и в конечном итоге глобально.',
    achievementImage: 'Изображение достижения',
    
    // Footer
    footerFoundedText: 'Основана в феврале 2025 года, Латвия.',
    contactInformation: 'Контактная информация',
    ownerCeo: 'Владелец/Генеральный директор LIEPNET',
    executiveManager: 'Исполнительный директор LIEPNET GREECE',
    followUs: 'Следуйте за нами',
    allRightsReserved: 'Все права защищены.',
    footerQuote: 'Всё происходит по какой-то причине, даже если её трудно понять.',
  },
  fr: {
    // Navigation
    about: 'À propos',
    services: 'Services',
    gaming: 'Jeux',
    
    // Gaming page
    gamingDescription: 'Solutions de réseau de jeu professionnelles et services d\'optimisation pour l\'expérience de jeu ultime.',
    gamingServices: 'Services de jeu',
    gameServerSetup: 'Configuration de serveur de jeu',
    networkOptimization: 'Optimisation du réseau',
    latencyReduction: 'Réduction de la latence',
    customGameConfigs: 'Configurations de jeu personnalisées',
    supportedGames: 'Jeux pris en charge',
    gamingTips: 'Conseils et astuces de jeu',
    optimizeConnection: 'Optimisez votre connexion',
    reduceInput: 'Réduisez le délai d\'entrée',
    improveFramerate: 'Améliorez la fréquence d\'images',
    troubleshooting: 'Dépannage de jeu',
    
    // 404 Pages
    pageNotFound: 'Page introuvable',
    pageNotFoundMessage: 'Nous avons cherché partout mais n\'avons pas trouvé la page que vous recherchez.',
    returnToHome: 'Retour à l\'accueil',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    german: 'Deutsch',
    lithuanian: 'Lietuvių',
    estonian: 'Eesti',
    swedish: 'Svenska',
    
    // Hero section
    heroTitle: 'Bienvenue chez LIEPNET',
    heroSubtitle: 'Votre partenaire technologique de confiance',
    
    // Content section
    whatIsLiepnet: 'QU\'EST-CE QUE LIEPNET™?',
    liepnetDescription: 'LIEPNET™ fournit une gamme de services, y compris le développement de logos, l\'hébergement, la planification WI-FI et réseau d\'entreprise, les informations météorologiques et les conseils techniques pour tous.',
    
    // Services
    meteorologicalNetwork: 'Réseau météorologique',
    meteorologicalDesc: 'Le réseau météorologique LIEPNET™ en Lettonie.',
    hosting: 'Hébergement',
    hostingDesc: 'Services d\'hébergement LIEPNET™',
    logoDesign: 'Développement de logo',
    logoDesc: 'Votre entreprise a-t-elle besoin d\'un nouveau look rafraîchi?',
    gamingDesc: 'Vous vous ennuyez? Alors découvrez nos jeux!',
    wifiNetworking: 'Planification WI-FI et réseau',
    wifiDesc: 'Votre entreprise a-t-elle des problèmes de WI-FI ou de connectivité? Votre technologie est-elle obsolète?',
    forumsTechTips: 'Forums et conseils techniques',
    forumsDesc: 'Explorez les forums LIEPNET™ et les conseils techniques!',
    radio: 'Radio',
    radioDesc: 'Lecteur Radio LIEPNET™',
    maps: 'Cartes',
    mapsDesc: 'Explorez les cartes LIEPNET™',
    more: 'Plus...',
    moreDesc: 'Voir plus de nos services',
    
    // Buttons
    explore: 'Explorer',
    start: 'Commencer',
    order: 'Commander',
    play: 'Jouer',
    request: 'Demander',
    listen: 'Écouter',
    
    // Goals
    accomplishments: 'NOS OBJECTIFS',
    accomplishmentsDesc: 'Voici les objectifs de LIEPNET™',
    awardWinner: 'Réseau météorologique',
    awardDesc: 'Notre objectif est de créer le premier réseau météorologique collaboratif en Lettonie, avec au moins une station par KM². Cette densité pourrait fonctionner comme un radar très précis visuellement.',
    globalReach: 'LIEPNET™ Hébergement',
    globalDesc: 'Notre objectif avec LIEPNET™ Hébergement est de fournir des solutions d\'hébergement abordables pour de petites tâches comme l\'hébergement de bots Discord et l\'hébergement de petits serveurs Minecraft. Nous visons à créer un réseau avec quelques nœuds dans le monde entier qui ont la meilleure connexion entre le LIEPNET™ CORE et les services de rediffusion pour une connectivité optimale.',
    industryLeader: 'Services LIEPNET™',
    industryDesc: 'Notre objectif est de rendre tous nos services de haute qualité et peu coûteux ; cependant, nous voulons aussi rendre autant de nos services gratuits que possible car nous pensons que la gratuité rend les choses plus accessibles à un public plus large. Nous avons également l\'intention de développer plus de services tels que les cartes, la radio, les cartes radio, les forums, les jeux, etc. Nos objectifs avec ces services sont de les rendre simples à utiliser et gratuits ; initialement, nous voulons les rendre disponibles à tous les utilisateurs en Lettonie, puis étendre progressivement au reste de l\'Europe et éventuellement globalement.',
    achievementImage: 'Image de réalisation',
    
    // Footer
    footerFoundedText: 'Fondée en février 2025, Lettonie.',
    contactInformation: 'Informations de contact',
    ownerCeo: 'Propriétaire/PDG de LIEPNET',
    executiveManager: 'Directeur exécutif de LIEPNET GREECE',
    followUs: 'Suivez-nous',
    allRightsReserved: 'Tous droits réservés.',
    footerQuote: 'Tout arrive pour une raison, même s\'il est difficile de comprendre cette raison.',
  },
  el: {
    // Navigation
    about: 'Σχετικά',
    services: 'Υπηρεσίες',
    gaming: 'Παιχνίδια',
    
    // Gaming page
    gamingDescription: 'Επαγγελματικές λύσεις δικτύου παιχνιδιών και υπηρεσίες βελτιστοποίησης για την απόλυτη εμπειρία παιχνιδιού.',
    gamingServices: 'Υπηρεσίες παιχνιδιών',
    gameServerSetup: 'Ρύθμιση διακομιστή παιχνιδιών',
    networkOptimization: 'Βελτιστοποίηση δικτύου',
    latencyReduction: 'Μείωση καθυστέρησης',
    customGameConfigs: 'Προσαρμοσμένες διαμορφώσεις παιχνιδιών',
    supportedGames: 'Υποστηριζόμενα παιχνίδια',
    gamingTips: 'Συμβουλές και κόλπα παιχνιδιών',
    optimizeConnection: 'Βελτιστοποιήστε τη σύνδεσή σας',
    reduceInput: 'Μειώστε την καθυστέρηση εισόδου',
    improveFramerate: 'Βελτιώστε την συχνότητα καρέ',
    troubleshooting: 'Αντιμετώπιση προβλημάτων παιχνιδιών',
    
    // 404 Pages
    pageNotFound: 'Η σελίδα δεν βρέθηκε',
    pageNotFoundMessage: 'Ψάξαμε παντού αλλά δεν μπορέσαμε να βρούμε τη σελίδα που ψάχνετε.',
    returnToHome: 'Επιστροφή στην αρχική',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    german: 'Deutsch',
    lithuanian: 'Lietuvių',
    estonian: 'Eesti',
    swedish: 'Svenska',
    
    // Hero section
    heroTitle: 'Καλώς ήρθατε στο LIEPNET',
    heroSubtitle: 'Ο αξιόπιστος τεχνολογικός σας εταίρος',
    
    // Content section
    whatIsLiepnet: 'ΤΙ ΕΊΝΑΙ ΤΟ LIEPNET™;',
    liepnetDescription: 'Το LIEPNET™ παρέχει μια σειρά υπηρεσιών, συμπεριλαμβανομένης της ανάπτυξης λογοτύπων, φιλοξενίας, επιχειρηματικού WI-FI και σχεδιασμού δικτύων, μετεωρολογικών πληροφοριών και τεχνικών συμβουλών για όλους.',
    
    // Services
    meteorologicalNetwork: 'Μετεωρολογικό δίκτυο',
    meteorologicalDesc: 'Το μετεωρολογικό δίκτυο LIEPNET™ στη Λετονία.',
    hosting: 'Φιλοξενία',
    hostingDesc: 'Υπηρεσίες φιλοξενίας LIEPNET™',
    logoDesign: 'Ανάπτυξη λογοτύπου',
    logoDesc: 'Χρειάζεται η επιχείρησή σας μια νέα ανανεωμένη εμφάνιση;',
    gamingDesc: 'Βαριέστε; Τότε δείτε τα παιχνίδια μας!',
    wifiNetworking: 'Σχεδιασμός WI-FI και δικτύων',
    wifiDesc: 'Έχει η επιχείρησή σας προβλήματα WI-FI ή συνδεσιμότητας; Είναι η τεχνολογία σας παρωχημένη;',
    forumsTechTips: 'Φόρουμ και τεχνικές συμβουλές',
    forumsDesc: 'Εξερευνήστε τα φόρουμ LIEPNET™ και τις τεχνικές συμβουλές!',
    radio: 'Ραδιόφωνο',
    radioDesc: 'Αναπαραγωγέας Ραδιοφώνου LIEPNET™',
    maps: 'Χάρτες',
    mapsDesc: 'Εξερευνήστε τους χάρτες LIEPNET™',
    more: 'Περισσότερα...',
    moreDesc: 'Δείτε περισσότερες από τις υπηρεσίες μας',
    
    // Buttons
    explore: 'Εξερεύνηση',
    start: 'Έναρξη',
    order: 'Παραγγελία',
    play: 'Παίξτε',
    request: 'Αίτημα',
    listen: 'Ακούστε',
    
    // Goals
    accomplishments: 'ΟΙΚΟΙ ΜΑΣ ΣΤΟΧΟΙ',
    accomplishmentsDesc: 'Αυτοί είναι οι στόχοι του LIEPNET™',
    awardWinner: 'Μετεωρολογικό δίκτυο',
    awardDesc: 'Ο στόχος μας είναι να δημιουργήσουμε το πρώτο συνεργατικό μετεωρολογικό δίκτυο στη Λετονία, με τουλάχιστον έναν σταθμό ανά ΧΜ². Αυτή η πυκνότητα θα μπορούσε να λειτουργήσει ως ένα εξαιρετικά ακριβές ραντάρ οπτικά.',
    globalReach: 'LIEPNET™ Φιλοξενία',
    globalDesc: 'Ο στόχος μας με το LIEPNET™ Φιλοξενία είναι να παρέχουμε προσιτές λύσεις φιλοξενίας για μικρές εργασίες όπως φιλοξενία Discord bot και φιλοξενία μικρών διακομιστών Minecraft. Στοχεύουμε να δημιουργήσουμε ένα δίκτυο με λίγους κόμβους σε όλο τον κόσμο που έχουν την καλύτερη σύνδεση μεταξύ του LIEPNET™ CORE και των υπηρεσιών αναμετάδοσης για βέλτιστη συνδεσιμότητα.',
    industryLeader: 'Υπηρεσίες LIEPNET™',
    industryDesc: 'Ο στόχος μας είναι να κάνουμε όλες τις υπηρεσίες μας υψηλής ποιότητας και οικονομικές· ωστόσο, θέλουμε επίσης να κάνουμε όσο το δυνατόν περισσότερες από τις υπηρεσίες μας δωρεάν γιατί πιστεύουμε ότι το δωρεάν κάνει τα πράγματα πιο προσβάσιμα σε ευρύτερο κοινό. Προτίθεμαι επίσης να αναπτύξουμε περισσότερες υπηρεσίες όπως χάρτες, ραδιόφωνο, ραδιοφωνικούς χάρτες, φόρουμ, παιχνίδια και ούτω καθεξής. Οι στόχοι μας με αυτές τις υπηρεσίες είναι να τις κάνουμε απλές στη χρήση και δωρεάν· αρχικά, θέλουμε να τις καταστήσουμε διαθέσιμες σε όλους τους χρήστες στη Λετονία, στη συνέχεια να επεκταθούμε σταδιακά στην υπόλοιπη Ευρώπη και τελικά παγκοσμίως.',
    achievementImage: 'Εικόνα επιτεύγματος',
    
    // Footer
    footerFoundedText: 'Ιδρύθηκε τον Φεβρουάριο του 2025, Λετονία.',
    contactInformation: 'Στοιχεία επικοινωνίας',
    ownerCeo: 'Ιδιοκτήτης/Διευθύνων Σύμβουλος LIEPNET',
    executiveManager: 'Εκτελεστικός Διευθυντής LIEPNET GREECE',
    followUs: 'Ακολουθήστε μας',
    allRightsReserved: 'Όλα τα δικαιώματα διατηρούνται.',
    footerQuote: 'Όλα συμβαίνουν για έναν λόγο, ακόμα κι αν είναι δύσκολο να καταλάβουμε τον λόγο.',
  },
  de: {
    // Navigation
    about: 'Über uns',
    services: 'Dienstleistungen',
    gaming: 'Gaming',
    
    // Gaming page
    gamingDescription: 'Professionelle Gaming-Netzwerklösungen und Optimierungsdienste für das ultimative Spielerlebnis.',
    gamingServices: 'Gaming-Dienste',
    gameServerSetup: 'Spielserver-Einrichtung',
    networkOptimization: 'Netzwerk-Optimierung',
    latencyReduction: 'Latenz-Reduzierung',
    customGameConfigs: 'Benutzerdefinierte Spiel-Konfigurationen',
    supportedGames: 'Unterstützte Spiele',
    gamingTips: 'Gaming-Tipps & Tricks',
    optimizeConnection: 'Verbindung optimieren',
    reduceInput: 'Input-Lag reduzieren',
    improveFramerate: 'Framerate verbessern',
    troubleshooting: 'Gaming-Problembehandlung',
    
    // 404 Pages
    pageNotFound: 'Seite nicht gefunden',
    pageNotFoundMessage: 'Wir haben überall gesucht, aber die gesuchte Seite nicht gefunden.',
    returnToHome: 'Zurück zur Startseite',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    german: 'Deutsch',
    lithuanian: 'Lietuvių',
    estonian: 'Eesti',
    swedish: 'Svenska',
    
    // Hero section
    heroTitle: 'Willkommen bei LIEPNET',
    heroSubtitle: 'Ihr vertrauensvoller Technologie-Partner',
    
    // Content section
    whatIsLiepnet: 'WAS IST LIEPNET™?',
    liepnetDescription: 'LIEPNET™ bietet eine Vielzahl von Dienstleistungen, einschließlich Logo-Entwicklung, Hosting, Business-WLAN und Netzwerkplanung, meteorologische Informationen und Tech-Tipps für alle.',
    
    // Services
    meteorologicalNetwork: 'Meteorologisches Netzwerk',
    meteorologicalDesc: 'Das LIEPNET™ meteorologische Netzwerk in Lettland.',
    hosting: 'Hosting',
    hostingDesc: 'LIEPNET™ Hosting-Dienste',
    logoDesign: 'Logo-Entwicklung',
    logoDesc: 'Braucht Ihr Unternehmen einen neuen, aufgefrischten Look?',
    gamingDesc: 'Langeweile? Dann schauen Sie sich unsere Spiele an!',
    wifiNetworking: 'WLAN & Netzwerkplanung',
    wifiDesc: 'Hat Ihr Unternehmen WLAN- oder Konnektivitätsprobleme? Ist Ihre Technologie veraltet?',
    forumsTechTips: 'Foren & Tech-Tipps',
    forumsDesc: 'Erkunden Sie die LIEPNET™ Foren und Tech-Tipps!',
    radio: 'Radio',
    radioDesc: 'LIEPNET™ Radio Player',
    maps: 'Karten',
    mapsDesc: 'Erkunden Sie die LIEPNET™ Karten',
    more: 'Mehr...',
    moreDesc: 'Sehen Sie mehr unserer Dienstleistungen',
    
    // Buttons
    explore: 'Erkunden',
    start: 'Starten',
    order: 'Bestellen',
    play: 'Spielen',
    request: 'Anfragen',
    listen: 'Anhören',
    
    // Goals
    accomplishments: 'UNSERE ZIELE',
    accomplishmentsDesc: 'Das sind die LIEPNET™ Ziele',
    awardWinner: 'Meteorologisches Netzwerk',
    awardDesc: 'Unser Ziel ist es, das erste Crowdsourcing-meteorologische Netzwerk in Lettland zu schaffen, mit mindestens einer Station pro KM². Diese Dichte könnte als hochpräzises Radar visuell funktionieren.',
    globalReach: 'LIEPNET™ Hosting',
    globalDesc: 'Unser Ziel mit LIEPNET™ Hosting ist es, erschwingliche Hosting-Lösungen für kleine Aufgaben wie Discord-Bot-Hosting und kleine Minecraft-Server-Hosting bereitzustellen. Wir zielen darauf ab, ein Netzwerk mit einigen Knoten weltweit zu schaffen, die die beste Verbindung zwischen dem LIEPNET™ CORE und Rebroadcast-Diensten für optimale Konnektivität haben.',
    industryLeader: 'LIEPNET™ Dienste',
    industryDesc: 'Unser Ziel ist es, alle unsere Dienste qualitativ hochwertig und kostengünstig zu machen; wir möchten jedoch auch so viele unserer Dienste wie möglich kostenlos machen, da wir glauben, dass kostenlos die Dinge für ein breiteres Publikum zugänglicher macht. Wir beabsichtigen auch, mehr Dienste wie Karten, Radio, Radiokarten, Foren, Gaming usw. zu entwickeln. Unsere Ziele mit diesen Diensten sind, sie einfach zu verwenden und kostenlos zu machen; zunächst möchten wir sie allen Benutzern in Lettland zur Verfügung stellen, dann schrittweise auf den Rest Europas und schließlich global ausweiten.',
    achievementImage: 'Leistungsbild',
    
    // Footer
    footerFoundedText: 'Gegründet im Februar 2025, Lettland.',
    contactInformation: 'Kontaktinformationen',
    ownerCeo: 'Inhaber/CEO von LIEPNET',
    executiveManager: 'Geschäftsführer von LIEPNET GREECE',
    followUs: 'Folgen Sie uns',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    footerQuote: 'Alles geschieht aus einem Grund, auch wenn es schwer zu verstehen ist.',
  },
  lt: {
    // Navigation
    about: 'Apie mus',
    services: 'Paslaugos',
    gaming: 'Žaidimai',
    
    // Gaming page
    gamingDescription: 'Profesionalūs žaidimų tinklo sprendimai ir optimizavimo paslaugos geriausiai žaidimų patirčiai.',
    gamingServices: 'Žaidimų paslaugos',
    gameServerSetup: 'Žaidimų serverių sąranka',
    networkOptimization: 'Tinklo optimizavimas',
    latencyReduction: 'Vėlavimo mažinimas',
    customGameConfigs: 'Pritaikytos žaidimų konfigūracijos',
    supportedGames: 'Palaikomi žaidimai',
    gamingTips: 'Žaidimų patarimai ir triukai',
    optimizeConnection: 'Optimizuokite ryšį',
    reduceInput: 'Sumažinkite įvesties vėlavimą',
    improveFramerate: 'Pagerinkite kadrų dažnį',
    troubleshooting: 'Žaidimų trikčių šalinimas',
    
    // 404 Pages
    pageNotFound: 'Puslapis nerastas',
    pageNotFoundMessage: 'Ieškojome visur, bet negalėjome rasti puslapio, kurio ieškote.',
    returnToHome: 'Grįžti į pradžią',
    
    // Language names
    english: 'Anglų',
    latvian: 'Latvių',
    russian: 'Rusų',
    french: 'Prancūzų',
    greek: 'Graikų',
    german: 'Vokiečių',
    lithuanian: 'Lietuvių',
    estonian: 'Estų',
    swedish: 'Švedų',
    
    // Hero section
    heroTitle: 'Sveiki atvykę į LIEPNET',
    heroSubtitle: 'Jūsų patikimas technologijų partneris',
    
    // Content section
    whatIsLiepnet: 'KAS YRA LIEPNET™?',
    liepnetDescription: 'LIEPNET™ teikia įvairias paslaugas, įskaitant logotipų kūrimą, hostingą, verslo WI-FI ir tinklų planavimą, meteorologinę informaciją ir technologijų patarimus visiems.',
    
    // Services
    meteorologicalNetwork: 'Meteorologinis tinklas',
    meteorologicalDesc: 'LIEPNET™ meteorologinis tinklas Latvijoje.',
    hosting: 'Hostingas',
    hostingDesc: 'LIEPNET™ hostingo paslaugos',
    logoDesign: 'Logotipo kūrimas',
    logoDesc: 'Ar jūsų verslui reikia naujo atnaujinto išvaizdos?',
    gamingDesc: 'Nuobodu? Tada peržiūrėkite mūsų žaidimus!',
    wifiNetworking: 'WI-FI ir tinklų planavimas',
    wifiDesc: 'Ar jūsų verslas turi WI-FI ar ryšio problemų? Ar jūsų technologijos pasenusios?',
    forumsTechTips: 'Forumai ir technologijų patarimai',
    forumsDesc: 'Tyrinėkite LIEPNET™ forumus ir technologijų patarimus!',
    radio: 'Radijas',
    radioDesc: 'LIEPNET™ radijo grotuvas',
    maps: 'Žemėlapiai',
    mapsDesc: 'Tyrinėkite LIEPNET™ žemėlapius',
    more: 'Daugiau...',
    moreDesc: 'Žiūrėkite daugiau mūsų paslaugų',
    
    // Buttons
    explore: 'Tyrinėti',
    start: 'Pradėti',
    order: 'Užsakyti',
    play: 'Žaisti',
    request: 'Prašyti',
    listen: 'Klausyti',
    
    // Goals
    accomplishments: 'MŪSŲ TIKSLAI',
    accomplishmentsDesc: 'Tai yra LIEPNET™ tikslai',
    awardWinner: 'Meteorologinis tinklas',
    awardDesc: 'Mūsų tikslas yra sukurti pirmą kolektyvinio finansavimo meteorologinį tinklą Latvijoje, su bent viena stotimi vienam KM². Šis tankis galėtų veikti kaip labai tikslus radaras vizualiai.',
    globalReach: 'LIEPNET™ Hostingas',
    globalDesc: 'Mūsų tikslas su LIEPNET™ Hostingu yra teikti prieinamus hostingo sprendimus mažiems uždaviniams, tokiems kaip Discord botų hostingas ir mažų Minecraft serverių hostingas. Siekiame sukurti tinklą su keliais mazgais visame pasaulyje, kurie turi geriausią ryšį tarp LIEPNET™ CORE ir retransliacijų paslaugų optimaliam ryšiui.',
    industryLeader: 'LIEPNET™ Paslaugos',
    industryDesc: 'Mūsų tikslas yra padaryti visas mūsų paslaugas aukštos kokybės ir nebrangias; tačiau mes taip pat norime padaryti kuo daugiau mūsų paslaugų nemokamų, nes manome, kad nemokama padaro dalykus prieinamesnius platesnei auditorijai. Mes taip pat ketname plėtoti daugiau paslaugų, tokių kaip žemėlapiai, radijas, radijo žemėlapiai, forumai, žaidimai ir pan. Mūsų tikslai su šiomis paslaugomis yra padaryti jas lengvas naudoti ir nemokamas; iš pradžių mes norime padaryti jas prieinamas visiems vartotojams Latvijoje, tada palaipsniui plėsti į likusią Europą ir galiausiai globaliai.',
    achievementImage: 'Pasiekimo paveikslėlis',
    
    // Footer
    footerFoundedText: 'Įkurta 2025 m. vasarį, Latvijoje.',
    contactInformation: 'Kontaktinė informacija',
    ownerCeo: 'LIEPNET savininkas/CEO',
    executiveManager: 'LIEPNET GREECE vykdomasis vadovas',
    followUs: 'Sekite mus',
    allRightsReserved: 'Visos teisės saugomos.',
    footerQuote: 'Viskas vyksta dėl priežasties, net jei sunku suprasti priežastį.',
  },
  et: {
    // Navigation
    about: 'Meist',
    services: 'Teenused',
    gaming: 'Mängud',
    
    // Gaming page
    gamingDescription: 'Professionaalsed mängu võrgu lahendused ja optimeerimise teenused parima mängu kogemuse jaoks.',
    gamingServices: 'Mängu teenused',
    gameServerSetup: 'Mängu serveri seadistamine',
    networkOptimization: 'Võrgu optimeerimine',
    latencyReduction: 'Latentsuse vähendamine',
    customGameConfigs: 'Kohandatud mängu konfiguratsioonid',
    supportedGames: 'Toetatud mängud',
    gamingTips: 'Mängu nõuanded ja nipid',
    optimizeConnection: 'Optimeerige ühendust',
    reduceInput: 'Vähendage sisendi viivitust',
    improveFramerate: 'Parandage kaadrisagedust',
    troubleshooting: 'Mängu probleemide lahendamine',
    
    // 404 Pages
    pageNotFound: 'Lehte ei leitud',
    pageNotFoundMessage: 'Otisime kõikjalt, kuid ei suutnud leida lehte, mida otsite.',
    returnToHome: 'Tagasi koju',
    
    // Language names
    english: 'Inglise',
    latvian: 'Läti',
    russian: 'Vene',
    french: 'Prantsuse',
    greek: 'Kreeka',
    german: 'Saksa',
    lithuanian: 'Leedu',
    estonian: 'Eesti',
    swedish: 'Rootsi',
    
    // Hero section
    heroTitle: 'Tere tulemast LIEPNET-i',
    heroSubtitle: 'Teie usaldusväärne tehnoloogia partner',
    
    // Content section
    whatIsLiepnet: 'MIS ON LIEPNET™?',
    liepnetDescription: 'LIEPNET™ pakub mitmesuguseid teenuseid, sealhulgas logo arendamist, hostingut, äri WI-FI ja võrgu planeerimist, meteoroloogilist teavet ja tehnoloogia nõuandeid kõigile.',
    
    // Services
    meteorologicalNetwork: 'Meteoroloogiline võrgustik',
    meteorologicalDesc: 'LIEPNET™ meteoroloogiline võrgustik Lätis.',
    hosting: 'Hosting',
    hostingDesc: 'LIEPNET™ hostingu teenused',
    logoDesign: 'Logo arendamine',
    logoDesc: 'Kas teie ettevõte vajab uut värskendatud ilmet?',
    gamingDesc: 'Igav? Siis vaadake meie mänge!',
    wifiNetworking: 'WI-FI ja võrgu planeerimine',
    wifiDesc: 'Kas teie ettevõttel on WI-FI või ühenduvuse probleeme? Kas teie tehnoloogia on aegunud?',
    forumsTechTips: 'Foorumid ja tehnoloogia nõuanded',
    forumsDesc: 'Uurige LIEPNET™ foorumeid ja tehnoloogia nõuandeid!',
    radio: 'Raadio',
    radioDesc: 'LIEPNET™ raadio mängija',
    maps: 'Kaardid',
    mapsDesc: 'Uurige LIEPNET™ kaarte',
    more: 'Rohkem...',
    moreDesc: 'Vaadake rohkem meie teenuseid',
    
    // Buttons
    explore: 'Uurida',
    start: 'Alustada',
    order: 'Tellida',
    play: 'Mängida',
    request: 'Taotleda',
    listen: 'Kuulata',
    
    // Goals
    accomplishments: 'MEIE EESMÄRGID',
    accomplishmentsDesc: 'Need on LIEPNET™ eesmärgid',
    awardWinner: 'Meteoroloogiline võrgustik',
    awardDesc: 'Meie eesmärk on luua esimene rahvapõhine meteoroloogiline võrgustik Lätis, vähemalt ühe jaamaga KM² kohta. See tihedus võiks toimida visuaalselt väga täpse radarina.',
    globalReach: 'LIEPNET™ Hosting',
    globalDesc: 'Meie eesmärk LIEPNET™ Hostinguga on pakkuda taskukohaseid hostingu lahendusi väikeste ülesannete jaoks, nagu Discord boti hosting ja väikeste Minecraft serveri hosting. Püüame luua võrgustiku mõne sõlmega üle maailma, millel on parim ühendus LIEPNET™ CORE ja ümberedastuse teenuste vahel optimaalse ühenduvuse jaoks.',
    industryLeader: 'LIEPNET™ Teenused',
    industryDesc: 'Meie eesmärk on muuta kõik meie teenused kvaliteetseks ja odavaks; siiski tahame ka teha võimalikult palju meie teenuseid tasuta, sest usume, et tasuta teeb asjad laiemale publikule kättesaadavamaks. Kavatseme ka arendada rohkem teenuseid, nagu kaardid, raadio, raadiokaardid, foorumid, mängud jne. Meie eesmärgid nende teenustega on muuta need lihtsaks kasutada ja tasuta; algselt tahame muuta need kättesaadavaks kõigile kasutajatele Lätis, seejärel järk-järgult laiendada ülejäänud Euroopasse ja lõpuks globaalselt.',
    achievementImage: 'Saavutuse pilt',
    
    // Footer
    footerFoundedText: 'Asutatud 2025. aasta veebruaris, Lätis.',
    contactInformation: 'Kontaktandmed',
    ownerCeo: 'LIEPNET omanik/CEO',
    executiveManager: 'LIEPNET GREECE tegevjuht',
    followUs: 'Jälgige meid',
    allRightsReserved: 'Kõik õigused kaitstud.',
    footerQuote: 'Kõik juhtub mingil põhjusel, isegi kui põhjust on raske mõista.',
  },
  sv: {
    // Navigation
    about: 'Om oss',
    services: 'Tjänster',
    gaming: 'Spel',
    
    // Gaming page
    gamingDescription: 'Professionella spelnätverkslösningar och optimeringstjänster för den ultimata spelupplevelsen.',
    gamingServices: 'Speltjänster',
    gameServerSetup: 'Spelserverinställning',
    networkOptimization: 'Nätverksoptimering',
    latencyReduction: 'Latensreduktion',
    customGameConfigs: 'Anpassade spelkonfigurationer',
    supportedGames: 'Stödda spel',
    gamingTips: 'Speltips och tricks',
    optimizeConnection: 'Optimera din anslutning',
    reduceInput: 'Minska input-lag',
    improveFramerate: 'Förbättra bildhastighet',
    troubleshooting: 'Spelfelsökning',
    
    // 404 Pages
    pageNotFound: 'Sidan hittades inte',
    pageNotFoundMessage: 'Vi har sökt överallt men kunde inte hitta sidan du letar efter.',
    returnToHome: 'Tillbaka till hem',
    
    // Language names
    english: 'Engelska',
    latvian: 'Lettiska',
    russian: 'Ryska',
    french: 'Franska',
    greek: 'Grekiska',
    german: 'Tyska',
    lithuanian: 'Litauiska',
    estonian: 'Estniska',
    swedish: 'Svenska',
    
    // Hero section
    heroTitle: 'Välkommen till LIEPNET',
    heroSubtitle: 'Din pålitliga teknikpartner',
    
    // Content section
    whatIsLiepnet: 'VAD ÄR LIEPNET™?',
    liepnetDescription: 'LIEPNET™ tillhandahåller en rad tjänster, inklusive logoutveckling, hosting, företags WI-FI och nätverksplanering, meteorologisk information och teknikråd för alla.',
    
    // Services
    meteorologicalNetwork: 'Meteorologiskt nätverk',
    meteorologicalDesc: 'LIEPNET™ meteorologiska nätverk i Lettland.',
    hosting: 'Hosting',
    hostingDesc: 'LIEPNET™ hostingtjänster',
    logoDesign: 'Logoutveckling',
    logoDesc: 'Behöver ditt företag en ny uppfräschad look?',
    gamingDesc: 'Uttråkad? Då kolla våra spel!',
    wifiNetworking: 'WI-FI och nätverksplanering',
    wifiDesc: 'Har ditt företag WI-FI eller anslutningsproblem? Är din teknik föråldrad?',
    forumsTechTips: 'Forum och teknikråd',
    forumsDesc: 'Utforska LIEPNET™ forum och teknikråd!',
    radio: 'Radio',
    radioDesc: 'LIEPNET™ radiospelare',
    maps: 'Kartor',
    mapsDesc: 'Utforska LIEPNET™ kartor',
    more: 'Mer...',
    moreDesc: 'Se mer av våra tjänster',
    
    // Buttons
    explore: 'Utforska',
    start: 'Starta',
    order: 'Beställa',
    play: 'Spela',
    request: 'Begära',
    listen: 'Lyssna',
    
    // Goals
    accomplishments: 'VÅRA MÅL',
    accomplishmentsDesc: 'Detta är LIEPNET™ mål',
    awardWinner: 'Meteorologiskt nätverk',
    awardDesc: 'Vårt mål är att skapa det första crowdsourcade meteorologiska nätverket i Lettland, med minst en station per KM². Denna täthet skulle kunna fungera som en mycket exakt radar visuellt.',
    globalReach: 'LIEPNET™ Hosting',
    globalDesc: 'Vårt mål med LIEPNET™ Hosting är att tillhandahålla prisvärda hostinglösningar för små uppgifter som Discord bot hosting och små Minecraft server hosting. Vi strävar efter att skapa ett nätverk med några noder runt om i världen som har den bästa anslutningen mellan LIEPNET™ CORE och omsändningstjänster för optimal anslutning.',
    industryLeader: 'LIEPNET™ Tjänster',
    industryDesc: 'Vårt mål är att göra alla våra tjänster högkvalitativa och billiga; vi vill dock också göra så många av våra tjänster gratis som möjligt eftersom vi tror att gratis gör saker mer tillgängliga för en bredare publik. Vi avser också att utveckla fler tjänster som kartor, radio, radiokartor, forum, spel och så vidare. Våra mål med dessa tjänster är att göra dem enkla att använda och gratis; först vill vi göra dem tillgängliga för alla användare i Lettland, sedan gradvis expandera till resten av Europa och slutligen globalt.',
    achievementImage: 'Prestationsbild',
    
    // Footer
    footerFoundedText: 'Grundat i februari 2025, Lettland.',
    contactInformation: 'Kontaktinformation',
    ownerCeo: 'Ägare/VD för LIEPNET',
    executiveManager: 'Verkställande chef för LIEPNET GREECE',
    followUs: 'Följ oss',
    allRightsReserved: 'Alla rättigheter förbehållna.',
    footerQuote: 'Allt händer av en anledning, även om det är svårt att förstå anledningen.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};