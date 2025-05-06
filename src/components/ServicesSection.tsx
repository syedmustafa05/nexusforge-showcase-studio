
import { 
  Palette, 
  Code, 
  ShoppingBag, 
  Globe, 
  Layout, 
  Wrench 
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    title: "Website Design & Development",
    description: "Custom websites built with modern technologies that are responsive, fast, and optimized for all devices.",
    icon: Code,
  },
  {
    title: "WordPress & Shopify Setup",
    description: "Professional setup and customization of WordPress and Shopify sites tailored to your business needs.",
    icon: ShoppingBag,
  },
  {
    title: "Landing Page Creation",
    description: "High-converting landing pages designed to capture leads and convert visitors into customers.",
    icon: Layout,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that prioritizes user experience while maintaining visual appeal and brand identity.",
    icon: Palette,
  },
  {
    title: "Website Maintenance",
    description: "Regular updates, backups, and security checks to keep your website running smoothly and securely.",
    icon: Wrench,
  },
  {
    title: "SEO Optimization",
    description: "On-page optimization to improve visibility in search engines and drive organic traffic to your website.",
    icon: Globe,
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="card-hover border border-gray-200 overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardHeader className="pb-2">
                <div className="h-12 w-12 bg-nexusblue-50 text-nexusblue-700 rounded-lg flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
