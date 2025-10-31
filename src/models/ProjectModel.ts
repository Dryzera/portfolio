export type ProjectModel = [
  {
    id: string;
    exalt: boolean;
    title: string;
    short_desc: string;
    long_descs: string[];
    start_date: string;
    end_date: string | null;
    url: string;
    status: 'completed' | 'development' | 'production' | 'paused';
    photos: [string];
    libs: {
      img: string;
      title: string;
    }[];
    tech_stack: [string];
    features: [string];
    tags: [string];
    contribuents: [
      {
        name: string;
        profile_url: string | null;
      },
    ];
  },
];
