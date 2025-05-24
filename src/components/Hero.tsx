
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap } from "lucide-react";

interface HeroProps {
  language: 'en' | 'fr';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      headline: "Bridge Your Digital Transformation Gaps",
      subheadline: "AI-Powered Agents That Eliminate Manual Processes",
      description: "Stop relying on clerks and manual HR solutions to fill the gaps between your ERP systems. Our Gen AI agents automate your digital-to-digital processes seamlessly.",
      cta: "Start Your Automation Journey",
      secondary: "Schedule a Demo",
      stats: {
        efficiency: "90% Efficiency Increase",
        cost: "70% Cost Reduction", 
        time: "24/7 Operations"
      }
    },
    fr: {
      headline: "Comblez les Lacunes de Votre Transformation Numérique",
      subheadline: "Agents IA Qui Éliminent les Processus Manuels",
      description: "Arrêtez de compter sur des commis et des solutions RH manuelles pour combler les lacunes entre vos systèmes ERP. Nos agents IA Gen automatisent vos processus numériques de manière transparente.",
      cta: "Commencez Votre Parcours d'Automatisation",
      secondary: "Planifier une Démo",
      stats: {
        efficiency: "90% d'Augmentation d'Efficacité",
        cost: "70% de Réduction des Coûts",
        time: "Opérations 24/7"
      }
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Bot className="h-4 w-4" />
              <span>AI Agency - Montreal, Quebec</span>
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
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 text-lg">
              {content[language].cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg">
              {content[language].secondary}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {Object.entries(content[language].stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
