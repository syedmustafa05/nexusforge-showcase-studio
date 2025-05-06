
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web Design", "Development", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "Reeni Portfolio Template",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
    description: "A clean, responsive HTML template for freelancers and developers.",
    link: "https://inversweb.com/product/html/reeni/index.html"
  },
  {
    id: 2,
    title: "E-commerce Shop",
    category: "Development",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=900",
    description: "A modern e-commerce platform with a seamless shopping experience.",
    link: "#"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=900",
    description: "A user-friendly mobile banking application with intuitive interface.",
    link: "#"
  },
  {
    id: 4,
    title: "Travel Blog",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=900",
    description: "A responsive travel blog showcasing adventures around the world.",
    link: "#"
  },
  {
    id: 5,
    title: "Restaurant Website",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=900",
    description: "A full-featured restaurant website with online ordering system.",
    link: "#"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=900",
    description: "A fitness tracking app with progress visualization and workout plans.",
    link: "#"
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);
    
  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">Selected projects showcasing my expertise</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-nexusblue-700 text-white' 
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-nexusblue-700 font-medium">{project.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-nexusblue-700 hover:text-nexusblue-800 font-medium"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-nexusblue-700 text-nexusblue-700 hover:bg-nexusblue-700 hover:text-white"
              onClick={() => setVisibleProjects(prev => prev + 3)}
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
