
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactProps {
  language: 'en' | 'fr';
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      title: "Ready to Transform Your Business?",
      subtitle: "Get in touch with our team to discuss your automation needs",
      form: {
        name: "Full Name",
        email: "Email Address", 
        company: "Company Name",
        message: "Tell us about your automation challenges",
        submit: "Send Message"
      },
      info: {
        email: "hello@feranse.com",
        phone: "+1 (514) 123-4567",
        address: "Montreal, Quebec, Canada"
      },
      cta: "Schedule a free consultation to see how Feranse can eliminate your digital gaps."
    },
    fr: {
      title: "Prêt à Transformer Votre Entreprise?",
      subtitle: "Contactez notre équipe pour discuter de vos besoins d'automatisation",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        company: "Nom de l'Entreprise", 
        message: "Parlez-nous de vos défis d'automatisation",
        submit: "Envoyer le Message"
      },
      info: {
        email: "bonjour@feranse.com",
        phone: "+1 (514) 123-4567",
        address: "Montréal, Québec, Canada"
      },
      cta: "Planifiez une consultation gratuite pour voir comment Feranse peut éliminer vos lacunes numériques."
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{content[language].info.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{content[language].info.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{content[language].info.address}</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 italic">
                    {content[language].cta}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input 
                    placeholder={content[language].form.name}
                    className="w-full"
                  />
                  <Input 
                    type="email"
                    placeholder={content[language].form.email}
                    className="w-full"
                  />
                  <Input 
                    placeholder={content[language].form.company}
                    className="w-full"
                  />
                  <Textarea 
                    placeholder={content[language].form.message}
                    rows={4}
                    className="w-full resize-none"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                    {content[language].form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
