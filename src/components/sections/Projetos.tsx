import { useState } from 'react';
import { PROJETOS_DADOS } from '@/data/portfolioData';
import { type Projeto, type TipoProjeto } from '@/types/portfolio';
import { GraduationCap, Briefcase, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Projetos() {
  const [filtro, setFiltro] = useState<TipoProjeto | 'todos'>('todos');
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  const projetosFiltrados = filtro === 'todos' 
    ? PROJETOS_DADOS 
    : PROJETOS_DADOS.filter(p => p.type === filtro);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Cabeçalho */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-white">
          Projetos & <span className="text-brand-neon">Entregáveis</span>
        </h2>
        <p className="font-body text-brand-text max-w-2xl mx-auto text-sm sm:text-base">
          Projetos integradores (APIs FATEC) com foco em métodos ágeis e engenharia de software, lado a lado com soluções comerciais e pessoais.
        </p>

        {/* Botões de Filtro (Abas) */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setFiltro('todos')}
            className={`px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all ${
              filtro === 'todos'
                ? 'bg-brand-neon text-brand-dark shadow-md'
                : 'bg-brand-card text-brand-text hover:text-brand-white border border-slate-800'
            }`}
          >
            Todos ({PROJETOS_DADOS.length})
          </button>
          
          <button
            onClick={() => setFiltro('academic')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all ${
              filtro === 'academic'
                ? 'bg-brand-neon text-brand-dark shadow-md'
                : 'bg-brand-card text-brand-text hover:text-brand-white border border-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Acadêmicos (APIs FATEC)
          </button>

          <button
            onClick={() => setFiltro('personal')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all ${
              filtro === 'personal'
                ? 'bg-brand-neon text-brand-dark shadow-md'
                : 'bg-brand-card text-brand-text hover:text-brand-white border border-slate-800'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Pessoais & Comerciais
          </button>
        </div>
      </div>

      {/* Grid de Cards de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetosFiltrados.map((projeto) => (
          <div
            key={projeto.id}
            className="group rounded-xl bg-brand-card border border-slate-800/80 overflow-hidden hover:border-brand-neon/40 transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-4">
              
              {/* Header do Card (Badge de tipo + Título) */}
              <div className="space-y-2">
                <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider ${
                  projeto.type === 'academic'
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {projeto.type === 'academic' ? 'FATEC SJC' : 'Projeto / Freelance'}
                </span>

                <h3 className="font-heading text-xl font-bold text-brand-white group-hover:text-brand-neon transition-colors">
                  {projeto.title}
                </h3>
              </div>

              {/* Descrição curta */}
              <p className="font-body text-sm text-brand-text line-clamp-3 leading-relaxed">
                {projeto.description}
              </p>

              {/* Tecnologias Utilizadas */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {projeto.tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-brand-dark/60 text-xs font-mono text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ações do Card */}
            <div className="p-6 pt-0 border-t border-slate-800/50 flex items-center justify-between mt-4">
              <button
                onClick={() => setProjetoSelecionado(projeto)}
                className="text-xs font-heading font-semibold text-brand-neon hover:underline inline-flex items-center gap-1"
              >
                <Code className="w-3.5 h-3.5" />
                Ver detalhes e contribuição
              </button>

              <a
                href={projeto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-brand-white transition-colors"
                aria-label="Repositório no GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes do Projeto (Para avaliação de TCC) */}
      {projetoSelecionado && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-brand-card border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-brand-neon font-semibold uppercase tracking-wider">
                  {projetoSelecionado.type === 'academic' ? 'Projeto Integrador FATEC' : 'Projeto Autônomo'}
                </span>
                <h3 className="font-heading text-2xl font-bold text-brand-white">
                  {projetoSelecionado.title}
                </h3>
              </div>
              <button
                onClick={() => setProjetoSelecionado(null)}
                className="text-slate-400 hover:text-brand-white text-xl p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm font-body">
              <div>
                <h4 className="font-heading font-semibold text-brand-white mb-1">Descrição Geral:</h4>
                <p className="text-brand-text leading-relaxed">{projetoSelecionado.description}</p>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-brand-white mb-1">Minha Contribuição Técnica:</h4>
                <p className="text-brand-text leading-relaxed bg-brand-dark/50 p-3 rounded-lg border border-slate-800">
                  {projetoSelecionado.contribuicao}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="font-heading font-semibold text-brand-white mb-2">Hard Skills Aplicadas:</h4>
                  <ul className="list-disc list-inside text-brand-text space-y-1">
                    {projetoSelecionado.hardskills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-brand-white mb-2">Soft Skills Demonstradas:</h4>
                  <ul className="list-disc list-inside text-brand-text space-y-1">
                    {projetoSelecionado.softskills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-slate-800 pt-4">
              <a
                href={projetoSelecionado.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-neon text-brand-dark font-heading font-semibold text-sm hover:bg-brand-neon/90 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                Ver no GitHub
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Projetos;