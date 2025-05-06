
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="mb-4">
              <span className="bg-gradient-to-r from-nexusblue-700 to-nexusblue-500 bg-clip-text text-transparent">
                Syed Mustafa
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-display font-medium mb-6">
              Web Agency Owner &<br />Computer Science Student
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Crafting Digital Experiences That Connect. Modern web solutions for individuals, startups, and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-nexusblue-700 hover:bg-nexusblue-800">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-nexusblue-700 text-nexusblue-700 hover:bg-nexusblue-700 hover:text-white">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="bg-gradient-to-tr from-nexusblue-700 to-nexusblue-400 w-48 h-48 md:w-56 md:h-56 rounded-full absolute -z-10 blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="rounded-full overflow-hidden border-4 border-white shadow-xl w-48 h-48 md:w-56 md:h-56">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Digital Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
