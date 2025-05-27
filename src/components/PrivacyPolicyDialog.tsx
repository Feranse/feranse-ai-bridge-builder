
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  language: 'en' | 'fr';
}

const PrivacyPolicyDialog = ({ open, onOpenChange, language }: PrivacyPolicyDialogProps) => {
  const content = {
    en: {
      title: "Confidentiality and Privacy Policy",
      lastUpdated: "Last updated: May 27, 2025",
      sections: {
        intro: "This Confidentiality and Privacy Policy (\"Policy\") explains how we collect, use, disclose, retain and protect the personal information of visitors to our website and customers of our AI-agency services. We are committed to maintaining the highest standards of confidentiality and data security.",
        scope: {
          title: "1. Scope",
          content: "This Policy applies to:\n• Website visitors who browse our public site;\n• Prospective and current customers who contact us or engage our AI services."
        },
        tracking: {
          title: "2. No Tracking, No Cookies", 
          content: "We do not deploy cookies, web beacons, analytics tools, or any form of visitor tracking on our website.\n\nWe do not collect IP addresses, browsing history, device fingerprints, or any data for profiling or marketing purposes."
        },
        collection: {
          title: "3. Information We Collect",
          content: "We collect only the information necessary to respond to inquiries and to deliver our AI-agency services. Specifically:\n\n• Contact form or email: Full name, Email address, Company name (optional), Message or inquiry details\n• Customer onboarding: Full name(s) of project contacts, Business name and address, Email and phone number, Project requirements and scope\n• Billing & payments: Billing contact name, Billing address, Payment method details\n• Service delivery: Files or data you upload for processing, Logs of communications\n\nNote: We do not collect sensitive personal data (e.g. social insurance numbers, health information, or biometrics)."
        },
        usage: {
          title: "4. How We Use Your Information",
          content: "Your information is used exclusively to:\n• Respond to your inquiries and requests;\n• Onboard you as a customer and set up your project;\n• Deliver and customize our AI services according to your requirements;\n• Process billing and payments;\n• Maintain records to support ongoing service and comply with any legal obligations.\n\nWe will never use your data for unsolicited marketing or share it for profiling purposes without your explicit consent."
        },
        disclosure: {
          title: "5. Disclosure to Service Providers",
          content: "We share your information only with trusted third-party providers who are essential to service delivery, such as:\n• Payment processors for secure handling of billing transactions;\n• Cloud hosting platforms for data storage and computation;\n• Communication tools if needed to collaborate on your project.\n\nAll providers are contractually bound to confidentiality and are prohibited from using your information for any other purpose."
        },
        retention: {
          title: "6. Data Retention",
          content: "We keep your personal information only as long as needed to fulfill the purposes described above, or as required by law. When information is no longer necessary, we will securely delete or anonymize it."
        },
        security: {
          title: "7. Security Measures",
          content: "We employ appropriate organizational and technical safeguards, including:\n• Encryption of data both in transit (e.g. TLS) and at rest;\n• Strict access controls and password protections;\n• Regular security audits and staff training on data confidentiality;\n• Vendor assessments to ensure third-party compliance with our security standards."
        },
        rights: {
          title: "8. Your Rights",
          content: "You have the right to:\n• Access the personal information we hold about you;\n• Correct or update any inaccurate or incomplete data;\n• Request deletion of your information when it is no longer needed;\n• Withdraw consent for any processing activities based on consent.\n\nTo exercise these rights, please contact us using the details below. We will respond promptly and in accordance with applicable timelines."
        },
        updates: {
          title: "9. Updates to This Policy",
          content: "We may revise this Policy to reflect changes in our practices or legal requirements. The \"Last updated\" date at the top will indicate when changes take effect. If we make significant changes, we will notify you by posting the new Policy on our website."
        },
        contact: {
          title: "10. Contact Us",
          content: "If you have any questions, concerns or requests regarding this Policy or our privacy practices, please reach out to:\n\nPrivacy officer\nEric Martineau\nprivacy@feranse.com\n\nFeranse Inc.\n185 rue du Séminaire, #805\nMontréal, Québec\nH3C 2A3"
        }
      }
    },
    fr: {
      title: "Politique de Confidentialité et de Vie Privée",
      lastUpdated: "Dernière mise à jour: 27 mai 2025",
      sections: {
        intro: "Cette Politique de Confidentialité et de Vie Privée (\"Politique\") explique comment nous collectons, utilisons, divulguons, conservons et protégeons les informations personnelles des visiteurs de notre site Web et des clients de nos services d'agence IA. Nous nous engageons à maintenir les plus hauts standards de confidentialité et de sécurité des données.",
        scope: {
          title: "1. Portée",
          content: "Cette Politique s'applique à:\n• Les visiteurs du site Web qui naviguent sur notre site public;\n• Les clients potentiels et actuels qui nous contactent ou utilisent nos services IA."
        },
        tracking: {
          title: "2. Aucun Suivi, Aucun Cookie",
          content: "Nous ne déployons pas de cookies, de balises Web, d'outils d'analyse ou de toute forme de suivi des visiteurs sur notre site Web.\n\nNous ne collectons pas d'adresses IP, d'historique de navigation, d'empreintes d'appareils ou de données à des fins de profilage ou de marketing."
        },
        collection: {
          title: "3. Informations que Nous Collectons",
          content: "Nous collectons uniquement les informations nécessaires pour répondre aux demandes et fournir nos services d'agence IA. Spécifiquement:\n\n• Formulaire de contact ou e-mail: Nom complet, Adresse e-mail, Nom de l'entreprise (optionnel), Détails du message ou de la demande\n• Intégration client: Nom(s) complet(s) des contacts de projet, Nom et adresse de l'entreprise, E-mail et numéro de téléphone, Exigences et portée du projet\n• Facturation et paiements: Nom du contact de facturation, Adresse de facturation, Détails de méthode de paiement\n• Livraison de service: Fichiers ou données que vous téléchargez pour traitement, Journaux de communications\n\nNote: Nous ne collectons pas de données personnelles sensibles (par exemple, numéros d'assurance sociale, informations de santé ou biométrie)."
        },
        usage: {
          title: "4. Comment Nous Utilisons Vos Informations",
          content: "Vos informations sont utilisées exclusivement pour:\n• Répondre à vos demandes et requêtes;\n• Vous intégrer en tant que client et configurer votre projet;\n• Livrer et personnaliser nos services IA selon vos exigences;\n• Traiter la facturation et les paiements;\n• Maintenir des dossiers pour soutenir le service continu et se conformer à toute obligation légale.\n\nNous n'utiliserons jamais vos données pour du marketing non sollicité ou ne les partagerons à des fins de profilage sans votre consentement explicite."
        },
        disclosure: {
          title: "5. Divulgation aux Fournisseurs de Services",
          content: "Nous partageons vos informations uniquement avec des fournisseurs tiers de confiance qui sont essentiels à la livraison de service, tels que:\n• Processeurs de paiement pour la gestion sécurisée des transactions de facturation;\n• Plateformes d'hébergement cloud pour le stockage et le calcul de données;\n• Outils de communication si nécessaire pour collaborer sur votre projet.\n\nTous les fournisseurs sont contractuellement liés à la confidentialité et interdits d'utiliser vos informations à toute autre fin."
        },
        retention: {
          title: "6. Conservation des Données",
          content: "Nous conservons vos informations personnelles seulement aussi longtemps que nécessaire pour accomplir les objectifs décrits ci-dessus, ou comme requis par la loi. Lorsque les informations ne sont plus nécessaires, nous les supprimerons ou les anonymiserons de manière sécurisée."
        },
        security: {
          title: "7. Mesures de Sécurité",
          content: "Nous employons des protections organisationnelles et techniques appropriées, incluant:\n• Chiffrement des données en transit (ex. TLS) et au repos;\n• Contrôles d'accès stricts et protections par mot de passe;\n• Audits de sécurité réguliers et formation du personnel sur la confidentialité des données;\n• Évaluations de fournisseurs pour assurer la conformité des tiers avec nos standards de sécurité."
        },
        rights: {
          title: "8. Vos Droits",
          content: "Vous avez le droit de:\n• Accéder aux informations personnelles que nous détenons à votre sujet;\n• Corriger ou mettre à jour toute donnée inexacte ou incomplète;\n• Demander la suppression de vos informations lorsqu'elles ne sont plus nécessaires;\n• Retirer le consentement pour toute activité de traitement basée sur le consentement.\n\nPour exercer ces droits, veuillez nous contacter en utilisant les détails ci-dessous. Nous répondrons rapidement et conformément aux délais applicables."
        },
        updates: {
          title: "9. Mises à Jour de Cette Politique",
          content: "Nous pouvons réviser cette Politique pour refléter les changements dans nos pratiques ou exigences légales. La date \"Dernière mise à jour\" en haut indiquera quand les changements prennent effet. Si nous apportons des changements significatifs, nous vous en informerons en publiant la nouvelle Politique sur notre site Web."
        },
        contact: {
          title: "10. Nous Contacter",
          content: "Si vous avez des questions, préoccupations ou demandes concernant cette Politique ou nos pratiques de confidentialité, veuillez nous contacter:\n\nAgent de confidentialité\nEric Martineau\nprivacy@feranse.com\n\nFeranse Inc.\n185 rue du Séminaire, #805\nMontréal, Québec\nH3C 2A3"
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{currentContent.title}</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            {currentContent.lastUpdated}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <p className="text-gray-700 leading-relaxed">
              {currentContent.sections.intro}
            </p>
            
            {Object.entries(currentContent.sections).map(([key, section]) => {
              if (key === 'intro') return null;
              return (
                <div key={key} className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
