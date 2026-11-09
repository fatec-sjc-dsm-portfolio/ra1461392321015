import { 
  Music, 
  Gamepad2, 
  Bot, 
  BookOpen, 
  Flame, 
  Gem 
} from 'lucide-react';

export function Hobbies() {
  const hobbies = [
    {
      title: "Dança de Salão",
      icon: <Music className="w-8 h-8 text-brand-neon" />,
      text: "Desde 2010 explorando ritmos. Minha paixão é o West Coast Swing, com 11 anos de apresentações no grupo Sette Oitto."
    },
    {
      title: "Cultura Geek",
      icon: <Gem className="w-8 h-8 text-brand-neon" />,
      text: "Fã fervoroso de Senhor dos Anéis. Levo a paixão tão a sério que minha aliança de casamento é o 'One Ring'."
    },
    {
      title: "Gaming",
      icon: <Gamepad2 className="w-8 h-8 text-brand-neon" />,
      text: "Entre a FATEC e o trabalho, sempre há tempo para as masmorras de Diablo IV e a imersão de Final Fantasy XIV."
    },
    {
      title: "Rock & J-Rock",
      icon: <Flame className="w-8 h-8 text-brand-neon" />,
      text: "Do peso de SOAD, Slipknot e Blink-182 ao estilo visual do J-Rock. Já estive no front do show do The Gazette!"
    },
    {
      title: "Animes & Mecha",
      icon: <Bot className="w-8 h-8 text-brand-neon" />,
      text: "Acompanho a jornada de One Piece e a estratégia de Code Geass. Cresci com Gundam Wing e a vibe de SAO."
    },
    {
      title: "Leitura Isekai",
      icon: <BookOpen className="w-8 h-8 text-brand-neon" />,
      text: "Entusiasta de Mangás, Manhwas e Manhuas. O gênero Isekai é meu refúgio favorito para novas perspectivas."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Cabeçalho */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-white uppercase tracking-tight">
          Vida Além do <span className="text-brand-neon">Código</span>
        </h2>
        <div className="h-1 w-20 bg-brand-neon/60 mx-auto rounded-full blur-[0.5px]" />
        <p className="font-body text-brand-text max-w-lg mx-auto text-xs sm:text-sm pt-2">
          Interesses, paixões e universos que alimentam a criatividade no dia a dia.
        </p>
      </div>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            className="group p-6 rounded-xl bg-brand-card border border-slate-800/80 hover:border-brand-neon/40 hover:bg-slate-800/60 transition-all flex flex-col items-center text-center space-y-3"
          >
            {/* Ícone com animação sutil no hover */}
            <div className="p-3 rounded-xl bg-brand-dark/60 border border-slate-800 group-hover:scale-110 group-hover:border-brand-neon/30 transition-transform">
              {hobby.icon}
            </div>
            
            <h3 className="font-heading text-lg font-bold text-brand-white tracking-wide">
              {hobby.title}
            </h3>
            
            <p className="font-body text-brand-text text-xs leading-relaxed">
              {hobby.text}
            </p>
          </div>
        ))}
      </div>

      <footer className="mt-12 text-center text-slate-500 font-body text-[10px] uppercase tracking-[0.3em]">
        Metal, Animes & Technology
      </footer>
    </div>
  );
}

export default Hobbies;