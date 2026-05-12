import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';
import Button from '../Button/Button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificamos si el usuario ya aceptó o rechazó las cookies previamente
    const cookieConsent = localStorage.getItem('escalab_cookie_consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('escalab_cookie_consent', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('escalab_cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBannerOverlay}>
      <div className={styles.cookieBanner}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Valoramos tu privacidad</h3>
            <p className={styles.description}>
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios, personalizar tu experiencia y analizar el tráfico de nuestro sitio web. Al hacer clic en "Aceptar", consientes el uso de todas las cookies.
            </p>
          </div>
          <div className={styles.actions}>
            <button className={styles.declineButton} onClick={declineCookies}>
              Rechazar
            </button>
            <Button variant="primary" onClick={acceptCookies} className={styles.acceptButton}>
              Aceptar cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
