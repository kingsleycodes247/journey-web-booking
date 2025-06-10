
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
  'nav.signin': { en: 'Sign In', fr: 'Se Connecter' },
  
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
  'form.selectDeparture': { en: 'Select departure city', fr: 'Sélectionnez la ville de départ' },
  'form.selectDestination': { en: 'Select destination city', fr: 'Sélectionnez la ville de destination' },
  'form.pickDate': { en: 'Pick a date', fr: 'Choisir une date' },
  'form.passenger': { en: 'Passenger', fr: 'Passager' },
  'form.swapCities': { en: 'Swap Cities', fr: 'Échanger Villes' },
  'form.selectTicketType': { en: 'Select ticket type', fr: 'Sélectionnez le type de billet' },
  
  // Features
  'features.title': { en: 'Why Choose 237 Voyage?', fr: 'Pourquoi Choisir 237 Voyage?' },
  'features.subtitle': { en: 'Experience the best in bus travel with our comprehensive platform designed for your comfort and convenience.', fr: 'Découvrez le meilleur du voyage en bus avec notre plateforme complète conçue pour votre confort et commodité.' },
  'features.readyTitle': { en: 'Ready to Start Your Journey?', fr: 'Prêt à Commencer Votre Voyage?' },
  'features.readySubtitle': { en: 'Join thousands of satisfied travelers who trust 237 Voyage for their transportation needs across Cameroon.', fr: 'Rejoignez des milliers de voyageurs satisfaits qui font confiance à 237 Voyage pour leurs besoins de transport à travers le Cameroun.' },
  'features.bookTrip': { en: 'Book Your First Trip', fr: 'Réservez Votre Premier Voyage' },
  'features.learnMore': { en: 'Learn More', fr: 'En Savoir Plus' },
  
  // Weather
  'weather.title': { en: 'Weather Updates', fr: 'Mises à Jour Météo' },
  'weather.subtitle': { en: 'Plan your journey with current weather conditions', fr: 'Planifiez votre voyage avec les conditions météorologiques actuelles' },
  
  // Auth
  'auth.login': { en: 'Welcome Back!', fr: 'Bon Retour!' },
  'auth.signup': { en: 'Join 237 Voyage', fr: 'Rejoindre 237 Voyage' },
  'auth.email': { en: 'Email Address', fr: 'Adresse Email' },
  'auth.password': { en: 'Password', fr: 'Mot de Passe' },
  'auth.signin': { en: 'Sign In', fr: 'Se Connecter' },
  'auth.signup_btn': { en: 'Create Account', fr: 'Créer un Compte' },
  'auth.forgotPassword': { en: 'Forgot password?', fr: 'Mot de passe oublié?' },
  'auth.noAccount': { en: "Don't have an account?", fr: "Vous n'avez pas de compte?" },
  'auth.haveAccount': { en: "Already have an account?", fr: "Vous avez déjà un compte?" },
  'auth.signUp': { en: 'Sign up', fr: "S'inscrire" },
  'auth.signIn': { en: 'Sign in', fr: 'Se connecter' },
  'auth.fullName': { en: 'Full Name', fr: 'Nom Complet' },
  'auth.phoneNumber': { en: 'Phone Number', fr: 'Numéro de Téléphone' },
  'auth.confirmPassword': { en: 'Confirm Password', fr: 'Confirmer le Mot de Passe' },
  'auth.enterName': { en: 'Enter your full name', fr: 'Entrez votre nom complet' },
  'auth.enterEmail': { en: 'Enter your email', fr: 'Entrez votre email' },
  'auth.enterPassword': { en: 'Enter your password', fr: 'Entrez votre mot de passe' },
  'auth.confirmYourPassword': { en: 'Confirm your password', fr: 'Confirmez votre mot de passe' },
  'auth.loginDescription': { en: 'Sign in to your account to continue your journey', fr: 'Connectez-vous à votre compte pour continuer votre voyage' },
  'auth.signupDescription': { en: 'Create your account and start booking with ease', fr: 'Créez votre compte et commencez à réserver facilement' },
  
  // Dashboard
  'dashboard.welcome': { en: 'Welcome back', fr: 'Bon retour' },
  'dashboard.bookings': { en: 'My Bookings', fr: 'Mes Réservations' },
  'dashboard.profile': { en: 'Profile Settings', fr: 'Paramètres du Profil' },
  'dashboard.logout': { en: 'Logout', fr: 'Déconnexion' },
  
  // Footer
  'footer.quickLinks': { en: 'Quick Links', fr: 'Liens Rapides' },
  'footer.services': { en: 'Services', fr: 'Services' },
  'footer.contact': { en: 'Contact', fr: 'Contact' },
  'footer.newsletter': { en: 'Newsletter', fr: 'Newsletter' },
  'footer.stayUpdated': { en: 'Stay updated with our latest offers', fr: 'Restez à jour avec nos dernières offres' },
  'footer.emailPlaceholder': { en: 'Enter your email', fr: 'Entrez votre email' },
  'footer.subscribe': { en: 'Subscribe', fr: "S'abonner" },
  'footer.address': { en: 'Yaoundé, Cameroon', fr: 'Yaoundé, Cameroun' },
  'footer.phone': { en: '+237 XXX XXX XXX', fr: '+237 XXX XXX XXX' },
  'footer.email': { en: 'info@237voyage.com', fr: 'info@237voyage.com' },
  'footer.rights': { en: '2024 237 Voyage. All rights reserved.', fr: '2024 237 Voyage. Tous droits réservés.' },
  'footer.terms': { en: 'Terms of Service', fr: 'Conditions de Service' },
  'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
  
  // Contact Modal
  'contact.title': { en: 'Contact Us', fr: 'Nous Contacter' },
  'contact.description': { en: 'Have a question or need help? Send us a message and we\'ll get back to you soon!', fr: 'Vous avez une question ou besoin d\'aide? Envoyez-nous un message et nous vous répondrons bientôt!' },
  'contact.name': { en: 'Your Name', fr: 'Votre Nom' },
  'contact.email': { en: 'Your Email', fr: 'Votre Email' },
  'contact.subject': { en: 'Subject', fr: 'Sujet' },
  'contact.message': { en: 'Your Message', fr: 'Votre Message' },
  'contact.send': { en: 'Send Message', fr: 'Envoyer le Message' },
  'contact.enterName': { en: 'Enter your name', fr: 'Entrez votre nom' },
  'contact.enterEmail': { en: 'Enter your email', fr: 'Entrez votre email' },
  'contact.enterSubject': { en: 'Enter subject', fr: 'Entrez le sujet' },
  'contact.enterMessage': { en: 'Enter your message...', fr: 'Entrez votre message...' },
  
  // Bus Partners Page
  'partners.title': { en: 'Our Trusted Bus Partners', fr: 'Nos Partenaires de Bus de Confiance' },
  'partners.subtitle': { en: 'Choose from our network of reliable and certified bus companies across Cameroon', fr: 'Choisissez parmi notre réseau de compagnies de bus fiables et certifiées à travers le Cameroun' },
  'partners.premium': { en: 'Premium Partners', fr: 'Partenaires Premium' },
  'partners.standard': { en: 'Standard Partners', fr: 'Partenaires Standard' },
  'partners.routes': { en: 'routes', fr: 'routes' },
  'partners.rating': { en: 'rating', fr: 'note' },
  'partners.viewRoutes': { en: 'View Routes', fr: 'Voir les Itinéraires' },
  'partners.bookNow': { en: 'Book Now', fr: 'Réserver Maintenant' },
  
  // About Page
  'about.title': { en: 'About 237 Voyage', fr: 'À Propos de 237 Voyage' },
  'about.subtitle': { en: 'Your trusted partner for comfortable and reliable bus travel across Cameroon', fr: 'Votre partenaire de confiance pour des voyages en bus confortables et fiables à travers le Cameroun' },
  'about.mission': { en: 'Our Mission', fr: 'Notre Mission' },
  'about.vision': { en: 'Our Vision', fr: 'Notre Vision' },
  'about.values': { en: 'Our Values', fr: 'Nos Valeurs' },
  'about.team': { en: 'Our Team', fr: 'Notre Équipe' },
  'about.missionText': { en: 'To provide safe, comfortable, and affordable bus transportation services across Cameroon while connecting communities and enabling economic growth.', fr: 'Fournir des services de transport en bus sûrs, confortables et abordables à travers le Cameroun tout en connectant les communautés et en favorisant la croissance économique.' },
  'about.visionText': { en: 'To become the leading digital platform for bus travel in Central Africa, making transportation accessible to everyone.', fr: 'Devenir la plateforme numérique leader pour les voyages en bus en Afrique centrale, rendant le transport accessible à tous.' },
  
  // Common
  'common.loading': { en: 'Loading...', fr: 'Chargement...' },
  'common.error': { en: 'Error', fr: 'Erreur' },
  'common.success': { en: 'Success', fr: 'Succès' },
  'common.close': { en: 'Close', fr: 'Fermer' },
  'common.save': { en: 'Save', fr: 'Enregistrer' },
  'common.cancel': { en: 'Cancel', fr: 'Annuler' },
  'common.submit': { en: 'Submit', fr: 'Soumettre' },
  'common.back': { en: 'Back', fr: 'Retour' },
  'common.next': { en: 'Next', fr: 'Suivant' },
  'common.previous': { en: 'Previous', fr: 'Précédent' },
  'common.darkMode': { en: 'Dark Mode', fr: 'Mode Sombre' },
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
