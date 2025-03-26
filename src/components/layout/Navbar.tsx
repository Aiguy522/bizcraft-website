
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            bizcraft
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-item">
              Features
            </a>
            <a href="#services" className="nav-item">
              Services
            </a>
            <a href="#about" className="nav-item">
              About
            </a>
            <a href="#testimonials" className="nav-item">
              Testimonials
            </a>
            <a href="#contact" className="button-primary">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 transform",
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <a
              href="#features"
              className="text-foreground hover:text-muted-foreground transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-muted-foreground transition-colors"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-muted-foreground transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-muted-foreground transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="button-primary"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
