import { Layout } from "@/components/Layout";
import { GlitchText } from "@/components/GlitchText";
import { Button } from "@/components/ui/button";
import { Check, Code, Rocket, Zap } from "lucide-react";

const services = [
  {
    title: "LANDING PAGE (FILES)",
    price: "R$ 800",
    description: "Entrega ágil de arquivos, sem publicação. Ideal para quem já possui equipe técnica.",
    icon: Code,
    features: [
      "Arquivos HTML, CSS, JS prontos",
      "Imagens e fontes otimizadas",
      "Sem publicação online",
      "Entrega via e-mail ou drive",
      "Código limpo e documentado"
    ]
  },
  {
    title: "LANDING PAGE STANDARD",
    price: "R$ 1.500",
    description: "Criação + publicação em https registrado. Solução completa para pequenos negócios.",
    icon: Rocket,
    featured: true,
    features: [
      "Tudo do plano Files",
      "Página única responsiva",
      "Otimização básica de SEO",
      "Publicação em servidor",
      "Configuração de domínio",
      "Formulário de contato básico"
    ]
  },
  {
    title: "LANDING PAGE DELUXE",
    price: "R$ 2.500",
    description: "Solução otimizada para conversão e performance máxima. Para campanhas profissionais.",
    icon: Zap,
    features: [
      "Tudo do plano Standard",
      "Até 3 páginas internas",
      "Copywriting estratégico",
      "SEO Avançado + Analytics",
      "Integração com CRM/Pixel",
      "Sessão extra (Blog/FAQ)"
    ]
  }
];

export default function Services() {
  return (
    <Layout>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <GlitchText text="SOLUÇÕES_DIGITAIS" />
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Escolha o pacote ideal para transformar sua presença digital. 
          Transparência total, sem custos ocultos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col bg-card border p-8 transition-all duration-300 hover:-translate-y-2 ${
              service.featured 
                ? "border-primary shadow-[0_0_30px_-10px_var(--primary)] z-10 md:scale-105" 
                : "border-border hover:border-primary/50"
            }`}
          >
            {service.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold font-mono uppercase tracking-wider">
                Recomendado
              </div>
            )}

            <div className="mb-6">
              <service.icon className={`w-12 h-12 mb-4 ${service.featured ? "text-primary" : "text-muted-foreground"}`} />
              <h3 className="text-xl font-bold font-mono mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground min-h-[60px]">{service.description}</p>
            </div>

            <div className="mb-8">
              <span className="text-3xl font-bold">{service.price}</span>
              <span className="text-muted-foreground text-sm"> /projeto</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className={`w-full font-mono h-12 ${
                service.featured 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "variant-outline border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              }`}
            >
              CONTRATAR_AGORA
            </Button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
