import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/**
 * Componente Footer.
 *
 * Footer minimalista de Escalab con enlaces legales.
 *
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerContent}>
        <span className={styles.footerLogo}>Escalab</span>
        
        <div className={styles.legalLinks}>
          <Link to="/privacidad" className={styles.legalLink}>Política de Privacidad</Link>
          <span className={styles.separator}>·</span>
          <Link to="/terminos" className={styles.legalLink}>Términos y Condiciones</Link>
        </div>

        <span className={styles.footerMeta}>Medellín · 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
