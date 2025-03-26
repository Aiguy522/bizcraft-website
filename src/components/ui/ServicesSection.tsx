
import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import {
  LayoutGrid,
  Sparkles,
  LineChart,
  Smartphone,
  Globe,
  Shield,
  ArrowRight,
  X
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    icon: <LayoutGrid className="w-10 h-10" />,
    title: "Web Design",
    description: "Pixel-perfect, intuitive designs that enhance user experience and reflect your brand identity.",
    details: [
      "Custom UI/UX design",
      "Responsive layouts for all devices",
      "Interactive prototypes",
      "User flow optimization",
      "Accessibility compliance"
    ]
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Branding",
    description: "Strategic brand development that creates lasting impressions and builds customer loyalty.",
    details: [
      "Brand identity creation",
      "Logo design and variants",
      "Style guide development",
      "Brand messaging and tone",
      "Visual asset creation"
    ]
  },
  {
    icon: <LineChart className="w-10 h-10" />,
    title: "Digital Marketing",
    description: "Data-driven campaigns that increase visibility and drive meaningful engagement with your audience.",
    details: [
      "SEO strategy",
      "Content marketing",
      "Social media campaigns",
      "Email marketing automation",
      "Campaign analytics & reporting"
    ]
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "App Development",
    description: "Powerful, user-friendly applications built with cutting-edge technology and thoughtful design.",
    details: [
      "Native & cross-platform apps",
      "Progressive web applications",
      "Custom backend systems",
      "API integrations",
      "Ongoing maintenance & support"
    ]
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "SEO Optimization",
    description: "Strategic optimization that improves your search rankings and increases organic traffic.",
    details: [
      "Keyword research & strategy",
      "On-page optimization",
      "Technical SEO audit",
      "Link building campaigns",
      "Local SEO for businesses"
    ]
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Cyber Security",
    description: "Comprehensive security solutions that protect your digital assets and customer data.",
    details: [
      "Security audit & assessment",
      "Vulnerability testing",
      "Data protection implementation",
      "Security training & awareness",
      "Incident response planning"
    ]
  }
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0wIDMwaC02VjM2aDZ2MjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="section-container relative z-10">
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
              <div 
                className="bg-white rounded-lg p-8 shadow-sm card-hover cursor-pointer relative group"
                onClick={() => setActiveService(service)}
              >
                <div className="text-foreground mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-6 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm font-medium mr-1">Learn more</span>
                  <ArrowRight size={14} />
                </div>
                <div className="absolute inset-0 border border-transparent group-hover:border-blue-200 rounded-lg transition-all duration-300"></div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Service details modal */}
        {activeService && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex justify-between items-start border-b">
                <div className="flex items-center">
                  <div className="mr-4 text-foreground">
                    {activeService.icon}
                  </div>
                  <h3 className="text-2xl font-medium">{activeService.title}</h3>
                </div>
                <button 
                  onClick={() => setActiveService(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <p className="text-lg mb-6">{activeService.description}</p>
                <h4 className="text-lg font-medium mb-4">What we offer:</h4>
                <ul className="space-y-3">
                  {activeService.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-center">
                  <a href="#contact" className="button-primary inline-flex items-center gap-2">
                    Get a Quote
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
