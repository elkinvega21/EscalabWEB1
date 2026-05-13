import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './features/landing/pages/LandingPage';
import CookieBanner from './shared/components/CookieBanner/CookieBanner';
import PrivacyPolicy from './features/legal/pages/PrivacyPolicy';
import TermsOfService from './features/legal/pages/TermsOfService';

/**
 * Componente raíz de la aplicación con enrutamiento B2B.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsOfService />} />
      </Routes>
      <CookieBanner />
    </div>
  );
}

export default App;
