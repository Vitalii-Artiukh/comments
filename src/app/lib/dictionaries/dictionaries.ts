import { dictionaries } from '@/app/lib/utils/constants';
import { Locale } from 'next/dist/compiled/@vercel/og/satori';

export const getDictionary = async (locale: string) => {
  if (!locale || !dictionaries[locale]) {
    console.error(`Missing locale: ${locale}`);

    return dictionaries['uk']();
  }

  return dictionaries[locale]();
};
