import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../../contexts/useTheme";

const navLinks = [
  { label: "Home", target: "hero" },
  { label: "Work", target: "projects" },
  { label: "Experience", target: "skills" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#hero" onClick={closeMenu} aria-label="Kartik Sai, home">
          <span className="brand-mark">KS</span>
          <span>Kartik Sai</span>
        </a>

        <div className="nav-links">
          {navLinks.map(({ label, target }) => (
            <a key={target} href={`#${target}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="button button-primary" href="#contact">
            Let&apos;s talk
          </a>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <ThemeIcon size={18} aria-hidden="true" />
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          {[...navLinks, { label: "Contact", target: "contact" }].map(
            ({ label, target }) => (
              <a key={target} href={`#${target}`} onClick={closeMenu}>
                {label}
              </a>
            ),
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
