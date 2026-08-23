import type { ServiceSection } from "@/data/services";
import { services } from "@/data/services";
import type { Locale } from "./config";

type ServiceDetailsMap = Record<string, ServiceSection[]>;

const en: ServiceDetailsMap = {
  "sirket-kurulus-islemleri": [
    {
      title: "Company Formation",
      paragraphs: [
        "The most common company types in Türkiye are sole proprietorships, limited liability companies and joint-stock companies.",
        "Other forms such as limited partnerships and general partnerships also exist, but they are less common.",
        "Sole proprietorships, limited companies and joint-stock companies differ in liability, tax advantages, incorporation costs and ongoing monthly costs.",
      ],
    },
    {
      title: "Sole Proprietorship",
      paragraphs: [
        "There is no minimum capital requirement for a sole proprietorship. Setup costs are lower than for limited and joint-stock companies, and formation/closure processes are shorter and simpler.",
        "However, the owner is fully liable for public debts with all personal assets. Unlike limited and joint-stock companies with a flat corporate tax rate, progressive income tax rates from 15% up to 40% apply.",
      ],
    },
    {
      title: "Limited Liability Company",
      paragraphs: [
        "A capital commitment is required when forming a limited company, and the capital must be paid within 24 months of incorporation. The previous requirement to block 25% of the capital in a bank at formation has been abolished.",
        "A limited company may have a single shareholder, with a maximum of 50. Legal representatives are fully liable for public debts, while non-representative shareholders are liable only in proportion to their capital shares. Share transfers are more complex and costly than in joint-stock companies.",
      ],
    },
    {
      title: "Joint-Stock Company",
      paragraphs: [
        "For joint-stock companies, the capital commitment must be at least TRY 50,000, and unlike limited companies, one quarter of the committed capital must be blocked in a bank before incorporation. The block can be released after registration. As with limited companies, the committed capital must be paid within 24 months.",
        "Joint-stock companies may also be formed with a single shareholder, with a maximum of 500. Board-member shareholders are fully liable for public debts, while non-board shareholders have no liability for public debts.",
        "With our expert team, we support you in advisory, process management and follow-up for this important first step in business life.",
      ],
    },
  ],
  "teknopark-danismanligi": [
    {
      title: "Project Process Advisory",
      paragraphs: [
        "We review the tax processes of ongoing or new projects for regulatory compliance on a regular monthly basis and report from both technical and financial perspectives.",
      ],
    },
    {
      title: "Company Information",
      paragraphs: [
        "We check your company data, and arrange, control and update the fields that must remain compliant with Law 4691 for completed or planned revisions.",
      ],
    },
    {
      title: "Exemption Report",
      paragraphs: [
        "We follow up the timely preparation and submission of monthly exemption activity reports for your project(s) under Law 4691.",
      ],
    },
    {
      title: "Continuity",
      paragraphs: [
        "As long as you operate in a technopark under the Technology Development Zones Implementation Regulation of Law 4691, we monitor that your activities remain compliant with the law.",
      ],
    },
    {
      title: "Personnel Processes",
      paragraphs: [
        "We check the weekly/monthly working hours of project staff and ensure personnel are assigned to your project in a regulation-compliant manner.",
      ],
    },
    {
      title: "Financial Information",
      paragraphs: [
        "We prepare exemption activity reports for your project(s), ensure accounting uses a chart of accounts compliant with Law 4691, and make data entry regular and systematic.",
      ],
    },
    {
      title: "Annual Activity Report",
      paragraphs: [
        "We follow up the timely preparation and submission of your annual activity report under Law 4691. Note: Failure to meet reporting obligations may result in cancellation of incentives used.",
      ],
    },
  ],
  "kosgeb-ve-tubitak-proje-surecleri": [
    {
      title: "Technopark / KOSGEB / TÜBİTAK Project Writing and Grant Applications",
      paragraphs: [
        "Today, efficiency, added value and sustainable competitiveness are essential for business continuity. These are achieved through R&D. Companies that do not invest in R&D see declining profitability and struggle to create value or funding.",
        "We provide advisory tailored to company needs across all national and international incentive and support mechanisms for R&D and design. We recommend incentives and grants suited to companies running R&D, design and innovation activities in different sectors.",
        "We inform entrepreneurs about technology development zones, project-based supports and the operation of R&D and design centers, and guide them to the most suitable grants and incentives. We identify programs matching business activities and manage project writing and sustainability.",
      ],
    },
    {
      title: "Key Supports and Our Services",
      bullets: [
        "National & international R&D support programs (financial and technical advisory for TÜBİTAK and KOSGEB)",
        "International R&D support programs (financial and technical advisory for TÜBİTAK and H2020)",
        "Financial and technical advisory for investment incentives",
        "R&D legislation advisory based on Laws 4691 and 5746",
        "Thematic and call-based national support programs (KOSGEB and Development Agency)",
        "R&D and Design Center setup application and management",
        "TGB/TTO setup, application and management",
        "R&D and innovation process management, legislation advisory",
        "Digital transformation process management",
        "KOSGEB / İŞKUR / SGK (personnel) incentive advisory",
        "R&D accounting and financial engineering advisory",
        "Supports from ministries of Energy, Industry and Technology, Trade, Agriculture and Forestry, Transport and Infrastructure",
        "Feasibility, entrepreneurship and business plan advisory",
        "Ministry of Treasury and Finance supports, TTGV supports",
      ],
    },
  ],
  "mali-musavirlik-hizmeti": [
    {
      title: "Certified Public Accountancy",
      paragraphs: [
        "Within our CPA services, we keep companies’ statutory books and financial statements in line with the Turkish Commercial Code, Tax Procedure Law and Uniform Chart of Accounts, and present them transparently for information users.",
        "Preparing tax returns and SGK declarations on time and in line with statutory books, and submitting them to the relevant authorities, is a critical obligation for companies.",
        "We continue our services in compliance with Technology Development Zones legislation (4691) and Law 5746 on Supporting R&D Activities.",
        "Our mission includes providing payroll, tax advisory, and financial and technical audit services.",
      ],
    },
    {
      title: "Financial Advisory",
      paragraphs: [
        "In our financial advisory services we work in coordination with your existing CPA under Laws 4691 and 5746. Our services in this scope include:",
      ],
      bullets: [
        "Defining financial control and accounting systems",
        "Aligning the company’s organizational structure for technopark requirements",
        "Guidance on income tax incentive calculations",
        "VAT exemption analysis and application guidance",
        "Profit exemption application; defining transfer pricing methods and allocation keys",
        "Advisory on incentivized SGK payroll and declarations",
        "Follow-up and advisory for activity monitoring and evaluation reports",
        "R&D accounting financial advisory",
        "Advisory on preparation of accounting declarations",
        "Support to HR on wage calculations and incentivized payroll preparation",
      ],
    },
  ],
  "ar-ge-ve-tasarim-merkezi-basvuru-surecleri": [
    {
      title: "R&D and Design Center Setup",
      paragraphs: [
        "Under Law 5746, we advise on establishing R&D and design centers: preparing the application file, checking personnel and infrastructure suitability, and following application and approval processes.",
        "After setup, we help you build a sustainable structure through correct incentive application, reporting obligations and monitoring of legislation changes.",
      ],
      bullets: [
        "Eligibility analysis for R&D / Design Center establishment",
        "Preparation of application file and project documentation",
        "Personnel qualification and ratio compliance checks",
        "Post-application monitoring, reporting and incentive management",
        "Integrated process management with 4691 / 5746 legislation advisory",
      ],
    },
  ],
  "belgelendirme-hizmetleri": [
    {
      title: "Certification Processes",
      paragraphs: [
        "We support preparation of technical and administrative documents required in technopark, R&D center, KOSGEB and TÜBİTAK processes, and compile application files in line with regulations.",
        "Completing documents on time and in full reduces incentive loss and implementation risk. We track your processes end to end and keep document sets up to date.",
      ],
      bullets: [
        "Preparation of application and renewal document sets",
        "Compilation of reports / annexes for management and public authorities",
        "Document updates according to legislation changes",
        "Internal control checklists and archive organization",
      ],
    },
  ],
  "egitim-hizmetleri": [
    {
      title: "Law 5746 R&D Legislation",
      paragraphs: [
        "We provide training on Law 5746 R&D legislation for companies engaged in or planning R&D, innovation and design activities.",
      ],
    },
    {
      title: "Business Plan Preparation Training",
      paragraphs: [
        "This training covers turning a business idea into a business model when starting a new venture: canvas business model, 9 building blocks, business model innovation, validating the current model, designing activities around it, and preparing a business plan. It is delivered as a practical interactive workshop and can be held in your city or at your premises.",
      ],
    },
    {
      title: "Project Writing Training",
      paragraphs: [
        "The curriculum is designed to raise you to expert level in writing, managing and evaluating projects. Training is delivered with practical sessions and workshops.",
      ],
    },
    {
      title: "Entrepreneurship Training",
      paragraphs: [
        "Entrepreneurship training helps aspiring founders identify the personal traits needed for entrepreneurship, gain the required knowledge and skills, and develop these competencies through practice.",
      ],
    },
    {
      title: "Law 4691 Technopark Legislation",
      paragraphs: [
        "Companies conducting R&D in Türkiye can benefit from various incentives and supports under R&D legislation and cash support programs.",
        "To reduce R&D and innovation costs, it is important that companies use the support and incentive mechanisms best suited to their structure.",
      ],
    },
  ],
  "patent-surecleri": [
    {
      title: "Patent and Utility Model Processes",
      paragraphs: [
        "We advise on protecting R&D outputs, planning patent and utility model applications, and tracking processes.",
        "We guide companies through pre-application assessment, documentation, post-application correspondence and portfolio management, and handle patent processes together with technopark / R&D incentives.",
      ],
      bullets: [
        "Guidance on pre-application novelty / invention assessment",
        "Patent and utility model application process advisory",
        "Intellectual property planning integrated with R&D projects",
        "Process follow-up and coordination of institutional correspondence",
      ],
    },
  ],
  "tekmer-danismanligi": [
    {
      title: "TEKMER Consulting",
      paragraphs: [
        "Technology Development Centers (TEKMER) support early-stage ventures in R&D and innovation. Combined with incentives and implementation rules under Law 5746, they create a strong technical and administrative growth area for companies.",
        "At PMDTR we aim to prepare companies correctly for TEKMER processes, ensure regulatory compliance during application and execution, and help them use available supports effectively. Entry advisory, project content, portal operations and process follow-up are handled holistically.",
        "We run information and training activities on current practices and obligations, and closely monitor Law 5746 and related legislation. Revision needs arising during the project are assessed in a planned way, keeping administrative and technical requirements aligned.",
      ],
    },
    {
      title: "Project Preparation",
      paragraphs: [
        "TEKMER project development starts by clarifying the problem definition of the product or solution to be developed against the company’s current technical capabilities. Targeted technical gains, methods and validation approach are structured.",
        "The innovation element is defined by comparison with existing solutions; activity–time plan, team competencies and technical risks are addressed in an integrated framework. The goal is to create projects that are strong in content, trackable in progress and clear in growth potential.",
      ],
    },
    {
      title: "Sustainability and Portal Management",
      paragraphs: [
        "Sustainability in TEKMER is not limited to acceptance; activities must remain compliant, trackable and continuous throughout the project.",
        "Project follow-up, personnel structure, up-to-date portal records and periodic reporting obligations are managed in this scope. Towards project end, the closing process is planned; compiling outputs and completing required steps are targeted.",
      ],
      bullets: [
        "Portal records and periodic reporting follow-up",
        "Personnel and project progress monitoring",
        "Administrative–technical compliance checks",
        "Planning of the project closing process",
      ],
    },
    {
      title: "Project Revision Processes",
      paragraphs: [
        "Technical developments, work-plan updates or team changes during the project may create a need for revision. Scope, activity plan, duration and team structure are assessed together.",
        "Requests such as team change, extension or project manager change are structured with technical justification, preserving project integrity while continuing the TEKMER process.",
      ],
    },
    {
      title: "TEKMER Trainings",
      paragraphs: [
        "We offer TEKMER-focused trainings to raise regulatory compliance and technical awareness. Content covers TEKMER operations, project execution principles, correct positioning of R&D and innovation concepts, portal processes and common mistakes.",
        "Trainings are tailored to the venture’s needs so participants clarify responsibilities and run activities in a planned way.",
      ],
    },
  ],
  "bordrolama-hizmetleri": [
    {
      title: "Payroll and Incentivized SGK",
      paragraphs: [
        "We provide services for preparing personnel payrolls in line with regulations, SGK declarations and incentivized payroll practices.",
        "Under Laws 4691 and 5746, we support correct application of timesheets, income tax withholding incentives and SGK incentives for R&D / technopark personnel.",
      ],
      bullets: [
        "Monthly payroll and SGK declaration processes",
        "Incentivized payroll calculation and application advisory",
        "R&D / technopark personnel timesheet follow-up",
        "Control of wage, tax and premium deductions",
      ],
    },
  ],
  "stratejik-is-ortakligi": [
    {
      title: "Strategic Partnership and Collaboration",
      paragraphs: [
        "To reach more efficient and successful outcomes in our project activities, we can form solution partnerships powered by the synergy of combined knowledge, skills and experience.",
        "As independent professionals coming together to create value with collective awareness, we believe our collaborations will lead to greater success.",
      ],
    },
  ],
};

const de: ServiceDetailsMap = {
  "sirket-kurulus-islemleri": [
    {
      title: "Firmengründung",
      paragraphs: [
        "Die gängigsten Unternehmensformen in der Türkei sind Einzelunternehmen, GmbHs und Aktiengesellschaften.",
        "Weitere Formen wie Kommandit- und Offene Handelsgesellschaften existieren ebenfalls, sind aber seltener.",
        "Einzelunternehmen, GmbH und AG unterscheiden sich in Haftung, Steuervorteilen, Gründungs- und laufenden Monatskosten.",
      ],
    },
    {
      title: "Einzelunternehmen",
      paragraphs: [
        "Für ein Einzelunternehmen gibt es keine Mindestkapitalanforderung. Die Gründungskosten sind niedriger als bei GmbH und AG; Gründung und Schließung sind kürzer und einfacher.",
        "Der Inhaber haftet jedoch mit seinem gesamten Vermögen für öffentliche Schulden. Anders als bei GmbH und AG mit flachem Körperschaftsteuersatz gelten progressive Einkommensteuersätze von 15 % bis 40 %.",
      ],
    },
    {
      title: "GmbH (Limited)",
      paragraphs: [
        "Bei der Gründung einer GmbH ist eine Kapitaleinlage erforderlich, die innerhalb von 24 Monaten nach Gründung eingezahlt werden muss. Die frühere Pflicht, 25 % des Kapitals bei Gründung zu blockieren, entfällt.",
        "Eine GmbH kann einen einzigen Gesellschafter haben, maximal 50. Gesetzliche Vertreter haften voll für öffentliche Schulden; Gesellschafter ohne Vertretungsmacht nur anteilig. Anteilsübertragungen sind komplexer und teurer als bei der AG.",
      ],
    },
    {
      title: "Aktiengesellschaft",
      paragraphs: [
        "Bei der AG muss die Kapitaleinlage mindestens 50.000 TL betragen; anders als bei der GmbH muss ein Viertel vor der Gründung auf einem Bankkonto blockiert werden. Nach der Eintragung kann die Sperre aufgehoben werden. Wie bei der GmbH ist die Einlage innerhalb von 24 Monaten zu leisten.",
        "Auch AGs können mit einem Aktionär gegründet werden, maximal 500. Vorstandsmitglieder-Aktionäre haften voll für öffentliche Schulden; Aktionäre ohne Vorstandsamt haften nicht.",
        "Mit unserem Expertenteam begleiten wir Sie bei Beratung, Prozessmanagement und Nachverfolgung dieses wichtigen ersten Schritts.",
      ],
    },
  ],
  "teknopark-danismanligi": [
    {
      title: "Projektprozess-Beratung",
      paragraphs: [
        "Wir prüfen die steuerlichen Prozesse laufender oder neuer Projekte monatlich auf Gesetzeskonformität und berichten technisch sowie finanziell.",
      ],
    },
    {
      title: "Firmendaten",
      paragraphs: [
        "Wir prüfen Ihre Firmendaten und regeln, kontrollieren und aktualisieren die Bereiche, die gemäß Gesetz 4691 konform bleiben müssen.",
      ],
    },
    {
      title: "Freistellungsbericht",
      paragraphs: [
        "Wir verfolgen die rechtzeitige Erstellung und Abgabe der monatlichen Freistellungs-Tätigkeitsberichte für Ihr(e) Projekt(e) nach Gesetz 4691.",
      ],
    },
    {
      title: "Kontinuität",
      paragraphs: [
        "Solange Sie in einem Technopark nach der Durchführungsverordnung zu Technologieentwicklungszonen (4691) tätig sind, überwachen wir die gesetzeskonforme Fortführung Ihrer Aktivitäten.",
      ],
    },
    {
      title: "Personalprozesse",
      paragraphs: [
        "Wir prüfen die wöchentlichen/monatlichen Arbeitszeiten der Projektmitarbeiter und stellen sicher, dass das Personal gesetzeskonform dem Projekt zugeordnet ist.",
      ],
    },
    {
      title: "Finanzinformationen",
      paragraphs: [
        "Wir erstellen Freistellungsberichte für Ihre Projekte, sorgen für einen 4691-konformen Kontenplan und machen die Datenerfassung regelmäßig und systematisch.",
      ],
    },
    {
      title: "Jahresbericht",
      paragraphs: [
        "Wir verfolgen die rechtzeitige Erstellung und Abgabe Ihres Jahresberichts nach Gesetz 4691. Hinweis: Bei Nichterfüllung der Berichtspflichten können genutzte Förderungen widerrufen werden.",
      ],
    },
  ],
  "kosgeb-ve-tubitak-proje-surecleri": [
    {
      title: "Technopark / KOSGEB / TÜBİTAK – Projekterstellung und Förderanträge",
      paragraphs: [
        "Effizienz, Mehrwert und nachhaltige Wettbewerbsfähigkeit sind heute für die Unternehmensfortführung unerlässlich. Das gelingt durch FuE. Unternehmen ohne FuE verlieren an Rentabilität und schaffen kaum Wert oder Finanzierung.",
        "Wir bieten Beratung zu allen nationalen und internationalen Förder- und Unterstützungsmechanismen für FuE und Design. Wir empfehlen passende Förderungen für Unternehmen mit FuE-, Design- und Innovationsaktivitäten in verschiedenen Branchen.",
        "Wir informieren Gründer über Technologieentwicklungszonen, projektbezogene Förderungen und den Betrieb von FuE-/Designzentren und leiten sie zu den geeignetsten Zuschüssen. Wir finden passende Programme und steuern Projekterstellung sowie Nachhaltigkeit.",
      ],
    },
    {
      title: "Wesentliche Förderungen und unsere Leistungen",
      bullets: [
        "Nationale & internationale FuE-Programme (finanzielle und technische Beratung zu TÜBİTAK und KOSGEB)",
        "Internationale FuE-Programme (finanzielle und technische Beratung zu TÜBİTAK und H2020)",
        "Finanzielle und technische Beratung zu Investitionsförderungen",
        "FuE-Rechtsberatung auf Basis der Gesetze 4691 und 5746",
        "Thematische und ausschreibungsbasierte nationale Programme (KOSGEB und Entwicklungsagentur)",
        "Antrag und Management für FuE- und Designzentrum-Einrichtung",
        "TGB/TTO-Einrichtung, Antrag und Management",
        "FuE- und Innovationsprozessmanagement, Rechtsberatung",
        "Management digitaler Transformationsprozesse",
        "KOSGEB- / İŞKUR- / SGK-(Personal-)Förderberatung",
        "FuE-Buchhaltung und Financial-Engineering-Beratung",
        "Förderungen der Ministerien für Energie, Industrie und Technologie, Handel, Landwirtschaft und Forsten, Verkehr und Infrastruktur",
        "Machbarkeits-, Gründungs- und Businessplan-Beratung",
        "Förderungen des Finanzministeriums, TTGV-Förderungen",
      ],
    },
  ],
  "mali-musavirlik-hizmeti": [
    {
      title: "Steuerberatung & Buchhaltung",
      paragraphs: [
        "Im Rahmen unserer Steuerberatungsleistungen führen wir gesetzliche Bücher und Abschlüsse gemäß Handelsgesetzbuch, Steuerverfahrensgesetz und einheitlichem Kontenplan und stellen sie transparent für Informationsnutzer bereit.",
        "Die rechtzeitige und buchführungskonforme Erstellung von Steuererklärungen und SGK-Meldungen sowie deren Einreichung ist eine zentrale Pflicht für Unternehmen.",
        "Wir erbringen unsere Leistungen im Einklang mit dem Recht der Technologieentwicklungszonen (4691) und dem Gesetz 5746 zur Förderung von FuE-Aktivitäten.",
        "Zu unserer Mission gehören Lohnabrechnung, Steuerberatung sowie finanzielle und technische Prüfung.",
      ],
    },
    {
      title: "Finanzberatung",
      paragraphs: [
        "In der Finanzberatung arbeiten wir koordiniert mit Ihrem bestehenden Steuerberater unter den Gesetzen 4691 und 5746. Unsere Leistungen umfassen:",
      ],
      bullets: [
        "Definition von Finanzkontroll- und Buchhaltungssystemen",
        "Anpassung der Organisationsstruktur an Technopark-Anforderungen",
        "Information zu Einkommensteuer-Förderberechnungen",
        "MwSt.-Freistellungsanalyse und Anwendungsberatung",
        "Gewinnfreistellung; Festlegung von Verrechnungspreismethoden und Verteilungsschlüsseln",
        "Beratung zu geförderter SGK-Lohnabrechnung und Meldungen",
        "Nachverfolgung und Beratung zu Aktivitäts- und Bewertungsberichten",
        "Finanzberatung zur FuE-Buchhaltung",
        "Beratung zur Erstellung von Buchhaltungserklärungen",
        "Unterstützung der Personalabteilung bei Lohnberechnung und geförderter Lohnabrechnung",
      ],
    },
  ],
  "ar-ge-ve-tasarim-merkezi-basvuru-surecleri": [
    {
      title: "Einrichtung von FuE- und Designzentren",
      paragraphs: [
        "Nach Gesetz 5746 beraten wir zur Einrichtung von FuE- und Designzentren: Antragsakte, Prüfung von Personal und Infrastruktur sowie Nachverfolgung von Antrag und Genehmigung.",
        "Nach der Einrichtung unterstützen wir Sie beim nachhaltigen Aufbau durch korrekte Förderanwendung, Berichtspflichten und Beobachtung von Gesetzesänderungen.",
      ],
      bullets: [
        "Eignungsanalyse für die Einrichtung eines FuE-/Designzentrums",
        "Vorbereitung von Antragsakte und Projektdokumentation",
        "Prüfung von Personalqualifikation und Quotenkonformität",
        "Nachverfolgung, Berichterstattung und Fördermanagement nach dem Antrag",
        "Integriertes Prozessmanagement mit 4691-/5746-Rechtsberatung",
      ],
    },
  ],
  "belgelendirme-hizmetleri": [
    {
      title: "Zertifizierungsprozesse",
      paragraphs: [
        "Wir unterstützen die Erstellung technischer und administrativer Unterlagen für Technopark-, FuE-Zentrum-, KOSGEB- und TÜBİTAK-Prozesse und stellen Antragsakten gesetzeskonform zusammen.",
        "Vollständige und rechtzeitige Unterlagen reduzieren Förderverlust und Umsetzungsrisiken. Wir begleiten Ihre Prozesse end-to-end und halten Dokumentensätze aktuell.",
      ],
      bullets: [
        "Erstellung von Antrags- und Erneuerungsdokumentensätzen",
        "Zusammenstellung von Berichten/Anlagen für Management und Behörden",
        "Dokumentaktualisierungen bei Gesetzesänderungen",
        "Checklisten zur internen Kontrolle und Archivordnung",
      ],
    },
  ],
  "egitim-hizmetleri": [
    {
      title: "FuE-Recht nach Gesetz 5746",
      paragraphs: [
        "Wir schulen Unternehmen, die FuE-, Innovations- und Designaktivitäten betreiben oder planen möchten, zum FuE-Recht nach Gesetz 5746.",
      ],
    },
    {
      title: "Schulung zur Businessplan-Erstellung",
      paragraphs: [
        "Die Schulung vermittelt bei Neugründungen den Weg von der Geschäftsidee zum Geschäftsmodell: Canvas, 9 Bausteine, Geschäftsmodell-Innovation, Validierung, Aktivitätsdesign und Businessplan-Methode. Sie findet als praxisnahes interaktives Workshop statt und kann in Ihrer Stadt oder bei Ihnen vor Ort durchgeführt werden.",
      ],
    },
    {
      title: "Schulung zum Projekteschreiben",
      paragraphs: [
        "Das Curriculum soll Sie auf Expertenniveau im Schreiben, Managen und Bewerten von Projekten bringen. Die Schulung erfolgt mit Praxis- und Workshop-Einheiten.",
      ],
    },
    {
      title: "Unternehmerschulung",
      paragraphs: [
        "Die Unternehmerschulung hilft Gründungsinteressierten, die nötigen persönlichen Eigenschaften zu erkennen, Wissen und Fähigkeiten zu erwerben und diese praxisnah zu entwickeln.",
      ],
    },
    {
      title: "Technopark-Recht nach Gesetz 4691",
      paragraphs: [
        "Unternehmen mit FuE in der Türkei können verschiedene Förderungen und Unterstützungen im Rahmen des FuE-Rechts und von Cash-Support-Programmen nutzen.",
        "Um FuE- und Innovationskosten zu senken, ist es wichtig, den zur Struktur passenden Förder- und Anreizmechanismus zu nutzen.",
      ],
    },
  ],
  "patent-surecleri": [
    {
      title: "Patent- und Gebrauchsmusterprozesse",
      paragraphs: [
        "Wir beraten zum Schutz von FuE-Ergebnissen, zur Planung von Patent- und Gebrauchsmusteranträgen sowie zur Prozessnachverfolgung.",
        "Wir begleiten Vorabprüfung, Dokumentation, Korrespondenz nach dem Antrag und Portfoliomanagement und verknüpfen Patentprozesse mit Technopark-/FuE-Förderungen.",
      ],
      bullets: [
        "Orientierung zur Neuheits-/Erfindungsbewertung vor dem Antrag",
        "Beratung zu Patent- und Gebrauchsmusteranträgen",
        "IP-Planung integriert mit FuE-Projekten",
        "Prozessnachverfolgung und Koordination der Behördenkorrespondenz",
      ],
    },
  ],
  "tekmer-danismanligi": [
    {
      title: "TEKMER-Beratung",
      paragraphs: [
        "Technologieentwicklungszentren (TEKMER) unterstützen Early-Stage-Startups bei FuE und Innovation. Zusammen mit Förderungen und Anwendungsregeln nach Gesetz 5746 schaffen sie einen starken technischen und administrativen Entwicklungsraum.",
        "Bei PMDTR bereiten wir Unternehmen korrekt auf TEKMER-Prozesse vor, sichern Gesetzeskonformität in Antrag und Durchführung und helfen, verfügbare Förderungen wirksam zu nutzen. Einstiegsberatung, Projektinhalt, Portalprozesse und Nachverfolgung werden ganzheitlich behandelt.",
        "Wir informieren und schulen zu aktuellen Praktiken und Pflichten und beobachten Gesetz 5746 sowie verwandtes Recht. Revisionsbedarf im Projektverlauf wird geplant bewertet; administrative und technische Anforderungen bleiben abgestimmt.",
      ],
    },
    {
      title: "Projekterstellung",
      paragraphs: [
        "Die TEKMER-Projektentwicklung beginnt mit der Klärung der Problemdefinition von Produkt oder Lösung gegenüber den technischen Fähigkeiten des Unternehmens. Technische Ziele, Methoden und Validierungsansatz werden strukturiert.",
        "Das Innovationselement wird im Vergleich zu bestehenden Lösungen definiert; Aktivitäts-Zeitplan, Teamkompetenzen und technische Risiken werden integriert betrachtet. Ziel sind inhaltlich starke, nachverfolgbare Projekte mit klarem Entwicklungspotenzial.",
      ],
    },
    {
      title: "Nachhaltigkeit und Portalverwaltung",
      paragraphs: [
        "Nachhaltigkeit bei TEKMER endet nicht mit der Aufnahme; Aktivitäten müssen während des gesamten Projekts konform, nachverfolgbar und kontinuierlich bleiben.",
        "Projektnachverfolgung, Personalstruktur, aktuelle Portaleinträge und periodische Berichtspflichten werden in diesem Rahmen gesteuert. Gegen Projektende wird der Abschluss geplant; Outputs werden zusammengestellt und erforderliche Schritte abgeschlossen.",
      ],
      bullets: [
        "Nachverfolgung von Portaleinträgen und periodischer Berichterstattung",
        "Personal- und Projektfortschrittsüberwachung",
        "Administrativ-technische Konformitätsprüfungen",
        "Planung des Projektabschlusses",
      ],
    },
    {
      title: "Projektrevisionsprozesse",
      paragraphs: [
        "Technische Entwicklungen, Arbeitsplan-Updates oder Teamänderungen können Revisionsbedarf erzeugen. Umfang, Aktivitätsplan, Dauer und Teamstruktur werden gemeinsam bewertet.",
        "Anträge wie Teamwechsel, Verlängerung oder Projektleiterwechsel werden mit technischer Begründung strukturiert; die Projektintegrität bleibt erhalten, der TEKMER-Prozess läuft weiter.",
      ],
    },
    {
      title: "TEKMER-Schulungen",
      paragraphs: [
        "Wir bieten TEKMER-fokussierte Schulungen zur Stärkung von Gesetzeskonformität und technischem Bewusstsein. Inhalte: TEKMER-Ablauf, Projektdurchführung, korrekte Einordnung von FuE und Innovation, Portalprozesse und häufige Fehler.",
        "Schulungen werden an den Bedarf des Vorhabens angepasst, damit Teilnehmende Verantwortlichkeiten klären und Aktivitäten geplant umsetzen.",
      ],
    },
  ],
  "bordrolama-hizmetleri": [
    {
      title: "Lohnabrechnung und geförderte SGK",
      paragraphs: [
        "Wir erstellen Personallohnabrechnungen gesetzeskonform und unterstützen bei SGK-Meldungen sowie geförderten Lohnabrechnungspraktiken.",
        "Nach den Gesetzen 4691 und 5746 unterstützen wir die korrekte Anwendung von Stundennachweisen, Einkommensteuer-Quellensteuerförderung und SGK-Förderungen für FuE-/Technopark-Personal.",
      ],
      bullets: [
        "Monatliche Lohnabrechnungs- und SGK-Meldeprozesse",
        "Beratung zu Berechnung und Anwendung geförderter Lohnabrechnung",
        "Nachverfolgung von FuE-/Technopark-Personalstundennachweisen",
        "Kontrolle von Lohn-, Steuer- und Beitragsabzügen",
      ],
    },
  ],
  "stratejik-is-ortakligi": [
    {
      title: "Strategische Partnerschaft und Zusammenarbeit",
      paragraphs: [
        "Um in unseren Projektaktivitäten effizientere und erfolgreichere Ergebnisse zu erzielen, können wir Lösungspartnerschaften auf Basis der Synergie aus kombiniertem Wissen, Können und Erfahrung eingehen.",
        "Als unabhängige Professionals, die mit kollektivem Bewusstsein Wert schaffen, glauben wir, dass unsere Zusammenarbeit zu größerem Erfolg führt.",
      ],
    },
  ],
};

const byLocale: Record<Locale, ServiceDetailsMap | null> = {
  tr: null,
  en,
  de,
};

export function getServiceSections(slug: string, locale: Locale): ServiceSection[] {
  if (locale === "tr") {
    return services.find((s) => s.slug === slug)?.sections ?? [];
  }
  return byLocale[locale]?.[slug] ?? services.find((s) => s.slug === slug)?.sections ?? [];
}
