import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, FolderGit2, Briefcase, Mail, Terminal, User } from "lucide-react";

export function Sidebar() {
  const [location] = useLocation();

  const links = [
    { href: "/", icon: Home, label: "HOME" },
    { href: "/about", icon: User, label: "SOBRE" },
    { href: "/projects", icon: FolderGit2, label: "PROJETOS" },
    { href: "/services", icon: Briefcase, label: "SERVIÇOS" },
    { href: "/contact", icon: Mail, label: "CONTATO" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-16 md:w-20 bg-card border-r border-border flex flex-col items-center py-8 z-50">
      <div className="mb-12">
        <Terminal className="w-8 h-8 text-primary animate-pulse" />
      </div>

      <nav className="flex-1 flex flex-col gap-8 w-full">
        {links.map((link) => {
          const isActive = location === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "relative flex flex-col items-center justify-center gap-1 w-full py-2 cursor-pointer group transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_var(--primary)]" />
                )}
                <link.icon className="w-6 h-6" />
                <span className="text-[10px] font-mono hidden md:block opacity-0 group-hover:opacity-100 transition-opacity absolute left-16 bg-card border border-border px-2 py-1 whitespace-nowrap z-50">
                  {link.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="text-[10px] font-mono text-muted-foreground rotate-180 writing-vertical-rl">
        V1.0.0 // 2026
      </div>
    </aside>
  );
}
