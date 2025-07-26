import 'server-only';

const dictionaries = {
  en: async () => {
    const module = await import('./en.json');
    return module.default;
  },
  uk: async () => {
    const module = await import('./uk.json');
    return module.default;
  },
};

export const getDictionary = async (locale) => {
  if (!locale || !dictionaries[locale]) {
    console.error(`Missing locale: ${locale}`);

    return dictionaries['uk']();
  }

  return dictionaries[locale]();
};
