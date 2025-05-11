export type ProjectModel = [
  {
    id: string;
    title: string;
    short_desc: string;
    long_desc: string;
    start_date: string;
    end_date: string | null;
    url: string;
    status: 'Concluído' | 'Em desenvolvimento' | 'Em produção' | 'Pausado';
    photos: [string];
    libs: {
      img: string;
      title: string;
    }[];
    tech_stack: [string];
    features: [string];
    tags: [string];
    contribuents: [string];
  },
];
