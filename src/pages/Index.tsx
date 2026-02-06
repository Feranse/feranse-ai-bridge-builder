
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CustomerStory from "@/components/CustomerStory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Features language={language} />
      <div id="story">
        <CustomerStory language={language} />
      </div>
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
