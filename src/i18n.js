import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationGr from './locales/gr/translation.json';
import translationIT from './locales/it/translation.json';
import translationRS from './locales/rs/translation.json';
import translationSP from './locales/sp/translation.json';

//translations
const resources = {
  fr: {
    translation: {
      product: {
        title: "Titre",
        description: "Description",
        media: "Media",
        pricing: "Pricing",
        price:"Price",
        comparePrice:"Compare-at price",
        costPerItem:"Cost per item",
        profit:"Profit",
        margin:"Margin",
        taxable:"Charge tax on this product",
        weight:"weight",
        shipping:"This is a physical product",
        shippingg:"Shipping"
      },
      message: {
        required: "Champ obligatoire"
      },
    }
  },
  gr: {
    translation: translationGr
  },
  it: {
    translation: translationIT
  },
   rs: {
    translation: translationRS
  },
   sp: {
    translation: translationSP
  },
   eng: {
    translation: {
      product:{
        title : "Title",
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr",


    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;