import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Share2, Filter, Zap, ArrowRight } from 'lucide-react';
import styles from './CRMIntegration.module.css';

const CRMIntegration = ({ onOpenOnboarding }) => {
  return (
    <section className={styles.crmSection} id="crm">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side: Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>GESTIÓN DE LEADS</span>
            <h2>Toma el control total de tu Pipeline.</h2>
            <p>
              Ya sea que uses nuestro CRM nativo o prefieras conectar tu herramienta actual, 
              Escalab organiza cada conversación para que nunca pierdas una oportunidad.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.iconBox}><Layout size={20} /></div>
                <div>
                  <h4>CRM Nativo Inteligente</h4>
                  <p>Visualiza tus leads en un tablero Kanban automatizado que se actualiza en tiempo real.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.iconBox}><Share2 size={20} /></div>
                <div>
                  <h4>Integración Universal</h4>
                  <p>Conecta con HubSpot, Salesforce, Pipedrive o cualquier CRM vía Webhook en segundos.</p>
                </div>
              </div>
            </div>

            <button className={styles.ctaBtn} onClick={onOpenOnboarding}>
              Ver integraciones <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Right Side: Visual Mockup */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.crmMockup}>
              {/* Header mockup */}
              <div className={styles.mockupHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <span className={styles.mockupTitle}>Escalab CRM - Pipeline de Ventas</span>
              </div>
              
              {/* Kanban Mockup */}
              <div className={styles.kanban}>
                <div className={styles.column}>
                  <h5>Nuevos Leads</h5>
                  <div className={styles.kanbanCard}>
                    <div className={styles.cardInfo}>
                      <span className={styles.cardName}>Juan Pérez</span>
                      <span className={styles.cardTag}>Calificado</span>
                    </div>
                    <div className={styles.cardScore}>95 pts</div>
                  </div>
                  <div className={styles.kanbanCard}>
                    <div className={styles.cardInfo}>
                      <span className={styles.cardName}>María García</span>
                      <span className={styles.cardTag}>Interesada</span>
                    </div>
                    <div className={styles.cardScore}>82 pts</div>
                  </div>
                </div>
                <div className={styles.column}>
                  <h5>En Seguimiento</h5>
                  <div className={styles.kanbanCard}>
                    <div className={styles.cardInfo}>
                      <span className={styles.cardName}>Carlos Ruiz</span>
                      <span className={styles.cardTag}>Demo agendada</span>
                    </div>
                    <div className={styles.cardScore}>98 pts</div>
                  </div>
                </div>
              </div>

              {/* Integrations floating icons */}
              <div className={styles.floatingLogos}>
                <div className={styles.logoCircle} title="HubSpot">H</div>
                <div className={styles.logoCircle} title="Salesforce">S</div>
                <div className={styles.logoCircle} title="Pipedrive">P</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMIntegration;
