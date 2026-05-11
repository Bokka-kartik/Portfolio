import { CopyrightIcon } from "lucide-react";
import React from "react";

const navLink = [
  { label: "Home", target: "hero" },
  { label: "Work", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Testimonials", target: "recommendations" },
  { label: "Contact", target: "contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-8 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between item-center text-xl font-bold text-gray-800 dark:text-white">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          KART<span className="text-blue-500">IK</span>
        </div>
        <div className="flex gap-6 flex-wrap justify-center text-sm">
          {navLink.map(({ label, target }) => (
            <a
              key={label}
              href={`#${target}`}
              className="hover:text-blue-500 transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-300 dark:border-gray-700"/>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        ©{new Date().getFullYear()} Kartik Sai. All rights reserved. 
      </p>
    </footer>
  );
};

export default Footer;
