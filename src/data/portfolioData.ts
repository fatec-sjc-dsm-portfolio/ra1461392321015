import { type Projeto } from '@/types/portfolio';

export const PROJETOS_DADOS: Projeto[] = [
  {
    id: 'api-1',
    title: 'Rede de Apoio para Pacientes Renais',
    type: 'academic',
    description: 'Projeto acadêmico desenvolvido com o objetivo de criar uma plataforma digital de apoio a pacientes com doença renal crônica, facilitando o acesso a informações e recursos para pacientes e acompanhantes. O desenvolvimento foi conduzido utilizando a metodologia ágil Scrum, com organização das atividades em sprints e entregas incrementais.',
    imgSrc: '/assets/projetos/api1.png', 
    repositorio: 'https://github.com/TeamHiveAPI/API-2023.2',
    tecnologias: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    contribuicao: {
  resumo: 'Atuei como desenvolvedor, participando também do planejamento e da organização das atividades da equipe.',

  atividades: [
    'Responsividade: desenvolvimento e adaptação das interfaces para diferentes dispositivos.',
    'Visualização de dados: criação de gráficos utilizando Chart.js.',
    'Refatoração de CSS: centralização de estilos duplicados.',
    'Planejamento ágil: participação na elaboração de tarefas e Sprint Backlogs.'
  ]
},
    hardskills: ["Desenvolvimento de interfaces responsivas",
    "Visualização de dados com Chart.js",
    "Refatoração e organização de CSS",
    "Desenvolvimento web com Python e Flask"],
    softskills: ["Colaboração e trabalho em equipe",
    "Comunicação interpessoal",
    "Planejamento e organização",
    "Resolução de problemas"],
  },
 {
  id: 'api-2',
  title: 'Sistema Service Desk',
  type: 'academic',

  description:
    'Projeto Integrador desenvolvido com o objetivo de construir uma solução para gestão de chamados de serviços, contemplando funcionalidades de cadastro, abertura e acompanhamento de solicitações, além do gerenciamento de SLA (Acordo de Nível de Serviço). A plataforma busca otimizar o planejamento, o controle e o acompanhamento dos atendimentos, considerando diferentes níveis de acesso e uma experiência de uso intuitiva.',

  imgSrc: '/assets/projetos/api2.png',

  repositorio:
    'https://github.com/Sync-FATEC/API-2024.1-2SEM',

  tecnologias: ['React', 'TypeScript', 'Node.js', 'MySQL'],

  contribuicao: {
    resumo:
      'Atuei exclusivamente no desenvolvimento Front-end, sendo responsável pela estruturação inicial das interfaces e pela padronização visual do sistema. Também participei da integração com o Back-end, conectando as interfaces aos serviços disponibilizados pela API.',

    atividades: [
      'Estruturação das páginas: criação dos templates e estruturas-base, estabelecendo um padrão para o desenvolvimento das interfaces.',

      'Componentização: desenvolvimento de componentes reutilizáveis para diferentes partes do sistema, reduzindo duplicações e facilitando a manutenção.',

      'Integração Front-end e Back-end: configuração e utilização das rotas da API, conectando as interfaces aos serviços do sistema e validando o funcionamento das funcionalidades integradas.',

      'Padronização das interfaces: organização dos elementos visuais para manter consistência entre as diferentes páginas da aplicação.'
    ]
  },

  hardskills: [
    'Arquitetura de componentes React',
    'Desenvolvimento com TypeScript',
    'Componentização e reutilização de código',
    'Integração com APIs REST'
  ],

  softskills: [
    'Trabalho em equipe',
    'Organização e planejamento',
    'Aprendizado de novas tecnologias',
    'Colaboração entre equipes'
  ]
},
  {
  id: 'api-3',
  title: 'Sistema de Transparência FAPG',
  type: 'academic',
  description: 'Projeto Integrador desenvolvido com o objetivo de criar um portal de transparência para a Fundação de Apoio à Pesquisa de Pós-Graduandos (FAPG). A plataforma permite a inserção e consulta de projetos, buscas avançadas por meio de filtros e visualização de estatísticas em gráficos interativos, promovendo o acesso transparente e facilitado às informações públicas.',
  imgSrc: '/assets/projetos/api3.png',
  repositorio: 'https://github.com/Sync-FATEC/API-2024.2-3SEM',
  tecnologias: ['React', 'TypeScript', 'TailwindCSS', 'Java'],

  contribuicao: {
    resumo: 'Atuei no desenvolvimento Full Stack, sendo responsável pela responsividade das interfaces e pela implementação dos filtros de busca no Back-end, além da integração entre os serviços desenvolvidos em Java e o Front-end da aplicação.',
    atividades: [
      'Responsividade: adaptação das interfaces para diferentes tamanhos de tela e dispositivos, proporcionando uma experiência de uso consistente.',
      'Desenvolvimento Back-end: implementação da lógica de filtros de busca utilizando Java, permitindo consultas mais específicas aos projetos cadastrados.',
      'Integração Front-end e Back-end: conexão das interfaces desenvolvidas em React com os serviços disponibilizados pelo Back-end, garantindo o funcionamento dos filtros de pesquisa.',
      'Desenvolvimento Front-end: implementação e ajustes das interfaces utilizando React, TypeScript e TailwindCSS.'
    ]
  },

  hardskills: [
    'Desenvolvimento de interfaces responsivas',
    'Implementação de filtros e consultas de dados',
    'Integração entre Front-end e Back-end',
    'Desenvolvimento de funcionalidades Full Stack'
  ],

  softskills: [
    'Trabalho em equipe',
    'Resolução de problemas',
    'Organização e planejamento',
    'Adaptabilidade e aprendizado contínuo'
  ],
},

  {
  id: 'api-5',
  title: 'PrecedentIA — IA Jurídica',
  type: 'academic',
  description: 'Projeto Integrador desenvolvido em parceria com a Xertica.ai para solucionar desafios relacionados à sobrecarga dos fluxos de trabalho jurídicos. O PrecedentIA utiliza Inteligência Artificial Generativa para automatizar a triagem de documentos e auxiliar na busca e análise de precedentes jurídicos, sugerindo fundamentos relevantes para apoiar a atividade jurídica.',

  imgSrc: '/assets/projetos/precedentia.png',
  repositorio: 'https://github.com/fatec-sjc-dsm-portfolio/ra1461392321015',

  tecnologias: [
    'Flutter',
    'Dart',
    'Python',
    'FastAPI',
    'OpenAI',
    'Qdrant',
    'Docker',
    'OCI'
  ],

  contribuicao: {
    resumo: 'Atuei na liderança técnica do desenvolvimento Front-end mobile, participando desde o levantamento de requisitos até a estruturação e implementação da aplicação. Fui responsável pela definição da arquitetura do Front-end, criação dos templates-base e desenvolvimento das interfaces em Flutter, além da integração com as APIs do Back-end.',

    atividades: [
      'Levantamento de requisitos: participação ativa na identificação das necessidades do projeto e compreensão das regras de negócio junto à equipe.',
      'Arquitetura mobile: definição e organização da estrutura do Front-end, estabelecendo uma base para o desenvolvimento e a manutenção da aplicação.',
      'Templates e interfaces: criação dos templates-base e desenvolvimento das interfaces mobile utilizando Flutter e Dart.',
      'Integração com APIs: implementação da comunicação entre a aplicação mobile e os serviços disponibilizados pelo Back-end.',
      'Alinhamento técnico: participação nas cerimônias ágeis e reuniões de alinhamento, colaborando com a equipe para manter a integração entre as diferentes partes da solução.'
    ]
  },

  hardskills: [
    'Arquitetura de aplicações mobile',
    'Desenvolvimento de interfaces mobile',
    'Componentização e organização de código',
    'Integração e consumo de APIs REST',
    'Levantamento e análise de requisitos'
  ],

  softskills: [
    'Liderança técnica',
    'Visão sistêmica',
    'Comunicação interpessoal',
    'Colaboração multidisciplinar',
    'Organização e planejamento',
    'Adaptabilidade'
  ],
},
{
  id: 'personal-2',
  title: 'SmartPanel — Gerenciador de Formulários Dinâmicos',
  type: 'personal',
  description: 'Aplicação desenvolvida inicialmente como projeto acadêmico, com o objetivo de facilitar a criação, organização e gerenciamento de formulários dinâmicos para coleta de dados em projetos públicos ou privados. A solução foi projetada para utilização em atividades de campo, considerando cenários com conectividade instável. Atualmente, o projeto está em evolução, com perspectiva de comercialização e lançamento futuro.',

  imgSrc: '/assets/projetos/smartpanel.png',
  repositorio: 'SEU_LINK_DO_REPOSITORIO',

  tecnologias: [
    'Python',
    'FastAPI',
    'PostgreSQL',
    'React Native',
    'TypeScript',
    'SQLite'
  ],

  contribuicao: {
    resumo: 'Atuei no desenvolvimento da solução, com foco na arquitetura Offline-first e na comunicação entre a aplicação mobile e o Back-end. Fui responsável pela implementação da persistência local utilizando SQLite e da lógica de sincronização dos dados com o PostgreSQL por meio de uma API desenvolvida com FastAPI, permitindo a continuidade das operações mesmo em ambientes sem conexão com a internet.',

    atividades: [
      'Arquitetura Offline-first: estruturação da aplicação para permitir a utilização dos formulários e o armazenamento de informações localmente, mesmo sem conexão com a internet.',
      'Persistência local: implementação do armazenamento de dados utilizando SQLite na aplicação mobile.',
      'Sincronização de dados: desenvolvimento da lógica de sincronização entre o banco local SQLite e o PostgreSQL, utilizando os serviços disponibilizados pela API.',
      'Desenvolvimento Back-end: implementação de serviços e endpoints com FastAPI para comunicação e persistência dos dados.',
      'Integração mobile e Back-end: implementação da comunicação entre a aplicação React Native e a API, contemplando o fluxo de envio e atualização das informações.'
    ]
  },

  hardskills: [
    'Arquitetura de aplicações Offline-first',
    'Persistência e sincronização de dados',
    'Modelagem e gerenciamento de bancos de dados',
    'Desenvolvimento de APIs REST',
    'Desenvolvimento de aplicações mobile',
    'Integração entre sistemas'
  ],

  softskills: [
    'Visão de produto',
    'Autonomia e proatividade',
    'Organização e planejamento',
    'Negociação e relacionamento com clientes',
    'Resolução de problemas',
    'Empreendedorismo'
  ],
},
{
  id: 'personal-1',
  title: 'Website Institucional — Escola de Capoeira Benaias',
  type: 'personal',
  description: 'Website institucional desenvolvido para a Escola de Capoeira Benaias, com o objetivo de modernizar sua presença digital, fortalecer a divulgação do trabalho desenvolvido pela instituição e facilitar o acesso de novos alunos a informações sobre modalidades, treinos, eventos, projetos e a história da escola. O projeto está em evolução contínua, recebendo melhorias de interface, conteúdo e funcionalidades.',

  imgSrc: '/assets/projetos/benaias.png',
  repositorio: 'https://ceecbenaias.com.br/',

  tecnologias: [
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
    
  ],

  contribuicao: {
    resumo: 'Responsável por todo o ciclo de desenvolvimento do projeto, desde o levantamento inicial das necessidades junto ao mestre de capoeira até a implementação, publicação e evolução contínua do website. Atuo na definição da estrutura, desenvolvimento das interfaces, organização dos conteúdos e otimização da presença digital da instituição.',

    atividades: [
      'Levantamento de requisitos: realização de reuniões de briefing com o responsável pela escola para compreender suas necessidades, objetivos e identidade cultural.',
      'UI Design: planejamento e desenvolvimento da identidade visual e das interfaces, buscando transmitir a essência da capoeira e da instituição.',
      'Desenvolvimento Front-end: implementação das páginas e componentes utilizando Next.js, React, TypeScript e TailwindCSS.',
      'Responsividade: adaptação das interfaces para diferentes dispositivos, proporcionando uma experiência consistente em celulares, tablets e computadores.',
      'Publicação e infraestrutura: configuração do ambiente de hospedagem, publicação da aplicação e configuração de domínio.',
      'SEO e desempenho: implementação de práticas de otimização para mecanismos de busca e melhoria da experiência de navegação.',
      'Evolução contínua: manutenção, ajustes e implementação gradual de melhorias visuais e funcionais conforme as necessidades do projeto.'
    ]
  },

  hardskills: [
    'Desenvolvimento de aplicações web',
    'Arquitetura de interfaces e componentes',
    'Desenvolvimento de interfaces responsivas',
    'Otimização para mecanismos de busca (SEO)',
    'Deploy e configuração de domínio',
    'Otimização de desempenho'
  ],

  softskills: [
    'Gestão e relacionamento com clientes',
    'Comunicação interpessoal',
    'Autonomia e proatividade',
    'Organização e planejamento',
    'Criatividade e resolução de problemas',
    'Aprendizado contínuo'
  ],
},
];