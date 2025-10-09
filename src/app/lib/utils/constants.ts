export const LOCALS = {
  EN: 'en',
  UK: 'uk',
};

export const EMAIL = 'radial_car@yahoo.com';

export const dictionaries = {
  en: async (): Promise<{
    nav?: {
      about?: string;
      home?: string;
    };
    error?: {
      unk?: string;
      again?: string;
    };
    notFound?: {
      title?: string;
      description?: string;
      notPost?: string;
    };
    common?: {
      posts?: string;
      readMy?: string;
      user?: string;
      id?: string;
      clickButton?: string;
      return?: string;
      began?: string;
    };
    about?: {
      name?: string;
      titleForName?: string;
      titleForEmail?: string;
      projectDescription?: string;
      email?: string;
    };
  }> => {
    const module = await import('../dictionaries/en.json');
    return module.default;
  },
  uk: async (): Promise<{
    nav?: {
      about?: string;
      home?: string;
    };
    error?: {
      unk?: string;
      again?: string;
    };
    notFound?: {
      title?: string;
      description?: string;
      notPost?: string;
    };
    common?: {
      posts?: string;
      readMy?: string;
      user?: string;
      id?: string;
      clickButton?: string;
      return?: string;
      began?: string;
    };
    about?: {
      name?: string;
      titleForName?: string;
      titleForEmail?: string;
      projectDescription?: string;
      email?: string;
    };
  }> => {
    const module = await import('../dictionaries/uk.json');
    return module.default;
  },
};
