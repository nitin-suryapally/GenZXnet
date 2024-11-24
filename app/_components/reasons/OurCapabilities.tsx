"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CapabilityCard from "./CapabilityCard";
import { capabilities } from "@/constant";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurCapabilities = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (sectionRef.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
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

      cardRefs.current.forEach((card, i) => {
        if (card) {
          timeline.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.2,
              ease: "power3.out",
            }
          );
        }
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="section-style">
      <div className="text-center mb-12">
        <h2 className="heading font-bold text-black mb-4">
          Our <span className="text-green-text">Capabilities</span>
        </h2>
        <p className="text-black paragraph-style leading-relaxed">
          Discover the innovative solutions that empower businesses to achieve
          exceptional results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) {
                cardRefs.current[index] = el;
              }
            }}
          >
            <CapabilityCard
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCapabilities;
