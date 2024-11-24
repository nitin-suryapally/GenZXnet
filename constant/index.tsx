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
    href: "/about",
    subItems: [
      { title: "Our Mission", href: "/about/mission" },
      { title: "Our Team", href: "/about/team" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Service 1", href: "/services/service1" },
      { title: "Service 2", href: "/services/service2" },
    ],
  },
  { title: "Staff Augmentation", href: "/staff-augmentation" },
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
      "The industry’s first end-to-end, self-serve retail media platform.",
  },
  {
    icon: <FaChartBar />,
    title: "On-site monetization.",
    description:
      "Industry-leading on-site retail media capabilities including sponsored, banners and brand pages.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Off-site capabilities.",
    description:
      "Industry-leading off-site reach across the open web driving increased sales on-site and in-store.",
  },
  {
    icon: <FaFingerprint />,
    title: "Identity-led.",
    description:
      "Unprecedented scale underpinned by 300M+ global privacy-protected CORE IDs.",
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
    title: "Financial Services",
    description: "Professional financial consultancy and solutions.",
    image: "/digital_marketing.jpg",
  },
  {
    id: 2,
    title: "IT Consulting",
    description: "Expert IT solutions tailored to your needs.",
    image: "/it_consulting.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Boost your brand with cutting-edge marketing strategies.",
    image: "/mobile_application.jpg",
  },
  {
    id: 4,
    title: "Financial Services",
    description: "Professional financial consultancy and solutions.",
    image: "/software_testing.jpg",
  },
  {
    id: 5,
    title: "IT Consulting",
    description: "Expert IT solutions tailored to your needs.",
    image: "/it_consulting.jpg",
  },
];
