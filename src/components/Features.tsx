
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, RefreshCw, Zap } from "lucide-react";

interface FeaturesProps {
  language: 'en' | 'fr';
}

const Features = ({ language }: FeaturesProps) => {
  const content = {
    en: {
      title: "Why Choose Feranse?",
      subtitle: "Enterprise-grade AI agents built on three core pillars",
      features: [
        {
          icon: Shield,
          title: "Security",
          description: "Our agents run as containerized services that can be deployed anywhere — on-premises in your own container runtime or cloud-hosted as a SaaS by Feranse. Bring your own LLM API keys or use our inference. Manage your AI agents like regular employees through your existing IAM systems like Active Directory, with full role-based access control."
        },
        {
          icon: RefreshCw,
          title: "Consistency",
          description: "Our adaptive AI engine agentically heals running processes when they break, guided by the business goals and objectives defined for each agent. Deep monitoring and tracking give you a constant, real-time view of every execution step of your digital work — so nothing slips through the cracks."
        },
        {
          icon: Zap,
          title: "Fast",
          description: "Lightning-fast delivery from design to deployment. Our agents save your team hours of repetitive ERP clicks every day. We're committed to saving companies time through click automation — from how fast we deploy and fix to getting the work done right, so your team can focus on what matters most."
        }
      ]
    },
    fr: {
      title: "Pourquoi Choisir Feranse?",
      subtitle: "Agents IA de niveau entreprise construits sur trois piliers fondamentaux",
      features: [
        {
          icon: Shield,
          title: "Sécurité",
          description: "Nos agents fonctionnent comme des services conteneurisés déployables partout — sur site dans votre propre environnement de conteneurs ou hébergés dans le cloud en SaaS par Feranse. Apportez vos propres clés API LLM ou utilisez notre inférence. Gérez vos agents IA comme des employés réguliers via vos systèmes IAM existants comme Active Directory, avec un contrôle d'accès complet basé sur les rôles."
        },
        {
          icon: RefreshCw,
          title: "Consistance",
          description: "Notre moteur IA adaptatif répare automatiquement les processus en cours d'exécution lorsqu'ils tombent en panne, guidé par les objectifs métier définis pour chaque agent. Une surveillance et un suivi approfondis vous offrent une vue constante et en temps réel de chaque étape d'exécution de votre travail numérique — rien ne passe entre les mailles du filet."
        },
        {
          icon: Zap,
          title: "Rapide",
          description: "Livraison ultra-rapide de la conception au déploiement. Nos agents font gagner des heures de clics ERP répétitifs chaque jour à votre équipe. Nous nous engageons à faire gagner du temps aux entreprises grâce à l'automatisation des clics — de la rapidité de déploiement et de correction à l'exécution du travail, pour que votre équipe puisse se concentrer sur ce qui compte le plus."
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
