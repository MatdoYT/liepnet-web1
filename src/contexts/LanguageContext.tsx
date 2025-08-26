import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'lv' | 'ru' | 'fr' | 'el';

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
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    
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
    gaming: 'Gaming',
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
    industryLeader: 'Industry Leader',
    industryDesc: 'Setting new standards in digital transformation and growth.',
    achievementImage: 'Achievement Image',
  },
  lv: {
    // Navigation
    about: 'Par mums',
    services: 'Pakalpojumi',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    
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
    gaming: 'Spēles',
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
    industryLeader: 'Nozares līderis',
    industryDesc: 'Nostādām jaunus standartus digitālajā transformācijā un izaugsmē.',
    achievementImage: 'Sasnieguma attēls',
  },
  ru: {
    // Navigation
    about: 'О нас',
    services: 'Услуги',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    
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
    gaming: 'Игры',
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
    industryLeader: 'Лидер отрасли',
    industryDesc: 'Устанавливаем новые стандарты в цифровой трансформации и росте.',
    achievementImage: 'Изображение достижения',
  },
  fr: {
    // Navigation
    about: 'À propos',
    services: 'Services',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    
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
    gaming: 'Jeux',
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
    industryLeader: 'Leader de l\'industrie',
    industryDesc: 'Établir de nouveaux standards dans la transformation numérique et la croissance.',
    achievementImage: 'Image de réalisation',
  },
  el: {
    // Navigation
    about: 'Σχετικά',
    services: 'Υπηρεσίες',
    
    // Language names
    english: 'English',
    latvian: 'Latviešu',
    russian: 'Русский',
    french: 'Français',
    greek: 'Ελληνικά',
    
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
    gaming: 'Παιχνίδια',
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
    industryLeader: 'Ηγέτης της βιομηχανίας',
    industryDesc: 'Θέτοντας νέα πρότυπα στον ψηφιακό μετασχηματισμό και την ανάπτυξη.',
    achievementImage: 'Εικόνα επιτεύγματος',
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