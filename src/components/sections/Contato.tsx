import { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export function Contato() {
  const [copiado, setCopiado] = useState(false);
  const email = "claudiojayme@gmail.com"; 
  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  const contatosDiretos = [
    {
      titulo: "WhatsApp Direct",
      descricao: "Conversa rápida sobre projetos ou oportunidades",
      acao: "Enviar Mensagem",
      href: "https://wa.me/5512983198823",
      icone: <MessageSquare className="w-6 h-6 text-brand-neon" />,
      destaque: true
    },
    {
      titulo: "LinkedIn",
      descricao: "Conecte-se comigo profissionalmente",
      acao: "Ver Perfil",
      href: "https://www.linkedin.com/in/claudio-jayme/",
      icone: <FaLinkedin className="w-6 h-6 text-brand-neon" />,
      destaque: false
    },
    {
      titulo: "GitHub",
      descricao: "Confira meus repositórios e contribuições",
      acao: "Acessar Repositórios",
      href: "https://github.com/fatec-sjc-dsm-portfolio/ra1461392321015",
      icone: <FaGithub className="w-6 h-6 text-brand-neon" />,
      destaque: false
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Cabeçalho */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-white">
          Vamos <span className="text-brand-neon">Conversar?</span>
        </h2>
        <p className="font-body text-brand-text max-w-lg mx-auto text-sm sm:text-base">
          Estou sempre aberto a conexões, oportunidades de desenvolvimento e trocas de conhecimento sobre tecnologia e educação.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card Destaque: E-mail com botão de copiar (Ocupa 1 ou 3 colunas conforme tela) */}
        <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-neon/30 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark text-brand-neon text-xs font-mono border border-brand-neon/20">
              <Mail className="w-3.5 h-3.5" />
              E-mail Institucional / Pessoal
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-brand-white">
              {email}
            </h3>
            <p className="font-body text-xs sm:text-sm text-brand-text">
              Respondo em até 24 horas úteis.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto relative z-10">
            <button
              onClick={copiarEmail}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-dark border border-slate-700 text-brand-text hover:text-brand-white text-xs sm:text-sm font-heading font-medium transition-all"
            >
              {copiado ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-brand-neon" />
                  <span>Copiar E-mail</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-neon text-brand-dark text-xs sm:text-sm font-heading font-semibold hover:bg-brand-neon/90 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
              Escrever E-mail
            </a>
          </div>

        </div>

        {/* Grid de Redes Diretas */}
        {contatosDiretos.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-brand-card border border-slate-800/80 hover:border-brand-neon/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-brand-dark/60 border border-slate-800 group-hover:scale-110 group-hover:border-brand-neon/30 transition-all">
                {item.icone}
              </div>
              <h4 className="font-heading text-lg font-bold text-brand-white group-hover:text-brand-neon transition-colors">
                {item.titulo}
              </h4>
              <p className="font-body text-xs text-brand-text leading-relaxed">
                {item.descricao}
              </p>
            </div>

            <div className="pt-2 flex items-center text-xs font-heading font-semibold text-brand-neon group-hover:translate-x-1 transition-transform">
              {item.acao} →
            </div>
          </a>
        ))}

      </div>
    </div>
  );
}

export default Contato;