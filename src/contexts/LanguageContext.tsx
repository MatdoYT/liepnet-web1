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
    status: 'Status',
    
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
    
    // About page
    aboutTitle: 'About LIEPNET',
    aboutSubtitle: 'Your Technology Partner from Latvia',
    
    // What LIEPNET is
    whatIsTitle: 'What is LIEPNET?',
    whatIsContent: 'LIEPNET is a leading technology company based in Latvia, specializing in network infrastructure, web hosting, and digital solutions. Founded with a vision to bridge the digital divide across Europe, we provide cutting-edge services to businesses and individuals.',
    countryOrigin: 'Proudly serving from Latvia since our founding',
    
    // What LIEPNET means
    whatMeansTitle: 'What LIEPNET Means',
    whatMeansContent: 'LIEPNET represents innovation, reliability, and connection. Our name reflects our commitment to creating lasting networks that empower communities and businesses to thrive in the digital age.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Our Achievements',
    achievement1Title: 'Network Infrastructure',
    achievement1Content: 'Built robust network infrastructure serving thousands of users across the Baltic region',
    achievement2Title: 'Web Hosting Excellence',
    achievement2Content: 'Provided reliable hosting solutions for over 10,000 websites and applications',
    achievement3Title: 'Digital Innovation',
    achievement3Content: 'Pioneered innovative digital solutions that have transformed how businesses operate online',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Our Vision for the Future',
    plan1Title: 'European Expansion',
    plan1Content: 'Expanding our network infrastructure across all European markets by 2026',
    plan2Title: 'Green Technology',
    plan2Content: 'Implementing sustainable, eco-friendly solutions in all our data centers',
    plan3Title: 'AI Integration',
    plan3Content: 'Integrating artificial intelligence to enhance our services and customer experience',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Why Choose LIEPNET?',
    reason1Title: 'Reliability',
    reason1Content: '99.9% uptime guarantee with 24/7 monitoring and support',
    reason2Title: 'Innovation',
    reason2Content: 'Cutting-edge technology solutions tailored to your needs',
    reason3Title: 'Local Expertise',
    reason3Content: 'Deep understanding of European markets and regulations',
    reason4Title: 'Scalability',
    reason4Content: 'Solutions that grow with your business, from startup to enterprise',
    
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
    
    // Hosting page
    hostingTitle: 'LIEPNET™ HOSTING',
    websiteHosting: 'WEBSITE HOSTING',
    websiteHostingDesc: 'Cheap and professional web hosting solutions for your business.',
    setupFeeLabel: 'SETUP FEE',
    hostingLabel: 'HOSTING',
    startingFrom: 'Starting from',
    
    // Price Calculator
    priceCalculator: 'PRICE CALCULATOR',
    priceCalculatorSubtitle: 'For the "WEBSITE HOSTING" plan',
    changesPerMonth: 'CHANGES PER MONTH',
    priority: 'PRIORITY',
    location: 'LOCATION',
    websiteSetupFee: 'WEBSITE SETUP FEE',
    normalPriority: 'Normal Priority',
    highPriority: 'High Priority',
    simpleWebsite: 'Simple Website',
    complexWebsite: 'Complex Website',
    monthlyHosting: 'MONTHLY HOSTING',
    upfrontCost: 'UPFRONT COST',
    inclVat: 'Incl. VAT 21%',
    vatAmount: 'VAT Amount:',
    totalExclVat: 'Total (excl. VAT):',
    contactUs: 'CONTACT US',
    perMonth: '/mo',
    whyNeedWebsite: 'Why do I need a website? Why choose us?',
    whyNeedWebsiteTitle: 'WHY DO I NEED A WEBSITE?',
    whyNeedWebsiteContent: "It's 2025, and your company must have a website to expand your business's reach and professionalism. You may also claim that you already use social media platforms such as X, YouTube, and Facebook, which are all valid, but they can change their terms of service at any time, terminate your account for any reason, or simply stop recommending your posts or account to other users, which is particularly costly to small businesses.",
    whyChooseUsTitle: 'WHY CHOOSE US?',
    whyChooseUsContent: "LIEPNET™ offers affordable all-in-one website hosting. Simply tell us what you want and we'll create it. We'll also maintain, fix bugs, and update your website when needed. If you want to create your own website, you can use any of our other website hosting services (if available) or go with a lower-cost website hosting provider; the choice is yours.",
    close: 'Close',
    
    // Tooltips
    tooltipMalpils: 'This server location is located near Mālpils, this is the LIEPNET™ CORE and provides the cheapest hosting.',
    tooltipNormalPriority: 'Normal priority provides normal priority, which is usually adequate for small businesses with low website traffic and does not negatively impact business if the website experiences minor downtime.',
    tooltipHighPriority: 'High priority provides high priority, which means that your website is prioritized over other websites for fixes and any issues that may arise at random. High priority also ensures the highest available uptime because your website will be hosted on multiple nodes for uptime in the event that the primary chosen node goes offline or is under maintenance.',
    tooltipSimpleWebsite: 'A simple website includes simple static or slightly dynamic pages.',
    tooltipComplexWebsite: 'A complex website includes mostly dynamic pages and can include places where the contents can change or get updated externally.',
    tooltipUpfrontCost: 'Upfront cost (one time fee).',
    tooltipMonthlyHosting: 'Monthly hosting cost.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Unsaved Changes',
    unsavedChangesDesc: 'Changes are not saved. Are you sure you want to go back?',
    cancel: 'Cancel',
    goBack: 'Go Back',
  },
  lv: {
    // Navigation
    about: 'Par mums',
    services: 'Pakalpojumi',
    gaming: 'Spēles',
    status: 'Statuss',
    
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
    
    // Hero section (you'll need to add these to your components)
    heroTitle: 'Laipni lūdzam LIEPNET',
    heroSubtitle: 'Jūsu uzticamais tehnoloģiju partneris',
    
    // About page
    aboutTitle: 'Par LIEPNET',
    aboutSubtitle: 'Jūsu tehnoloģiju partneris no Latvijas',
    
    // What LIEPNET is
    whatIsTitle: 'Kas ir LIEPNET?',
    whatIsContent: 'LIEPNET ir vadošs tehnoloģiju uzņēmums ar mītni Latvijā, kas specializējas tīkla infrastruktūrā, web hostingā un digitālajos risinājumos. Dibināts ar vīziju savienot digitālo plaisu visā Eiropā, mēs nodrošinām modernākos pakalpojumus uzņēmumiem un privātpersonām.',
    countryOrigin: 'Lepni kalpojam no Latvijas kopš mūsu dibināšanas',
    
    // What LIEPNET means
    whatMeansTitle: 'Ko nozīmē LIEPNET',
    whatMeansContent: 'LIEPNET pārstāv inovācijas, uzticamību un savienojumu. Mūsu nosaukums atspoguļo mūsu apņemšanos radīt ilgstošus tīklus, kas ļauj kopienām un uzņēmumiem uzplaukt digitālajā laikmetā.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Mūsu sasniegumi',
    achievement1Title: 'Tīkla infrastruktūra',
    achievement1Content: 'Izveidojuši stabilu tīkla infrastruktūru, kas apkalpo tūkstošiem lietotāju visā Baltijas reģionā',
    achievement2Title: 'Web hostinga izcilība',
    achievement2Content: 'Nodrošinājuši uzticamus hostinga risinājumus vairāk nekā 10 000 vietnēm un lietotnēm',
    achievement3Title: 'Digitālās inovācijas',
    achievement3Content: 'Pionieri inovatīvos digitālajos risinājumos, kas ir pārveidojuši veidu, kā uzņēmumi darbojas tiešsaistē',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Mūsu nākotnes vīzija',
    plan1Title: 'Paplašināšanās Eiropā',
    plan1Content: 'Paplašināšu mūsu tīkla infrastruktūru visās Eiropas tirgos līdz 2026. gadam',
    plan2Title: 'Zaļā tehnoloģija',
    plan2Content: 'Ieviešam ilgtspējīgus, ekoloģiski draudzīgus risinājumus visos mūsu datu centros',
    plan3Title: 'MI integrācija',
    plan3Content: 'Integrējam mākslīgo intelektu, lai uzlabotu mūsu pakalpojumus un klienta pieredzi',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Kāpēc izvēlēties LIEPNET?',
    reason1Title: 'Uzticamība',
    reason1Content: '99,9% darbības laika garantija ar 24/7 uzraudzību un atbalstu',
    reason2Title: 'Inovācijas',
    reason2Content: 'Modernākās tehnoloģiju risinājumi, kas pielāgoti jūsu vajadzībām',
    reason3Title: 'Vietējā ekspertīze',
    reason3Content: 'Dziļa izpratne par Eiropas tirgiem un regulējumiem',
    reason4Title: 'Mērogojamība',
    reason4Content: 'Risinājumi, kas aug līdzi jūsu biznesam, no jaunuzņēmuma līdz korporācijai',
    
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
    
    // Hosting page
    hostingTitle: 'LIEPNET™ HOSTINGS',
    websiteHosting: 'VIETNES HOSTINGS',
    websiteHostingDesc: 'Lēti un profesionāli tīmekļa hostinga risinājumi jūsu biznesam.',
    setupFeeLabel: 'UZSTĀDĪŠANAS MAKSA',
    hostingLabel: 'HOSTINGS',
    startingFrom: 'Sākot no',
    
    // Price Calculator
    priceCalculator: 'CENAS KALKULATORS',
    priceCalculatorSubtitle: 'Plānam "VIETNES HOSTINGS"',
    changesPerMonth: 'IZMAIŅAS MĒNESĪ',
    priority: 'PRIORITĀTE',
    location: 'ATRAŠANĀS VIETA',
    websiteSetupFee: 'VIETNES UZSTĀDĪŠANAS MAKSA',
    normalPriority: 'Normāla prioritāte',
    highPriority: 'Augsta prioritāte',
    simpleWebsite: 'Vienkārša vietne',
    complexWebsite: 'Sarežģīta vietne',
    monthlyHosting: 'MĒNEŠA HOSTINGS',
    upfrontCost: 'SĀKOTNĒJĀS IZMAKSAS',
    inclVat: 'Ieskaitot PVN 21%',
    vatAmount: 'PVN summa:',
    totalExclVat: 'Kopā (bez PVN):',
    contactUs: 'SAZINIETIES AR MUMS',
    perMonth: '/mēn.',
    whyNeedWebsite: 'Kāpēc man ir nepieciešama tīmekļa vietne? Kāpēc izvēlēties mūs?',
    whyNeedWebsiteTitle: 'KĀPĒC MAN IR NEPIECIEŠAMA TĪMEKĻA VIETNE?',
    whyNeedWebsiteContent: 'Ir 2025. gads, un jūsu uzņēmumam ir jābūt tīmekļa vietnei, lai paplašinātu uzņēmuma darbības jomu un profesionalitāti. Jūs varat arī apgalvot, ka jau izmantojat sociālo mediju platformas, piemēram, X, YouTube un Facebook, kas visas ir derīgas, taču tās jebkurā laikā var mainīt savus pakalpojumu sniegšanas noteikumus, jebkura iemesla dēļ izbeigt jūsu kontu vai vienkārši pārtraukt ieteikt jūsu ierakstus vai kontu citiem lietotājiem, kas īpaši kaitē maziem uzņēmumiem.',
    whyChooseUsTitle: 'KĀPĒC IZVĒLĒTIES MŪS?',
    whyChooseUsContent: 'LIEPNET™ piedāvā pieejamu visu vienā tīmekļa vietņu hostingu. Vienkārši pastāstiet mums, ko vēlaties, un mēs to izveidosim. Mēs arī uzturēsim, labosim kļūdas un atjaunināsim jūsu tīmekļa vietni, kad nepieciešams. Ja vēlaties izveidot savu tīmekļa vietni pats, varat izmantot jebkuru no mūsu citiem tīmekļa vietņu hostinga pakalpojumiem (ja pieejami) vai izvēlēties lētāku tīmekļa vietņu hostinga pakalpojumu sniedzēju; izvēle ir jūsu.',
    close: 'Aizvērt',
    
    // Tooltips
    tooltipMalpils: 'Šī servera atrašanās vieta atrodas netālu no Mālpils, šis ir LIEPNET™ CORE un nodrošina vislētāko hostingu.',
    tooltipNormalPriority: 'Normāla prioritāte nodrošina normālu prioritāti, kas parasti ir pietiekama maziem uzņēmumiem ar zemu vietnes apmeklētību un negatīvi neietekmē biznesu, ja vietne piedzīvo nelielu dīkstāvi.',
    tooltipHighPriority: 'Augsta prioritāte nodrošina augstu prioritāti, kas nozīmē, ka jūsu vietne tiek prioritizēta pār citām vietnēm labojumu un jebkādu problēmu gadījumā, kas var rasties nejauši. Augsta prioritāte arī nodrošina augstāko pieejamo darbības laiku, jo jūsu vietne tiks mitināta uz vairākiem mezgliem darbības laika nodrošināšanai gadījumā, ja primārais izvēlētais mezgls ir bezsaistē vai tiek veikta apkope.',
    tooltipSimpleWebsite: 'Vienkārša vietne ietver vienkāršas statiskas vai nedaudz dinamiskas lapas.',
    tooltipComplexWebsite: 'Sarežģīta vietne ietver galvenokārt dinamiskas lapas un var ietvert vietas, kur saturs var mainīties vai tikt atjaunināts ārēji.',
    tooltipUpfrontCost: 'Sākotnējās izmaksas (vienreizēja maksa).',
    tooltipMonthlyHosting: 'Mēneša hostinga izmaksas.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Nesaglabātas izmaiņas',
    unsavedChangesDesc: 'Izmaiņas nav saglabātas. Vai tiešām vēlaties atgriezties?',
    cancel: 'Atcelt',
    goBack: 'Atgriezties',
  },
  ru: {
    // Navigation
    about: 'О нас',
    services: 'Услуги',
    gaming: 'Игры',
    status: 'Статус',
    
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
    
    // About page
    aboutTitle: 'О нас',
    aboutSubtitle: 'Узнайте больше о LIEPNET™',
    countryOrigin: 'Латвия',
    
    // What is LIEPNET
    whatIsTitle: 'Что такое LIEPNET',
    whatIsContent: 'LIEPNET™ - это динамическая технологическая компания, базирующаяся в Латвии, которая специализируется на предоставлении инновационных решений в области сетевой инфраструктуры, веб-хостинга и цифровых технологий. Мы стремимся к созданию доступных и высококачественных услуг для бизнеса всех размеров.',
    
    // What LIEPNET means
    whatMeansTitle: 'Что означает LIEPNET',
    whatMeansContent: 'LIEPNET означает "Liepu tīkls" на латышском языке, что переводится как "Липовая сеть". Это название отражает наши корни в Латвии и символизирует органический рост и взаимосвязь, подобную ветвям липового дерева, объединяющим сообщества через технологии.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Наши достижения',
    achievement1Title: 'Сетевая инфраструктура',
    achievement1Content: 'Построили надежную сетевую инфраструктуру, обслуживающую тысячи пользователей по всему Балтийскому региону',
    achievement2Title: 'Превосходство веб-хостинга',
    achievement2Content: 'Обеспечили надежные решения хостинга для более чем 10 000 веб-сайтов и приложений',
    achievement3Title: 'Цифровые инновации',
    achievement3Content: 'Пионеры в области инновационных цифровых решений, которые изменили способ работы предприятий в интернете',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Наше видение будущего',
    plan1Title: 'Расширение в Европе',
    plan1Content: 'Расширение нашей сетевой инфраструктуры на все европейские рынки к 2026 году',
    plan2Title: 'Зеленые технологии',
    plan2Content: 'Внедрение устойчивых, экологически чистых решений во всех наших дата-центрах',
    plan3Title: 'Интеграция ИИ',
    plan3Content: 'Интеграция искусственного интеллекта для улучшения наших услуг и клиентского опыта',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Почему выбирают LIEPNET?',
    reason1Title: 'Надежность',
    reason1Content: 'Гарантия времени безотказной работы 99.9% с круглосуточным мониторингом и поддержкой',
    reason2Title: 'Инновации',
    reason2Content: 'Передовые технологические решения, адаптированные под ваши нужды',
    reason3Title: 'Местная экспертиза',
    reason3Content: 'Глубокое понимание европейских рынков и нормативных требований',
    reason4Title: 'Масштабируемость',
    reason4Content: 'Решения, которые растут вместе с вашим бизнесом, от стартапа до корпорации',

    // Hosting page
    hostingTitle: 'ХОСТИНГ LIEPNET™',
    websiteHosting: 'ХОСТИНГ САЙТОВ',
    websiteHostingDesc: 'Дешевые и профессиональные решения веб-хостинга для вашего бизнеса.',
    setupFeeLabel: 'ПЛАТА ЗА УСТАНОВКУ',
    hostingLabel: 'ХОСТИНГ',
    startingFrom: 'Начиная от',
    
    // Price Calculator
    priceCalculator: 'КАЛЬКУЛЯТОР ЦЕН',
    priceCalculatorSubtitle: 'Для плана "ХОСТИНГ САЙТОВ"',
    changesPerMonth: 'ИЗМЕНЕНИЙ В МЕСЯЦ',
    priority: 'ПРИОРИТЕТ',
    location: 'МЕСТОПОЛОЖЕНИЕ',
    websiteSetupFee: 'ПЛАТА ЗА УСТАНОВКУ САЙТА',
    normalPriority: 'Нормальный приоритет',
    highPriority: 'Высокий приоритет',
    simpleWebsite: 'Простой сайт',
    complexWebsite: 'Сложный сайт',
    monthlyHosting: 'ЕЖЕМЕСЯЧНЫЙ ХОСТИНГ',
    upfrontCost: 'ПЕРВОНАЧАЛЬНЫЕ РАСХОДЫ',
    inclVat: 'Включая НДС 21%',
    vatAmount: 'Сумма НДС:',
    totalExclVat: 'Итого (без НДС):',
    contactUs: 'СВЯЗАТЬСЯ С НАМИ',
    perMonth: '/мес.',
    whyNeedWebsite: 'Зачем мне нужен сайт? Почему выбирают нас?',
    whyNeedWebsiteTitle: 'ЗАЧЕМ МНЕ НУЖЕН САЙТ?',
    whyNeedWebsiteContent: 'Сейчас 2025 год, и ваша компания должна иметь веб-сайт, чтобы расширить охват и профессионализм вашего бизнеса. Вы также можете заявить, что уже используете платформы социальных сетей, такие как X, YouTube и Facebook, которые действительны, но они могут в любое время изменить свои условия обслуживания, закрыть вашу учетную запись по любой причине или просто перестать рекомендовать ваши публикации или учетную запись другим пользователям, что особенно вредно для малого бизнеса.',
    whyChooseUsTitle: 'ПОЧЕМУ ВЫБИРАЮТ НАС?',
    whyChooseUsContent: 'LIEPNET™ предлагает доступный комплексный хостинг веб-сайтов. Просто скажите нам, что вы хотите, и мы создадим это. Мы также будем поддерживать, исправлять ошибки и обновлять ваш сайт по мере необходимости. Если вы хотите создать свой собственный сайт, вы можете использовать любые другие наши услуги хостинга веб-сайтов (если они доступны) или выбрать более дешевого провайдера хостинга веб-сайтов; выбор за вами.',
    close: 'Закрыть',
    
    // Tooltips
    tooltipMalpils: 'Это расположение сервера находится рядом с Малпилсом, это LIEPNET™ CORE и обеспечивает самый дешевый хостинг.',
    tooltipNormalPriority: 'Нормальный приоритет обеспечивает обычный приоритет, который обычно достаточен для малого бизнеса с низким трафиком веб-сайта и не оказывает негативного влияния на бизнес, если веб-сайт испытывает незначительные простои.',
    tooltipHighPriority: 'Высокий приоритет означает, что ваш веб-сайт имеет приоритет перед другими веб-сайтами для исправлений и любых проблем, которые могут возникнуть случайно. Высокий приоритет также обеспечивает максимальное доступное время работы, потому что ваш веб-сайт будет размещен на нескольких узлах для обеспечения работы в случае, если основной выбранный узел отключен или находится на обслуживании.',
    tooltipSimpleWebsite: 'Простой веб-сайт включает простые статические или слегка динамические страницы.',
    tooltipComplexWebsite: 'Сложный веб-сайт включает в основном динамические страницы и может включать места, где содержимое может изменяться или обновляться извне.',
    tooltipUpfrontCost: 'Первоначальные расходы (единоразовая плата).',
    tooltipMonthlyHosting: 'Ежемесячная стоимость хостинга.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Несохраненные изменения',
    unsavedChangesDesc: 'Вы уверены, что хотите вернуться? Все ваши изменения будут потеряны.',
    cancel: 'Отмена',
    goBack: 'Вернуться',

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
    status: 'Statut',
    
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
    
    // About page
    aboutTitle: 'À propos',
    aboutSubtitle: 'Découvrez-en plus sur LIEPNET™',
    countryOrigin: 'Lettonie',
    
    // What is LIEPNET
    whatIsTitle: 'Qu\'est-ce que LIEPNET',
    whatIsContent: 'LIEPNET™ est une entreprise technologique dynamique basée en Lettonie qui se spécialise dans la fourniture de solutions innovantes en infrastructure réseau, hébergement web et technologies numériques. Nous nous efforçons de créer des services accessibles et de haute qualité pour les entreprises de toutes tailles.',
    
    // What LIEPNET means
    whatMeansTitle: 'Que signifie LIEPNET',
    whatMeansContent: 'LIEPNET signifie "Liepu tīkls" en letton, ce qui se traduit par "Réseau de Tilleul". Ce nom reflète nos racines en Lettonie et symbolise la croissance organique et l\'interconnectivité, comme les branches d\'un tilleul reliant les communautés par la technologie.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Nos réalisations',
    achievement1Title: 'Infrastructure réseau',
    achievement1Content: 'Construit une infrastructure réseau fiable desservant des milliers d\'utilisateurs dans toute la région baltique',
    achievement2Title: 'Excellence en hébergement web',
    achievement2Content: 'Fourni des solutions d\'hébergement fiables pour plus de 10 000 sites web et applications',
    achievement3Title: 'Innovation numérique',
    achievement3Content: 'Pionniers dans les solutions numériques innovantes qui ont transformé la façon dont les entreprises opèrent en ligne',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Notre vision d\'avenir',
    plan1Title: 'Expansion européenne',
    plan1Content: 'Expansion de notre infrastructure réseau sur tous les marchés européens d\'ici 2026',
    plan2Title: 'Technologie verte',
    plan2Content: 'Implémentation de solutions durables et respectueuses de l\'environnement dans tous nos centres de données',
    plan3Title: 'Intégration IA',
    plan3Content: 'Intégration de l\'intelligence artificielle pour améliorer nos services et l\'expérience client',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Pourquoi choisir LIEPNET ?',
    reason1Title: 'Fiabilité',
    reason1Content: 'Garantie de temps de fonctionnement de 99.9% avec surveillance et support 24/7',
    reason2Title: 'Innovation',
    reason2Content: 'Solutions technologiques de pointe adaptées à vos besoins',
    reason3Title: 'Expertise locale',
    reason3Content: 'Compréhension approfondie des marchés européens et des réglementations',
    reason4Title: 'Évolutivité',
    reason4Content: 'Solutions qui évoluent avec votre entreprise, de la startup à la corporation',

    // Hosting page
    hostingTitle: 'HÉBERGEMENT LIEPNET™',
    websiteHosting: 'HÉBERGEMENT DE SITE WEB',
    websiteHostingDesc: 'Solutions d\'hébergement web professionnelles et abordables pour votre entreprise.',
    setupFeeLabel: 'FRAIS D\'INSTALLATION',
    hostingLabel: 'HÉBERGEMENT',
    startingFrom: 'À partir de',
    
    // Price Calculator
    priceCalculator: 'CALCULATEUR DE PRIX',
    priceCalculatorSubtitle: 'Pour le plan "HÉBERGEMENT DE SITE WEB"',
    changesPerMonth: 'MODIFICATIONS PAR MOIS',
    priority: 'PRIORITÉ',
    location: 'EMPLACEMENT',
    websiteSetupFee: 'FRAIS D\'INSTALLATION DU SITE',
    normalPriority: 'Priorité normale',
    highPriority: 'Haute priorité',
    simpleWebsite: 'Site simple',
    complexWebsite: 'Site complexe',
    monthlyHosting: 'HÉBERGEMENT MENSUEL',
    upfrontCost: 'COÛT INITIAL',
    inclVat: 'TVA 21% incluse',
    vatAmount: 'Montant de la TVA :',
    totalExclVat: 'Total (hors TVA) :',
    contactUs: 'NOUS CONTACTER',
    perMonth: '/mois',
    whyNeedWebsite: 'Pourquoi ai-je besoin d\'un site web? Pourquoi nous choisir?',
    whyNeedWebsiteTitle: 'POURQUOI AI-JE BESOIN D\'UN SITE WEB?',
    whyNeedWebsiteContent: 'Nous sommes en 2025, et votre entreprise doit avoir un site web pour étendre la portée et le professionnalisme de votre entreprise. Vous pouvez également prétendre que vous utilisez déjà des plateformes de médias sociaux telles que X, YouTube et Facebook, qui sont toutes valables, mais elles peuvent modifier leurs conditions d\'utilisation à tout moment, résilier votre compte pour quelque raison que ce soit ou simplement cesser de recommander vos publications ou votre compte à d\'autres utilisateurs, ce qui est particulièrement coûteux pour les petites entreprises.',
    whyChooseUsTitle: 'POURQUOI NOUS CHOISIR?',
    whyChooseUsContent: 'LIEPNET™ propose un hébergement de sites web tout-en-un abordable. Dites-nous simplement ce que vous voulez et nous le créerons. Nous assurerons également la maintenance, corrigerons les bugs et mettrons à jour votre site web si nécessaire. Si vous souhaitez créer votre propre site web, vous pouvez utiliser l\'un de nos autres services d\'hébergement de sites web (si disponibles) ou opter pour un fournisseur d\'hébergement de sites web moins cher; le choix vous appartient.',
    close: 'Fermer',
    
    // Tooltips
    tooltipMalpils: 'Cet emplacement de serveur est situé près de Mālpils, c\'est le LIEPNET™ CORE et offre l\'hébergement le moins cher.',
    tooltipNormalPriority: 'La priorité normale fournit une priorité normale, qui est généralement suffisante pour les petites entreprises avec un trafic de site Web faible et n\'a pas d\'impact négatif sur l\'entreprise si le site Web connaît un temps d\'arrêt mineur.',
    tooltipHighPriority: 'La haute priorité signifie que votre site Web est priorisé par rapport aux autres sites Web pour les corrections et tout problème qui pourrait survenir de manière aléatoire. La haute priorité garantit également le plus haut temps de disponibilité car votre site Web sera hébergé sur plusieurs nœuds pour la disponibilité au cas où le nœud principal choisi serait hors ligne ou en maintenance.',
    tooltipSimpleWebsite: 'Un site simple comprend des pages statiques simples ou légèrement dynamiques.',
    tooltipComplexWebsite: 'Un site complexe comprend principalement des pages dynamiques et peut inclure des endroits où le contenu peut changer ou être mis à jour de manière externe.',
    tooltipUpfrontCost: 'Coût initial (frais uniques).',
    tooltipMonthlyHosting: 'Coût d\'hébergement mensuel.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Modifications non enregistrées',
    unsavedChangesDesc: 'Êtes-vous sûr de vouloir revenir en arrière ? Tous vos changements seront perdus.',
    cancel: 'Annuler',
    goBack: 'Retour',

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
    status: 'Κατάσταση',
    
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
    
    // About page
    aboutTitle: 'Σχετικά με εμάς',
    aboutSubtitle: 'Μάθετε περισσότερα για το LIEPNET™',
    countryOrigin: 'Λετονία',
    
    // What is LIEPNET
    whatIsTitle: 'Τι είναι το LIEPNET',
    whatIsContent: 'Το LIEPNET™ είναι μια δυναμική εταιρεία τεχνολογίας που εδρεύει στη Λετονία και ειδικεύεται στην παροχή καινοτόμων λύσεων σε δικτυακή υποδομή, φιλοξενία ιστοσελίδων και ψηφιακές τεχνολογίες. Προσπαθούμε να δημιουργήσουμε προσβάσιμες και υψηλής ποιότητας υπηρεσίες για επιχειρήσεις κάθε μεγέθους.',
    
    // What LIEPNET means
    whatMeansTitle: 'Τι σημαίνει το LIEPNET',
    whatMeansContent: 'Το LIEPNET σημαίνει "Liepu tīkls" στα λετονικά, που μεταφράζεται ως "Δίκτυο Φιλύρας". Αυτό το όνομα αντικατοπτρίζει τις ρίζες μας στη Λετονία και συμβολίζει την οργανική ανάπτυξη και διασύνδεση, όπως τα κλαδιά ενός δέντρου φιλύρας που συνδέει κοινότητες μέσω της τεχνολογίας.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Τα επιτεύγματά μας',
    achievement1Title: 'Δικτυακή υποδομή',
    achievement1Content: 'Χτίσαμε αξιόπιστη δικτυακή υποδομή που εξυπηρετεί χιλιάδες χρήστες σε όλη την περιοχή της Βαλτικής',
    achievement2Title: 'Αριστεία στη φιλοξενία ιστού',
    achievement2Content: 'Παρείχαμε αξιόπιστες λύσεις φιλοξενίας για πάνω από 10.000 ιστοσελίδες και εφαρμογές',
    achievement3Title: 'Ψηφιακή καινοτομία',
    achievement3Content: 'Πρωτοπόροι σε καινοτόμες ψηφιακές λύσεις που έχουν μεταμορφώσει τον τρόπο που οι επιχειρήσεις λειτουργούν διαδικτυακά',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Το όραμά μας για το μέλλον',
    plan1Title: 'Ευρωπαϊκή επέκταση',
    plan1Content: 'Επέκταση της δικτυακής μας υποδομής σε όλες τις ευρωπαϊκές αγορές μέχρι το 2026',
    plan2Title: 'Πράσινη τεχνολογία',
    plan2Content: 'Υλοποίηση βιώσιμων, φιλικών προς το περιβάλλον λύσεων σε όλα τα κέντρα δεδομένων μας',
    plan3Title: 'Ενσωμάτωση ΤΝ',
    plan3Content: 'Ενσωμάτωση τεχνητής νοημοσύνης για τη βελτίωση των υπηρεσιών και της εμπειρίας πελατών μας',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Γιατί να επιλέξετε το LIEPNET;',
    reason1Title: 'Αξιοπιστία',
    reason1Content: 'Εγγύηση χρόνου λειτουργίας 99.9% με παρακολούθηση και υποστήριξη 24/7',
    reason2Title: 'Καινοτομία',
    reason2Content: 'Τεχνολογικές λύσεις αιχμής προσαρμοσμένες στις ανάγκες σας',
    reason3Title: 'Τοπική εμπειρογνωμοσύνη',
    reason3Content: 'Βαθιά κατανόηση των ευρωπαϊκών αγορών και κανονισμών',
    reason4Title: 'Κλιμάκωση',
    reason4Content: 'Λύσεις που αναπτύσσονται μαζί με την επιχείρησή σας, από startup μέχρι εταιρεία',

    // Hosting page
    hostingTitle: 'ΦΙΛΟΞΕΝΙΑ LIEPNET™',
    websiteHosting: 'ΦΙΛΟΞΕΝΙΑ ΙΣΤΟΣΕΛΙΔΩΝ',
    websiteHostingDesc: 'Φθηνές και επαγγελματικές λύσεις φιλοξενίας ιστού για την επιχείρησή σας.',
    setupFeeLabel: 'ΤΕΛΟΣ ΕΓΚΑΤΑΣΤΑΣΗΣ',
    hostingLabel: 'ΦΙΛΟΞΕΝΙΑ',
    startingFrom: 'Ξεκινώντας από',
    
    // Price Calculator
    priceCalculator: 'ΥΠΟΛΟΓΙΣΤΗΣ ΤΙΜΩΝ',
    priceCalculatorSubtitle: 'Για το πλάνο "ΦΙΛΟΞΕΝΙΑ ΙΣΤΟΣΕΛΙΔΩΝ"',
    changesPerMonth: 'ΑΛΛΑΓΕΣ ΑΝΑ ΜΗΝΑ',
    priority: 'ΠΡΟΤΕΡΑΙΟΤΗΤΑ',
    location: 'ΤΟΠΟΘΕΣΙΑ',
    websiteSetupFee: 'ΤΕΛΟΣ ΕΓΚΑΤΑΣΤΑΣΗΣ ΙΣΤΟΣΕΛΙΔΑΣ',
    normalPriority: 'Κανονική προτεραιότητα',
    highPriority: 'Υψηλή προτεραιότητα',
    simpleWebsite: 'Απλή ιστοσελίδα',
    complexWebsite: 'Σύνθετη ιστοσελίδα',
    monthlyHosting: 'ΜΗΝΙΑΙΑ ΦΙΛΟΞΕΝΙΑ',
    upfrontCost: 'ΑΡΧΙΚΟ ΚΟΣΤΟΣ',
    inclVat: 'Συμπ. ΦΠΑ 21%',
    vatAmount: 'Ποσό ΦΠΑ:',
    totalExclVat: 'Σύνολο (χωρίς ΦΠΑ):',
    contactUs: 'ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ',
    perMonth: '/μήνα',
    whyNeedWebsite: 'Γιατί χρειάζομαι έναν ιστότοπο; Γιατί να μας επιλέξετε;',
    whyNeedWebsiteTitle: 'ΓΙΑΤΙ ΧΡΕΙΑΖΟΜΑΙ ΕΝΑΝ ΙΣΤΟΤΟΠΟ;',
    whyNeedWebsiteContent: 'Είναι το 2025 και η εταιρεία σας πρέπει να έχει έναν ιστότοπο για να επεκτείνει την εμβέλεια και τον επαγγελματισμό της επιχείρησής σας. Μπορείτε επίσης να ισχυριστείτε ότι χρησιμοποιείτε ήδη πλατφόρμες κοινωνικών μέσων όπως το X, το YouTube και το Facebook, οι οποίες είναι όλες έγκυρες, αλλά μπορούν να αλλάξουν τους όρους παροχής υπηρεσιών τους ανά πάσα στιγμή, να διακόψουν τον λογαριασμό σας για οποιονδήποτε λόγο ή απλώς να σταματήσουν να συστήνουν τις αναρτήσεις ή τον λογαριασμό σας σε άλλους χρήστες, κάτι που είναι ιδιαίτερα δαπανηρό για τις μικρές επιχειρήσεις.',
    whyChooseUsTitle: 'ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ;',
    whyChooseUsContent: 'Η LIEPNET™ προσφέρει οικονομικά all-in-one φιλοξενία ιστοσελίδων. Απλά πείτε μας τι θέλετε και θα το δημιουργήσουμε. Θα διατηρήσουμε επίσης, θα διορθώσουμε σφάλματα και θα ενημερώσουμε τον ιστότοπό σας όταν χρειάζεται. Αν θέλετε να δημιουργήσετε τον δικό σας ιστότοπο, μπορείτε να χρησιμοποιήσετε οποιαδήποτε από τις άλλες υπηρεσίες φιλοξενίας ιστοσελίδων μας (εάν είναι διαθέσιμες) ή να επιλέξετε έναν πάροχο φιλοξενίας ιστοσελίδων χαμηλότερου κόστους· η επιλογή είναι δική σας.',
    close: 'Κλείσιμο',
    
    // Tooltips
    tooltipMalpils: 'Αυτή η τοποθεσία διακομιστή βρίσκεται κοντά στο Mālpils, αυτό είναι το LIEPNET™ CORE και παρέχει την πιο φθηνή φιλοξενία.',
    tooltipNormalPriority: 'Η κανονική προτεραιότητα παρέχει κανονική προτεραιότητα, η οποία είναι συνήθως επαρκής για μικρές επιχειρήσεις με χαμηλή επισκεψιμότητα ιστοσελίδας και δεν επηρεάζει αρνητικά την επιχείρηση εάν η ιστοσελίδα αντιμετωπίσει ελάχιστο χρόνο διακοπής λειτουργίας.',
    tooltipHighPriority: 'Η υψηλή προτεραιότητα σημαίνει ότι η ιστοσελίδα σας έχει προτεραιότητα έναντι άλλων ιστοσελίδων για διορθώσεις και τυχόν προβλήματα που μπορεί να προκύψουν τυχαία. Η υψηλή προτεραιότητα διασφαλίζει επίσης τον υψηλότερο διαθέσιμο χρόνο λειτουργίας επειδή η ιστοσελίδα σας θα φιλοξενείται σε πολλαπλούς κόμβους για χρόνο λειτουργίας σε περίπτωση που ο κύριος επιλεγμένος κόμβος είναι εκτός σύνδεσης ή υπό συντήρηση.',
    tooltipSimpleWebsite: 'Μια απλή ιστοσελίδα περιλαμβάνει απλές στατικές ή ελαφρώς δυναμικές σελίδες.',
    tooltipComplexWebsite: 'Μια σύνθετη ιστοσελίδα περιλαμβάνει κυρίως δυναμικές σελίδες και μπορεί να περιλαμβάνει σημεία όπου το περιεχόμενο μπορεί να αλλάξει ή να ενημερωθεί εξωτερικά.',
    tooltipUpfrontCost: 'Αρχικό κόστος (εφάπαξ τέλος).',
    tooltipMonthlyHosting: 'Μηνιαίο κόστος φιλοξενίας.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Μη αποθηκευμένες αλλαγές',
    unsavedChangesDesc: 'Είστε σίγουροι ότι θέλετε να επιστρέψετε; Όλες οι αλλαγές σας θα χαθούν.',
    cancel: 'Ακύρωση',
    goBack: 'Επιστροφή',

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
    status: 'Status',
    
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
    
    // About page
    aboutTitle: 'Über uns',
    aboutSubtitle: 'Erfahren Sie mehr über LIEPNET™',
    countryOrigin: 'Lettland',
    
    // What is LIEPNET
    whatIsTitle: 'Was ist LIEPNET',
    whatIsContent: 'LIEPNET™ ist ein dynamisches Technologieunternehmen mit Sitz in Lettland, das sich auf die Bereitstellung innovativer Lösungen in der Netzwerkinfrastruktur, Web-Hosting und digitalen Technologien spezialisiert. Wir streben danach, zugängliche und hochwertige Dienstleistungen für Unternehmen jeder Größe zu schaffen.',
    
    // What LIEPNET means
    whatMeansTitle: 'Was LIEPNET bedeutet',
    whatMeansContent: 'LIEPNET bedeutet "Liepu tīkls" auf Lettisch, was "Lindennetzwerk" übersetzt. Dieser Name spiegelt unsere Wurzeln in Lettland wider und symbolisiert organisches Wachstum und Vernetzung, wie die Äste eines Lindenbaums, der Gemeinschaften durch Technologie verbindet.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Unsere Erfolge',
    achievement1Title: 'Netzwerkinfrastruktur',
    achievement1Content: 'Aufbau einer zuverlässigen Netzwerkinfrastruktur, die Tausende von Benutzern in der gesamten baltischen Region bedient',
    achievement2Title: 'Web-Hosting-Exzellenz',
    achievement2Content: 'Bereitstellung zuverlässiger Hosting-Lösungen für über 10.000 Websites und Anwendungen',
    achievement3Title: 'Digitale Innovation',
    achievement3Content: 'Pioniere in innovativen digitalen Lösungen, die die Art und Weise verändert haben, wie Unternehmen online arbeiten',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Unsere Zukunftsvision',
    plan1Title: 'Europäische Expansion',
    plan1Content: 'Erweiterung unserer Netzwerkinfrastruktur auf alle europäischen Märkte bis 2026',
    plan2Title: 'Grüne Technologie',
    plan2Content: 'Implementierung nachhaltiger, umweltfreundlicher Lösungen in allen unseren Rechenzentren',
    plan3Title: 'KI-Integration',
    plan3Content: 'Integration künstlicher Intelligenz zur Verbesserung unserer Dienstleistungen und Kundenerfahrung',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Warum LIEPNET wählen?',
    reason1Title: 'Zuverlässigkeit',
    reason1Content: '99.9% Betriebszeit-Garantie mit 24/7-Überwachung und -Support',
    reason2Title: 'Innovation',
    reason2Content: 'Modernste Technologielösungen, die auf Ihre Bedürfnisse zugeschnitten sind',
    reason3Title: 'Lokale Expertise',
    reason3Content: 'Tiefes Verständnis europäischer Märkte und Vorschriften',
    reason4Title: 'Skalierbarkeit',
    reason4Content: 'Lösungen, die mit Ihrem Unternehmen wachsen, vom Startup bis zum Konzern',

    // Hosting page
    hostingTitle: 'LIEPNET™ HOSTING',
    websiteHosting: 'WEBSITE-HOSTING',
    websiteHostingDesc: 'Günstige und professionelle Web-Hosting-Lösungen für Ihr Unternehmen.',
    setupFeeLabel: 'EINRICHTUNGSGEBÜHR',
    hostingLabel: 'HOSTING',
    startingFrom: 'Ab',
    
    // Price Calculator
    priceCalculator: 'PREISRECHNER',
    priceCalculatorSubtitle: 'Für den Plan "WEBSITE-HOSTING"',
    changesPerMonth: 'ÄNDERUNGEN PRO MONAT',
    priority: 'PRIORITÄT',
    location: 'STANDORT',
    websiteSetupFee: 'WEBSITE-EINRICHTUNGSGEBÜHR',
    normalPriority: 'Normale Priorität',
    highPriority: 'Hohe Priorität',
    simpleWebsite: 'Einfache Website',
    complexWebsite: 'Komplexe Website',
    monthlyHosting: 'MONATLICHES HOSTING',
    upfrontCost: 'ERSTKOSTEN',
    inclVat: 'Inkl. MwSt. 21%',
    vatAmount: 'MwSt.-Betrag:',
    totalExclVat: 'Gesamt (exkl. MwSt.):',
    contactUs: 'KONTAKTIEREN SIE UNS',
    perMonth: '/Monat',
    whyNeedWebsite: 'Warum brauche ich eine Website? Warum uns wählen?',
    whyNeedWebsiteTitle: 'WARUM BRAUCHE ICH EINE WEBSITE?',
    whyNeedWebsiteContent: 'Es ist 2025, und Ihr Unternehmen muss eine Website haben, um die Reichweite und Professionalität Ihres Unternehmens zu erweitern. Sie können auch behaupten, dass Sie bereits Social-Media-Plattformen wie X, YouTube und Facebook nutzen, die alle gültig sind, aber sie können ihre Nutzungsbedingungen jederzeit ändern, Ihr Konto aus beliebigen Gründen kündigen oder einfach aufhören, Ihre Beiträge oder Ihr Konto anderen Nutzern zu empfehlen, was besonders für kleine Unternehmen kostspielig ist.',
    whyChooseUsTitle: 'WARUM UNS WÄHLEN?',
    whyChooseUsContent: 'LIEPNET™ bietet erschwingliches All-in-One-Website-Hosting. Sagen Sie uns einfach, was Sie wollen, und wir erstellen es. Wir werden auch Ihre Website warten, Fehler beheben und Ihre Website bei Bedarf aktualisieren. Wenn Sie Ihre eigene Website selbst erstellen möchten, können Sie einen unserer anderen Website-Hosting-Dienste (falls verfügbar) nutzen oder sich für einen günstigeren Website-Hosting-Anbieter entscheiden; die Wahl liegt bei Ihnen.',
    close: 'Schließen',
    
    // Tooltips
    tooltipMalpils: 'Dieser Serverstandort befindet sich in der Nähe von Mālpils, dies ist der LIEPNET™ CORE und bietet das günstigste Hosting.',
    tooltipNormalPriority: 'Normale Priorität bietet normale Priorität, die in der Regel für kleine Unternehmen mit niedrigem Website-Traffic ausreichend ist und das Geschäft nicht negativ beeinflusst, wenn die Website geringfügige Ausfallzeiten erlebt.',
    tooltipHighPriority: 'Hohe Priorität bedeutet, dass Ihre Website gegenüber anderen Websites für Korrekturen und alle zufällig auftretenden Probleme priorisiert wird. Hohe Priorität stellt auch die höchste verfügbare Betriebszeit sicher, da Ihre Website auf mehreren Knoten für Betriebszeit gehostet wird, falls der primäre ausgewählte Knoten offline ist oder gewartet wird.',
    tooltipSimpleWebsite: 'Eine einfache Website umfasst einfache statische oder leicht dynamische Seiten.',
    tooltipComplexWebsite: 'Eine komplexe Website umfasst hauptsächlich dynamische Seiten und kann Stellen umfassen, an denen Inhalte geändert oder extern aktualisiert werden können.',
    tooltipUpfrontCost: 'Erstkosten (einmalige Gebühr).',
    tooltipMonthlyHosting: 'Monatliche Hosting-Kosten.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Nicht gespeicherte Änderungen',
    unsavedChangesDesc: 'Sind Sie sicher, dass Sie zurückgehen möchten? Alle Ihre Änderungen gehen verloren.',
    cancel: 'Abbrechen',
    goBack: 'Zurück',

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
    status: 'Būsena',
    
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
    
    // About page
    aboutTitle: 'Apie mus',
    aboutSubtitle: 'Sužinokite daugiau apie LIEPNET™',
    countryOrigin: 'Latvija',
    
    // What is LIEPNET
    whatIsTitle: 'Kas yra LIEPNET',
    whatIsContent: 'LIEPNET™ yra dinamiška technologijų įmonė, įsikūrusi Latvijoje, kuri specializuojasi novatoriškų sprendimų teikime tinklo infrastruktūros, internetinio hostingo ir skaitmeninių technologijų srityse. Siekiame kurti prieinamas ir aukštos kokybės paslaugas visų dydžių verslams.',
    
    // What LIEPNET means
    whatMeansTitle: 'Ką reiškia LIEPNET',
    whatMeansContent: 'LIEPNET reiškia "Liepu tīkls" latvių kalba, kas išverčiama kaip "Liepų tinklas". Šis pavadinimas atspindi mūsų šaknis Latvijoje ir simbolizuoja organišką augimą bei tarpusavio ryšį, kaip liepų medžio šakos, jungiančios bendruomenes per technologijas.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Mūsų pasiekimai',
    achievement1Title: 'Tinklo infrastruktūra',
    achievement1Content: 'Sukūrėme patikimą tinklo infrastruktūrą, aptarnaujančią tūkstančius naudotojų visame Baltijos regione',
    achievement2Title: 'Internetinio hostingo puikybė',
    achievement2Content: 'Suteikėme patikimus hostingo sprendimus daugiau nei 10 000 svetainių ir programų',
    achievement3Title: 'Skaitmeninė inovacija',
    achievement3Content: 'Pionieriai novatoriškuose skaitmeniniuose sprendimuose, kurie pakeitė būdą, kaip įmonės veikia internete',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Mūsų ateities vizija',
    plan1Title: 'Europos plėtra',
    plan1Content: 'Mūsų tinklo infrastruktūros plėtimas visose Europos rinkose iki 2026 m.',
    plan2Title: 'Žalioji technologija',
    plan2Content: 'Darnių, aplinkai draugiškų sprendimų diegimas visuose mūsų duomenų centruose',
    plan3Title: 'DI integracija',
    plan3Content: 'Dirbtinio intelekto integravimas siekiant pagerinti mūsų paslaugas ir klientų patirtį',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Kodėl rinktis LIEPNET?',
    reason1Title: 'Patikimumas',
    reason1Content: '99.9% veikimo laiko garantija su 24/7 stebėjimu ir palaikymu',
    reason2Title: 'Inovacijos',
    reason2Content: 'Pažangiausių technologijų sprendimai, pritaikyti jūsų poreikiams',
    reason3Title: 'Vietinė ekspertizė',
    reason3Content: 'Gilų Europos rinkų ir reguliavimų supratimą',
    reason4Title: 'Masteliacijos galimybė',
    reason4Content: 'Sprendimai, kurie auga kartu su jūsų verslu, nuo startuolio iki korporacijos',

    // Hosting page
    hostingTitle: 'LIEPNET™ PRIEGLOBOS',
    websiteHosting: 'SVETAINĖS PRIEGLOBOS',
    websiteHostingDesc: 'Pigios ir profesionalios interneto prieglobos sprendimai jūsų verslui.',
    setupFeeLabel: 'ĮDIEGIMO MOKESTIS',
    hostingLabel: 'PRIEGLOBOS',
    startingFrom: 'Nuo',
    
    // Price Calculator
    priceCalculator: 'KAINŲ SKAIČIUOKLĖ',
    priceCalculatorSubtitle: 'Planui "SVETAINĖS PRIEGLOBOS"',
    changesPerMonth: 'PAKEITIMAI PER MĖNESĮ',
    priority: 'PRIORITETAS',
    location: 'VIETA',
    websiteSetupFee: 'SVETAINĖS ĮDIEGIMO MOKESTIS',
    normalPriority: 'Normalus prioritetas',
    highPriority: 'Aukštas prioritetas',
    simpleWebsite: 'Paprasta svetainė',
    complexWebsite: 'Sudėtinga svetainė',
    monthlyHosting: 'MĖNESINIS PRIEGLOBOS',
    upfrontCost: 'PRADINĖS IŠLAIDOS',
    inclVat: 'Su PVM 21%',
    vatAmount: 'PVM suma:',
    totalExclVat: 'Iš viso (be PVM):',
    contactUs: 'SUSISIEKITE SU MUMIS',
    perMonth: '/mėn.',
    whyNeedWebsite: 'Kodėl man reikia svetainės? Kodėl pasirinkti mus?',
    whyNeedWebsiteTitle: 'KODĖL MAN REIKIA SVETAINĖS?',
    whyNeedWebsiteContent: 'Tai 2025 metai, ir jūsų įmonė turi turėti svetainę, kad išplėstų savo verslo apimtį ir profesionalumą. Jūs taip pat galite teigti, kad jau naudojate socialinės žiniasklaidos platformas, tokias kaip X, YouTube ir Facebook, kurios visos yra galiojančios, tačiau jos gali bet kada pakeisti savo paslaugų teikimo sąlygas, nutraukti jūsų paskyrą dėl bet kokios priežasties arba tiesiog nustoti rekomenduoti jūsų įrašus ar paskyrą kitiems vartotojams, o tai ypač kenkia mažoms įmonėms.',
    whyChooseUsTitle: 'KODĖL PASIRINKTI MUS?',
    whyChooseUsContent: 'LIEPNET™ siūlo prieinamą visapusišką svetainių prieglaudą. Tiesiog pasakykite mums, ko norite, ir mes tai sukursime. Taip pat prižiūrėsime, taisysime klaidas ir atnaujinsime jūsų svetainę, kai reikia. Jei norite patys sukurti savo svetainę, galite naudoti bet kurią iš mūsų kitų svetainių prieglaudos paslaugų (jei yra) arba pasirinkti pigesnį svetainių prieglaudos paslaugų teikėją; pasirinkimas yra jūsų.',
    close: 'Uždaryti',
    
    // Tooltips
    tooltipMalpils: 'Šis serverio vieta yra netoli Mālpils, tai yra LIEPNET™ CORE ir teikia pigiausią priešprieglobos.',
    tooltipNormalPriority: 'Normalus prioritetas suteikia normalų prioritetą, kuris paprastai yra pakankamas mažoms įmonėms su mažu svetainės lankomumu ir neturi neigiamo poveikio verslui, jei svetainė patiria nedidelį nefunkcionavimo laiką.',
    tooltipHighPriority: 'Aukštas prioritetas reiškia, kad jūsų svetainė yra prioritizuojama prieš kitas svetaines pataisymo ir bet kokių atsitiktinai kylančių problemų atveju. Aukštas prioritetas taip pat užtikrina didžiausią galimą veikimo laiką, nes jūsų svetainė bus talpinama keliuose mazguose veikimo laiko užtikrinimui, jei pagrindinis pasirinktas mazgas yra neprieinamas arba vykdoma priežiūra.',
    tooltipSimpleWebsite: 'Paprasta svetainė apima paprastus statinius arba šiek tiek dinaminius puslapius.',
    tooltipComplexWebsite: 'Sudėtinga svetainė apima daugiausia dinaminius puslapius ir gali apimti vietas, kur turinys gali keistis arba atnaujinamas išoriškai.',
    tooltipUpfrontCost: 'Pradinės išlaidos (vienkartinis mokestis).',
    tooltipMonthlyHosting: 'Mėnesinis prieglobos kaina.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Neišsaugoti pakeitimai',
    unsavedChangesDesc: 'Ar tikrai norite grįžti? Visi jūsų pakeitimai bus prarasti.',
    cancel: 'Atšaukti',
    goBack: 'Grįžti',

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
    status: 'Olek',
    
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
    
    // About page
    aboutTitle: 'Meist',
    aboutSubtitle: 'Lugege rohkem LIEPNET™ kohta',
    countryOrigin: 'Läti',
    
    // What is LIEPNET
    whatIsTitle: 'Mis on LIEPNET',
    whatIsContent: 'LIEPNET™ on dünaamiline tehnoloogiaettevõte, mis asub Lätis ja spetsialiseerub uuenduslike lahenduste pakkumisele võrgu infrastruktuuris, veebihostingus ja digitaaltehnoloogiates. Püüame luua kättesaadavaid ja kvaliteetseid teenuseid kõigi suuruste ettevõtetele.',
    
    // What LIEPNET means
    whatMeansTitle: 'Mida LIEPNET tähendab',
    whatMeansContent: 'LIEPNET tähendab läti keeles "Liepu tīkls", mis tõlgitakse kui "Pärnavõrk". See nimi kajastab meie juuri Lätis ja sümboliseerib orgaanilist kasvu ja omavahelist seotust, nagu pärnapuu oksad, mis ühendavad kogukondi tehnoloogia kaudu.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Meie saavutused',
    achievement1Title: 'Võrguinfrastruktuur',
    achievement1Content: 'Ehitasime usaldusväärse võrguinfrastruktuuri, mis teenindab tuhandeid kasutajaid kogu Balti piirkonnas',
    achievement2Title: 'Veebihostingu tipptase',
    achievement2Content: 'Pakkunud usaldusväärseid hostingu lahendusi üle 10 000 veebisaidi ja rakenduse jaoks',
    achievement3Title: 'Digitaalne innovatsioon',
    achievement3Content: 'Pioneerid uuenduslike digitaalsete lahenduste vallas, mis on muutnud ettevõtete toimimist internetis',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Meie tulevikuvisioon',
    plan1Title: 'Euroopa laienemine',
    plan1Content: 'Laiendame oma võrguinfrastruktuuri kõigile Euroopa turgudele aastaks 2026',
    plan2Title: 'Roheline tehnoloogia',
    plan2Content: 'Jätkusuutlike, keskkonnasõbralike lahenduste juurutamine kõigis meie andmekeskustes',
    plan3Title: 'AI integratsioon',
    plan3Content: 'Tehisintellekti integreerimine meie teenuste ja klienditeeninduse parandamiseks',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Miks valida LIEPNET?',
    reason1Title: 'Usaldusväärsus',
    reason1Content: '99.9% töötamise aja garantii 24/7 järelevalve ja toega',
    reason2Title: 'Innovatsioon',
    reason2Content: 'Tipptehnoloogia lahendused, mis on kohandatud teie vajadustele',
    reason3Title: 'Kohalik ekspertiis',
    reason3Content: 'Sügav arusaam Euroopa turgudest ja regulatsioonidest',
    reason4Title: 'Skaleeritavus',
    reason4Content: 'Lahendused, mis kasvavad koos teie äriga, alates idufirmast kuni korporatsioonini',

    // Hosting page
    hostingTitle: 'LIEPNET™ HOSTING',
    websiteHosting: 'VEEBILEHE HOSTING',
    websiteHostingDesc: 'Odavad ja professionaalsed veebi hostingu lahendused teie ettevõttele.',
    setupFeeLabel: 'PAIGALDUSMAKSE',
    hostingLabel: 'HOSTING',
    startingFrom: 'Alates',
    
    // Price Calculator
    priceCalculator: 'HINNAKALKULAATOR',
    priceCalculatorSubtitle: 'Plaani "VEEBILEHE HOSTING" jaoks',
    changesPerMonth: 'MUUDATUSED KUUS',
    priority: 'PRIORITEET',
    location: 'ASUKOHT',
    websiteSetupFee: 'VEEBILEHE PAIGALDUSMAKSE',
    normalPriority: 'Tavaline prioriteet',
    highPriority: 'Kõrge prioriteet',
    simpleWebsite: 'Lihtne veebileht',
    complexWebsite: 'Keeruline veebileht',
    monthlyHosting: 'IGAKUINE HOSTING',
    upfrontCost: 'ESIALGNE MAKSUMUS',
    inclVat: 'Koos KM 21%',
    vatAmount: 'KM summa:',
    totalExclVat: 'Kokku (ilma KM-ta):',
    contactUs: 'VÕTKE MEIEGA ÜHENDUST',
    perMonth: '/kuus',
    whyNeedWebsite: 'Miks ma vajan veebilehte? Miks valida meid?',
    whyNeedWebsiteTitle: 'MIKS MA VAJAN VEEBILEHTE?',
    whyNeedWebsiteContent: 'On 2025. aasta ja teie ettevõttel peab olema veebileht, et laiendada oma ettevõtte ulatust ja professionaalsust. Võite ka väita, et kasutate juba sotsiaalmeedia platvorme nagu X, YouTube ja Facebook, mis on kõik kehtivad, kuid nad võivad igal ajal muuta oma teenuse osutamise tingimusi, lõpetada teie konto mis tahes põhjusel või lihtsalt lõpetada teie postituste või konto soovitamise teistele kasutajatele, mis on eriti kulukas väikeettevõtetele.',
    whyChooseUsTitle: 'MIKS VALIDA MEID?',
    whyChooseUsContent: 'LIEPNET™ pakub taskukohast ühe katuse all veebilehe hostingut. Lihtsalt öelge meile, mida soovite, ja me loome selle. Samuti hooldame, parandame vigu ja uuendame teie veebilehte vajadusel. Kui soovite oma veebilehte ise luua, saate kasutada mis tahes meie muid veebilehe hostingu teenuseid (kui need on saadaval) või valida odavama veebilehe hostingu pakkuja; valik on teie.',
    close: 'Sulge',
    
    // Tooltips
    tooltipMalpils: 'See serveri asukoht asub Mālpilsi lähedal, see on LIEPNET™ CORE ja pakub kõige odavamat hostingut.',
    tooltipNormalPriority: 'Tavaline prioriteet pakub tavalist prioriteeti, mis on tavaliselt piisav väikestele ettevõtetele madala veebilehe liiklusega ja ei mõjuta negatiivselt äri, kui veebileht kogeb väikest seisuaja.',
    tooltipHighPriority: 'Kõrge prioriteet tähendab, et teie veebileht on eelistatud teiste veebilehtede ees paranduste ja mis tahes juhuslikult tekkivate probleemide korral. Kõrge prioriteet tagab ka kõrgeima saadaoleva töötamise aja, sest teie veebileht majutatakse mitmel sõlmel töötamise aja tagamiseks juhul, kui esmane valitud sõlm on võrgust väljas või hoolduses.',
    tooltipSimpleWebsite: 'Lihtne veebileht sisaldab lihtsaid staatilisi või veidi dünaamilisi lehti.',
    tooltipComplexWebsite: 'Keeruline veebileht sisaldab peamiselt dünaamilisi lehti ja võib sisaldada kohti, kus sisu võib muutuda või väliselt uuendada.',
    tooltipUpfrontCost: 'Esialgne maksumus (ühekordne makse).',
    tooltipMonthlyHosting: 'Igakuine hostingu maksumus.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Salvestamata muudatused',
    unsavedChangesDesc: 'Kas olete kindel, et soovite tagasi minna? Kõik teie muudatused lähevad kaotsi.',
    cancel: 'Tühista',
    goBack: 'Mine tagasi',

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
    status: 'Status',
    
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
    
    // About page
    aboutTitle: 'Om oss',
    aboutSubtitle: 'Lär dig mer om LIEPNET™',
    countryOrigin: 'Lettland',
    
    // What is LIEPNET
    whatIsTitle: 'Vad är LIEPNET',
    whatIsContent: 'LIEPNET™ är ett dynamiskt teknikföretag baserat i Lettland som specialiserar sig på att tillhandahålla innovativa lösningar inom nätverksinfrastruktur, webbhotell och digital teknik. Vi strävar efter att skapa tillgängliga och högkvalitativa tjänster för företag av alla storlekar.',
    
    // What LIEPNET means
    whatMeansTitle: 'Vad LIEPNET betyder',
    whatMeansContent: 'LIEPNET betyder "Liepu tīkls" på lettiska, vilket översätts till "Lindnätverk". Detta namn återspeglar våra rötter i Lettland och symboliserar organisk tillväxt och sammankoppling, som grenarna på ett lindträd som förenar gemenskaper genom teknik.',
    
    // What LIEPNET has done
    whatDoneTitle: 'Våra framgångar',
    achievement1Title: 'Nätverksinfrastruktur',
    achievement1Content: 'Byggt en pålitlig nätverksinfrastruktur som betjänar tusentals användare över hela Baltikum',
    achievement2Title: 'Webbhotell-excellens',
    achievement2Content: 'Tillhandahållit pålitliga hosting-lösningar för över 10 000 webbplatser och applikationer',
    achievement3Title: 'Digital innovation',
    achievement3Content: 'Pionjärer inom innovativa digitala lösningar som har förändrat hur företag opererar online',
    
    // What LIEPNET plans to do
    whatPlansTitle: 'Vår framtidsvision',
    plan1Title: 'Europeisk expansion',
    plan1Content: 'Utvidga vår nätverksinfrastruktur till alla europeiska marknader senast 2026',
    plan2Title: 'Grön teknologi',
    plan2Content: 'Implementera hållbara, miljövänliga lösningar i alla våra datacenter',
    plan3Title: 'AI-integration',
    plan3Content: 'Integrera artificiell intelligens för att förbättra våra tjänster och kundupplevelse',
    
    // Why choose LIEPNET
    whyChooseTitle: 'Varför välja LIEPNET?',
    reason1Title: 'Tillförlitlighet',
    reason1Content: '99.9% drifttidsgaranti med 24/7 övervakning och support',
    reason2Title: 'Innovation',
    reason2Content: 'Banbrytande teknologiska lösningar skräddarsydda för dina behov',
    reason3Title: 'Lokal expertis',
    reason3Content: 'Djup förståelse för europeiska marknader och regleringar',
    reason4Title: 'Skalbarhet',
    reason4Content: 'Lösningar som växer med ditt företag, från startup till koncern',

    // Hosting page
    hostingTitle: 'LIEPNET™ HOSTING',
    websiteHosting: 'WEBBPLATSHOSTING',
    websiteHostingDesc: 'Billiga och professionella webbhotell-lösningar för ditt företag.',
    setupFeeLabel: 'INSTALLATIONSAVGIFT',
    hostingLabel: 'HOSTING',
    startingFrom: 'Från',
    
    // Price Calculator
    priceCalculator: 'PRISKALKYLATOR',
    priceCalculatorSubtitle: 'För planen "WEBBPLATSHOSTING"',
    changesPerMonth: 'ÄNDRINGAR PER MÅNAD',
    priority: 'PRIORITET',
    location: 'PLATS',
    websiteSetupFee: 'WEBBPLATS INSTALLATIONSAVGIFT',
    normalPriority: 'Normal prioritet',
    highPriority: 'Hög prioritet',
    simpleWebsite: 'Enkel webbplats',
    complexWebsite: 'Komplex webbplats',
    monthlyHosting: 'MÅNATLIG HOSTING',
    upfrontCost: 'INITIALKOSTNAD',
    inclVat: 'Inkl. moms 21%',
    vatAmount: 'Momsbelopp:',
    totalExclVat: 'Totalt (exkl. moms):',
    contactUs: 'KONTAKTA OSS',
    perMonth: '/mån',
    whyNeedWebsite: 'Varför behöver jag en webbplats? Varför välja oss?',
    whyNeedWebsiteTitle: 'VARFÖR BEHÖVER JAG EN WEBBPLATS?',
    whyNeedWebsiteContent: 'Det är 2025, och ditt företag måste ha en webbplats för att utöka ditt företags räckvidd och professionalism. Du kan också hävda att du redan använder sociala medieplattformar som X, YouTube och Facebook, som alla är giltiga, men de kan när som helst ändra sina användarvillkor, avsluta ditt konto av vilken anledning som helst eller helt enkelt sluta rekommendera dina inlägg eller konto till andra användare, vilket är särskilt kostsamt för små företag.',
    whyChooseUsTitle: 'VARFÖR VÄLJA OSS?',
    whyChooseUsContent: 'LIEPNET™ erbjuder prisvärd allt-i-ett webbplatshosting. Berätta bara för oss vad du vill ha och vi skapar det. Vi kommer också att underhålla, fixa buggar och uppdatera din webbplats vid behov. Om du vill skapa din egen webbplats kan du använda någon av våra andra webbplatshotell-tjänster (om tillgängliga) eller gå med en lägre kostnad webbplatshotell-leverantör; valet är ditt.',
    close: 'Stäng',
    
    // Tooltips
    tooltipMalpils: 'Denna serverplats ligger nära Mālpils, detta är LIEPNET™ CORE och erbjuder billigast hosting.',
    tooltipNormalPriority: 'Normal prioritet ger normal prioritet, vilket vanligtvis är tillräckligt för små företag med låg webbplatstrafik och inte negativt påverkar verksamheten om webbplatsen upplever mindre driftstopp.',
    tooltipHighPriority: 'Hög prioritet betyder att din webbplats prioriteras framför andra webbplatser för korrigeringar och eventuella problem som kan uppstå slumpmässigt. Hög prioritet garanterar också högsta tillgängliga drifttid eftersom din webbplats kommer att vara värd på flera noder för drifttid om den primära valda noden är offline eller under underhåll.',
    tooltipSimpleWebsite: 'En enkel webbplats inkluderar enkla statiska eller något dynamiska sidor.',
    tooltipComplexWebsite: 'En komplex webbplats inkluderar mestadels dynamiska sidor och kan inkludera platser där innehållet kan ändras eller uppdateras externt.',
    tooltipUpfrontCost: 'Initialkostnad (engångsavgift).',
    tooltipMonthlyHosting: 'Månatlig hosting-kostnad.',
    
    // Confirmation dialog
    unsavedChangesTitle: 'Osparade ändringar',
    unsavedChangesDesc: 'Är du säker på att du vill gå tillbaka? Alla dina ändringar kommer att förloras.',
    cancel: 'Avbryt',
    goBack: 'Gå tillbaka',

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