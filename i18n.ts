import * as Localization from "expo";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ch } from "./constants/locale/ch";
import { en } from "./constants/locale/en";

const resources = {
  ch,
  en
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  cleanCode: true
});

export default i18n;
