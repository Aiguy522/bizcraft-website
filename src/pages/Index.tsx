
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { ServicesSection } from "@/components/ui/ServicesSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { ContactSection } from "@/components/ui/ContactSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
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
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative">
        <HeroSection />
        <div className="relative bg-background">
          <ServicesSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
