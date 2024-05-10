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
      discountt:"discount",
      menu:{
        dashboard:"Tableau de bord",
      },
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
        title:"Titre",
        status:"Status",
        type:"Type",
        manage:'Gérer les réductions et les promotions',
        createDiscountDescription: "Créez des codes de réduction et des réductions automatiques qui s'appliquent lors du paiement. Vous pouvez également utiliser des réductions avec des prix comparatifs.",
        createDiscount:'Créer une réduction',
        pricesLink:'prix comparatifs',
        amountOffProducts: "Montant de réduction sur les produits",
        method: "Méthode",
        discountCode: "Code de réduction",
        automaticDiscount: "Réduction automatique",
        generateCode: "Générer un code",
        adviceDiscountCode: "Conseil pour le code de réduction",
        autoCode: "Code automatique",
        adviceAuto: "Conseil pour le code automatique",
        percentage: "Pourcentage",
        fixedAmount: "Montant fixe",
        specification: "Spécification",
        collections: "Collections",
        products: "Produits",
        searchCollections: "Rechercher des collections",
        searchProducts: "Rechercher des produits",
        OncePerOrder: "Une fois par commande",
        itemizedDiscount: "Remise par article",
        minimumPurchaseRequirements: "Exigences d'achat minimum",
        minimumPurchaseDescription: "Description de l'achat minimum",
        noMinimumRequirements: "Aucune exigence minimale",
        minimumPurchaseAmount: "Montant d'achat minimum",
        enterAmount: "Entrez le montant",
        minimumQuantityOfItems: "Quantité minimale d'articles",
        enterQuantity: "Entrez la quantité",
        customerEligibility: "Éligibilité des clients",
        customerEligibilityDescription: "Description de l'éligibilité des clients",
        allCustomers: "Tous les clients",
        specificCustomerSegments: "Segments de clients spécifiques",
        specificSegmentsPlaceholder: "Saisissez les segments spécifiques",
        specificCustomers: "Clients spécifiques",
        specificCustomersPlaceholder: "Saisissez les clients spécifiques",
        maximumDiscountUses: "Utilisations maximales de la réduction",
        limitTotalUsage: "Limiter l'utilisation totale",
        totalUsageLimit: "Limite d'utilisation totale",
        limitToPerCustomer: "Limite par client",
        combinesWith: "Combine avec",
        combinesWithDescription: "Description de la combinaison",
        largeDiscountWarning: "Avertissement de grosse réduction",
        productDiscounts: "Réductions sur les produits",
        productDiscountsInfo: "Informations sur les réductions sur les produits",
        orderDiscounts: "Réductions sur les commandes",
        orderDiscountsInfo: "Informations sur les réductions sur les commandes",
        shippingDiscounts: "Réductions sur l'expédition",
        shippingDiscountsInfo: "Informations sur les réductions sur l'expédition",
        activeDates: "Dates actives",
        startDate: "Date de début",
        startTime: "Heure de début",
        setEndDate: "Définir une date de fin",
        endDate: "Date de fin",
        endTime: "Heure de fin",
        expired:"Expiré",
        active:"Active"
      },
      purchase: {
        adviceA: "Conseil A",
        adviceB: "Conseil B"
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
        new:"Créer",
        browser: "Parcourir"

      },
      text:{
        confirmation:"Confirmation",
        msgDelete:"Voulez vous supprimer cette ligne ?",
      },
      newlocation:"Location"
    }
  },
  
   eng: {
    translation: {
      product:{
        
      },
      location: {
        name: 'Name',
        identification:'Donnez à cet emplacement un nom court pour le rendre facile à identifier. Vous verrez ce nom dans des zones comme les commandes et les produits. Si cet emplacement propose un retrait en magasin, il sera visible par vos clients lors du paiement et dans les notifications.',
        address:'Address',
        country:'Country',
        appartment:'Appartment',
        postalcode: 'Postal Code',
        city:'City',
        phone:'Phone',
        fulfillmentDetailes: "Détails d'exécution",
        fulfillment:'Exécution',
        pointOfSale:'Point de vente',
        OnlineAvailability:'Inventaire à cet emplacement est disponible à la vente en ligne.',
        posDescription:'Commencez à vendre en personne à cet emplacement avec votre abonnement POS Lite.'
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
    lng: "fr",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;