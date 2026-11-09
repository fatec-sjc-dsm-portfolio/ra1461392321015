import { type Projeto } from '@/types/portfolio';
import { X, Terminal, Cpu, Users, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjetoModalProps {
  projeto: Projeto | null;
  onClose: () => void;
}

export function ProjetoModal({ projeto, onClose }: ProjetoModalProps) {
  if (!projeto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-brand-card border border-slate-700/80 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
        
        {/* Cabeçalho do Modal */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider bg-brand-neon/10 text-brand-neon border border-brand-neon/20">
              {projeto.type === 'academic' ? 'Projeto Integrador FATEC' : 'Projeto Autônomo'}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-white pt-1">
              {projeto.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-brand-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo Principal com mais respiro */}
        <div className="space-y-6 text-sm font-body">
          
          {/* Descrição Geral */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 font-heading font-semibold text-brand-white text-base">
              <BookOpen className="w-4 h-4 text-brand-neon" />
              Descrição Geral
            </h4>
            <p className="text-brand-text leading-relaxed pl-6">
              {projeto.description}
            </p>
          </div>

          {/* Minha Contribuição Técnica (Destaque visual aprimorado) */}
          <div className="space-y-2">
            <h4 className="flex items-center gap-2 font-heading font-semibold text-brand-white text-base">
              <Terminal className="w-4 h-4 text-brand-neon" />
              Minha Contribuição Técnica
            </h4>
            
<div className="bg-brand-dark/70 p-4 sm:p-5 rounded-xl border border-slate-800/80 ml-0 sm:ml-6 space-y-4">

  {/* Resumo da atuação */}
  <p className="text-brand-text leading-relaxed">
    {projeto.contribuicao.resumo}
  </p>

  {/* Atividades desenvolvidas */}
  <ul className="space-y-3">
    {projeto.contribuicao.atividades.map((atividade, i) => {
      const [titulo, ...descricao] = atividade.split(':');

      return (
        <li key={i} className="flex items-start gap-3 text-brand-text leading-relaxed">

          <span className="text-brand-neon mt-0.5 shrink-0">
            ▸
          </span>

          <span className="text-sm">
            <strong className="text-brand-white font-semibold">
              {titulo}:
            </strong>
            {descricao.join(':')}
          </span>

        </li>
      );
    })}
  </ul>

</div>

          </div>

          {/* Grid de Hard & Soft Skills com mais espaço */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Hard Skills */}
            <div className="space-y-3 bg-brand-dark/40 p-4 rounded-xl border border-slate-800/50">
              <h4 className="flex items-center gap-2 font-heading font-semibold text-brand-white">
                <Cpu className="w-4 h-4 text-brand-neon" />
                Hard Skills Aplicadas
              </h4>
              <ul className="space-y-2 text-brand-text">
                {projeto.hardskills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="text-brand-neon mt-1">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="space-y-3 bg-brand-dark/40 p-4 rounded-xl border border-slate-800/50">
              <h4 className="flex items-center gap-2 font-heading font-semibold text-brand-white">
                <Users className="w-4 h-4 text-brand-neon" />
                Soft Skills Demonstradas
              </h4>
              <ul className="space-y-2 text-brand-text">
                {projeto.softskills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="text-brand-neon mt-1">▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Rodapé / Ações */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs sm:text-sm font-heading text-slate-300 hover:text-brand-white transition-colors cursor-pointer"
          >
            Fechar
          </button>
          <a
            href={projeto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-neon text-brand-dark font-heading font-semibold text-xs sm:text-sm hover:bg-brand-neon/90 transition-all shadow-md cursor-pointer"
          >
            <FaGithub className="w-4 h-4" />
            Ver Repositório no GitHub
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjetoModal;