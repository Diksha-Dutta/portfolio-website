"use client";
import { useEffect, useState } from "react";
import { FaUser, FaStar, FaServicestack, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { name: "About", icon: <FaUser /> },
 { name: "Experience", icon: <FaStar />},
    { name: "Skills", icon: <FaServicestack /> },
    { name: "Work", icon: <FaBriefcase /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  const [activeSection, setActiveSection] = useState("hero");
  const [atTop, setAtTop] = useState(true);

  // Track which section is active
  useEffect(() => {
    const sections = ["hero", ...links.map((l) => l.name.toLowerCase())];

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [links]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        atTop
          ? "bg-[#C08081] text-white shadow-md"
          : "bg-[#C08081]/45 backdrop-blur-lg border-b border-[#C08081]/20 text-white shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand */}
        <a
          href="#hero"
          className={`font-bold text-xl px-3 py-2 rounded-md transition ${
            activeSection === "hero"
              ? "bg-[#AB4E52] text-white shadow-md"
              : "hover:bg-[#AB4E52]/30"
          }`}
        >
          <span className="hidden sm:inline">Diksha Dutta</span>
          <span className="inline sm:hidden">DD</span>
        </a>

        {/* Nav Links */}
        <div className="flex space-x-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.name.toLowerCase()}`}
              className={`px-4 py-2 rounded-md transition font-medium flex items-center justify-center ${
                activeSection === link.name.toLowerCase()
                  ? "bg-[#AB4E52] text-white shadow-md"
                  : "hover:bg-[#AB4E52]/30"
              }`}
            >
              {/* Show icon only on small screens */}
              <span className="sm:hidden text-lg">{link.icon}</span>
              {/* Show text on larger screens */}
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
