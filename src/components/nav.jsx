import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/animations.css";

const links = [
  { name: "Home", path: "/" },
  { name: "Symptoms", path: "/symptoms" },
  { name: "Awareness", path: "/awareness" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav
      className="px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50 animate-gradient"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #f43f5e 0%, #ec4899 25%, #a21caf 50%, #ec4899 75%, #f43f5e 100%)",
        backgroundSize: "300% 300%",
        animation: "gradient-move 4s linear infinite",
      }}
    >
      <h1 className="text-2xl font-bold text-white drop-shadow">BreastCare</h1>
      <div className="flex gap-6">
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
    </nav>
  );
}