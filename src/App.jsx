import React from 'react';
import LandingPage from './features/landing/pages/LandingPage';
import CookieBanner from './shared/components/CookieBanner/CookieBanner';

/**
 * Componente raíz de la aplicación.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <CookieBanner />
    </div>
  );
}

export default App;
