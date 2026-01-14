import { Layout } from "@/components/Layout";
import { GlitchText } from "@/components/GlitchText";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-COMMERCE SUNRIO",
    category: "FULL STACK",
    image: "/images/project_ecommerce.png",
    description: "Plataforma completa de e-commerce com painel administrativo, gestão de estoque e pagamentos integrados.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "DASHBOARD ANALYTICS",
    category: "FRONT END",
    image: "/images/project_dashboard.png",
    description: "Dashboard interativo para visualização de dados em tempo real com gráficos complexos e filtros avançados.",
    tech: ["Vue.js", "D3.js", "TailwindCSS"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "LANDING PAGE FIORELLE",
    category: "UI/UX DESIGN",
    image: "/images/project_landing.png",
    description: "Landing page de alta conversão para lançamento de produto, com animações suaves e SEO otimizado.",
    tech: ["Next.js", "Framer Motion", "GSAP"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "PORTAL DO CONTRIBUINTE",
    category: "GOV TECH",
    image: "/images/hero_bg_tech.png",
    description: "Sistema para prefeituras facilitarem o acesso a serviços públicos digitais para os cidadãos.",
    tech: ["Angular", "Java", "Oracle"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <GlitchText text="PROJETOS_SELECIONADOS" />
        </h1>
        <p className="text-muted-foreground max-w-2xl border-l-2 border-primary pl-4">
          Uma coleção de trabalhos recentes que demonstram minhas habilidades em resolver problemas complexos com código limpo e design eficiente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-card border border-border overflow-hidden hover:border-primary transition-colors">
            <div className="aspect-video overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-primary px-3 py-1 text-xs font-mono text-primary">
                {project.category}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono border border-border px-2 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="w-full font-mono group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  VISITAR
                </Button>
                <Button variant="ghost" size="icon" className="border border-border hover:border-primary hover:text-primary">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
