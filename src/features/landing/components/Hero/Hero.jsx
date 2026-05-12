import React from 'react';
import Button, { ButtonIconWrapper } from '../../../../shared/components/Button/Button';
import Navbar from '../../../../shared/components/Navbar/Navbar';
import styles from './Hero.module.css';

/**
 * Componente Hero de Escalab.
 *
 * @returns {JSX.Element}
 */
const Hero = ({ onOpenOnboarding }) => {
  return (
    <header className={styles.heroSection}>
      <div className={styles.heroOverlay}>
        <Navbar onOpenOnboarding={onOpenOnboarding} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.srOnly}>Escalab: Inteligencia Artificial y Automatización de Ventas</span>
            Vende más.<br />
            <span className={styles.heroTitleAccent}>Responde menos.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Escalab automatiza tu proceso de ventas completo con IA —<br />
            desde el primer mensaje hasta el cierre.
          </p>

          <button
            id="hero-cta"
            className={styles.heroCta}
            onClick={onOpenOnboarding}
          >
            Empieza
            <span aria-hidden="true" className={styles.arrowIcon}>→</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;



