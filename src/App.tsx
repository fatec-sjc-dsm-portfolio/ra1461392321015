import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Projetos } from '@/components/sections/Projetos';
import { Trajetoria } from '@/components/sections/Trajetoria';
import { Hobbies } from '@/components/sections/Hobbies';
import { Contato } from '@/components/sections/Contato';
import { Footer } from '@/components/layout/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-body selection:bg-brand-neon selection:text-brand-dark flex flex-col">
      {/* Menu de navegação fixo com links para as âncoras */}
      <Navbar />

      {/* Conteúdo principal da Single Page */}
      <main className="flex-grow">
        {/* 1. Início + Resumo de Carreira */}
        <section id="inicio">
          <Hero />
        </section>

        {/* 2. Projetos (Divididos entre Acadêmicos/APIs da FATEC e Pessoais) */}
        <section id="projetos" className="py-20 bg-slate-900/50">
          <Projetos />
        </section>

        {/* 3. Trajetoria / Currículo (Experiência profissional e Formação) */}
        <section id="trajetoria" className="py-20">
          <Trajetoria />
        </section>

        {/* 4. Hobbies (Maker, eletrônica, interesses pessoais) */}
        <section id="hobbies" className="py-20 bg-slate-900/50">
          <Hobbies />
        </section>

        {/* 5. Contato */}
        <section id="contato" className="py-20">
          <Contato />
        </section>
      </main>

      {/* Rodapé institucional */}
      <Footer />
    </div>
  );
}

export default App;