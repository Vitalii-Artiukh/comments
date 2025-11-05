import { dictionaries } from '@/app/lib/utils/constants';

export type DictionaryLocale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {
  const isValidLocale = (loc: string): loc is DictionaryLocale => {
    return loc in dictionaries;
  };

  // if (!locale || !dictionaries[locale]) {
  if (!locale || !isValidLocale(locale)) {
    console.error(`Missing locale: ${locale}`);

    return dictionaries['uk']();
  }

  return dictionaries[locale]();
};
