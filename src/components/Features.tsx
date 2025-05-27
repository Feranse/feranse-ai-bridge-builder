
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Settings, TrendingUp, Clock, FileText } from "lucide-react";

interface FeaturesProps {
  language: 'en' | 'fr';
}

const Features = ({ language }: FeaturesProps) => {
  const content = {
    en: {
      title: "Why Choose Feranse?",
      subtitle: "End-to-end AI agent management with guaranteed results",
      features: [
        {
          icon: Shield,
          title: "No Additional Platforms",
          description: "Skip RPA software licensing and complex deployments. Easily deploy agents in your private cloud or let Feranse host it for you."
        },
        {
          icon: TrendingUp,
          title: "Guaranteed Results",
          description: "Each agent is contractually bound to achieve its defined objective with full transparency and accountability."
        },
        {
          icon: Settings,
          title: "Scalable & Flexible",
          description: "Add, modify, or retire agents easily as your needs evolve. No platform lock-in or complex migrations."
        },
        {
          icon: Zap,
          title: "Predictable Cost",
          description: "Fixed monthly fee per agent—no surprise overages. Budget with confidence and scale as needed."
        },
        {
          icon: Clock,
          title: "Rapid Deployment",
          description: "Agents configured and live within 4 weeks. From design to deployment, we handle the entire process."
        },
        {
          icon: FileText,
          title: "Full Transparency",
          description: "Detailed usage and performance reports with continuous improvement and feature updates included."
        }
      ]
    },
    fr: {
      title: "Pourquoi Choisir Feranse?",
      subtitle: "Gestion complète d'agents IA avec des résultats garantis",
      features: [
        {
          icon: Shield,
          title: "Aucune Plateforme Supplémentaire",
          description: "Évitez les licences de logiciels RPA et les déploiements complexes. Déployez facilement des agents dans votre cloud privé ou laissez Feranse l'héberger pour vous."
        },
        {
          icon: TrendingUp,
          title: "Résultats Garantis",
          description: "Chaque agent est contractuellement lié à l'atteinte de son objectif défini avec une transparence et une responsabilité totales."
        },
        {
          icon: Settings,
          title: "Évolutif et Flexible",
          description: "Ajoutez, modifiez ou retirez des agents facilement selon l'évolution de vos besoins. Aucun verrouillage de plateforme ou migration complexe."
        },
        {
          icon: Zap,
          title: "Coût Prévisible",
          description: "Frais mensuels fixes par agent—aucun dépassement surprise. Budgétisez en toute confiance et évoluez selon vos besoins."
        },
        {
          icon: Clock,
          title: "Déploiement Rapide",
          description: "Agents configurés et en ligne dans les 4 semaines. De la conception au déploiement, nous gérons tout le processus."
        },
        {
          icon: FileText,
          title: "Transparence Totale",
          description: "Rapports détaillés d'utilisation et de performance avec amélioration continue et mises à jour de fonctionnalités incluses."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content[language].features.map((feature, index) => (
            <Card key={index} className="border border-purple-100 hover:border-purple-200 transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
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
