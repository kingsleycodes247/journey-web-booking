
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.bookings': { en: 'My Bookings', fr: 'Mes Réservations' },
  'nav.track': { en: 'Track Journey', fr: 'Suivre Voyage' },
  'nav.partners': { en: 'Bus Partners', fr: 'Partenaires Bus' },
  'nav.help': { en: 'Help', fr: 'Aide' },
  'nav.login': { en: 'Login', fr: 'Connexion' },
  
  // Hero Section
  'hero.title1': { en: 'Book Your', fr: 'Réservez Votre' },
  'hero.title2': { en: 'Journey', fr: 'Voyage' },
  'hero.subtitle': { en: 'Travel comfortably across Cameroon with our trusted bus partners. Book tickets from any bus company, all in one place.', fr: 'Voyagez confortablement à travers le Cameroun avec nos partenaires de bus de confiance. Réservez des billets de n\'importe quelle compagnie de bus, tout en un seul endroit.' },
  
  // Form
  'form.title': { en: 'Find Your Perfect Trip', fr: 'Trouvez Votre Voyage Parfait' },
  'form.oneWay': { en: 'One Way', fr: 'Aller Simple' },
  'form.roundTrip': { en: 'Round Trip', fr: 'Aller-Retour' },
  'form.from': { en: 'From', fr: 'De' },
  'form.to': { en: 'To', fr: 'À' },
  'form.departure': { en: 'Departure Date', fr: 'Date de Départ' },
  'form.return': { en: 'Return Date', fr: 'Date de Retour' },
  'form.passengers': { en: 'Passengers', fr: 'Passagers' },
  'form.search': { en: 'Search Buses', fr: 'Rechercher Bus' },
  
  // Features
  'features.title': { en: 'Why Choose 237 Voyage?', fr: 'Pourquoi Choisir 237 Voyage?' },
  'features.subtitle': { en: 'Experience the best in bus travel with our comprehensive platform designed for your comfort and convenience.', fr: 'Découvrez le meilleur du voyage en bus avec notre plateforme complète conçue pour votre confort et commodité.' },
  
  // Auth
  'auth.login': { en: 'Welcome Back!', fr: 'Bon Retour!' },
  'auth.signup': { en: 'Join 237 Voyage', fr: 'Rejoindre 237 Voyage' },
  'auth.email': { en: 'Email Address', fr: 'Adresse Email' },
  'auth.password': { en: 'Password', fr: 'Mot de Passe' },
  'auth.signin': { en: 'Sign In', fr: 'Se Connecter' },
  'auth.signup_btn': { en: 'Create Account', fr: 'Créer un Compte' },
  
  // Dashboard
  'dashboard.welcome': { en: 'Welcome back', fr: 'Bon retour' },
  'dashboard.bookings': { en: 'My Bookings', fr: 'Mes Réservations' },
  'dashboard.profile': { en: 'Profile Settings', fr: 'Paramètres du Profil' },
  'dashboard.logout': { en: 'Logout', fr: 'Déconnexion' },
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
};
