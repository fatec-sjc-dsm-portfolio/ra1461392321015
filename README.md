# 🚀 Portfólio Profissional & Acadêmico — Single Page Application

> Portfólio desenvolvido como parte dos entregáveis e consolidação da trajetória acadêmica no curso de **Desenvolvimento de Software Multiplataforma (DSM)** na **FATEC São José dos Campos**.

---

## 🛠️ Tecnologias & Stack
Este projeto foi construído utilizando tecnologias modernas de mercado e foco em performance:
* **Framework / Builder:** [Vite](https://vitejs.dev/) + [React](https://react.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Deploy Automatizado:** GitHub Actions & GitHub Pages

---

## 🎯 Sobre o Projeto
Uma aplicação em **Single Page Application (SPA)** estruturada com navegação fluida por âncoras, design responsivo (*Mobile First*) e identidade visual personalizada (Slate & Neon). 

O portfólio destaca:
1. **Resumo Profissional & Carreira:** Visão unificada de atuação como desenvolvedor e educador tecnológico.
2. **Projetos Acadêmicos & Pessoais:** Seção filtrável separando as **APIs e Projetos Integradores da FATEC** (com foco em metodologias ágeis e arquiteturas robustas) de projetos comerciais e pessoais.
3. **Trajetoria & Currículo:** Linha do tempo interativa com experiências profissionais e acadêmicas.
4. **Hobbies & Maker:** Seção humanizada destacando eletrônica com Arduino, paixão por tecnologia e interesses pessoais.

---

## 📂 Arquitetura do Projeto
A estrutura de diretórios foi organizada seguindo padrões de código limpo e separação de responsabilidades:

```text
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes modulares
│   ├── layout/      # Navbar e Footer
│   └── sections/    # Seções da Single Page (Hero, Projetos, Trajetoria, Hobbies, Contato)
├── data/            # Dados estáticos tipados (projetos, currículo)
├── types/           # Interfaces e tipagens TypeScript
├── App.tsx          # Componente raiz organizador das seções
├── main.tsx         # Ponto de entrada do React
└── index.css        # Configurações globais e diretivas do Tailwind