"use client";

import React, {  useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { id: 1, name: "Deloitte", logo: "/delotte.png" },
  { id: 2, name: "Charles Schwab", logo: "/company_2.png" },
  { id: 3, name: "GE Appliances", logo: "/company_3.png" },
  { id: 4, name: "Ingram", logo: "/company_4.png" },
  { id: 5, name: "General Motors", logo: "/comapny_5.png" },
  { id: 6, name: "Walmart", logo: "/comapny_6.png" },
];

const ClientCarousel: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (marqueeRef.current) {
      const marquee = marqueeRef.current;

      const children = Array.from(marquee.children);
      children.forEach((child) => {
        marquee.appendChild(child.cloneNode(true));
      });

      gsap.to(marquee, {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }

    if (sectionRef.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom center",
          toggleActions: "restart none reverse none",
        },
      });

      timeline.fromTo(
        sectionRef.current.querySelector("h2"),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      timeline.fromTo(
        sectionRef.current.querySelector("p"),
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className=" section-style overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="heading font-bold text-black mb-4">
          Our <span className="text-green-text">Clients</span>
        </h2>
        <p className="paragraph-style text-black mb-12">
          We are happy to collaborate with new clients as always and to serve
          existing clients with high priority.
        </p>

        <div ref={marqueeRef} className="flex items-center space-x-12">
          {clients.map((client) => (
            <div key={client.id} className="flex-shrink-0">
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={80}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
