import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Lightbulb, Target } from "lucide-react";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    {
      icon: Palette,
      title: "Design Visual",
      description: "Criação de identidades visuais únicas e impactantes"
    },
    {
      icon: Lightbulb,
      title: "Estratégia Criativa",
      description: "Desenvolvimento de conceitos inovadores e eficazes"
    },
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Soluções que geram resultados mensuráveis"
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou um designer apaixonado por criar experiências visuais que conectam 
            marcas com pessoas de forma autêntica e memorável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className={`shadow-soft hover:shadow-elegant transition-all duration-500 group ${
                isVisible 
                  ? 'opacity-100 animate-fade-in-up' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};