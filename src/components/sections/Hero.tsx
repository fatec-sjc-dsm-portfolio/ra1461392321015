
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "@/assets/images/profile.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Glow de fundo */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2
        w-96 h-96 bg-brand-neon/10 rounded-full blur-3xl
        pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10
        grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]
        items-center gap-12 lg:gap-16">

        {/* Conteúdo */}
        <div className="space-y-6 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-3 py-1.5
            rounded-full bg-brand-card border border-brand-neon/20
            text-brand-neon text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
            EDUCAÇÃO • TECNOLOGIA • DESENVOLVIMENTO CRIATIVO
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl
            font-bold text-brand-white tracking-tight leading-tight">
            Criando possibilidades através da{" "}
            <span className="text-brand-neon">educação</span> e da{" "}
            <span className="text-brand-neon">tecnologia</span>.
          </h1>

          <p className="font-body text-base sm:text-lg
            text-brand-text max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Sou educador e estudante de Desenvolvimento de Software
            Multiplataforma na FATEC São José dos Campos. Minha trajetória
            conecta educação e tecnologia, passando pela produção
            audiovisual, criação de jogos, cultura maker e robótica
            educacional. Acredito na criatividade, na experimentação
            e no pensamento crítico como caminhos para transformar
            ideias em conhecimento e desenvolver soluções que façam
            a diferença.
          </p>

          <div className="flex flex-col sm:flex-row items-center
            justify-center lg:justify-start gap-4 pt-4">

            <a href="#projetos"
              className="w-full sm:w-auto inline-flex items-center
              justify-center gap-2 px-6 py-3 rounded-lg
              bg-brand-neon text-brand-dark font-semibold
              hover:bg-brand-neon/90 transition-all">
              Ver Projetos
              <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#contato"
              className="w-full sm:w-auto inline-flex items-center
              justify-center gap-2 px-6 py-3 rounded-lg
              bg-brand-card border border-slate-700
              text-brand-white hover:border-brand-neon/50
              transition-all">
              <FileText className="w-4 h-4 text-brand-neon" />
              Entre em Contato
            </a>
          </div>

          <div className="flex items-center justify-center
            lg:justify-start gap-6 pt-4 text-slate-400">
            <a href="https://github.com/fatec-sjc-dsm-portfolio/ra1461392321015"
              target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-brand-neon transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>

            <a href="https://linkedin.com"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-brand-neon transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Fotografia */}
<div className="relative flex justify-center lg:justify-end order-first lg:order-last">

  <div className="absolute inset-0 m-auto w-64 h-64 sm:w-80 sm:h-80 bg-brand-neon/10 blur-3xl rounded-full" />

  <div className="relative w-64 sm:w-80 lg:w-[390px] aspect-[4/5] rounded-2xl overflow-hidden border border-brand-neon/30 shadow-2xl shadow-brand-neon/10">

    <img
      src={profile}
      alt="Claudio Jayme - Educador e estudante de Desenvolvimento de Software"
      loading="eager" 
      className="absolute inset-0 w-full h-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none" />
  </div>
</div>

      </div>
    </section>
  );
}

export default Hero;
