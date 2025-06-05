
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'fr'>('en');

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: (
        <svg className="w-5 h-4" viewBox="0 0 640 480">
          <path fill="#012169" d="M0 0h640v480H0z"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
          <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l246-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
        </svg>
      )
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flag: (
        <svg className="w-5 h-4" viewBox="0 0 640 480">
          <path fill="#002654" d="M0 0h213.3v480H0z"/>
          <path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/>
          <path fill="#CE1126" d="M426.7 0H640v480H426.7z"/>
        </svg>
      )
    }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode: 'en' | 'fr') => {
    setCurrentLanguage(langCode);
    // Here you would implement actual language switching logic
    console.log('Language changed to:', langCode);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 px-2 gap-1 hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-all duration-200"
        >
          {currentLang?.flag}
          <span className="hidden sm:inline text-sm">{currentLang?.name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 p-1" align="end">
        <div className="space-y-1">
          {languages.map((language) => (
            <Button
              key={language.code}
              variant="ghost"
              size="sm"
              className={`w-full justify-start gap-2 h-8 ${
                currentLanguage === language.code 
                  ? 'bg-purple-100 dark:bg-purple-900/50' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onClick={() => handleLanguageChange(language.code as 'en' | 'fr')}
            >
              {language.flag}
              <span className="text-sm">{language.name}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
