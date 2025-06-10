import { Bus, Phone, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AuthModal } from "@/components/AuthModal";
import { ContactModal } from "@/components/ContactModal";

export const Footer = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const handleAuthRequiredClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleBusPartnersClick = () => {
    window.location.href = '/bus-partners';
  };

  const handleHelpClick = () => {
    setIsContactModalOpen(true);
  };

  const quickLinks = [
    { label: "Home", onClick: handleHomeClick },
    { label: "My Bookings", onClick: handleAuthRequiredClick },
    { label: "Track Journey", onClick: handleAuthRequiredClick },
    { label: "Bus Partners", onClick: handleBusPartnersClick },
    { label: "Help & Support", onClick: handleHelpClick },
  ];

  const services = [
    { label: "Bus Tickets", onClick: handleHomeClick },
    { label: "Live Tracking", onClick: handleAuthRequiredClick },
    { label: "24/7 Support", onClick: handleHelpClick },
    { label: "Mobile App", onClick: handleHomeClick },
    { label: "Partner Registration", onClick: handleBusPartnersClick },
  ];

  return (
    <>
      <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                {/* Large Enhanced Logo */}
                <div className="relative">
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center shadow-2xl">
                    <div className="relative">
                      {/* Cameroon map outline */}
                      <svg viewBox="0 0 24 24" className="h-10 w-10 text-white absolute">
                        <path 
                          fill="currentColor" 
                          d="M12 2l8 4v8l-8 8-8-8V6l8-4z"
                        />
                      </svg>
                      {/* Bus icon overlay */}
                      <Bus className="h-6 w-6 text-white relative z-10" />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold">237 Voyage</h2>
                  <p className="text-purple-200 text-lg">Your Journey, Our Priority</p>
                </div>
              </div>
              <p className="text-gray-300 max-w-md mb-6">
                Travel comfortably across Cameroon with our trusted bus partners. Book tickets from any bus company, all in one place. Safe, reliable, and convenient.
              </p>
              
              {/* Contact Info */}
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="h-5 w-5 text-purple-300" />
                <a 
                  href="tel:+237680305815" 
                  className="text-lg font-medium hover:text-purple-300 transition-colors"
                >
                  +237 680 305 815
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button 
                      onClick={link.onClick}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.label}>
                    <button 
                      onClick={service.onClick}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div className="border-t border-purple-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-gray-300">Follow us:</span>
                
                {/* Social Media Icons */}
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-purple-700 transition-all duration-200 hover:scale-110"
                    asChild
                  >
                    <a href="#" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-purple-700 transition-all duration-200 hover:scale-110"
                    asChild
                  >
                    <a href="#" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-purple-700 transition-all duration-200 hover:scale-110"
                    asChild
                  >
                    <a href="#" aria-label="X (Twitter)">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
              
              <p className="text-gray-400 text-center md:text-right">
                © 2024 237 Voyage. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent className="max-w-md">
          <AuthModal 
            mode={authMode} 
            onModeChange={setAuthMode} 
            onClose={() => setIsAuthModalOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="max-w-md">
          <ContactModal />
        </DialogContent>
      </Dialog>
    </>
  );
};
