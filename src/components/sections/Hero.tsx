import { ArrowRight, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Efeito de brilho de fundo opcional (glow sutil) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-brand-neon/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        
        {/* Badge de status / Papel atual */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card border border-brand-neon/20 text-brand-neon text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
          Desenvolvedor Full-Stack & Educador Tecnológico • FATEC SJC
        </div>

        {/* Título Principal (Mobile First: fonte menor no mobile, maior no desktop) */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-white tracking-tight leading-tight">
          Transformando lógica em <span className="text-brand-neon">soluções reais</span>.
        </h1>

        {/* Descrição / Resumo de Carreira */}
        <p className="font-body text-base sm:text-lg lg:text-xl text-brand-text max-w-2xl mx-auto leading-relaxed">
          Estudante de Desenvolvimento de Software Multiplataforma, criando aplicações escaláveis, sistemas offline-first e projetos com forte impacto acadêmico e social.
        </p>

        {/* Botões de Ação (CTAs) - Empilhados no mobile, lado a lado no tablet/desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projetos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-neon text-brand-dark font-heading font-semibold hover:bg-brand-neon/90 transition-all shadow-lg shadow-brand-neon/10"
          >
            Ver Projetos
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-card border border-slate-700 text-brand-white font-heading font-medium hover:border-brand-neon/50 transition-all"
          >
            <FileText className="w-4 h-4 text-brand-neon" />
            Entre em Contato
          </a>
        </div>

        {/* Links Sociais Rápidos */}
        <div className="flex items-center justify-center gap-6 pt-6 text-slate-400">
          <a 
            href="https://github.com/fatec-sjc-dsm-portfolio/ra1461392321015" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-neon transition-colors p-2"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-neon transition-colors p-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Hero;