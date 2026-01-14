import { Layout } from "@/components/Layout";
import { GlitchText } from "@/components/GlitchText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <GlitchText text="INICIAR_CONEXÃO" />
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Tem um projeto em mente ou quer apenas trocar uma ideia sobre tecnologia? 
            Estou sempre aberto a novos desafios e colaborações.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-1">EMAIL</h3>
                <p className="text-lg font-bold">lucasrezende2013@hotmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-1">TELEFONE</h3>
                <p className="text-lg font-bold">+55 31 98949 9376</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-1">LOCALIZAÇÃO</h3>
                <p className="text-lg font-bold">Betim, MG - Brasil</p>
                <p className="text-sm text-muted-foreground">Disponível para trabalho remoto mundial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border p-8 relative">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -mt-1 -ml-1" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary -mt-1 -mr-1" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary -mb-1 -ml-1" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary -mb-1 -mr-1" />

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-mono text-muted-foreground">NOME_COMPLETO</label>
              <Input placeholder="John Doe" className="bg-background border-border focus:border-primary h-12 font-mono" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-muted-foreground">EMAIL_CORPORATIVO</label>
              <Input type="email" placeholder="john@company.com" className="bg-background border-border focus:border-primary h-12 font-mono" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-muted-foreground">MENSAGEM</label>
              <Textarea placeholder="Descreva seu projeto..." className="bg-background border-border focus:border-primary min-h-[150px] font-mono resize-none" />
            </div>

            <Button className="w-full h-14 text-lg font-mono bg-primary text-primary-foreground hover:bg-primary/90 group">
              ENVIAR_MENSAGEM
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
