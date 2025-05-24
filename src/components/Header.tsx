
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface HeaderProps {
  language: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const content = {
    en: {
      company: "Feranse",
      nav: {
        features: "Features",
        pricing: "Pricing",
        contact: "Contact"
      },
      cta: "Get Started"
    },
    fr: {
      company: "Feranse",
      nav: {
        features: "Fonctionnalités",
        pricing: "Tarification",
        contact: "Contact"
      },
      cta: "Commencer"
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">{content[language].company}</h1>
            <span className="ml-2 text-sm text-gray-500">Montreal, QC</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              {content[language].nav.features}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              {content[language].nav.pricing}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              {content[language].nav.contact}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
