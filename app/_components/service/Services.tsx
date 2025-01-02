'use client'
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Service = {
  id: number;
  title: string;
  overview: string;
  description: string;
  image: string;
};

// Services data
const services: Service[] = [
  {
    id: 1,
    title: "Application Development",
    overview:
      "Empowering businesses with state-of-the-art application development solutions tailored to their unique requirements. We specialize in creating scalable, dynamic, and secure applications that align with the evolving demands of the digital world.",
    description:
      "Innovative and tailored solutions for building dynamic applications. Our team ensures every application is robust, user-friendly, and built with future-proof technology to support growth.",
    image: "/Application-Development.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    overview:
      "Transforming ideas into exceptional mobile experiences. Whether Android, iOS, or cross-platform, our solutions ensure seamless user interaction and engagement.",
    description:
      "Creating seamless and user-friendly mobile experiences for your business. From design to deployment, we craft mobile apps that resonate with your audience and achieve your goals.",
    image: "/Mobile-App-Development.svg",
  },
  {
    id: 3,
    title: "Financial Services",
    overview:
      "Comprehensive financial solutions designed to streamline business operations and optimize financial performance. We integrate strategic planning and cutting-edge tools to achieve exceptional results.",
    description:
      "Comprehensive financial strategies to enhance your business growth. Our services focus on improving efficiency, managing risks, and driving profitability.",
    image: "/Financial-Services.jpg",
  },
  {
    id: 4,
    title: "IT Consulting",
    overview:
      "Providing businesses with strategic IT insights and solutions to navigate the complexities of modern technology. We help businesses innovate, streamline operations, and stay competitive.",
    description:
      "Strategic IT guidance to help streamline operations and drive innovation. From IT assessments to implementation, we ensure your business is equipped for future challenges.",
    image: "/IT-Consulting.svg",
  },
  {
    id: 5,
    title: "Staffing Services",
    overview:
      "Connecting organizations with top-tier talent to meet their unique workforce requirements. We focus on delivering skilled professionals who drive success and innovation.",
    description:
      "Connecting you with top-tier talent to meet your business needs. Whether temporary or permanent staffing, our solutions ensure your organization thrives with the right expertise.",
    image: "/Staffing-Services.jpg",
  },
];

// Generate metadata for the service pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(
    (service) => service.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page does not exist.",
    };
  }

  return {
    title: service.title,
    description: service.overview,
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

const Services = ({ params }: { params: { slug: string } }) => {
  const service = services.find(
    (service) => service.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!service) {
    notFound();
  }

  // Animation references
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const overviewRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (titleRef.current && overviewRef.current && descRef.current && imageRef.current) {
      const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

      timeline.fromTo(titleRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
      timeline.fromTo(overviewRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, "<0.2");
      timeline.fromTo(descRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1 }, "<0.3");
      timeline.fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { x: 0, opacity: 1 }, "<0.4");
    }
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-12 py-12 flex ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        {/* Text Section */}
        <div>
          <h2
            ref={titleRef}
            className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
          >
            {service.title}
          </h2>
          <p
            ref={overviewRef}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            {service.overview}
          </p>
          <p ref={descRef} className="text-lg text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="flex justify-center lg:justify-between">
          <Image
            src={service.image}
            alt={service.title}
            className="w-full max-w-lg rounded-lg shadow-lg"
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
