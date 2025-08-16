import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import profilePic from "@/assets/profilepic.png";

export const HeroSection = () => {

  function openBehance() {
    window.open('https://www.behance.net/lucasfrizero1', '_blank');
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 items-center text-center text-white px-6 max-w-4xl mx-auto">
        <img src={profilePic} className="mx-auto w-[160px] h-[160px] rounded-full bg-white/10 animate-float border-2 border-white p-1 " />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Lucas Frizero
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Transformando ideias em experiências visuais únicas e memoráveis
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button onClick={openBehance} size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 px-8 py-6 text-lg">
            Ver Projetos
          </Button>
          <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10 px-8 py-6 text-lg">
            Contato
          </Button>
        </div>
      </div>
    
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};