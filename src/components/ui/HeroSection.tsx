
import React from "react";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="section-container">
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
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
}
