import React from 'react';
import styles from './Footer.module.css';

/**
 * Componente Footer.
 *
 * Footer ultra-minimalista de Escalab.
 * Solo el nombre de la marca y la ubicación/año.
 * Filosofía: las marcas tech premium no necesitan más.
 *
 * @returns {JSX.Element}
 */
const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <span className={styles.footerLogo}>Escalab</span>
      <span className={styles.footerMeta}>Medellín · 2025</span>
    </footer>
  );
};

export default Footer;
