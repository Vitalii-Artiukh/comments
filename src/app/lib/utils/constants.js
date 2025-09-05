export const LOCALS = {
  EN: 'en',
  UK: 'uk',
};

export const EMAIL = 'radial_car@yahoo.com';

export const dictionaries = {
  en: async () => {
    const module = await import('../dictionaries/en.json');
    return module.default;
  },
  uk: async () => {
    const module = await import('../dictionaries/uk.json');
    return module.default;
  },
};
