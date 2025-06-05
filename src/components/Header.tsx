
import { Bus, Moon, Sun, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const navItems = [
    { label: "Home", href: "#" },
    { label: "My Bookings", href: "#" },
    { label: "Track Journey", href: "#" },
    { label: "Bus Partners", href: "#" },
    { label: "Help", href: "#" },
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Enhanced Logo with Cameroon Map + Bus */}
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-lg flex items-center justify-center shadow-lg">
                <div className="relative">
                  {/* Cameroon map outline */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white absolute">
                    <path 
                      fill="currentColor" 
                      d="M12 2l8 4v8l-8 8-8-8V6l8-4z"
                    />
                  </svg>
                  {/* Bus icon overlay */}
                  <Bus className="h-4 w-4 text-white relative z-10" />
                </div>
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">237 Voyage</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-purple-600"
              />
              <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="border-purple-200 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-200 hover:scale-105"
              onClick={() => handleAuthClick('login')}
            >
              <User className="h-4 w-4 mr-1" />
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-purple-50 dark:hover:bg-purple-900/50">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white dark:bg-gray-900">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <a 
                      key={item.label}
                      href={item.href} 
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-lg"
                    >
                      {item.label}
                    </a>
                  ))}
                  
                  {/* Dark Mode Toggle Mobile */}
                  <div className="flex items-center justify-between py-4">
                    <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                    <div className="flex items-center space-x-2">
                      <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={toggleTheme}
                        className="data-[state=checked]:bg-purple-600"
                      />
                      <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="border-purple-200 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/50 w-full"
                    onClick={() => handleAuthClick('login')}
                  >
                    <User className="h-4 w-4 mr-1" />
                    Sign In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent className="max-w-md">
          <AuthModal mode={authMode} onModeChange={setAuthMode} />
        </DialogContent>
      </Dialog>
    </header>
  );
};
