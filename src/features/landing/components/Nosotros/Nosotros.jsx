import React from 'react';
import styles from './Nosotros.module.css';

/**
 * Componente Nosotros — ADN Escalab.
 * Basado en un diseño de grilla asimétrica y de alto impacto.
 *
 * @returns {JSX.Element}
 */
const Nosotros = () => {
  return (
    <section className={styles.nosotrosSection} id="nosotros">
      <div className={styles.container}>
        
        {/* Top Header Section */}
        <div className={styles.headerLayout}>
          <div className={styles.headerLeft}>
            <span className={styles.badge}>CULTURA - ESCALAB</span>
            <h2 className={styles.mainTitle}>
              Nuestro<br/>ADN.
            </h2>
          </div>
          
          <div className={styles.headerRight}>
            <p className={styles.description}>
              Escalab no es solo una herramienta de automatización. Es nuestra 
              respuesta a un mundo que se mueve demasiado rápido. Creemos en 
              devolver el tiempo a quienes construyen el futuro, eliminando lo 
              repetitivo para dar espacio a lo extraordinario.
            </p>
            <button className={styles.readMoreBtn}>Conocer más</button>
          </div>
        </div>

        {/* Middle Images Section */}
        <div className={styles.imagesGrid}>
          {/* Card 1: Colored overlay */}
          <div className={styles.imageCard}>
            <img 
              src="/opt-card1.jpg" 
              alt="Equipo Escalab" 
              className={styles.bgImage} 
              loading="lazy" 
              decoding="async" 
            />
            <div className={styles.overlayColor}>
              <div className={styles.starIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Resultados reales</h3>
              <p className={styles.cardText}>
                Nuestra esencia es simple: eliminar la fricción para que tu negocio escale sin límites.
              </p>
            </div>
          </div>

          {/* Card 2: Grayscale */}
          <div className={styles.imageCard}>
            <img 
              src="/opt-card2.jpg" 
              alt="Trabajo en equipo" 
              className={`${styles.bgImage} ${styles.grayscale}`} 
              loading="lazy" 
              decoding="async" 
            />
          </div>

          {/* Card 3: Grayscale */}
          <div className={styles.imageCard}>
            <img 
              src="/opt-card3.jpg" 
              alt="Impacto" 
              className={`${styles.bgImage} ${styles.grayscale}`} 
              loading="lazy" 
              decoding="async" 
            />
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.gridPattern}></div>
          <div className={styles.statsHeader}>
            <span className={styles.greenBadge}>Juntos crecemos más rápido</span>
            <div className={styles.starIconRight}>
               <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
            </div>
            <div className={styles.starIconLeft}>
               <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
            </div>
            <h3 className={styles.statsTitle}>Juntos Somos Imparables</h3>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>+30%</span>
              <p className={styles.statDesc}>
                aumento en conversiones usando automatizaciones
              </p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10k+</span>
              <p className={styles.statDesc}>
                leads calificados procesados diariamente
              </p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <p className={styles.statDesc}>
                atención y seguimiento ininterrumpido
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Nosotros;
