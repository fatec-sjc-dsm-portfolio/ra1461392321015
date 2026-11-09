import { MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="w-full h-20 border-t border-slate-800 bg-brand-dark/50 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        
        {/* Lado Esquerdo */}
        <div className="text-brand-text/50 font-body text-xs tracking-wider uppercase">
          © {new Date().getFullYear()} Claudio <span className="text-brand-neon/70">Jayme</span>
        </div>

        {/* Lado Direito (Redes Sociais) */}
        <div className="flex items-center gap-2">
          <SocialLink 
            href="https://github.com/fatec-sjc-dsm-portfolio/ra1461392321015" 
            Icon={FaGithub} 
            label="GitHub do Portfólio" 
          />
          <SocialLink 
            href="https://www.linkedin.com/in/claudio-jayme/" 
            Icon={FaLinkedin} 
            label="LinkedIn" 
          />
          <SocialLink 
            href="https://wa.me/5512983198823" 
            Icon={MessageSquare} 
            label="WhatsApp" 
          />
        </div>

      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

function SocialLink({ href, Icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative p-2.5 flex items-center justify-center rounded-lg hover:bg-slate-800/50 transition-all"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-brand-neon/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <Icon className="relative w-5 h-5 text-brand-text/60 group-hover:text-brand-neon group-hover:scale-110 transition-all duration-300 ease-out" />
    </a>
  );
}

export default Footer;