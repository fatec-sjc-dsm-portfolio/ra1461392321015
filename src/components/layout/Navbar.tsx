import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Links que apontam para as seções (IDs) definidas no App.tsx
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Fecha o menu mobile ao clicar em um link
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/80 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Nome do Desenvolvedor */}
        <a 
          href="#inicio" 
          className="flex items-center gap-2 font-heading text-lg font-bold text-brand-white hover:text-brand-neon transition-colors"
        >
          <div className="p-1.5 rounded-lg bg-brand-card text-brand-neon border border-brand-neon/20">
            <Code2 className="w-5 h-5" />
          </div>
          <span>Claudio Diniz<span className="text-brand-neon">.dev</span></span>
        </a>

        {/* Navegação Desktop (visível a partir de md: / 768px) */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-lg font-body text-sm font-medium text-brand-text hover:text-brand-white hover:bg-slate-800/50 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão do Menu Hambúrguer (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-brand-text hover:text-brand-white hover:bg-slate-800 focus:outline-none"
          aria-label="Alternar Menu de Navegação"
        >
          {isOpen ? <X className="w-6 h-6 text-brand-neon" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Painel do Menu Mobile (Expansível) */}
      {isOpen && (
        <div className="md:hidden bg-brand-card/95 backdrop-blur-lg border-b border-slate-800 animate-fade-in">
          <nav className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2.5 rounded-lg font-heading text-base font-medium text-brand-text hover:text-brand-neon hover:bg-slate-800/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;