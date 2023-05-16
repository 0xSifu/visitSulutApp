import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import zh from './zh.json';
import id from './id.json';
import jp from './jp.json';
import ks from './ks.json';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
  id: {
    translation: id,
  },
  ks: {
    translation: ks,
  },
  jp: {
    translation: jp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh, id, ks, jp',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false
  }
});