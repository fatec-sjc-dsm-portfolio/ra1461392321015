import { experiencias, formacoes, idiomas } from '@/data/curriculo';
import { Briefcase, GraduationCap, Globe } from 'lucide-react';

export function Trajetoria() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Cabeçalho da Seção */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-white">
          Trajetória & <span className="text-brand-neon">Formação</span>
        </h2>
        <p className="font-body text-brand-text max-w-xl mx-auto text-sm sm:text-base">
          Minha jornada profissional como educador tecnológico e desenvolvedor, unida à base acadêmica sólida na FATEC.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Coluna 1: Experiência Profissional */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <div className="p-2 rounded-lg bg-brand-card text-brand-neon">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-brand-white">
              Experiência Profissional
            </h3>
          </div>

          <div className="space-y-6 relative pl-6 border-l border-slate-800">
            {experiencias.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Indicador / Ponto na linha */}
                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-card border-2 border-brand-neon group-hover:bg-brand-neon transition-colors" />

                <div className="p-5 rounded-xl bg-brand-card/50 border border-slate-800/80 hover:border-brand-neon/30 transition-all space-y-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-dark text-brand-neon border border-brand-neon/20">
                    {exp.data}
                  </span>
                  
                  <h4 className="font-heading text-lg font-bold text-brand-white pt-1">
                    {exp.cargo} <span className="text-brand-text font-normal">@ {exp.empresa}</span>
                  </h4>
                  
                  <p className="font-body text-sm text-brand-text leading-relaxed">
                    {exp.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna 2: Formação Acadêmica & Idiomas */}
        <div className="space-y-8">
          
          {/* Bloco Formação */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="p-2 rounded-lg bg-brand-card text-brand-neon">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-white">
                Formação Acadêmica
              </h3>
            </div>

            <div className="space-y-4 relative pl-6 border-l border-slate-800">
              {formacoes.map((form) => (
                <div key={form.id} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-card border-2 border-brand-neon group-hover:bg-brand-neon transition-colors" />

                  <div className="p-4 rounded-xl bg-brand-card/50 border border-slate-800/80 hover:border-brand-neon/30 transition-all flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-brand-white">
                        {form.titulo}
                      </h4>
                      <p className="font-body text-sm text-brand-text">
                        {form.instituicao}
                      </p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-brand-dark text-brand-neon/90 border border-brand-neon/10">
                      {form.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco Idiomas */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
              <div className="p-2 rounded-lg bg-brand-card text-brand-neon">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-white">
                Idiomas
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {idiomas.map((idioma, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-brand-card border border-slate-800 text-sm font-body text-brand-text"
                >
                  {idioma}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Trajetoria;