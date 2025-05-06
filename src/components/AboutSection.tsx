
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me and my agency</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left opacity-0" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold">Syed Mustafa</h3>
            <p className="text-lg text-muted-foreground">
              I'm a 19-year-old Computer Science student and Web Agency Owner from Lahore, Pakistan.
            </p>
            <p className="text-muted-foreground">
              As the founder of NexusForge Digital, I combine my technical expertise with creative design to deliver 
              digital solutions that truly work for my clients. My approach is focused on creating websites that not 
              only look beautiful but also perform exceptionally well.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in web development and a passion for continuous learning, 
              I stay updated with the latest trends and technologies in the digital landscape.
            </p>
            <Button className="bg-nexusblue-700 hover:bg-nexusblue-800 mt-4">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="animate-slide-in-right opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">NexusForge Digital</h3>
                <p className="text-lg font-display mb-2 text-nexusblue-700">Crafting Digital Experiences That Connect</p>
                <p className="text-muted-foreground">
                  NexusForge Digital is a modern web agency that creates high-performing websites for individuals, 
                  startups, and businesses. We combine creative design, clean code, and strategic thinking to deliver 
                  digital solutions that work.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-1">Located In</h4>
                  <p>Lahore, Pakistan</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p>syedmustafax@gmail.com</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-1">Age</h4>
                  <p>19 Years</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-1">Services</h4>
                  <p>Web Design & Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
