export type TipoProjeto = 'academic' | 'personal';

// export interface Projeto {
//   id: string;
//   title: string;
//   type: TipoProjeto;
//   description: string;
//   imgSrc: string;
//   repositorio: string;
//   tecnologias: string[];
//   contribuicao: string;
//   hardskills: string[];
//   softskills: string[];
// }

export interface Projeto {
  id: string;
  title: string;
  type: 'academic' | 'personal';
  description: string;
  imgSrc: string;
  repositorio: string;
  tecnologias: string[];

  contribuicao: {
    resumo: string;
    atividades: string[];
  };

  hardskills: string[];
  softskills: string[];
}

export interface Experiencia {
  id: number;
  data: string;
  empresa: string;
  cargo: string;
  descricao: string;
}

export interface Formacao {
  id: number;
  titulo: string;
  instituicao: string;
  status: string;
}