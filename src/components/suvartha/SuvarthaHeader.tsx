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
        isScrolled ? "bg-white text-amber-800" : "bg-amber-800 text-white"
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
                className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? "text-amber-700" : "text-yellow-200"
                }`}
                style={{
                  textShadow: isScrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                Year of Transformation 2026
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            <Link
              href="#home"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "home"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-black"
                  : isScrolled
                  ? "text-black hover:bg-amber-100 hover:text-amber-700"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Home
            </Link>
            <Link
              href="#services"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "services"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-black"
                  : isScrolled
                  ? "text-black hover:bg-amber-100 hover:text-amber-700"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "testimonials"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-black"
                  : isScrolled
                  ? "text-black hover:bg-amber-100 hover:text-amber-700"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="#partnership"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "partnership"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-black"
                  : isScrolled
                  ? "text-black hover:bg-amber-100 hover:text-amber-700"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Partnership
            </Link>
            <Link
              href="#contact"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                activeSection === "contact"
                  ? isScrolled
                    ? "bg-amber-600 text-white"
                    : "bg-white text-black"
                  : isScrolled
                  ? "text-black hover:bg-amber-100 hover:text-amber-700"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/policies"
              className={`transition-all duration-300 text-base font-semibold px-6 py-2 rounded-lg ${
                isScrolled
                  ? "text-black hover:bg-amber-100 hover:text-amber-700"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Policies
            </Link>
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
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "home"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-black font-bold"
                    : isScrolled
                    ? "text-black font-bold hover:text-amber-600"
                    : "text-white font-medium hover:text-amber-200"
                }`}
              >
                Home
              </Link>
              <Link
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "services"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-black font-bold"
                    : isScrolled
                    ? "text-black font-bold hover:text-amber-600"
                    : "text-white font-medium hover:text-amber-200"
                }`}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "testimonials"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-black font-bold"
                    : isScrolled
                    ? "text-black font-bold hover:text-amber-600"
                    : "text-white font-medium hover:text-amber-200"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="#partnership"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "partnership"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-black font-bold"
                    : isScrolled
                    ? "text-black font-bold hover:text-amber-600"
                    : "text-white font-medium hover:text-amber-200"
                }`}
              >
                Partnership
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  activeSection === "contact"
                    ? isScrolled
                      ? "bg-amber-600 text-white font-bold"
                      : "bg-white text-black font-bold"
                    : isScrolled
                    ? "text-black font-bold hover:text-amber-600"
                    : "text-white font-medium hover:text-amber-200"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/policies"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-all duration-300 py-2 text-sm px-3 rounded-lg ${
                  isScrolled
                    ? "text-black font-bold hover:text-amber-600"
                    : "text-white font-medium hover:text-amber-200"
                }`}
              >
                Policies
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
