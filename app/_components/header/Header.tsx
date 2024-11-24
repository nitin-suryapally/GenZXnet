"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import NavLinks from "./Navlinks";
import Sidebar from "./Sidebar";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        navLinksRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        menuButtonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.4"
      );
  });

  return (
    <header className="w-full bg-black text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div ref={logoRef}>
          <Logo />
        </div>

        <button
          ref={menuButtonRef}
          className="lg:hidden text-white"
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
        >
          {isSidebarOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        <div ref={navLinksRef} className="hidden lg:block">
          <NavLinks />
        </div>
      </nav>

      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </header>
  );
};

export default Header;
