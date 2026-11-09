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
    text: "A dança de salão faz parte da minha vida desde 2010. Tenho um carinho especial pelo West Coast Swing e pelas experiências que vivi em apresentações com o grupo Sette Oitto."
  },
  {
    title: "Cultura Geek",
    icon: <Gem className="w-8 h-8 text-brand-neon" />,
    text: "Gosto muito do universo de fantasia, especialmente O Senhor dos Anéis. É uma obra que tem um significado especial para mim — tanto que minha aliança de casamento faz referência ao Um Anel."
  },
  {
    title: "Games",
    icon: <Gamepad2 className="w-8 h-8 text-brand-neon" />,
    text: "Gosto de jogos que oferecem mundos para explorar, histórias envolventes e desafios. Entre os títulos que fazem parte dos meus momentos de lazer estão Diablo IV e Final Fantasy XIV."
  },
  {
    title: "Rock & J-Rock",
    icon: <Flame className="w-8 h-8 text-brand-neon" />,
    text: "Minha playlist passa por diferentes vertentes do rock, de System of a Down e Slipknot a Blink-182. Também gosto de J-Rock e tenho uma lembrança especial de ter assistido a um show do The Gazette."
  },
  {
    title: "Animes & Mecha",
    icon: <Bot className="w-8 h-8 text-brand-neon" />,
    text: "Animes fazem parte dos meus interesses há bastante tempo. One Piece, Code Geass e Gundam Wing estão entre as obras que acompanho ou que marcaram minha relação com esse universo."
  },
  {
    title: "Mangás & Manhwas",
    icon: <BookOpen className="w-8 h-8 text-brand-neon" />,
    text: "Também gosto de acompanhar histórias por meio de mangás, manhwas e manhuas. Tenho uma preferência especial pelo gênero Isekai, mas estou sempre aberto a conhecer novas histórias."
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