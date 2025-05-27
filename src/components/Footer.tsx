import { useState } from "react";
import PrivacyPolicyDialog from "./PrivacyPolicyDialog";

interface FooterProps {
  language: 'en' | 'fr';
}

const Footer = ({ language }: FooterProps) => {
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);

  const content = {
    en: {
      company: "Feranse",
      tagline: "AI Agency - Montreal, Quebec",
      description: "Bridging digital transformation gaps with AI-powered automation solutions.",
      copyright: "© 2025 Feranse. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us"
      }
    },
    fr: {
      company: "Feranse Inc.", 
      tagline: "Agence IA - Montréal, Québec",
      description: "Combler les lacunes de la transformation numérique avec des solutions d'automatisation alimentées par l'IA.",
      copyright: "© 2025 Feranse. Tous droits réservés.",
      links: {
        privacy: "Politique de Confidentialité",
        terms: "Conditions de Service",
        contact: "Nous Contacter"
      }
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{content[language].company}</h3>
              <p className="text-purple-400 mb-4">{content[language].tagline}</p>
              <p className="text-gray-300 leading-relaxed">
                {content[language].description}
              </p>
            </div>
            
            <div className="md:col-span-2 flex flex-col md:flex-row justify-end">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <button 
                  onClick={() => setShowPrivacyDialog(true)}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-left"
                >
                  {content[language].links.privacy}
                </button>
                {/* <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  {content[language].links.terms}
                </a> */}
                {/* <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  {content[language].links.contact}
                </a> */}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">{content[language].copyright}</p>
          </div>
        </div>
      </footer>

      <PrivacyPolicyDialog 
        open={showPrivacyDialog}
        onOpenChange={setShowPrivacyDialog}
        language={language}
      />
    </>
  );
};

export default Footer;
