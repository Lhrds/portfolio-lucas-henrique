import { Layout } from "@/components/Layout";
import { GlitchText } from "@/components/GlitchText";
import { Award, Database, Cloud, Code, ShieldCheck, Terminal } from "lucide-react";

const certifications = [
  {
    title: "AWS CLOUD PRACTITIONER",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: Cloud,
    color: "text-orange-400",
    description: "Conhecimento fundamental sobre a plataforma AWS, segurança, arquitetura e modelos de cobrança."
  },
  {
    title: "MYSQL DATABASE",
    issuer: "Prodabel / PBH",
    date: "2024",
    icon: Database,
    color: "text-blue-400",
    description: "Modelagem de dados, consultas complexas SQL e administração de bancos de dados relacionais."
  },
  {
    title: "GITHUB COPILOT",
    issuer: "ENAP",
    date: "2024",
    icon: Terminal,
    color: "text-purple-400",
    description: "Uso avançado de IA para pair programming, geração de código e otimização de fluxo de trabalho."
  },
  {
    title: "GITHUB CODESPACES",
    issuer: "ENAP",
    date: "2024",
    icon: Code,
    color: "text-white",
    description: "Configuração e uso de ambientes de desenvolvimento em nuvem para produtividade remota."
  },
  {
    title: "EXCEL AVANÇADO",
    issuer: "ENAP",
    date: "2023",
    icon: Award,
    color: "text-green-400",
    description: "Análise de dados complexa, macros, dashboards e automação de planilhas."
  },
  {
    title: "ALGORITMOS E LÓGICA",
    issuer: "Udemy",
    date: "2023",
    icon: ShieldCheck,
    color: "text-red-400",
    description: "Fundamentos sólidos de programação, estruturas de dados e resolução de problemas computacionais."
  }
];

export default function Certifications() {
  return (
    <Layout>
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <GlitchText text="KNOWLEDGE_BASE" />
        </h1>
        <p className="text-muted-foreground max-w-2xl border-l-2 border-primary pl-4">
          Minha coleção de "upgrades" e certificações técnicas. Aprendizado contínuo é o núcleo do meu sistema operacional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group relative bg-card border border-border p-6 hover:border-primary transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-border/30 -mr-4 -mt-4 rotate-45 group-hover:bg-primary/20 transition-colors" />
            
            <div className="flex items-start justify-between mb-6">
              <div className={`p-3 rounded-sm bg-secondary/50 ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-8 h-8" />
              </div>
              <span className="font-mono text-xs text-muted-foreground border border-border px-2 py-1 rounded-full">
                {cert.date}
              </span>
            </div>

            <h3 className="text-lg font-bold font-mono mb-1 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <p className="text-xs font-mono text-primary/70 mb-4 uppercase tracking-wider">
              {cert.issuer}
            </p>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {cert.description}
            </p>

            {/* Tech lines decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </Layout>
  );
}
