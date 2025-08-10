import { HeroSection } from "@/components/HeroSection";
import { ProjectCard } from "@/components/ProjectCard";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ProjectsBackgroundPath } from "@/components/AnimatedPath";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Index = () => {
  const projects = [
    {
      title: "Identidade Visual Moderna",
      description: "Desenvolvimento completo de marca para startup de tecnologia, incluindo logo, paleta de cores, tipografia e aplicações em diversos materiais.",
      image: project1,
      category: "Branding"
    },
    {
      title: "Design de Interface Web",
      description: "Criação de interface moderna e responsiva para plataforma de e-commerce, focada na experiência do usuário e conversão.",
      image: project2,
      category: "UI/UX Design"
    },
    {
      title: "Design Editorial",
      description: "Projeto editorial para revista de arquitetura, com foco em tipografia elegante e layout que valoriza o conteúdo visual.",
      image: project3,
      category: "Editorial"
    },
    {
      title: "Packaging Premium",
      description: "Design de embalagem para linha de cosméticos premium, combinando elegância, sustentabilidade e diferenciação no ponto de venda.",
      image: project4,
      category: "Packaging"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background connecting path */}
        <ProjectsBackgroundPath />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, cada um contando uma história única através do design.
            </p>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-foreground text-white text-center">
        <p className="opacity-80">
          © 2024 Designer Criativo. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
