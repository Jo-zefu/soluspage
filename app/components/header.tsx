"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "../../constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Solus home">
          <Image
            src="/solelogo.svg"
            alt="Sole Studio logo"
            width={220}
            height={100}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ id, name, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className="text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors"
        >
          Contact us
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-purple-600"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ id, name, href }) => (
              <li key={id}>
                <a
                  href={href}
                  className="text-sm text-gray-700 hover:text-purple-600 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
