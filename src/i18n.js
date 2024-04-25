import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import translationGr from './locales/gr/translation.json';
// import translationIT from './locales/it/translation.json';
// import translationRS from './locales/rs/translation.json';
// import translationSP from './locales/sp/translation.json';
// import translationENG from './locales/en/translation.json';
// import translationFr from './locales/fr/translation.json';

//translations
const resources = {
  fr: {
    translation: {
      product:{

      },
      login: {
        title: "Connectez-vous pour continuer sur Performance Pathfinder Metrics.",
        username: "Login",
        password: "Mot de passe",
        rememberme: "Remember Me",
        forgetpass: "Forget your password?"
      },
      message: {
        required: "Champ obligatoire"
      },
      actions: {
        save: "Enregistrer",
        delete: "Supprimer",
        edit: "Modifier",
        login: "Login",
        logout: "Logout",
        downloadTemp:"Template",
        export:"Exporter",
        upload:"Données",
        close:"Annuler",
        confirm:"Confirmer",
        new:"Créer"

      },
      text:{
        confirmation:"Confirmation",
        msgDelete:"Voulez vous supprimer cette ligne ?",
      }
    }
  },
  
   eng: {
    translation: {
      product:{
        
      },
      login: {
        title: "Connectez-vous pour continuer sur Performance Pathfinder Metrics.",
        username: "Login",
        password: "Mot de passe",
        rememberme: "Remember Me",
        forgetpass: "Forget your password?"
      },
      message: {
        required: "Champ obligatoire"
      },
      actions: {
        save: "Enregistrer",
        delete: "Supprimer",
        edit: "Modifier",
        login: "Login",
        logout: "Logout",
        downloadTemp:"Template",
        export:"Exporter",
        upload:"Données",
        close:"Annuler",
        confirm:"Confirmer",
        new:"Créer"

      },
      text:{
        confirmation:"Confirmation",
        msgDelete:"Voulez vous supprimer cette ligne ?",
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;