import { FaRegHandshake } from "react-icons/fa";
import { FaChartBar, FaNetworkWired, FaFingerprint } from "react-icons/fa";

export interface NavItem {
  title: string;
  href: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/about_us",
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Application Development", href: "/service/application-development" },
      { title: "Mobile App Development", href: "/service/mobile-app-development" },
      { title: "Financial Services", href: "/service/financial-services" },
      { title: "It Consulting", href: "/service/it-consulting" },
      { title: "Staffing Services", href: "/service/staffing-services" },
    ],
  },
  // { title: "Staff Augmentation", href: "/staff-augmentation" },
  { title: "Careers", href: "/careers" },
  { title: "Contact Us", href: "/contact" },
];

// capabilites

export interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    icon: <FaRegHandshake />,
    title: "Unified platform.",
    description:
      "The first-of-its-kind, comprehensive self-service retail media solution.",
  },
  {
    icon: <FaChartBar />,
    title: "On-site monetization.",
    description:
      "Cutting-edge tools for on-site retail media, including sponsored products, banners, and branded pages.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Off-site capabilities.",
    description:
      "Advanced off-site solutions that drive increased sales both online and in physical stores.",
  },
  {
    icon: <FaFingerprint />,
    title: "Identity-led.",
    description:
      "Leveraging unmatched scale with over 300 million globally privacy-protected CORE IDs.",
  },
];

//services
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}
export const services: Service[] = [
  {
    id: 1,
    title: "Application Development",
    description: "Innovative and tailored solutions for building dynamic applications.",
    image: "/Application-Development.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Creating seamless and user-friendly mobile experiences for your business.",
    image: "/Mobile-App-Development.svg",
  },
  {
    id: 3,
    title: "Financial Services",
    description: "Comprehensive financial strategies to enhance your business growth.",
    image: "/Financial-Services.jpg",
  },
  {
    id: 4,
    title: "IT Consulting",
    description: "Strategic IT guidance to help streamline operations and drive innovation.",
    image: "/IT-Consulting.svg",
  },
  {
    id: 5,
    title: "Staffing Services",
    description: "Connecting you with top-tier talent to meet your business needs.",
    image: "/Staffing-Services.jpg",
  },

];
