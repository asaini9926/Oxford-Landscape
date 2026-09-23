import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import ProjectsGallery from './components/ProjectsGallery';
import TestimonialsAndTeam from './components/TestimonialsAndTeam';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <ProjectsGallery />
        <TestimonialsAndTeam />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
