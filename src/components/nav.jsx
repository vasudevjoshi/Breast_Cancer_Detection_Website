import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/animations.css";

const links = [
  { name: "Home", path: "/" },
  { name: "Symptoms", path: "/symptoms" },
  { name: "Awareness", path: "/awareness" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="px-4 sm:px-6 py-4 shadow-md flex items-center sticky top-0 z-50 animate-gradient"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #f43f5e 0%, #ec4899 25%, #a21caf 50%, #ec4899 75%, #f43f5e 100%)",
        backgroundSize: "300% 300%",
        animation: "gradient-move 4s linear infinite",
      }}
    >
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl sm:text-2xl font-bold text-white drop-shadow">
          BreastCare
        </h1>
        {/* Hamburger menu for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center ml-2"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
        {/* Desktop links */}
        <div className="hidden sm:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium relative ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              } transition-colors duration-300 before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-white before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-center`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-white/95 shadow-md flex flex-col items-center gap-4 py-4 sm:hidden animate-fade-in z-50">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium ${
                location.pathname === link.path
                  ? "text-pink-600"
                  : "text-gray-700 hover:text-pink-600"
              } transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}