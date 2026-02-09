import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Target, TrendingUp } from "lucide-react";

interface CustomerStoryProps {
  language: "en" | "fr";
}

const CustomerStory = ({ language }: CustomerStoryProps) => {
  const content = {
    en: {
      title: "Customer Success Story",
      subtitle: "How we automated product and Bill of Materials creation in a manufacturing ERP",
      challenge: {
        title: "Challenge",
        description:
          "A manufacturing client needed to create new products in their ERP system and then build detailed Bills of Materials (BoMs) for each product. This process required extensive manual data entry across multiple screens — repetitive clicks, copy-pasting specifications, and cross-referencing supplier data.",
        details: [
          "ERP: Manufacturing Cloud ERP",
          "Process: Product creation followed by BoM assembly",
          "Gap: Hours of manual clicks and data entry for each new product and its BoM",
        ],
      },
      solution: {
        title: "Solution: The Product & BoM Agent",
        subtitle: "Agent Design",
        objective:
          "Automatically create products in the ERP and assemble their Bills of Materials — eliminating repetitive manual data entry.",
        design: [
          "Reads product specifications from source data and creates the product record in the ERP",
          "Automatically builds the Bill of Materials with components, quantities, and sourcing details",
          "Validates all entries against business rules before committing changes",
        ],
      },
      results: {
        title: "Results & Value",
        achievements: [
          "Complete Automation: Zero manual clicks for product and BoM creation",
          "Productivity: Hours of repetitive data entry eliminated — team refocused on engineering and design",
          "Accuracy & Compliance: Eliminated human errors in BoM assembly with built-in validation",
          "Speed: New products with full BoMs created in minutes instead of hours",
        ],
      },
    },
    fr: {
      title: "Histoire de Réussite Client",
      subtitle: "Comment nous avons automatisé la création de produits et de nomenclatures dans un ERP manufacturier.",
      challenge: {
        title: "Défi",
        description:
          "Un client manufacturier devait créer de nouveaux produits dans son système ERP puis construire des nomenclatures (BoM) détaillées pour chaque produit. Ce processus nécessitait une saisie manuelle extensive sur plusieurs écrans — des clics répétitifs, du copier-coller de spécifications et la consultation croisée de données fournisseurs.",
        details: [
          "ERP : ERP Cloud Manufacturier",
          "Processus : Création de produit suivie de l'assemblage de la nomenclature",
          "Lacune : Des heures de clics manuels et de saisie de données pour la création de nouveaux produits",
        ],
      },
      solution: {
        title: "Solution : L'Agent Produit & Nomenclature",
        subtitle: "Design de l'Agent",
        objective:
          "Créer automatiquement des produits dans l'ERP et assembler leurs nomenclatures — en éliminant la saisie manuelle répétitive.",
        design: [
          "Lit les spécifications produit à partir des données sources et crée l'enregistrement produit dans l'ERP",
          "Construit automatiquement la nomenclature avec les composants, quantités et détails d'approvisionnement",
          "Valide toutes les entrées selon les règles métier avant de valider les changements",
        ],
      },
      results: {
        title: "Résultats et Valeur",
        achievements: [
          "Automatisation Complète : Zéro clic manuel dans l'ERP pour la création de produits et de nomenclatures",
          "Productivité : Des heures de saisie répétitive éliminées — l'équipe recentrée sur l'ingénierie et la conception",
          "Précision et Conformité : Élimination des erreurs humaines dans l'assemblage des nomenclatures grâce à la validation intégrée",
          "Rapidité : Nouveaux produits avec nomenclatures complètes créés en minutes au lieu d'heures",
        ],
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content[language].subtitle}</p>
        </div>

        {/* YouTube Video Embed */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/_SYGE8iYyEM?si=kzyvCuV59R0TFvE9"
              title="Customer Success Story Video"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
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
                <p className="text-sm font-medium text-gray-700 mb-2">{content[language].solution.subtitle}</p>
                <ul className="space-y-1">
                  {content[language].solution.design.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
      </div>
    </section>
  );
};

export default CustomerStory;
