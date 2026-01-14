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
                alt="Rafael Mello Avatar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="flex items-center gap-2 text-primary font-mono text-xs mb-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  SYSTEM_ONLINE
                </div>
                <h3 className="text-2xl font-bold font-mono">RAFAEL MELLO</h3>
                <p className="text-muted-foreground text-sm">Level 25 • São Paulo, BR</p>
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
              Olá, sou um desenvolvedor front-end apaixonado por criar interfaces que desafiam o convencional. 
              Minha jornada começou com a curiosidade de entender como as coisas funcionam por trás da tela, 
              e hoje transformo essa curiosidade em soluções digitais robustas.
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
                  <span className="w-1 h-1 bg-primary" /> JavaScript (ES6+) / TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> React / Next.js / Vue
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> TailwindCSS / Styled Components
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Node.js / Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Git / CI/CD / Docker
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
                  <span className="w-1 h-1 bg-primary" /> Resolução de Problemas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Comunicação Clara
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Aprendizado Contínuo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Trabalho em Equipe
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary" /> Atenção aos Detalhes
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
                <span className="text-xs font-mono text-primary mb-1 block">2023 - PRESENTE</span>
                <h4 className="font-bold">Senior Frontend Developer</h4>
                <p className="text-sm text-muted-foreground">Tech Solutions Inc.</p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-muted rounded-full" />
                <span className="text-xs font-mono text-muted-foreground mb-1 block">2021 - 2023</span>
                <h4 className="font-bold">Full Stack Developer</h4>
                <p className="text-sm text-muted-foreground">Digital Agency X</p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-muted rounded-full" />
                <span className="text-xs font-mono text-muted-foreground mb-1 block">2019 - 2021</span>
                <h4 className="font-bold">Junior Web Developer</h4>
                <p className="text-sm text-muted-foreground">Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
