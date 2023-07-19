import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { i18nEnglish } from "./en/translation";
import { i18nEspanol } from "./es/translation";

const i18nInstance = i18n.createInstance();
i18nInstance
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false, //   <---- this will do the magic
    },
    resources: {},
  });

i18nInstance.addResourceBundle("en", "translation", i18nEnglish);
i18nInstance.addResourceBundle("es", "translation", i18nEspanol);

export { i18nInstance };