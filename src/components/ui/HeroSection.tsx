
import React from "react";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-bl from-purple-100/40 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full mix-blend-overlay animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-tl from-indigo-100/30 to-pink-100/30 rounded-full mix-blend-overlay animate-pulse" style={{ animationDuration: '20s' }}></div>
        
        {/* Geometric accent elements */}
        <div className="hidden md:block absolute top-32 left-[15%] w-16 h-16 border-2 border-foreground/5 rounded-lg transform rotate-12"></div>
        <div className="hidden md:block absolute bottom-32 right-[20%] w-24 h-24 border-2 border-foreground/5 rounded-full"></div>
        <div className="hidden md:block absolute top-1/2 right-[10%] w-12 h-12 border-2 border-foreground/5 rounded-lg transform -rotate-12"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <FadeIn delay={100}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary text-sm font-medium">
              Crafting Digital Excellence
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="heading-xl mb-6 max-w-4xl">
              We help businesses thrive in the digital landscape
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="subtitle mb-8">
              We combine strategic thinking with technical excellence to create digital 
              experiences that elevate your brand and drive growth.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="button-primary flex items-center justify-center gap-2">
                Get Started <ArrowRight size={16} />
              </a>
              <a href="#services" className="button-secondary">
                Explore Services
              </a>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={500} className="mt-16">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-80"></div>
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-4 p-6">
              <div className="glass rounded-lg col-span-2"></div>
              <div className="glass rounded-lg row-span-2"></div>
              <div className="glass rounded-lg col-span-2"></div>
            </div>
          </div>
        </FadeIn>
      </div>
      
      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto transform translate-y-1/2 opacity-[0.03]">
          <path fill="currentColor" fillOpacity="1" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,192C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
