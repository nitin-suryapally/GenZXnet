"use client";


import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/constant";

interface NavItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string | null) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <nav className="flex flex-row items-center space-x-4 xl:space-x-8 text-white font-mono">
      {navItems.map((item: NavItem) => (
        <div key={item.title} className="relative group " >
          <div
            onClick={() => item.subItems && toggleDropdown(item.title)}
            className="flex items-center px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:text-green-500"
          >
            {item.subItems ? (
              <span className="flex items-center space-x-2">
                <span>{item.title}</span>
                <svg
                  className={`h-4 w-4 ml-2 transition-transform duration-300 ${openDropdown === item.title ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            ) : (
              <Link href={item.href} className="flex items-center space-x-2">
                <span>{item.title}</span>
              </Link>
            )}
          </div>

          {item.subItems && (
            <div
              className={` w-[300px] z-50 absolute top-full left-0 text-white shadow-md rounded-md mt-2 transition-all duration-300 block ${openDropdown === item.title
                ? "opacity-100 visible"
                : "opacity-0 invisible"
                } `}
            >
              <ul className="bg-black w-full ">
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 hover:text-green-500"
                      onClick={() => setOpenDropdown(null)} // Close the dropdown when a sub-item is clicked
                    >
                      {subItem.title}
                    </Link>

                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavLinks;
