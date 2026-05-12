import React, { useState } from 'react';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import styles from './FeatureCards.module.css';

/**
 * Componente individual de tarjeta con rotación.
 */
const FlipCard = ({ children, backContent, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`${styles.flipCardContainer} ${className} ${isFlipped ? styles.isFlipped : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.flipCardInner}>
        {/* Lado Frontal */}
        <div className={styles.flipCardFront}>
          {children}
        </div>

        {/* Lado Trasero */}
        <div className={styles.flipCardBack}>
          <div className={styles.backHeader}>
            <RotateCcw size={14} className={styles.rotateIcon} />
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
 * Componente FeatureCards estático.
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
          <div className={styles.iconBtn} aria-label="Girar">
            <ArrowUpRight size={16} />
          </div>
        </div>
        <h2>La IA aprende tu negocio.</h2>
        <p className={styles.cardBody}>
          Sube tu información una vez. Ella califica y filtra. Tú solo cierras la venta.
        </p>
        <div className={styles.cardImageWrapper}>
          <img
            src="/friends-sitting-indoors-front-view.webp"
            alt="IA"
            className={styles.cardImage}
            loading="lazy"
          />
        </div>
      </FlipCard>

      {/* Tarjeta 2 — UNAC */}
      <FlipCard 
        className={styles.greenCard}
        backContent={
          <div className={styles.backContentDark}>
            <h3>Impacto UNAC</h3>
            <p>Aumento masivo en conversiones y reducción de tiempos de respuesta.</p>
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
        <div className={styles.greenCardPadding}>
          <div className={styles.cardHeader}>
            <span className={styles.label}>CASO DE ÉXITO</span>
            <div className={`${styles.iconBtn}`} aria-label="Girar">
              <ArrowUpRight size={16} />
            </div>
          </div>
          <h2>UNAC ya lo usa.</h2>
          <p className={styles.cardBody}>
            Resultados reales en tiempo récord. Automatización que genera confianza.
          </p>
        </div>
        <div className={styles.cardImageWrapper}>
          <img
            src="/happy-woman-sitting-sofa-looking-her-boyfriend.webp"
            alt="Caso UNAC"
            className={styles.cardImage}
            loading="lazy"
          />
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
          <div className={styles.iconBtn} aria-label="Girar">
            <ArrowUpRight size={16} />
          </div>
        </div>
        <h2>Un solo lugar.</h2>
        <p className={styles.cardBody}>
          Leads. CRM. Automatizaciones. Todo conectado en una sola interfaz.
        </p>
        <div className={styles.cardImageWrapper}>
          <img
            src="/hand-holding-megaphone-marketing-announcement-campaign.webp"
            alt="Plataforma"
            className={styles.cardImage}
            loading="lazy"
          />
        </div>
      </FlipCard>
    </section>
  );
};

export default FeatureCards;




