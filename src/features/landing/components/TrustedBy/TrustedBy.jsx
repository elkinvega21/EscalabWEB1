import React from 'react';
import styles from './TrustedBy.module.css';

/**
 * Componente TrustedBy — Carrusel infinito de marcas patrocinadoras.
 *
 * @returns {JSX.Element}
 */
const TrustedBy = () => {
  // Array de marcas de ejemplo (se duplicará para el efecto infinito)
  const brands = [
    "NISSAN",
    "DANONE",
    "Coca-Cola",
    "HSBC",
    "Johnson & Johnson",
    "Rockwell Automation",
    "LIVE NATION"
  ];

  return (
    <section className={styles.trustedSection} aria-label="Empresas que confían en nosotros">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Más de dos décadas impulsando las empresas líderes del mundo
        </h2>
        
        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack}>
            {/* Renderizamos la lista dos veces para crear la ilusión de scroll infinito */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className={styles.brandItem}>
                <span className={styles.brandText}>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
