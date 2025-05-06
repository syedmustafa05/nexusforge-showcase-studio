
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    message: "Working with Syed was a game-changer for our startup. He delivered a website that perfectly represents our brand and has helped us attract new customers. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Williams",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    message: "NexusForge Digital created a beautiful website for my local business that has significantly increased our online presence. Syed was professional, responsive, and delivered exactly what we needed.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Freelance Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    message: "I needed a portfolio that would showcase my photography work effectively. Syed understood my vision perfectly and created a stunning website that has gotten me many new clients.",
    rating: 5
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Store Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    message: "The Shopify store that NexusForge built for us has transformed our business. Sales have increased by 40% since launch. Syed's attention to detail and user experience expertise made all the difference.",
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What my clients say about my work</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 text-center italic">
                  "{testimonials[currentIndex].message}"
                </p>
                <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                <p className="text-nexusblue-700">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md hover:bg-nexusblue-50"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md hover:bg-nexusblue-50"
              onClick={nextSlide}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  currentIndex === index ? 'bg-nexusblue-700 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
