
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Target, TrendingUp } from "lucide-react";

interface CustomerStoryProps {
  language: 'en' | 'fr';
}

const CustomerStory = ({ language }: CustomerStoryProps) => {
  const content = {
    en: {
      title: "Customer Success Story",
      subtitle: "How we automated PO synchronization between ERP and MRP systems",
      challenge: {
        title: "Challenge",
        description: "Our first customer migrated their ERP and MRP systems to the cloud, integrating each platform's APIs. However, a key business process—synchronizing purchase order (PO) updates between their ERP and their MRP system—still required manual double entry.",
        details: [
          "ERP: Oracle Cloud",
          "MRP: Domain Specific Software", 
          "Gap: PO updates in ERP were not pushed to MRP, causing delays and data discrepancies"
        ]
      },
      solution: {
        title: "Solution: The PO Sync Agent",
        objective: "Ensure every PO update in Oracle ERP is automatically replicated in the MRP system.",
        design: [
          "Listens to PO change events in Oracle via API webhooks",
          "Transforms and validates data to match MRP requirements",
          "Extracts data from ERP with secured API calls to update the MRP system"
        ],
        deployment: "Hosted on Feranse's backend with enterprise-grade security and role-based access with audit logging for compliance."
      },
      results: {
        title: "Results & Value",
        achievements: [
          "Complete Automation: Zero manual data entry for PO updates",
          "Productivity: Gives time back to resources to focus on value added tasks",
          "Accuracy & Compliance: Eliminated human errors and ensured audit trails",
          "Cost Efficiency: $1000/month per automation versus a new RPA platform with integration and maintenance costs"
        ]
      },
      cta: "Ready to Automate Your Workflow?"
    },
    fr: {
      title: "Histoire de Succès Client",
      subtitle: "Comment nous avons automatisé la synchronisation des bons de commande entre les systèmes ERP et MRP",
      challenge: {
        title: "Défi",
        description: "Notre premier client a migré ses systèmes ERP et MRP vers le cloud, en intégrant les API de chaque plateforme. Cependant, un processus métier clé—la synchronisation des mises à jour de bons de commande (BC) entre leur ERP et leur système MRP—nécessitait encore une double saisie manuelle.",
        details: [
          "ERP : Oracle Cloud",
          "MRP : Logiciel Spécialisé par Domaine",
          "Lacune : Les mises à jour de BC dans l'ERP n'étaient pas poussées vers le MRP, causant des retards et des incohérences de données"
        ]
      },
      solution: {
        title: "Solution : L'Agent de Synchronisation BC",
        objective: "Assurer que chaque mise à jour de BC dans Oracle ERP soit automatiquement répliquée dans le système MRP.",
        design: [
          "Écoute les événements de changement de BC dans Oracle via des webhooks API",
          "Transforme et valide les données pour correspondre aux exigences MRP",
          "Extrait les données de l'ERP avec des appels API sécurisés pour mettre à jour le système MRP"
        ],
        deployment: "Hébergé sur le backend de Feranse avec une sécurité de niveau entreprise et un accès basé sur les rôles avec journalisation d'audit pour la conformité."
      },
      results: {
        title: "Résultats et Valeur",
        achievements: [
          "Automatisation Complète : Zéro saisie manuelle de données pour les mises à jour de BC",
          "Productivité : Redonne du temps aux ressources pour se concentrer sur les tâches à valeur ajoutée",
          "Précision et Conformité : Élimination des erreurs humaines et assurance de pistes d'audit",
          "Efficacité des Coûts : 1000$/mois par automatisation versus une nouvelle plateforme RPA avec les coûts d'intégration et de maintenance"
        ]
      },
      cta: "Prêt à Automatiser Votre Flux de Travail ?"
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Challenge */}
          <Card className="border border-red-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-red-600">{content[language].challenge.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{content[language].challenge.description}</p>
              <ul className="space-y-2">
                {content[language].challenge.details.map((detail, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border border-blue-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-600">{content[language].solution.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm font-medium text-gray-700">{content[language].solution.objective}</p>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Agent Design:</p>
                <ul className="space-y-1">
                  {content[language].solution.design.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <p className="text-sm text-gray-600">{content[language].solution.deployment}</p> */}
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border border-green-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-600">{content[language].results.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content[language].results.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {content[language].cta}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Partner with Feranse to design your tailored AI agents—contact us at contact@feranse.com or visit www.feranse.com to schedule a discovery call."
              : "Partenariat avec Feranse pour concevoir vos agents IA sur mesure—contactez-nous à contact@feranse.com ou visitez www.feranse.com pour planifier un appel de découverte."
            }
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default CustomerStory;
