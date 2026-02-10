
export interface SiteAddress {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface SiteSettings {
  companyName: string;
  slogan: string;
  logoUrl?: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: SiteAddress;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  openingHours: string;
  priceRange: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface SolutionPage {
  id: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  requirements: string[];
  howItWorks: HowItWorksStep[];
  faqs: FAQ[];
  ctaText: string;
  icon: string;
  image?: string;
}

export interface HomePage {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  quickStepsTitle: string;
  benefitsTitle: string;
  benefits: { title: string; description: string; icon: string }[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}

export interface AboutPage {
  title: string;
  content: string[];
  mission: string;
  vision: string;
  values: string[];
}

export interface SolutionsIndexPage {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
}

export interface ContactPage {
  title: string;
  subtitle: string;
  mapEmbedUrl?: string;
}

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  ogImage: string;
  schema: { type: string };
  pages: Record<string, { title: string; description: string }>;
}

export interface SiteMedia {
  images: Record<string, string>;
}

export interface SiteData {
  id: string;
  domain: string;
  settings: SiteSettings;
  pages: {
    home: HomePage;
    sobre: AboutPage;
    solucoes: SolutionsIndexPage;
    contato: ContactPage;
  };
  solutions: SolutionPage[];
  seo: SeoConfig;
  media: SiteMedia;
}
