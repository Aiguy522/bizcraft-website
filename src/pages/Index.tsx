
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggler } from "@/components/ui/ThemeToggler";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Smooth scroll to anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Theme toggler positioned absolutely */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggler />
      </div>
      
      <div className="relative">
        <HeroSection />
        <div className="relative bg-background">
          <ServicesSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-foreground text-primary shadow-lg transition-all duration-300 z-50 ${
          showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
