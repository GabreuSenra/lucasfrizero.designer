import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Pronto para dar vida ao seu projeto? Entre em contato e vamos criar algo incrível juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 animate-fade-in-left' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="opacity-90">contato@designer.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="opacity-90">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Localização</h3>
                  <p className="opacity-90">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card 
            className={`bg-white/10 border-white/20 backdrop-blur transition-all duration-700 ${
              isVisible ? 'opacity-100 animate-fade-in-right' : 'opacity-0 translate-x-8'
            }`}
          >
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Seu nome" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                  <Input 
                    type="email" 
                    placeholder="Seu email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
                
                <Input 
                  placeholder="Assunto" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                
                <Textarea 
                  placeholder="Sua mensagem" 
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 py-3"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};