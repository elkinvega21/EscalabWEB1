import React, { useEffect } from 'react';
import Navbar from '../../../shared/components/Navbar/Navbar';
import Footer from '../../landing/components/Footer/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme="light" onOpenOnboarding={() => window.location.href = '/'} />
      <main style={{ flex: 1, maxWidth: '800px', margin: '120px auto 80px', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>Términos y Condiciones</h1>
        <div style={{ fontFamily: 'var(--font-body)', lineHeight: '1.8', color: 'var(--dark-text)', opacity: 0.8 }}>
          <p>Última actualización: Mayo 2025</p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>1. Aceptación de los términos</h2>
          <p>Al acceder y utilizar los servicios de Escalab, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá utilizar nuestros servicios.</p>
          
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>2. Servicios de IA y Automatización</h2>
          <p>Escalab provee servicios de software (SaaS) y consultoría en automatización de ventas mediante Inteligencia Artificial. Nos reservamos el derecho de modificar o discontinuar el servicio (o cualquier parte del mismo) sin previo aviso.</p>
          
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>3. Responsabilidad del Usuario</h2>
          <p>Usted es responsable de mantener la confidencialidad de su cuenta y de toda la información suministrada al sistema de Inteligencia Artificial. No debe usar nuestros servicios para fines ilegales o no autorizados.</p>
          
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>4. Limitación de Responsabilidad</h2>
          <p>En ningún caso Escalab será responsable de daños indirectos, incidentales, especiales, consecuentes o punitivos, o de cualquier pérdida de beneficios o ingresos, en relación con el uso de nuestros agentes de IA y sistemas CRM.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
