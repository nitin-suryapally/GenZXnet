"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { background } from "@/utils";
import Link from "next/link";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (textRef.current && buttonRef.current) {
      const timeline = gsap.timeline();
      timeline
        .fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 2 }
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    }
  }, []);

  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden ">
      <Image
        src={background}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="-z-40"
      />

      <div className="text-center text-white max-w-4xl px-4 ">
        <h1
          ref={textRef}
          className="text-3xl md:text-5xl font-semibold mb-6 font-sans leading-relaxed flex flex-col gap-2
          "
        >
          Channeling Global Power with{" "}
          <span className="text-green-text">Consulting Services
          </span>
          <span>to Empower Your Business Goals</span>
        </h1>

        <Link
          href="/contact"
          ref={buttonRef}
          className="mt-4 px-6 py-3 bg-green-button hover:bg-black hover:text-green-text hover:border-2 hover:border-green-button text-black text-lg  rounded-lg shadow-md transition duration-300 font-mono font-medium"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
