import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

/**
 * Navbar principal de Escalab.
 * 
 * @returns {JSX.Element}
 */
const Navbar = ({ onOpenOnboarding, theme = 'dark' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (e, target) => {
    closeMenu();
    // Smooth scroll handles naturally by href
  };

  return (
    <nav className={`${styles.navbar} ${theme === 'light' ? styles.themeLight : ''}`} role="navigation" aria-label="Navegación principal">
      {/* Logotipo */}
      <a href="/" className={styles.logo} aria-label="Escalab — Inicio">
        <div className={styles.logoMark} aria-hidden="true">E</div>
        Escalab
      </a>

      {/* Links de navegación - Desktop */}
      <ul className={styles.navLinks}>
        <li><a href="#plataforma">Plataforma</a></li>
        <li><a href="#casos">Casos</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
      </ul>

      {/* CTA principal - Desktop */}
      <div className={styles.navActions}>
        <a 
          href="https://calendly.com/elkindario2121" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.navSecondaryCta}
        >
          Agendar Demo
        </a>
        <button 
          id="nav-cta"
          className={styles.navCta}
          onClick={onOpenOnboarding}
        >
          Empieza <span aria-hidden="true">→</span>
        </button>

        {/* Botón menú móvil */}
        <button 
          className={styles.menuToggle} 
          onClick={toggleMenu}
          aria-label="Alternar menú"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay de menú móvil */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.isOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li><a href="#plataforma" onClick={handleLinkClick}>Plataforma</a></li>
          <li><a href="#casos" onClick={handleLinkClick}>Casos</a></li>
          <li><a href="#nosotros" onClick={handleLinkClick}>Nosotros</a></li>
          <li>
            <a 
              href="https://calendly.com/elkindario2121" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileSecondaryCta}
            >
              Agendar Demo
            </a>
          </li>
          <li>
            <button 
              className={styles.mobileCta}
              onClick={() => { onOpenOnboarding(); closeMenu(); }}
            >
              Empieza ahora
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;




