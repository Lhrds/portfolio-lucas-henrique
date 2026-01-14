import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";
import { Github, Linkedin } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Sidebar />
      <main className="pl-16 md:pl-20 min-h-screen relative overflow-hidden">
        {/* Grid Background Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
        
        {/* Content */}
        <div className="relative z-10 container py-8 md:py-12 animate-in fade-in duration-500">
          {children}
        </div>

        {/* Footer with Social Links */}
        <footer className="relative z-10 border-t border-border mt-auto">
          <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-muted-foreground">
              © 2026 LUCAS HENRIQUE. ALL RIGHTS RESERVED.
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Lhrds" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/lucasrezende-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
