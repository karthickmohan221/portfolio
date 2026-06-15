import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import logo from "/favicon.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const mobileLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        <div
          className="flex items-center justify-between gap-3 sm:gap-4
                     px-3 sm:px-5 py-2.5 sm:py-3
                     rounded-full border border-border-theme/60
                     bg-card backdrop-blur-md header-pill"
        >
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-w-0"
          >
            <img
              src={logo}
              alt="KM Logo"
              className="w-8 h-8 sm:w-11 sm:h-11 object-contain shrink-0"
            />

            <span className="font-semibold text-strong text-sm sm:text-[15px] truncate">
              Karthick
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-strong transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 sm:px-5 py-2 rounded-full
                         text-sm font-medium transition-opacity hover:opacity-85 header-cta"
            >
              Get in touch
            </a>

            {/* Theme slider */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="relative w-[52px] h-[30px] rounded-full shrink-0
                         transition-colors duration-300 theme-toggle-track"
            >
              <span
                className={`
                  absolute top-[3px] left-[3px] w-6 h-6 rounded-full
                  flex items-center justify-center
                  bg-white shadow-sm transition-transform duration-300 ease-out
                  ${theme === "dark" ? "translate-x-[22px]" : "translate-x-0"}
                `}
              >
                {theme === "dark" ? (
                  <Moon size={13} className="text-slate-700" />
                ) : (
                  <Sun size={13} className="text-amber-500" />
                )}
              </span>
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full
                         text-muted hover:text-strong transition-colors"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div
            className="mt-2 px-4 py-4 rounded-2xl border border-border-theme/60
                       bg-card backdrop-blur-md header-pill lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {mobileLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-muted
                             hover:text-strong hover:bg-elevated transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center w-full px-5 py-2.5
                         rounded-full text-sm font-medium header-cta sm:hidden"
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
