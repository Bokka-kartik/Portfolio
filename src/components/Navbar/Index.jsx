import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const actual = theme === "light" ? <Moon size={20} /> : <Sun size={20} />;
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      target: "hero",
    },
    {
      label: "Work",
      target: "projects",
    },
    {
      label: "Skills",
      target: "skills",
    },
    {
      label: "Testimonials",
      target: "recommendations",
    },
    {
      label: "Contact",
      target: "contact",
    },
  ];
  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-6">
        <h1 className="text-xl font-bold ">
          KA
          <span className="text-blue-500">RT</span>
          IK
        </h1>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, target }) => (
            <a
              key={label}
              href={`#${target}`}
              className="transition hover:text-blue-500"
            >
              {label}
            </a>
          ))}

          <button onClick={toggleTheme}>{actual}</button>
        </div>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden "
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-4">
          {navLinks.map(({ label, target }) => (
            <a
              key={label}
              href={`#${target}`}
              onClick={()=>setMenuOpen(false)}
              className="transition hover:text-blue-500"
            >
              {label}
            </a>
          ))}
          <button onClick={toggleTheme}>{actual}</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
