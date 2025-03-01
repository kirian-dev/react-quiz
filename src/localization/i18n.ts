import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage, supportedLanguages } from './supportedLanguages';

import enLocalization from './translations/en/enLocalization';
import frLocalization from './translations/fr/frLocalization';
import deLocalization from './translations/de/deLocalization';
import esLocalization from './translations/es/esLocalization';

type appResources = {
  en: typeof enLocalization;
  fr: typeof frLocalization;
  de: typeof deLocalization;
  es: typeof esLocalization;
};

const resources: appResources = {
  en: {
    ...enLocalization,
  },
  fr: {
    ...frLocalization,
  },
  de: {
    ...deLocalization,
  },
  es: {
    ...esLocalization,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackNS: 'common',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18next;
