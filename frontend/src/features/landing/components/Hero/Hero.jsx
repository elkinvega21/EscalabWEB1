import React, { useState, useEffect } from 'react';
import Button, { ButtonIconWrapper } from '../../../../shared/components/Button/Button';
import Navbar from '../../../../shared/components/Navbar/Navbar';
import styles from './Hero.module.css';

/**
 * Componente Hero de Escalab.
 *
 * @returns {JSX.Element}
 */
const Hero = ({ onOpenOnboarding }) => {
  const phrases = [
    "Responde menos.",
    "Crece más rápido.",
    "Ahorra tiempo.",
    "Automatiza todo.",
    "Escala sin límites."
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = phrases[currentPhraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
        }
      }, 80);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <header className={styles.heroSection}>
      <div className={styles.heroOverlay}>
        <Navbar onOpenOnboarding={onOpenOnboarding} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.srOnly}>Escalab: Inteligencia Artificial y Automatización de Ventas</span>
            Vende más.<br />
            <span className={styles.heroTitleAccent}>
              {currentText}
              <span className={styles.cursor}>|</span>
            </span>
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



