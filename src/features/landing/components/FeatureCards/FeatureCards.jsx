import React, { useState } from 'react';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import styles from './FeatureCards.module.css';

/**
 * Tarjeta con efecto flip al hacer clic.
 */
const FlipCard = ({ children, backContent, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.flipCardContainer} ${className} ${isFlipped ? styles.isFlipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setIsFlipped(!isFlipped)}
    >
      <div className={styles.flipCardInner}>
        {/* Frente */}
        <div className={styles.flipCardFront}>
          {children}
        </div>

        {/* Reverso */}
        <div className={styles.flipCardBack}>
          <div className={styles.backHeader}>
            <RotateCcw size={12} className={styles.rotateIcon} />
            <span>SABER MÁS</span>
          </div>
          <div className={styles.backContent}>
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Sección de Feature Cards — 3 tarjetas interactivas.
 */
const FeatureCards = () => {
  return (
    <section className={styles.featuresSection} id="casos">

      {/* Tarjeta 1 — IA */}
      <FlipCard
        className={styles.lightCard}
        backContent={
          <>
            <h3>IA Personalizada</h3>
            <p>Entrenamiento exclusivo con tu data. Soporte 24/7 sin errores humanos.</p>
            <ul className={styles.backList}>
              <li>Aprendizaje continuo</li>
              <li>Filtro de leads</li>
              <li>WhatsApp & Web</li>
            </ul>
          </>
        }
      >
        <div className={styles.cardHeader}>
          <span className={styles.label}>LA IA</span>
          <h2>La IA aprende tu negocio.</h2>
          <p className={styles.cardBody}>
            Sube tu información una vez. Ella califica y filtra. Tú solo cierras la venta.
          </p>
        </div>
        <div className={styles.iconBtn} aria-label="Girar tarjeta">
          <ArrowUpRight size={16} />
        </div>
      </FlipCard>

      {/* Tarjeta 2 — UNAC (verde) */}
      <FlipCard
        className={styles.greenCard}
        backContent={
          <div className={styles.backContentDark}>
            <h3>Impacto UNAC</h3>
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+40%</span>
                <span className={styles.statLabel}>Ventas</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>-70%</span>
                <span className={styles.statLabel}>Tiempo</span>
              </div>
            </div>
          </div>
        }
      >
        <div className={styles.cardHeader}>
          <span className={styles.label}>CASO DE ÉXITO</span>
          <h2>UNAC ya lo usa.</h2>
          <p className={styles.cardBody}>
            Resultados reales en tiempo récord. Automatización que genera confianza.
          </p>
        </div>
        <div className={styles.iconBtn} aria-label="Girar tarjeta">
          <ArrowUpRight size={16} />
        </div>
      </FlipCard>

      {/* Tarjeta 3 — Plataforma */}
      <FlipCard
        className={styles.lightCard}
        backContent={
          <>
            <h3>Ecosistema</h3>
            <p>Dashboard intuitivo e integración nativa a CRM y WhatsApp API.</p>
            <ul className={styles.backList}>
              <li>CRM en tiempo real</li>
              <li>API Oficial</li>
              <li>Analítica</li>
            </ul>
          </>
        }
      >
        <div className={styles.cardHeader}>
          <span className={styles.label}>PLATAFORMA</span>
          <h2>Un solo lugar.</h2>
          <p className={styles.cardBody}>
            Leads. CRM. Automatizaciones. Todo conectado en una sola interfaz.
          </p>
        </div>
        <div className={styles.iconBtn} aria-label="Girar tarjeta">
          <ArrowUpRight size={16} />
        </div>
      </FlipCard>

    </section>
  );
};

export default FeatureCards;
