import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";

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
      </main>
    </div>
  );
}
