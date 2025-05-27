
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

interface HeroProps {
  language: 'en' | 'fr';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      tagline: "AI Agency - Montreal, Quebec",
      headline: "Your AI Agency for Automated Business Workflows",
      subheadline: "AI Agents as a Service for Enterprise Automation",
      description: "Feranse is a specialized AI agency that builds, deploys, and maintains custom AI agents to run critical business processes. We design, configure, and operate AI-powered agents to close automation gaps between your cloud ERP and other digital systems.",
      cta: "Schedule a Demo",
      benefits: {
        cost: "Predictable Cost",
        deployment: "Rapid Deployment", 
        improvement: "Continuous Improvement"
      }
    },
    fr: {
      tagline: "Agence IA - Montréal, Québec",
      headline: "Votre Agence IA pour les Flux de Travail Automatisés",
      subheadline: "Agents IA en tant que Service pour l'Automatisation d'Entreprise",
      description: "Feranse est une agence IA spécialisée qui construit, déploie et maintient des agents IA personnalisés pour exécuter des processus métier critiques. Nous concevons, configurons et opérons des agents alimentés par l'IA pour combler les lacunes d'automatisation entre votre ERP cloud et d'autres systèmes numériques.",
      cta: "Planifier une Démo",
      benefits: {
        cost: "Coût Prévisible",
        deployment: "Déploiement Rapide",
        improvement: "Amélioration Continue"
      }
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {Object.entries(content[language].benefits).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-xl font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
