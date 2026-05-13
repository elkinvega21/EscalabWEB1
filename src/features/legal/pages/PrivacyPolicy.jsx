import React, { useEffect } from 'react';
import Navbar from '../../../shared/components/Navbar/Navbar';
import Footer from '../../landing/components/Footer/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme="light" onOpenOnboarding={() => window.location.href = '/'} />
      <main style={{ flex: 1, maxWidth: '800px', margin: '120px auto 80px', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>Política de Privacidad</h1>
        <div style={{ fontFamily: 'var(--font-body)', lineHeight: '1.8', color: 'var(--dark-text)', opacity: 0.8 }}>
          <p>Última actualización: Mayo 2025</p>
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>1. Información que recopilamos</h2>
          <p>Recopilamos información personal que usted nos proporciona voluntariamente al registrarse en la plataforma, expresar interés en obtener información sobre nosotros o nuestros productos y servicios. Esta información incluye nombres, números de teléfono, direcciones de correo electrónico y datos sobre su empresa.</p>
          
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>2. Uso de su información</h2>
          <p>Usamos la información personal recopilada a través de nuestra plataforma para ponernos en contacto con usted y enviarle información relevante para la implementación de nuestros agentes de inteligencia artificial y automatización de ventas.</p>
          
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>3. Compartir su información</h2>
          <p>Solo compartimos información con su consentimiento, para cumplir con las leyes, para brindarle servicios, proteger sus derechos o cumplir con obligaciones comerciales. No vendemos sus datos personales a terceros.</p>
          
          <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>4. Sus derechos</h2>
          <p>Dependiendo de su ubicación, puede tener derechos sobre sus datos personales, como solicitar acceso, rectificación o eliminación. Para ejercer estos derechos, puede contactarnos directamente.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
