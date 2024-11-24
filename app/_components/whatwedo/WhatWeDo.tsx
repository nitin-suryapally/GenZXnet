"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { WhatWeDoSectionImage } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current && headingRef.current && imageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          toggleActions: "restart none none none",
        },
      });

      
      tl.fromTo(
        headingRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      
      tl.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section-style flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0 overflow-hidden"
    >
     
      <div ref={headingRef} className="lg:w-1/2">
        <h2 className="heading font-bold text-black mb-4 lg:mb-6 leading-snug">
          Driving Business Transformation Through{" "}
          <span className="text-green-text">Innovation</span>
        </h2>
        <p className="text-black paragraph-style leading-relaxed mb-4 sm:mb-6 ">
          S & V Tek Systems Solutions is a leading Information Technology
          organisation focused on creating the best value growth through
          innovative scores of solutions and distinctive expertise. Our core
          values are at the very heart of our business architecture and are
          essential to our ongoing cogs of success.
        </p>
        <p className="text-black paragraph-style leading-relaxed ">
          We offer exceptional performance & value in all our products & IT
          services with superior quality. It is our assurance that you get
          high-quality services that are unique and place you ahead of your
          competitors.
        </p>
      </div>

      
      <div ref={imageRef} className="lg:w-1/2 flex justify-center items-center">
        <Image
          src={WhatWeDoSectionImage}
          alt="What We Do Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-none"
          priority
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
