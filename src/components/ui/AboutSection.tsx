
import React from "react";
import { FadeIn } from "./FadeIn";
import { Check } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const values = [
  "Excellence in everything we do",
  "Client-centric approach",
  "Innovative solutions",
  "Transparent communication",
  "Long-term relationships",
  "Continuous improvement",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <h2 className="heading-lg mb-6">
                We blend strategy, design, and technology
              </h2>
            </FadeIn>
            
            <FadeIn delay={100}>
              <p className="text-muted-foreground mb-6">
                Founded in 2014, bizcraft has grown from a small team of passionate individuals to a full-service digital agency trusted by businesses worldwide. Our mission is to help organizations navigate the ever-changing digital landscape and achieve sustainable growth.
              </p>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-muted-foreground mb-8">
                What sets us apart is our personalized approach. We don't believe in one-size-fits-all solutions. Instead, we take the time to understand your unique challenges, goals, and vision before crafting a tailored strategy.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="text-foreground min-w-5 h-5 mt-0.5" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          
          <div className="relative">
            <FadeIn direction="left">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 p-10 w-full">
                    {stats.map((stat, index) => (
                      <FadeIn key={index} delay={100 * index} className="flex flex-col items-center text-center p-6 glass rounded-lg">
                        <span className="text-4xl font-bold mb-2">{stat.value}</span>
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <div className="absolute -z-10 w-full h-full bg-secondary rounded-lg -top-6 -right-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
