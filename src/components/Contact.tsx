import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  language: "en" | "fr";
}

const CalendarButton = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      if (buttonRef.current && (window as any).calendar?.schedulingButton) {
        buttonRef.current.innerHTML = "";
        (window as any).calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2AHT2d0iQ9lq60Q2oTNt1W9iyifal8QG3vygQWv53aSeKtgCqNVcqGlhz8QaTVE8Pr8F_u48bi?gv=true",
          color: "#039BE5",
          label: "Book an appointment",
          target: buttonRef.current,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (buttonRef.current) {
        buttonRef.current.innerHTML = "";
      }
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={buttonRef} />;
};

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
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
        submit: "Send Message",
      },
      info: {
        email: "contact@feranse.com",
        phone: "+1 (438) 842-1390",
        address: "Montreal, Quebec, Canada",
      },
      bookTitle: "Book a Meeting With Us Today!",
      bookMessage1: "Let's discuss how Feranse can help automate your repetitive ERP tasks and digital labour.",
      bookMessage2: "No consulting fees, no change management required.",
      success: "Message sent successfully! We'll get back to you soon.",
      error: "Failed to send message. Please try again.",
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
        submit: "Envoyer le Message",
      },
      info: {
        email: "contact@feranse.com",
        phone: "+1 (514) 000-0000",
        address: "Montréal, Québec, Canada",
      },
      bookTitle: "Réservez une Rencontre Avec Nous Aujourd'hui!",
      bookMessage1:
        "Discutons de la façon dont Feranse peut vous aider à automatiser vos tâches ERP répétitives et votre travail numérique.",
      bookMessage2: "Sans frais de consultation ni gestion du changement.",
      success: "Message envoyé avec succès! Nous vous répondrons bientôt.",
      error: "Échec de l'envoi du message. Veuillez réessayer.",
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content[language].title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content[language].subtitle}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto">
          <Card className="flex-1 max-w-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{content[language].cardtitle}</CardTitle>
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
            </CardContent>
          </Card>

          <Card className="flex-1 max-w-md">
            <CardContent className="pt-6 text-center space-y-4 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-900">{content[language].bookTitle}</h3>
              <p className="text-gray-600">
                {content[language].bookMessage1}
                <br />
                {content[language].bookMessage2}
              </p>
              <div className="flex justify-center pt-2">
                <CalendarButton />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
