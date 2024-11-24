"use client";


import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { navItems } from "@/constant";

interface NavItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
}

interface SidebarProps {
  toggleSidebar: () => void;
}

const Sidebar = ({ toggleSidebar }: SidebarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string | null) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 text-white z-50 flex flex-col p-6 space-y-4 font-mono">
      <button
        className="self-end text-white mb-4"
        onClick={toggleSidebar}
        aria-label="Close Menu"
      >
        <IoClose className="h-6 w-6" />
      </button>

      <ul className="space-y-4">
        {navItems.map((item: NavItem) => (
          <li key={item.title} className="relative w-full border-b-[1px] border-gray-300">
            <div
              onClick={() => item.subItems && toggleDropdown(item.title)}
              className="flex items-center px-4 py-2 rounded-md transition-all duration-300 cursor-pointer hover:text-green-500"
            >
              {item.subItems ? (
                <span className="flex items-center space-x-2">
                  <span>{item.title}</span>
                  <FaChevronDown
                    className={`h-4 w-4 ml-2 transition-transform duration-300 ${
                      openDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </span>
              ) : (
                <Link href={item.href} className="flex items-center space-x-2">
                  <span>{item.title}</span>
                </Link>
              )}
            </div>

            {item.subItems && openDropdown === item.title && (
              <ul className="ml-4 mt-2 space-y-2">
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 hover:text-green-500"
                      onClick={toggleSidebar}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
