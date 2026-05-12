import React from 'react';
import styles from './Caso.module.css';

/**
 * Componente Caso estático.
 *
 * @returns {JSX.Element}
 */
const Caso = () => {
  return (
    <section className={styles.casoSection}>
      <div className={styles.casoCard}>
        {/* Contenido textual */}
        <div className={styles.casoContent}>
          <p className={styles.clientName}>UNAC</p>
          <p className={styles.casoText}>
            Cientos de mensajes al día. Un equipo que no daba abasto.
            Hoy solo hablan con quienes ya quieren inscribirse.
          </p>
        </div>

        {/* Imagen del caso */}
        <div className={styles.casoImage}>
          <div
            className={styles.imagePlaceholder}
            role="img"
            aria-label="Imagen del caso de éxito UNAC"
          >
            <span>[Imagen UNAC]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Caso;

