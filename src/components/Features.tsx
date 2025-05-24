
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cog, DollarSign, Clock, Shield, Zap } from "lucide-react";

interface FeaturesProps {
  language: 'en' | 'fr';
}

const Features = ({ language }: FeaturesProps) => {
  const content = {
    en: {
      title: "Why Choose Feranse AI Agents?",
      subtitle: "Transform your digital gaps into seamless automation",
      features: [
        {
          icon: Bot,
          title: "Gen AI Powered",
          description: "Advanced artificial intelligence that learns and adapts to your specific business processes and requirements."
        },
        {
          icon: Cog,
          title: "ERP Integration",
          description: "Seamlessly connects with existing ERP systems, eliminating manual data entry and reducing human error."
        },
        {
          icon: DollarSign,
          title: "Cost Effective",
          description: "Replace expensive manual processes with AI agents at a fraction of the cost of traditional solutions."
        },
        {
          icon: Clock,
          title: "24/7 Operations",
          description: "Your AI agents work around the clock, ensuring continuous processing without breaks or downtime."
        },
        {
          icon: Shield,
          title: "Secure & Compliant",
          description: "Enterprise-grade security with full compliance to Canadian data protection regulations."
        },
        {
          icon: Zap,
          title: "Instant Deployment",
          description: "Quick setup and deployment with minimal disruption to your existing workflows and systems."
        }
      ]
    },
    fr: {
      title: "Pourquoi Choisir les Agents IA Feranse?",
      subtitle: "Transformez vos lacunes numériques en automatisation transparente",
      features: [
        {
          icon: Bot,
          title: "Alimenté par l'IA Gen",
          description: "Intelligence artificielle avancée qui apprend et s'adapte à vos processus métier et exigences spécifiques."
        },
        {
          icon: Cog,
          title: "Intégration ERP",
          description: "Se connecte de manière transparente aux systèmes ERP existants, éliminant la saisie manuelle et réduisant les erreurs."
        },
        {
          icon: DollarSign,
          title: "Rentable",
          description: "Remplacez les processus manuels coûteux par des agents IA à une fraction du coût des solutions traditionnelles."
        },
        {
          icon: Clock,
          title: "Opérations 24/7",
          description: "Vos agents IA travaillent en continu, assurant un traitement continu sans pauses ni temps d'arrêt."
        },
        {
          icon: Shield,
          title: "Sécurisé et Conforme",
          description: "Sécurité de niveau entreprise avec conformité complète aux réglementations canadiennes de protection des données."
        },
        {
          icon: Zap,
          title: "Déploiement Instantané",
          description: "Configuration et déploiement rapides avec perturbation minimale de vos flux de travail existants."
        }
      ]
    }
  };

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-purple-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-center text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
