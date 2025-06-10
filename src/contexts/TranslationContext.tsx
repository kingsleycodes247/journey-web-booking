
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.bookings': 'My Bookings',
    'nav.track': 'Track Journey',
    'nav.partners': 'Bus Partners',
    'nav.help': 'Help & Support',
    'nav.signin': 'Sign In',
    
    // Hero Section
    'hero.title1': 'Travel Smart with',
    'hero.title2': '237 Voyage',
    'hero.subtitle': 'Your trusted partner for comfortable and reliable bus travel across Cameroon. Book your journey with confidence.',
    
    // Form
    'form.title': 'Find Your Perfect Journey',
    'form.selectTicketType': 'Select ticket type',
    'form.oneWay': 'One Way',
    'form.roundTrip': 'Round Trip',
    'form.from': 'From',
    'form.to': 'To',
    'form.selectDeparture': 'Select departure city',
    'form.selectDestination': 'Select destination',
    'form.departure': 'Departure Date',
    'form.return': 'Return Date',
    'form.pickDate': 'Pick a date',
    'form.passengers': 'Passengers',
    'form.passenger': 'passenger',
    'form.swapCities': 'Swap Cities',
    'form.search': 'Search Buses',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.logout': 'Logout',
    'dashboard.bookings': 'My Bookings',
    'dashboard.profile': 'Profile',
    
    // Auth
    'auth.login': 'Sign In',
    'auth.signup': 'Create Account',
    'auth.loginDescription': 'Welcome back! Please sign in to your account.',
    'auth.signupDescription': 'Create your account to start booking your journeys.',
    'auth.fullName': 'Full Name',
    'auth.enterName': 'Enter your full name',
    'auth.email': 'Email Address',
    'auth.enterEmail': 'Enter your email',
    'auth.phoneNumber': 'Phone Number',
    'auth.password': 'Password',
    'auth.enterPassword': 'Enter your password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.confirmYourPassword': 'Confirm your password',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.signin': 'Sign In',
    'auth.signup_btn': 'Create Account',
    'auth.noAccount': "Don't have an account?",
    'auth.haveAccount': 'Already have an account?',
    'auth.signUp': 'Sign Up',
    'auth.signIn': 'Sign In',
    
    // Common
    'common.darkMode': 'Dark Mode',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.bookings': 'Mes Réservations',
    'nav.track': 'Suivre le Voyage',
    'nav.partners': 'Partenaires Bus',
    'nav.help': 'Aide & Support',
    'nav.signin': 'Se Connecter',
    
    // Hero Section
    'hero.title1': 'Voyagez Intelligemment avec',
    'hero.title2': '237 Voyage',
    'hero.subtitle': 'Votre partenaire de confiance pour des voyages en bus confortables et fiables à travers le Cameroun. Réservez votre voyage en toute confiance.',
    
    // Form
    'form.title': 'Trouvez Votre Voyage Parfait',
    'form.selectTicketType': 'Sélectionner le type de billet',
    'form.oneWay': 'Aller Simple',
    'form.roundTrip': 'Aller-Retour',
    'form.from': 'De',
    'form.to': 'À',
    'form.selectDeparture': 'Sélectionner la ville de départ',
    'form.selectDestination': 'Sélectionner la destination',
    'form.departure': 'Date de Départ',
    'form.return': 'Date de Retour',
    'form.pickDate': 'Choisir une date',
    'form.passengers': 'Passagers',
    'form.passenger': 'passager',
    'form.swapCities': 'Échanger les Villes',
    'form.search': 'Rechercher des Bus',
    
    // Dashboard
    'dashboard.welcome': 'Bon retour',
    'dashboard.logout': 'Se Déconnecter',
    'dashboard.bookings': 'Mes Réservations',
    'dashboard.profile': 'Profil',
    
    // Auth
    'auth.login': 'Se Connecter',
    'auth.signup': 'Créer un Compte',
    'auth.loginDescription': 'Bon retour ! Veuillez vous connecter à votre compte.',
    'auth.signupDescription': 'Créez votre compte pour commencer à réserver vos voyages.',
    'auth.fullName': 'Nom Complet',
    'auth.enterName': 'Entrez votre nom complet',
    'auth.email': 'Adresse Email',
    'auth.enterEmail': 'Entrez votre email',
    'auth.phoneNumber': 'Numéro de Téléphone',
    'auth.password': 'Mot de Passe',
    'auth.enterPassword': 'Entrez votre mot de passe',
    'auth.confirmPassword': 'Confirmer le Mot de Passe',
    'auth.confirmYourPassword': 'Confirmez votre mot de passe',
    'auth.forgotPassword': 'Mot de passe oublié ?',
    'auth.signin': 'Se Connecter',
    'auth.signup_btn': 'Créer un Compte',
    'auth.noAccount': "Vous n'avez pas de compte ?",
    'auth.haveAccount': 'Vous avez déjà un compte ?',
    'auth.signUp': 'S\'inscrire',
    'auth.signIn': 'Se Connecter',
    
    // Common
    'common.darkMode': 'Mode Sombre',
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
