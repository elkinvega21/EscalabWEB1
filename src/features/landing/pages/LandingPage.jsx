import React from 'react';
import Hero from '../components/Hero/Hero';
import TryAI from '../components/TryAI/TryAI';
import Platform from '../components/Platform/Platform';
import Nosotros from '../components/Nosotros/Nosotros';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import Contacto from '../components/Contacto/Contacto';
import Footer from '../components/Footer/Footer';
import Comparison from '../components/Comparison/Comparison';
import CRMIntegration from '../components/CRMIntegration/CRMIntegration';
import OnboardingModal from '../components/OnboardingModal/OnboardingModal';
import FAQ from '../components/FAQ/FAQ';

/**
 * Página principal de Escalab (Landing Page).
 */
const LandingPage = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = React.useState(false);
  const [modalSkipInfo, setModalSkipInfo] = React.useState(false);
  const [initialLeadData, setInitialLeadData] = React.useState(null);
  
  const openOnboarding = () => {
    setModalSkipInfo(false);
    setInitialLeadData(null);
    setIsOnboardingOpen(true);
  };

  const openOnboardingWithSkip = (leadData) => {
    setModalSkipInfo(true);
    setInitialLeadData(leadData);
    setIsOnboardingOpen(true);
  };

  const closeOnboarding = () => setIsOnboardingOpen(false);

  return (
    <main id="main-content" role="main">
      <OnboardingModal 
        isOpen={isOnboardingOpen} 
        onClose={closeOnboarding} 
        skipContactInfo={modalSkipInfo} 
        initialLeadData={initialLeadData}
      />

      <section aria-label="Hero principal">
        <Hero onOpenOnboarding={openOnboarding} />
      </section>

      <section aria-label="Prueba nuestra IA">
        <TryAI onLeadCaptured={openOnboardingWithSkip} />
      </section>

      <section aria-label="Plataforma Escalab">
        <Platform />
      </section>

      <Comparison />

      <CRMIntegration onOpenOnboarding={openOnboarding} />

      <section aria-label="Quiénes somos">
        <Nosotros />
      </section>

      <TrustedBy />

      <section aria-label="Preguntas Frecuentes">
        <FAQ />
      </section>

      <section aria-label="Contacto">
        <Contacto />
      </section>

      <footer>
        <Footer />
      </footer>

    </main>
  );
};

export default LandingPage;




