import type { Dictionary } from "./types";
import type { Locale } from "./config";

const serviceItemsTr: Dictionary["services"]["items"] = {
  "sirket-kurulus-islemleri": {
    title: "Şirket Kuruluş İşlemleri",
    summary: "Şahıs, limited ve anonim şirket kuruluşunda sorumluluklar, vergisel avantajlar ve süreç yönetimi danışmanlığı.",
  },
  "teknopark-danismanligi": {
    title: "Teknopark Danışmanlığı",
    summary: "4691 sayılı kanun kapsamında proje süreçleri, muafiyet/yıllık faaliyet raporları, personel ve mali uyumluluk danışmanlığı.",
  },
  "kosgeb-ve-tubitak-proje-surecleri": {
    title: "Kosgeb ve Tübitak Proje Süreçleri",
    summary: "Teknokent, KOSGEB ve TÜBİTAK proje yazımı, destek başvurusu ve süreç yönetimi.",
  },
  "mali-musavirlik-hizmeti": {
    title: "Mali Müşavirlik Hizmeti",
    summary: "Muhasebe, vergi planlaması, beyanname ve mali danışmanlık hizmetleri.",
  },
  "ar-ge-ve-tasarim-merkezi-basvuru-surecleri": {
    title: "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri",
    summary: "Ar-Ge / tasarım merkezi kurulumu, başvuru ve teşvik süreçleri danışmanlığı.",
  },
  "belgelendirme-hizmetleri": {
    title: "Belgelendirme Hizmetleri",
    summary: "Belgelendirme süreçlerinde başvuru, takip ve danışmanlık desteği.",
  },
  "egitim-hizmetleri": {
    title: "Eğitim Hizmetleri",
    summary: "Ar-Ge mevzuatı, proje yazma, iş planı ve girişimcilik eğitimleri.",
  },
  "patent-surecleri": {
    title: "Patent Süreçleri",
    summary: "Patent ve faydalı model başvuru süreçlerinde danışmanlık.",
  },
  "tekmer-danismanligi": {
    title: "TEKMER Danışmanlığı",
    summary: "TEKMER proje hazırlama, portal yönetimi ve sürdürülebilirlik danışmanlığı.",
  },
  "bordrolama-hizmetleri": {
    title: "Bordrolama Hizmetleri",
    summary: "Bordrolama ve teşvikli SGK süreçlerinin profesyonel yönetimi.",
  },
  "stratejik-is-ortakligi": {
    title: "Stratejik İş Ortaklığı",
    summary: "Stratejik iş ortaklığı ve birliktelik süreçlerinde danışmanlık.",
  },
};

const serviceItemsEn: Dictionary["services"]["items"] = {
  "sirket-kurulus-islemleri": {
    title: "Company Formation",
    summary: "Advisory on sole proprietorship, limited and joint-stock company formation, tax advantages and process management.",
  },
  "teknopark-danismanligi": {
    title: "Technopark Consulting",
    summary: "Project processes under Law 4691, exemption/annual activity reports, personnel and financial compliance.",
  },
  "kosgeb-ve-tubitak-proje-surecleri": {
    title: "KOSGEB & TÜBİTAK Projects",
    summary: "Technopark, KOSGEB and TÜBİTAK project writing, grant applications and process management.",
  },
  "mali-musavirlik-hizmeti": {
    title: "Certified Public Accountancy",
    summary: "Accounting, tax planning, declarations and financial advisory services.",
  },
  "ar-ge-ve-tasarim-merkezi-basvuru-surecleri": {
    title: "R&D and Design Center Applications",
    summary: "Advisory on R&D / design center setup, applications and incentive processes.",
  },
  "belgelendirme-hizmetleri": {
    title: "Certification Services",
    summary: "Application, follow-up and advisory support for certification processes.",
  },
  "egitim-hizmetleri": {
    title: "Training Services",
    summary: "Training on R&D legislation, project writing, business plans and entrepreneurship.",
  },
  "patent-surecleri": {
    title: "Patent Processes",
    summary: "Advisory on patent and utility model application processes.",
  },
  "tekmer-danismanligi": {
    title: "TEKMER Consulting",
    summary: "TEKMER project preparation, portal management and sustainability advisory.",
  },
  "bordrolama-hizmetleri": {
    title: "Payroll Services",
    summary: "Professional management of payroll and incentivized SGK processes.",
  },
  "stratejik-is-ortakligi": {
    title: "Strategic Partnership",
    summary: "Advisory on strategic partnership and collaboration processes.",
  },
};

const serviceItemsDe: Dictionary["services"]["items"] = {
  "sirket-kurulus-islemleri": {
    title: "Firmengründung",
    summary: "Beratung zu Einzelunternehmen, GmbH und AG, steuerlichen Vorteilen und Prozessmanagement.",
  },
  "teknopark-danismanligi": {
    title: "Technopark-Beratung",
    summary: "Projektprozesse nach Gesetz 4691, Freistellungs-/Jahresberichte, Personal- und Finanz-Compliance.",
  },
  "kosgeb-ve-tubitak-proje-surecleri": {
    title: "KOSGEB- & TÜBİTAK-Projekte",
    summary: "Projektentwicklung, Förderanträge und Prozessmanagement für Technopark, KOSGEB und TÜBİTAK.",
  },
  "mali-musavirlik-hizmeti": {
    title: "Steuerberatung & Buchhaltung",
    summary: "Buchhaltung, Steuerplanung, Erklärungen und finanzielle Beratung.",
  },
  "ar-ge-ve-tasarim-merkezi-basvuru-surecleri": {
    title: "FuE- und Designzentrum-Anträge",
    summary: "Beratung zu Einrichtung, Antrag und Förderprozessen für FuE-/Designzentren.",
  },
  "belgelendirme-hizmetleri": {
    title: "Zertifizierungsdienste",
    summary: "Antrag, Nachverfolgung und Beratung bei Zertifizierungsprozessen.",
  },
  "egitim-hizmetleri": {
    title: "Schulungsdienste",
    summary: "Schulungen zu FuE-Recht, Projektentwicklung, Businessplänen und Unternehmertum.",
  },
  "patent-surecleri": {
    title: "Patentprozesse",
    summary: "Beratung zu Patent- und Gebrauchsmusteranträgen.",
  },
  "tekmer-danismanligi": {
    title: "TEKMER-Beratung",
    summary: "TEKMER-Projekterstellung, Portalverwaltung und Nachhaltigkeitsberatung.",
  },
  "bordrolama-hizmetleri": {
    title: "Lohnabrechnung",
    summary: "Professionelle Verwaltung von Lohnabrechnung und geförderten SGK-Prozessen.",
  },
  "stratejik-is-ortakligi": {
    title: "Strategische Partnerschaft",
    summary: "Beratung zu strategischen Partnerschaften und Kooperationen.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  tr: {
    nav: {
      home: "Anasayfa",
      corporate: "Kurumsal",
      about: "Hakkımızda",
      services: "Hizmetlerimiz",
      references: "Referanslar",
      announcements: "Duyurular",
      payroll: "Teşvikli Bordro",
      contact: "İletişim",
    },
    common: {
      email: "E-Posta",
      whatsapp: "WhatsApp",
      address: "Adres",
      phone: "Telefon",
      home: "Anasayfa",
      learnMore: "Detaylı Bilgi",
      allServices: "Tüm Hizmetleri Gör",
      freeConsult: "Ücretsiz Danışmanlık Al",
      send: "Gönder",
      other: "Diğer",
      selectService: "Hizmet Seçiniz",
      thanks: "Teşekkürler!",
      messageSent: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      rights: "Tüm hakları saklıdır.",
      quickMenu: "Hızlı Menü",
      contactUs: "İletişim",
      viewAll: "Tümünü Gör",
      prev: "Önceki",
      next: "Sonraki",
    },
    hero: {
      slides: [
        {
          badge: "Premium Danışmanlık",
          title: "Finansal Süreçlerinizde Güvenilir Çözüm Ortağınız",
          desc: "Muhasebe, mali müşavirlik, vergi, SGK ve danışmanlık alanlarında 15 kişilik uzman ekibimizle işletmenizin yanındayız.",
        },
        {
          badge: "Teşvik & Ar-Ge",
          title: "Teknopark, TEKMER ve Devlet Destekleri",
          desc: "4691 / 5746 mevzuatı, KOSGEB ve TÜBİTAK süreçlerinde proje yazımından teşvikli bordroya kadar uçtan uca danışmanlık.",
        },
        {
          badge: "2018'den Beri",
          title: "İşletmenizi Geleceğe Taşıyın",
          desc: "Vergi planlaması, KDV iadesi, şirket kurulumu ve uluslararası vergi danışmanlığında 360° profesyonel destek.",
        },
      ],
      ctaContact: "İletişime Geç",
      ctaServices: "Hizmetlerimiz",
      stats: [
        { value: "15+", label: "Uzman Ekip" },
        { value: "2018", label: "Kuruluş" },
        { value: "500+", label: "Müşteri" },
      ],
    },
    services: {
      label: "Hizmetlerimiz",
      title: "Premium Danışmanlık Çözümleri",
      subtitle: "Teknopark, Ar-Ge, mali müşavirlik ve devlet destekleri süreçlerinde uzman ekibimizle yanınızdayız.",
      items: serviceItemsTr,
    },
    stats: {
      label: "PMDTR Rakamlarla",
      title: "Neden Bizi Tercih Etmelisiniz?",
      items: [
        { value: "15+", label: "Uzman Ekip" },
        { value: "500+", label: "Aktif Müşteri" },
        { value: "2018", label: "Kuruluş Yılı" },
        { value: "19", label: "Hizmet Alanı" },
      ],
    },
    process: {
      label: "Çalışma Sürecimiz",
      title: "Nasıl Çalışıyoruz?",
      steps: [
        { title: "Planlama", desc: "İşletmenizin ihtiyaçlarını analiz edip en uygun vergi ve finansal stratejiyi belirliyoruz." },
        { title: "Uygulama", desc: "Muhasebe, bordro ve vergi süreçlerinizi mevzuata uygun şekilde yürütüyoruz." },
        { title: "Takip", desc: "SGK teşvikleri, KDV iadeleri ve devlet desteklerinden maksimum faydalanmanızı sağlıyoruz." },
        { title: "Danışmanlık", desc: "Vergi ihtilafları, şirket birleşmeleri ve uluslararası işlemlerde yanınızdayız." },
      ],
    },
    testimonials: {
      label: "Referanslar",
      title: "Müşterilerimiz Ne Diyor?",
      items: [
        { name: "Ahmet YILMAZ", role: "XYZ Teknoloji - Genel Müdür", text: "PMDTR ile çalışmaya başladığımızdan beri muhasebe ve vergi süreçlerimizde hiçbir sorun yaşamadık. KDV iadelerimiz rekor sürede sonuçlandı. İşlerini gerçekten bilen bir ekip.", initials: "AY" },
        { name: "Mehmet KAYA", role: "ABC İhracat - Yönetici", text: "Uluslararası vergi danışmanlığı konusunda PMDTR'nin uzmanlığı sayesinde yurt dışı işlemlerimizde büyük kolaylık sağladık. Global vizyonları gerçekten etkileyici.", initials: "MK" },
        { name: "Ayşe DEMİR", role: "TechStart - Kurucu", text: "Şirket kurulum sürecimizde her aşamada yanımızda oldular. 15 kişilik ekipleriyle her sorumuza anında cevap aldık. Profesyonellikleri takdire şayan.", initials: "AD" },
        { name: "Can ERSOY", role: "DataViz A.Ş. - CEO", text: "SGK teşvikleri konusunda bize kazandırdıkları avantajlar sayesinde yıllık ciddi tasarruf elde ettik. Mevzuata hâkimiyetleri ve hızları mükemmel.", initials: "CE" },
      ],
    },
    announcements: {
      label: "Güncel",
      title: "Duyurular ve Blog",
      items: [
        { title: "En Yeni Finansman Yöntemi: Kitlesel Fonlama", date: "2025" },
        { title: "İhracat Bedellerinin Yurda Getirilmemesi Durumunda İdari Para Cezaları", date: "2025" },
        { title: "Startup Fonlama Nedir ve Nasıl Yapılır?", date: "2024" },
      ],
    },
    newsletter: {
      label: "Bülten",
      title: "Duyuru Bültenine Katılın",
      subtitle: "Vergi, SGK, teşvik ve mevzuat güncellemelerini e-posta ile alın. Spam yok, sadece önemli duyurular.",
      placeholder: "E-posta adresiniz",
      cta: "Abone Ol",
      success: "Teşekkürler! Bülten listemize eklendiniz.",
      privacy: "E-posta adresiniz yalnızca duyuru bülteni için kullanılır.",
      close: "Kapat",
    },
    contact: {
      label: "İletişim",
      title: "Bizimle İletişime Geçin",
      subtitle: "Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.",
      namePh: "Adınız Soyadınız",
      phonePh: "Telefon",
      emailPh: "E-Posta",
      messagePh: "Mesajınız",
    },
    footer: {
      about: "PMDTR - Premium Danışmanlık; muhasebe, mali müşavirlik, vergi, SGK ve danışmanlık alanlarında 15 kişilik uzman kadrosuyla 2018'den beri hizmet vermektedir.",
    },
    about: {
      banner: "Hakkımızda",
      label: "Kurumsal",
      title: "Biz Kimiz?",
      lead: "Neden PremiumTax Mali Müşavirlik ve Danışmanlık Tercih Etmelisiniz?",
      points: [
        "Tüm vergi ve SGK süreçlerinde mevzuata hâkim ve yaklaşık 15 kişilik uzman ekibimiz ile yanınızdayız.",
        "İşimizi çok önemsiyoruz ve vergi - SGK yönünden hizmet verdiğimiz firmalara azami devlet teşviki sağlıyoruz.",
        "Global vizyonumuz neticesinde çeşitli ülkedeki çözüm ortaklarımız vasıtası ile dünyada geniş bir iş birliği ağına sahibiz.",
        "Mali konular ve muhasebe işlemlerinde rehberlik görevi üstleniyoruz.",
        "Dijital çağ ile yakından ilgileniyoruz, tüm uygulamalarda güncel yazılımları kullanıyoruz. Gerekirse iş ortaklarımız ile yazılım geliştiriyoruz.",
        "Sağladığımız hizmetleri derhal vakit kaybetmeden tamamlıyoruz.",
        "Hizmetimizden memnun kalınmayan olası durumlarda hiçbir cezai şart ödemeden tüm hizmet sözleşmelerini fesih edebilme hakkını size sunuyoruz.",
      ],
      visionLabel: "Vizyonumuz",
      visionTitle: "Güven oluşturan, çözüm üreten yaklaşım",
      visionText: "Premium Müşavirlik ve Mali Hizmetler olarak amacımız, toplumda ve kurumlarda güven oluşturmak ve önemli sorunlara çözüm sunmaktır. Premium Müşavirlik; müşavirlik, denetim, danışmanlık ve vergi hizmetleri, SGK hizmetleri ve birçok işletme ihtiyacı ile ilgili olarak alanında kaliteli hizmet sunmaya odaklanmış bir müşavirlik firmasıdır. Klasik defter tutmanın ötesinde mevzuattaki gelişmelerden ve teşviklerden müşterileri haberdar ederek katma değerli hizmet sunmak; işletmeleri ve müteşebbislerini her aşamada desteklemek iş yapış tarzımızdır.",
      missionLabel: "Misyonumuz",
      missionTitle: "Etik, objektif ve doğru yönetim",
      missionText: "PremiumTax Mali Müşavirlik ve Danışmanlık olarak misyonumuz; yasalar doğrultusunda hem kamu hem de mükellef haklarını, objektiflik ve etik ilkeler bağlamında en doğru şekilde yönetmektir.",
      caption: "Premium Danışmanlık",
    },
    pages: {
      services: {
        title: "Hizmetlerimiz",
        label: "PMDTR",
        heading: "Danışmanlık ve Müşavirlik Hizmetleri",
        subtitle: "Teknopark, Ar-Ge, mali müşavirlik ve devlet destekleri süreçlerinde uçtan uca hizmet sunuyoruz.",
      },
      contact: {
        title: "İletişim",
        label: "Bize Ulaşın",
        heading: "İletişim Bilgilerimiz",
        formTitle: "İletişim Formu",
        formDesc: "Formu doldurun, en kısa sürede dönüş yapalım.",
      },
      references: { title: "Referanslar" },
      announcements: { title: "Duyurular" },
      corporate: { title: "Kurumsal", aboutCard: "Hakkımızda", refsCard: "Referanslar" },
      payroll: { title: "Teşvikli Bordro" },
    },
  },

  en: {
    nav: {
      home: "Home",
      corporate: "Corporate",
      about: "About Us",
      services: "Services",
      references: "References",
      announcements: "News",
      payroll: "Incentive Payroll",
      contact: "Contact",
    },
    common: {
      email: "Email",
      whatsapp: "WhatsApp",
      address: "Address",
      phone: "Phone",
      home: "Home",
      learnMore: "Learn More",
      allServices: "View All Services",
      freeConsult: "Get Free Consultation",
      send: "Send",
      other: "Other",
      selectService: "Select a Service",
      thanks: "Thank you!",
      messageSent: "Your message has been sent successfully. We will get back to you shortly.",
      rights: "All rights reserved.",
      quickMenu: "Quick Menu",
      contactUs: "Contact",
      viewAll: "View All",
      prev: "Previous",
      next: "Next",
    },
    hero: {
      slides: [
        {
          badge: "Premium Consulting",
          title: "Your Trusted Partner in Financial Processes",
          desc: "We support your business with our 15-person expert team in accounting, tax advisory, SGK and consulting.",
        },
        {
          badge: "Incentives & R&D",
          title: "Technopark, TEKMER and Government Supports",
          desc: "End-to-end advisory from project writing to incentive payroll under 4691 / 5746, KOSGEB and TÜBİTAK processes.",
        },
        {
          badge: "Since 2018",
          title: "Take Your Business Into the Future",
          desc: "360° professional support in tax planning, VAT refunds, company formation and international tax advisory.",
        },
      ],
      ctaContact: "Contact Us",
      ctaServices: "Our Services",
      stats: [
        { value: "15+", label: "Expert Team" },
        { value: "2018", label: "Founded" },
        { value: "500+", label: "Clients" },
      ],
    },
    services: {
      label: "Our Services",
      title: "Premium Consulting Solutions",
      subtitle: "We stand by you with our expert team in technopark, R&D, accounting and government support processes.",
      items: serviceItemsEn,
    },
    stats: {
      label: "PMDTR in Numbers",
      title: "Why Choose Us?",
      items: [
        { value: "15+", label: "Expert Team" },
        { value: "500+", label: "Active Clients" },
        { value: "2018", label: "Founded" },
        { value: "19", label: "Service Areas" },
      ],
    },
    process: {
      label: "Our Process",
      title: "How We Work",
      steps: [
        { title: "Planning", desc: "We analyze your needs and define the most suitable tax and financial strategy." },
        { title: "Implementation", desc: "We run your accounting, payroll and tax processes in full compliance." },
        { title: "Follow-up", desc: "We help you maximize SGK incentives, VAT refunds and government supports." },
        { title: "Advisory", desc: "We support you in tax disputes, mergers and international transactions." },
      ],
    },
    testimonials: {
      label: "References",
      title: "What Our Clients Say",
      items: [
        { name: "Ahmet YILMAZ", role: "XYZ Technology - General Manager", text: "Since we started working with PMDTR, we have had no issues with accounting and tax processes. Our VAT refunds were completed in record time. A truly expert team.", initials: "AY" },
        { name: "Mehmet KAYA", role: "ABC Export - Manager", text: "Thanks to PMDTR's expertise in international tax advisory, our overseas operations became much easier. Their global vision is impressive.", initials: "MK" },
        { name: "Ayşe DEMİR", role: "TechStart - Founder", text: "They supported us at every stage of company formation. Their 15-person team answered every question instantly. Outstanding professionalism.", initials: "AD" },
        { name: "Can ERSOY", role: "DataViz Inc. - CEO", text: "The advantages they secured for us through SGK incentives led to significant annual savings. Excellent legislation knowledge and speed.", initials: "CE" },
      ],
    },
    announcements: {
      label: "Latest",
      title: "News & Blog",
      items: [
        { title: "The Newest Financing Method: Crowdfunding", date: "2025" },
        { title: "Administrative Fines When Export Proceeds Are Not Brought Home", date: "2025" },
        { title: "What Is Startup Funding and How Does It Work?", date: "2024" },
      ],
    },
    newsletter: {
      label: "Newsletter",
      title: "Join Our Announcement Newsletter",
      subtitle: "Get tax, SGK, incentive and legislation updates by email. No spam — only important announcements.",
      placeholder: "Your email address",
      cta: "Subscribe",
      success: "Thank you! You have been added to our newsletter list.",
      privacy: "Your email is used only for the announcement newsletter.",
      close: "Close",
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      subtitle: "Fill out the form below to contact us. We will get back to you as soon as possible.",
      namePh: "Full Name",
      phonePh: "Phone",
      emailPh: "Email",
      messagePh: "Your Message",
    },
    footer: {
      about: "PMDTR - Premium Consulting has been serving since 2018 with a 15-person expert team in accounting, tax advisory, SGK and consulting.",
    },
    about: {
      banner: "About Us",
      label: "Corporate",
      title: "Who We Are",
      lead: "Why Choose PremiumTax Accounting and Consulting?",
      points: [
        "We stand by you with our approximately 15-person expert team, fully versed in tax and SGK legislation.",
        "We take our work seriously and maximize government incentives for the companies we serve.",
        "Through our global vision and partners in various countries, we have a wide international collaboration network.",
        "We guide you on financial matters and accounting processes.",
        "We stay close to the digital age, use up-to-date software, and develop solutions with partners when needed.",
        "We complete our services promptly without delay.",
        "If you are not satisfied, you may terminate all service contracts without any penalty clause.",
      ],
      visionLabel: "Our Vision",
      visionTitle: "A trust-building, solution-driven approach",
      visionText: "As Premium Consulting and Financial Services, our aim is to build trust in society and institutions and to solve important problems. Premium Consulting focuses on high-quality advisory, audit, consulting, tax and SGK services. Beyond classic bookkeeping, we deliver added value by informing clients about legislation and incentives, and by supporting businesses at every stage.",
      missionLabel: "Our Mission",
      missionTitle: "Ethical, objective and accurate management",
      missionText: "Our mission at PremiumTax Accounting and Consulting is to manage both public and taxpayer rights correctly, in line with the law, objectivity and ethical principles.",
      caption: "Premium Consulting",
    },
    pages: {
      services: {
        title: "Our Services",
        label: "PMDTR",
        heading: "Consulting and Advisory Services",
        subtitle: "We provide end-to-end services in technopark, R&D, accounting and government support processes.",
      },
      contact: {
        title: "Contact",
        label: "Reach Us",
        heading: "Contact Information",
        formTitle: "Contact Form",
        formDesc: "Fill out the form and we will get back to you shortly.",
      },
      references: { title: "References" },
      announcements: { title: "News" },
      corporate: { title: "Corporate", aboutCard: "About Us", refsCard: "References" },
      payroll: { title: "Incentive Payroll" },
    },
  },

  de: {
    nav: {
      home: "Startseite",
      corporate: "Unternehmen",
      about: "Über uns",
      services: "Leistungen",
      references: "Referenzen",
      announcements: "Aktuelles",
      payroll: "Geförderte Lohnabrechnung",
      contact: "Kontakt",
    },
    common: {
      email: "E-Mail",
      whatsapp: "WhatsApp",
      address: "Adresse",
      phone: "Telefon",
      home: "Startseite",
      learnMore: "Mehr erfahren",
      allServices: "Alle Leistungen ansehen",
      freeConsult: "Kostenlose Beratung",
      send: "Senden",
      other: "Sonstiges",
      selectService: "Leistung wählen",
      thanks: "Vielen Dank!",
      messageSent: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.",
      rights: "Alle Rechte vorbehalten.",
      quickMenu: "Schnellmenü",
      contactUs: "Kontakt",
      viewAll: "Alle ansehen",
      prev: "Zurück",
      next: "Weiter",
    },
    hero: {
      slides: [
        {
          badge: "Premium Beratung",
          title: "Ihr zuverlässiger Partner in Finanzprozessen",
          desc: "Mit unserem 15-köpfigen Expertenteam stehen wir Ihnen in Buchhaltung, Steuerberatung, SGK und Consulting zur Seite.",
        },
        {
          badge: "Förderung & FuE",
          title: "Technopark, TEKMER und staatliche Förderungen",
          desc: "End-to-end-Beratung von der Projekterstellung bis zur geförderten Lohnabrechnung nach 4691 / 5746, KOSGEB und TÜBİTAK.",
        },
        {
          badge: "Seit 2018",
          title: "Bringen Sie Ihr Unternehmen in die Zukunft",
          desc: "360°-Unterstützung bei Steuerplanung, MwSt.-Erstattung, Firmengründung und internationaler Steuerberatung.",
        },
      ],
      ctaContact: "Kontakt aufnehmen",
      ctaServices: "Unsere Leistungen",
      stats: [
        { value: "15+", label: "Expertenteam" },
        { value: "2018", label: "Gegründet" },
        { value: "500+", label: "Kunden" },
      ],
    },
    services: {
      label: "Unsere Leistungen",
      title: "Premium Beratungs­lösungen",
      subtitle: "Wir begleiten Sie mit unserem Expertenteam bei Technopark, FuE, Steuerberatung und staatlichen Förderungen.",
      items: serviceItemsDe,
    },
    stats: {
      label: "PMDTR in Zahlen",
      title: "Warum uns wählen?",
      items: [
        { value: "15+", label: "Expertenteam" },
        { value: "500+", label: "Aktive Kunden" },
        { value: "2018", label: "Gegründet" },
        { value: "19", label: "Leistungsbereiche" },
      ],
    },
    process: {
      label: "Unser Prozess",
      title: "So arbeiten wir",
      steps: [
        { title: "Planung", desc: "Wir analysieren Ihre Bedürfnisse und definieren die passende Steuer- und Finanzstrategie." },
        { title: "Umsetzung", desc: "Wir führen Buchhaltung, Lohnabrechnung und Steuerprozesse gesetzeskonform durch." },
        { title: "Nachverfolgung", desc: "Wir maximieren Ihren Nutzen aus SGK-Förderungen, MwSt.-Erstattungen und staatlichen Hilfen." },
        { title: "Beratung", desc: "Wir unterstützen Sie bei Steuerstreitigkeiten, Fusionen und internationalen Transaktionen." },
      ],
    },
    testimonials: {
      label: "Referenzen",
      title: "Was unsere Kunden sagen",
      items: [
        { name: "Ahmet YILMAZ", role: "XYZ Technologie - Geschäftsführer", text: "Seit der Zusammenarbeit mit PMDTR hatten wir keine Probleme bei Buchhaltung und Steuern. Unsere MwSt.-Erstattungen wurden rekordschnell abgeschlossen. Ein wirklich kompetentes Team.", initials: "AY" },
        { name: "Mehmet KAYA", role: "ABC Export - Manager", text: "Dank der Expertise von PMDTR in der internationalen Steuerberatung wurden unsere Auslandsgeschäfte deutlich einfacher. Die globale Vision ist beeindruckend.", initials: "MK" },
        { name: "Ayşe DEMİR", role: "TechStart - Gründerin", text: "Sie haben uns in jeder Phase der Firmengründung begleitet. Das 15-köpfige Team hat jede Frage sofort beantwortet. Herausragende Professionalität.", initials: "AD" },
        { name: "Can ERSOY", role: "DataViz AG - CEO", text: "Die Vorteile durch SGK-Förderungen führten zu erheblichen jährlichen Einsparungen. Exzellente Gesetzeskenntnis und Geschwindigkeit.", initials: "CE" },
      ],
    },
    announcements: {
      label: "Aktuell",
      title: "News & Blog",
      items: [
        { title: "Die neueste Finanzierungsmethode: Crowdfunding", date: "2025" },
        { title: "Verwaltungsstrafen, wenn Exporterlöse nicht zurückgeführt werden", date: "2025" },
        { title: "Was ist Startup-Finanzierung und wie funktioniert sie?", date: "2024" },
      ],
    },
    newsletter: {
      label: "Newsletter",
      title: "Newsletter abonnieren",
      subtitle: "Erhalten Sie Steuer-, SGK-, Förder- und Gesetzesupdates per E-Mail. Kein Spam — nur wichtige Mitteilungen.",
      placeholder: "Ihre E-Mail-Adresse",
      cta: "Abonnieren",
      success: "Vielen Dank! Sie wurden unserer Newsletter-Liste hinzugefügt.",
      privacy: "Ihre E-Mail wird nur für den Ankündigungs-Newsletter verwendet.",
      close: "Schließen",
    },
    contact: {
      label: "Kontakt",
      title: "Kontaktieren Sie uns",
      subtitle: "Füllen Sie das Formular aus. Wir melden uns so schnell wie möglich bei Ihnen.",
      namePh: "Vor- und Nachname",
      phonePh: "Telefon",
      emailPh: "E-Mail",
      messagePh: "Ihre Nachricht",
    },
    footer: {
      about: "PMDTR - Premium Beratung ist seit 2018 mit einem 15-köpfigen Expertenteam in Buchhaltung, Steuerberatung, SGK und Consulting tätig.",
    },
    about: {
      banner: "Über uns",
      label: "Unternehmen",
      title: "Wer wir sind",
      lead: "Warum PremiumTax Steuerberatung und Consulting wählen?",
      points: [
        "Wir stehen Ihnen mit unserem rund 15-köpfigen Expertenteam zur Seite, das Steuer- und SGK-Recht beherrscht.",
        "Wir nehmen unsere Arbeit ernst und maximieren staatliche Förderungen für die von uns betreuten Unternehmen.",
        "Dank unserer globalen Vision und Partner in verschiedenen Ländern verfügen wir über ein weites internationales Netzwerk.",
        "Wir begleiten Sie bei finanziellen Themen und Buchhaltungsprozessen.",
        "Wir bleiben nah am digitalen Zeitalter, nutzen aktuelle Software und entwickeln bei Bedarf Lösungen mit Partnern.",
        "Wir erledigen unsere Leistungen zügig und ohne Verzögerung.",
        "Bei Unzufriedenheit können Sie alle Verträge ohne Vertragsstrafe kündigen.",
      ],
      visionLabel: "Unsere Vision",
      visionTitle: "Vertrauensbildend und lösungsorientiert",
      visionText: "Als Premium Beratung und Finanzdienstleistungen ist unser Ziel, Vertrauen in Gesellschaft und Institutionen aufzubauen und wichtige Probleme zu lösen. Premium Beratung konzentriert sich auf hochwertige Beratung, Prüfung, Consulting, Steuer- und SGK-Leistungen. Über die klassische Buchführung hinaus schaffen wir Mehrwert, indem wir Kunden über Gesetzgebung und Förderungen informieren und Unternehmen in jeder Phase unterstützen.",
      missionLabel: "Unsere Mission",
      missionTitle: "Ethisch, objektiv und korrekt",
      missionText: "Unsere Mission bei PremiumTax Steuerberatung und Consulting ist es, öffentliche und Steuerpflichtigenrechte gesetzeskonform, objektiv und ethisch korrekt zu verwalten.",
      caption: "Premium Beratung",
    },
    pages: {
      services: {
        title: "Leistungen",
        label: "PMDTR",
        heading: "Beratungs- und Steuerleistungen",
        subtitle: "Wir bieten End-to-end-Leistungen bei Technopark, FuE, Steuerberatung und staatlichen Förderungen.",
      },
      contact: {
        title: "Kontakt",
        label: "Erreichen Sie uns",
        heading: "Kontaktinformationen",
        formTitle: "Kontaktformular",
        formDesc: "Füllen Sie das Formular aus – wir melden uns in Kürze.",
      },
      references: { title: "Referenzen" },
      announcements: { title: "Aktuelles" },
      corporate: { title: "Unternehmen", aboutCard: "Über uns", refsCard: "Referenzen" },
      payroll: { title: "Geförderte Lohnabrechnung" },
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.tr;
}
