// import 'server-only';

import { dictionaries } from '@/app/lib/utils/constants';

export const getDictionary = async (locale) => {
  if (!locale || !dictionaries[locale]) {
    console.error(`Missing locale: ${locale}`);

    return dictionaries['uk']();
  }

  return dictionaries[locale]();
};
