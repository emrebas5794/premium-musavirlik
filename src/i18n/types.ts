export type Dictionary = {
  nav: {
    home: string;
    corporate: string;
    about: string;
    services: string;
    references: string;
    announcements: string;
    payroll: string;
    contact: string;
  };
  common: {
    email: string;
    whatsapp: string;
    address: string;
    phone: string;
    home: string;
    learnMore: string;
    allServices: string;
    freeConsult: string;
    send: string;
    other: string;
    selectService: string;
    thanks: string;
    messageSent: string;
    rights: string;
    quickMenu: string;
    contactUs: string;
    viewAll: string;
    prev: string;
    next: string;
  };
  hero: {
    slides: { badge: string; title: string; desc: string }[];
    ctaContact: string;
    ctaServices: string;
    stats: { value: string; label: string }[];
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: Record<string, { title: string; summary: string }>;
  };
  stats: {
    label: string;
    title: string;
    items: { value: string; label: string }[];
  };
  process: {
    label: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  testimonials: {
    label: string;
    title: string;
    items: { name: string; role: string; text: string; initials: string }[];
  };
  announcements: {
    label: string;
    title: string;
    items: { title: string; date: string }[];
  };
  newsletter: {
    label: string;
    title: string;
    subtitle: string;
    placeholder: string;
    cta: string;
    success: string;
    privacy: string;
    close: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    namePh: string;
    phonePh: string;
    emailPh: string;
    messagePh: string;
  };
  footer: {
    about: string;
  };
  about: {
    banner: string;
    label: string;
    title: string;
    lead: string;
    points: string[];
    visionLabel: string;
    visionTitle: string;
    visionText: string;
    missionLabel: string;
    missionTitle: string;
    missionText: string;
    caption: string;
  };
  pages: {
    services: { title: string; label: string; heading: string; subtitle: string };
    contact: { title: string; label: string; heading: string; formTitle: string; formDesc: string };
    references: { title: string };
    announcements: { title: string };
    corporate: { title: string; aboutCard: string; refsCard: string };
    payroll: { title: string };
  };
};
