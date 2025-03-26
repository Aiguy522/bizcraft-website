
import React from "react";
import { FadeIn } from "./FadeIn";
import {
  LayoutGrid,
  Sparkles,
  LineChart,
  Smartphone,
  Globe,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: <LayoutGrid className="w-10 h-10" />,
    title: "Web Design",
    description: "Pixel-perfect, intuitive designs that enhance user experience and reflect your brand identity."
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Branding",
    description: "Strategic brand development that creates lasting impressions and builds customer loyalty."
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: "Digital Marketing",
    description: "Data-driven campaigns that increase visibility and drive meaningful engagement with your audience."
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "App Development",
    description: "Powerful, user-friendly applications built with cutting-edge technology and thoughtful design."
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "SEO Optimization",
    description: "Strategic optimization that improves your search rankings and increases organic traffic."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Cyber Security",
    description: "Comprehensive security solutions that protect your digital assets and customer data."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-primary">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="subtitle mx-auto">
              We offer a comprehensive range of services to help your business succeed in the digital age
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={100 * index} threshold={0.1}>
              <div className="bg-white rounded-lg p-8 shadow-sm card-hover">
                <div className="text-foreground mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
