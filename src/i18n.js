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
        shippingg:"Shipping",
        inventory: "Inventory",
        track: "Track quantity",
        quantity: "Quantity",
        casablanca: "Casablanca",
        continueSelling: "Continue selling when out of stock",
        skuOrBarcode: "This product has a SKU or barcode"
      },
      location: {
        name: 'Nom',
        identification:'Donnez à cet emplacement un nom court pour le rendre facile à identifier. Vous verrez ce nom dans des zones comme les commandes et les produits. Si cet emplacement propose un retrait en magasin, il sera visible par vos clients lors du paiement et dans les notifications.',
        address:'Adresse',
        addresss:'Adresse',
        country:'Pays',
        appartment:'Appartement',
        postalcode: 'Code postal',
        city:'Ville',
        phone:'Téléphone',
        fulfillmentDetailes: "Détails d'exécution",
        fulfillment:'Exécution',
        pointOfSale:'Point de vente',
        OnlineAvailability:'Inventaire à cet emplacement est disponible à la vente en ligne.',
        posDescription:'Commencez à vendre en personne à cet emplacement avec votre abonnement POS Lite.'
      },
      staff: {
        contact: 'Contact',
        firstname:"Prénom",
        lastname:'Nom de famille',
        email:'E-mail',
        phone:'Téléphone',
        permisson:'Permission',
        permissionDescription:"Cet employé aura uniquement accès à l'application de point de vente.",
        permissionDescriptionA:"Les permissions du canal de point de vente ne s'appliqueront pas car cet employé n'aura pas accès administrateur.",
        posrole:'Rôle POS',
        managePosRoles:'Gérer les rôles POS',
        selectRole:'Sélectionner le rôle',
        pin:'PIN',
        pinDescription:"Cet employé aura uniquement accès à l'application de point de vente. Les permissions du canal de point de vente ne s'appliqueront pas car cet employé n'aura pas accès administrateur.",
        generatePin:'Générer PIN',
        location:'Location',
        restrictAccess:"Restreindre l'accès"
      },
      discount:{
        manage:'Gérer les réductions et les promotions',
        createDiscountDescription: "Créez des codes de réduction et des réductions automatiques qui s'appliquent lors du paiement. Vous pouvez également utiliser des réductions avec des prix comparatifs.",
        createDiscount:'Créer une réduction',
        pricesLink:'prix comparatifs'
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