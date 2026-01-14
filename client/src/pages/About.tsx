import { Layout } from "@/components/Layout";
import { GlitchText } from "@/components/GlitchText";
import { Terminal, Code, Cpu, Globe } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-card border border-border overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="/images/avatar_cyberpunk.png" 
                alt="Lucas Henrique Avatar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 text-primary font-mono text-xs mb-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  SYSTEM_ONLINE
                </div>
                <h3 className="text-2xl font-bold font-mono">LUCAS HENRIQUE</h3>
                <p className="text-muted-foreground text-sm">Level 26 • Betim, MG</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GlitchText text="SOBRE_O_DEV" />
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em análise de dados com transição sólida para o desenvolvimento web. 
              Focado em criar soluções eficientes com código limpo e tecnologias modernas. 
              Apaixonado por resolver problemas complexos através da tecnologia e inteligência artificial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-mono flex items-center gap-2 text-primary">
                <Code className="w-5 h-5" />
                HARD_SKILLS
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Python / Pandas / SQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> JavaScript / React / HTML5 / CSS3
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Git / GitHub / Codespaces
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> MySQL / Database Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> AI Tools (Copilot, ChatGPT, Manus)
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold font-mono flex items-center gap-2 text-primary">
                <Cpu className="w-5 h-5" />
                SOFT_SKILLS
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Análise de Dados
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Code Review & Clean Code
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Metodologias Ágeis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Documentação Técnica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Resolução de Problemas
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-bold font-mono flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5" />
              EXPERIÊNCIA
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-border">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-primary rounded-full" />
                <span className="text-xs font-mono text-primary mb-1 block">2019 - PRESENTE</span>
                <h4 className="font-bold">Assistente de Contabilidade</h4>
                <p className="text-sm text-muted-foreground">GT Serviços Contábeis</p>
                <p className="text-xs text-muted-foreground mt-1">Análise estratégica de dados financeiros e automação de fluxos.</p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-muted rounded-full" />
                <span className="text-xs font-mono text-muted-foreground mb-1 block">2015 - 2018</span>
                <h4 className="font-bold">Auxiliar de Escritório</h4>
                <p className="text-sm text-muted-foreground">Klabin S.A</p>
                <p className="text-xs text-muted-foreground mt-1">Gestão de infraestrutura documental e suporte administrativo.</p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-muted rounded-full" />
                <span className="text-xs font-mono text-muted-foreground mb-1 block">2023 - 2025</span>
                <h4 className="font-bold">Formação: Análise e Des. de Sistemas</h4>
                <p className="text-sm text-muted-foreground">Proz Educação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
