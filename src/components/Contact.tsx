
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  language: 'en' | 'fr';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      cardtitle: "Contact Information",
      secondcardtitle: "Send us a Message",
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
        email: "contact@feranse.com",
        phone: "N/A",
        address: "Montreal, Quebec, Canada"
      },
      cta: "Schedule a free consultation to see how Feranse can eliminate your digital gaps.",
      success: "Message sent successfully! We'll get back to you soon.",
      error: "Failed to send message. Please try again."
    },
    fr: {
      cardtitle: "Coordonnées",
      secondcardtitle: "Envoyez-nous un Message",
      title: "Prêt à Transformer Votre Entreprise?",
      subtitle: "Contactez notre équipe pour discuter de vos besoins d'automatisation",
      form: {
        name: "Nom Complet",
        email: "Courriel",
        company: "Nom de l'Entreprise", 
        message: "Parlez-nous de vos défis d'automatisation",
        submit: "Envoyer le Message"
      },
      info: {
        email: "contact@feranse.com",
        phone: "N/A",
        address: "Montréal, Québec, Canada"
      },
      cta: "Planifiez une consultation gratuite pour voir comment Feranse peut éliminer vos lacunes numériques.",
      success: "Message envoyé avec succès! Nous vous répondrons bientôt.",
      error: "Échec de l'envoi du message. Veuillez réessayer."
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
New contact form submission from Feranse website:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Message: ${formData.message}
      `;

      // Use mailto link as a fallback solution
      const mailtoLink = `mailto:contact@feranse.com?subject=Website Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Show success message
      toast({
        title: "Success!",
        description: content[language].success,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: content[language].error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
                <CardTitle className="text-xl font-semibold">{content[language].cardtitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{content[language].info.email}</span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">{content[language].info.phone}</span>
                </div> */}
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
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ20FcG0ptZMsPnGoASbx3UKDTBBKdLrATZJns_kD5VpZKw3-W15iu2skRoxaJtqCN7WctpW7V2-?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Book an Appointment"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
