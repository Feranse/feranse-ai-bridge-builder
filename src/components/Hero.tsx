
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

interface HeroProps {
  language: 'en' | 'fr';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      tagline: "AI Agency - Montreal, Quebec",
      headline: "Tired of your team spending hours on the same ERP clicks every single day?",
      subheadline: "Feranse does them for you automatically.",
      description: "Less data entry, more work done. No consulting fees, no change management, no new app.",
      cta: "Schedule a Demo",
    },
    fr: {
      tagline: "Agence IA - Montréal, Québec",
      headline: "Fatigué que votre équipe passe des heures sur les mêmes clics ERP chaque jour?",
      subheadline: "Feranse les fait pour vous automatiquement.",
      description: "Moins de saisie de données, plus de travail accompli. Aucun frais de consultation, aucune gestion du changement, aucune nouvelle application.",
      cta: "Planifier une Démo",
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Bot className="h-4 w-4" />
              <span>{content[language].tagline}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {content[language].headline}
          </h1>
          
          <p className="text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold mb-6">
            {content[language].subheadline}
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
            >
              {content[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
