import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  reverse?: boolean;
}

export const ProjectCard = ({ title, description, image, category, reverse = false }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 transition-all duration-700 relative ${
        isVisible 
          ? `opacity-100 ${reverse ? 'animate-fade-in-left' : 'animate-fade-in-right'}` 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <Card className="overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500 group">
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ExternalLink className="mr-2" size={20} />
                  Ver Projeto
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="inline-block px-4 py-2 bg-gradient-accent rounded-full text-primary font-medium text-sm">
          {category}
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
          {title}
        </h3>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex gap-3">
          <Button className="bg-gradient-primary text-white hover:opacity-90">
            Ver Detalhes
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Processo
          </Button>
        </div>
      </div>
    </div>
  );
};