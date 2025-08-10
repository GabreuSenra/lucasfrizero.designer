import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
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
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Designer
          <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Criativo
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Transformando ideias em experiências visuais únicas e memoráveis
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
            Ver Projetos
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Contato
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};