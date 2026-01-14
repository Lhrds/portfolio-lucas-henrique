import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/GlitchText";
import { Link } from "wouter";
import { Github, Linkedin, Instagram, ArrowRight, Code2, Terminal, Cpu } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex flex-col justify-center items-start gap-8 max-w-4xl">
        <div className="flex items-center gap-2 text-primary font-mono text-sm md:text-base animate-in slide-in-from-left-10 duration-700">
          <span className="w-2 h-2 bg-primary animate-pulse" />
          <span>OPEN_TO_WORK = TRUE</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            <GlitchText text="RAFAEL" /> <br />
            <span className="text-muted-foreground">MELLO</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-primary mt-4 flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            FULL_STACK_DEVELOPER
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed border-l-2 border-primary/50 pl-6">
          Desenvolvedor focado em criar experiências digitais imersivas e funcionais.
          Especialista em transformar código complexo em interfaces intuitivas.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-lg h-14 px-8 border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-300 group">
              INICIAR_PROJETO
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link href="/projects">
            <Button size="lg" variant="outline" className="font-mono text-lg h-14 px-8 border-2 hover:bg-secondary/50">
              VER_PORTFOLIO
            </Button>
          </Link>
        </div>

        <div className="flex gap-6 mt-12 pt-8 border-t border-border w-full max-w-md">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      </section>

      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6 hover:border-primary transition-colors group">
          <Code2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-2 font-mono">FRONT-END</h3>
          <p className="text-muted-foreground text-sm">React, TypeScript, TailwindCSS, Next.js. Interfaces modernas e responsivas.</p>
        </div>
        <div className="bg-card border border-border p-6 hover:border-primary transition-colors group">
          <Terminal className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-2 font-mono">BACK-END</h3>
          <p className="text-muted-foreground text-sm">Node.js, Python, PostgreSQL, APIs RESTful. Sistemas robustos e escaláveis.</p>
        </div>
        <div className="bg-card border border-border p-6 hover:border-primary transition-colors group">
          <Cpu className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold mb-2 font-mono">PERFORMANCE</h3>
          <p className="text-muted-foreground text-sm">SEO, Otimização de carregamento, Acessibilidade. Foco na experiência do usuário.</p>
        </div>
      </section>
    </Layout>
  );
}
