import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  language: 'en' | 'fr';
}

const Pricing = ({ language }: PricingProps) => {
  const content = {
    en: {
      cardtitle:"AI Agent",
      title: "Simple, Transparent Pricing",
      subtitle: "One price, unlimited possibilities",
      price: "$1,000",
      period: "per agent/month",
      setup: "$5,000 initial setup fee for new customers",
      commitment: "Minimum 1-year contract",
      features: [
        "24/7 AI Agent Operations",
        "ERP System Integration",
        "Custom Process Automation", 
        "Real-time Monitoring & Analytics",
        "Dedicated Support Team",
        "Regular Updates & Improvements",
        "Multi-language Support"
      ],
      cta: "Start Your Digital Transformation",
      contact: "Contact for Enterprise Pricing",
      fineprint: "* All prices in CAD."
    },
    fr: {
      cardtitle:"Agent IA",
      title: "Tarification Simple et Transparente",
      subtitle: "Un prix, des possibilités illimitées",
      price: "1 000 $",
      period: "par agent/mois",
      setup: "5 000 $ de frais de configuration initiale pour nouveaux clients",
      commitment: "Contrat minimum d'un an",
      features: [
        "Opérations d'Agent IA 24/7",
        "Intégration de Système ERP",
        "Automatisation de Processus Personnalisée",
        "Surveillance et Analyses en Temps Réel",
        "Équipe de Support Dédiée",
        "Mises à Jour et Améliorations Régulières",
        "Support Multilingue"
      ],
      cta: "Commencez Votre Transformation Numérique",
      contact: "Contactez pour la Tarification Entreprise",
      fineprint: "* Tous les prix en CAD."
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-purple-200 shadow-xl">
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl font-bold text-gray-900">{content[language].cardtitle}</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">{content[language].price}</span>
                <span className="text-gray-600 ml-2">{content[language].period}</span>
              </div>
              <p className="text-red-600 font-medium mt-2">{content[language].setup}</p>
              <p className="text-sm text-gray-500 mt-1">{content[language].commitment}</p>
            </CardHeader>
            
            <CardContent className="pt-4">
              <ul className="space-y-3 mb-8">
                {content[language].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 text-lg mb-4"
              >
                {content[language].cta}
              </Button>
              
              {/* <p className="text-center text-gray-600 text-sm mb-4">
                {content[language].contact}
              </p> */}
              
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                {content[language].fineprint}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
