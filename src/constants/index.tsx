
import { useTranslations } from "next-intl";
export function useNavLinks() {
  const t = useTranslations()
  const navLinks = [
    { id: 1, name: t("nav.about"), href: "#about" },
    { id: 2, name: t("nav.services"), href: "#services" },
    { id: 3, name: t("nav.caseStudies"), href: "#case" },
    // { id: 4, name: t("nav.blog"), href: "#blog" },
    { id: 5, name: t("nav.howItWorks"), href: "#how" },
  ];
  return navLinks
}


export function useStats() {
  const t = useTranslations('Stats')
  const stats = [
    { value: "200+", label: t('projectsCompleted') },
    { value: "50+", label: t('happyClients') },
    { value: "12+", label: t('yearsExperience') },
    { value: "30+", label: t('teamMembers') },
  ];
  return stats
}

export const trustedLogos = [
  { name: "Airbnb", src: "/globe.svg" },
  { name: "Hubspot", src: "/globe.svg" },
  { name: "Google", src: "/globe.svg" },
  { name: "Microsoft", src: "/globe.svg" },
  { name: "Stripe", src: "/globe.svg" },
];

export function useServices() {
  const t = useTranslations('Services')
  const services = [
    {
      id: 1,
      icon: "🎨",
      title: t('service1.title'),
      description: t('service1.description'),
    },
    {
      id: 2,
      icon: "💻",
      title: t('service2.title'),
      description: t('service2.description'),
    },
    {
      id: 3,
      icon: "📱",
      title: t('service3.title'),
      description: t('service3.description'),
    },
    {
      id: 4,
      icon: "📊",
      title: t('service4.title'),
      description: t('service4.description'),
    },
    {
      id: 5,
      icon: "🔍",
      title: t('service5.title'),
      description: t('service5.description'),
    },
    {
      id: 6,
      icon: "☁️",
      title: t('service6.title'),
      description: t('service6.description'),
    },
  ];
  return services
}

export function useCaseStudies() {
  const t = useTranslations('CaseStudies')
  const caseStudies = [
    {
      id: 1,
      tag: t('caseStudy1.tag'),
      title: t('caseStudy1.title'),
      description: t('caseStudy1.description'),
      panelBg: "bg-indigo-100",
      screens: ["bg-white", "bg-indigo-50", "bg-white"],
      accentColor: "text-indigo-600",
    },
    {
      id: 2,
      tag: t('caseStudy2.tag'),
      title: t('caseStudy2.title'),
      description: t('caseStudy2.description'),
      panelBg: "bg-teal-100",
      screens: ["bg-white", "bg-teal-50", "bg-white"],
      accentColor: "text-teal-600",
    },
    {
      id: 3,
      tag: t('caseStudy3.tag'),
      title: t('caseStudy3.title'),
      description: t('caseStudy3.description'),
      panelBg: "bg-pink-100",
      screens: ["bg-white", "bg-pink-50", "bg-white"],
      accentColor: "text-pink-600",
    },
  ];
  return caseStudies
}

export function useTeamMembers() {
  const t = useTranslations('Team')
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Lead Designer",
      avatar: "AR",
      color: "bg-purple-200",
    },
    {
      id: 2,
      name: "Sam Chen",
      role: "Full-Stack Engineer",
      avatar: "SC",
      color: "bg-teal-200",
    },
    {
      id: 3,
      name: "Jordan Lee",
      role: "Product Strategist",
      avatar: "JL",
      color: "bg-pink-200",
    },
    {
      id: 4,
      name: "Morgan Kim",
      role: "DevOps Engineer",
      avatar: "MK",
      color: "bg-yellow-200",
    },
  ];
  return teamMembers
}

export function useHowItWorks() {
  const t = useTranslations('HowItWorks')
  const howItWorks = [
    {
      step: "01",
      title: t('step1.title'),
      description: t('step1.description'),
    },
    {
      step: "02",
      title: t('step2.title'),
      description: t('step2.description'),
    },
    {
      step: "03",
      title: t('step3.title'),
      description: t('step3.description'),
    },
    {
      step: "04",
      title: t('step4.title'),
      description: t('step4.description'),
    },
  ];
  return howItWorks
}

export function useTestimonials() {
  const t = useTranslations('Testimonials')
  const testimonials = [
    {
      id: 1,
      quote: t('testimonial1'),
      name: "Sarah Mitchell",
      role: "CEO, TechVentures",
      avatar: "SM",
      color: "bg-purple-200",
    },
    {
      id: 2,
      quote: t('testimonial2'),
      name: "David Park",
      role: "Founder, Launchpad",
      avatar: "DP",
      color: "bg-teal-200",
    },
    {
      id: 3,
      quote: t('testimonial3'),
      name: "Priya Nair",
      role: "Head of Growth, Scalr",
      avatar: "PN",
      color: "bg-pink-200",
    },
  ];
  return testimonials
}

export const partnerLogos = [
  "Notion",
  "Figma",
  "Vercel",
  "Stripe",
  "Supabase",
  "Tailwind",
  "GitHub",
  "Linear",
];

export function useFooterLinks() {
  const t = useTranslations('Footer')
  const footerLinks = {
    [t('company')]: ["About us", "Careers", "Press", "Contact"],
    [t('services')]: ["UI/UX Design", "Web Development", "Mobile Apps", "Strategy"],
    [t('resources')]: ["Blog", "Case Studies", "Documentation", "Community"],
    [t('legal')]: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };
  return footerLinks
}

