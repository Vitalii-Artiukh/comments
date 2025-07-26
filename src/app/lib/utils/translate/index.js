import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from '@/app/lib/utils/constants';
import uk from '@/app/lib/dictionaries/uk.json';
import en from '@/app/lib/dictionaries/en.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  [LOCALS.EN]: en,
  //   {
  //   translation: {
  //     react: 'Welcome to React and react-i18next',
  //   },
  // },
  [LOCALS.UK]: uk,
  // {
  // translation: {
  //   'Welcome to React': 'Ласкаво просимо до React та react-i18next',
  // },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'uk',

    // lng: 'uk', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
