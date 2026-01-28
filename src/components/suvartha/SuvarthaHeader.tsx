"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SuvarthaLogo from "./SuvarthaLogo";

export default function SuvarthaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Change header when scrolled past hero section (approximately 600px)
      setIsScrolled(window.scrollY > 600);

      // Determine active section based on scroll position
      const sections = [
        "home",
        "services",
        "testimonials",
        "partnership",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-800" : "bg-gray-800 text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <SuvarthaLogo 
              size="sm" 
              variant={isScrolled ? "color" : "light"}
              showText={false}
            />
            <div>
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Suvartha Ministries UK
              </h1>
              <p
                className={`text-sm font-bold transition-colors duration-300 leading-tight ${
                  isScrolled ? "text-amber-600" : "text-amber-200"
                }`}
                style={{
                  textShadow: isScrolled ? '1px 1px 2px rgba(0,0,0,0.3)' : '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  marginTop: '2px'
                }}
              >
                <span>Year of Transformation </span>
                <span className={isScrolled ? 'text-amber-700' : 'text-amber-300'} style={{
                  fontWeight: '800',
                  fontSize: '1.1em',
                  textShadow: isScrolled ? '1px 1px 2px rgba(0,0,0,0.3)' : '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  2026
                </span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            <Link
              href="/"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "home"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-800"
                  : isScrolled
                  ? "text-gray-800 hover:bg-gray-100 hover:text-amber-600"
                  : "text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              Home
            </Link>
            <a
              href="#services"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "services"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-800"
                  : isScrolled
                  ? "text-gray-800 hover:bg-gray-100 hover:text-amber-600"
                  : "text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "testimonials"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-800"
                  : isScrolled
                  ? "text-gray-800 hover:bg-gray-100 hover:text-amber-600"
                  : "text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              Testimonials
            </a>
            <a
              href="#partnership"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "partnership"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-800"
                  : isScrolled
                  ? "text-gray-800 hover:bg-gray-100 hover:text-amber-600"
                  : "text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              Partnership
            </a>
            <a
              href="#contact"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "contact"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-800"
                  : isScrolled
                  ? "text-gray-800 hover:bg-gray-100 hover:text-amber-600"
                  : "text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "home"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-gray-800 font-bold"
                    : isScrolled
                    ? "text-gray-800 font-bold hover:text-amber-600"
                    : "text-gray-300 font-medium hover:text-white"
                }`}
              >
                Home
              </Link>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "services"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-gray-800 font-bold"
                    : isScrolled
                    ? "text-gray-800 font-bold hover:text-amber-600"
                    : "text-gray-300 font-medium hover:text-white"
                }`}
              >
                Services
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "testimonials"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-gray-800 font-bold"
                    : isScrolled
                    ? "text-gray-800 font-bold hover:text-amber-600"
                    : "text-gray-300 font-medium hover:text-white"
                }`}
              >
                Testimonials
              </a>
              <a
                href="#partnership"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "partnership"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-gray-800 font-bold"
                    : isScrolled
                    ? "text-gray-800 font-bold hover:text-amber-600"
                    : "text-gray-300 font-medium hover:text-white"
                }`}
              >
                Partnership
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "contact"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-gray-800 font-bold"
                    : isScrolled
                    ? "text-gray-800 font-bold hover:text-amber-600"
                    : "text-gray-300 font-medium hover:text-white"
                }`}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
