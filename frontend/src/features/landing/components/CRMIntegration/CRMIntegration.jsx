import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Share2, BarChart3, ArrowRight, Activity, Users, MousePointerClick, MessageSquare } from 'lucide-react';
import styles from './CRMIntegration.module.css';

const CRMIntegration = ({ onOpenOnboarding }) => {
  const [activeTab, setActiveTab] = useState('crm');

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
            <span className={styles.badge}>COMMAND CENTER</span>
            <h2>El mejor CRM es el que ya usas. O el nuestro.</h2>
            <p>
              Escalab te da flexibilidad total. Usa nuestro CRM avanzado con analítica en tiempo real, o conecta tu herramienta favorita mediante nuestra API universal.
            </p>

            <div className={styles.featuresList}>
              <div 
                className={`${styles.featureItem} ${activeTab === 'crm' ? styles.activeFeature : ''}`}
                onMouseEnter={() => setActiveTab('crm')}
              >
                <div className={styles.iconBox}><Share2 size={20} /></div>
                <div>
                  <h4>Integración API Universal</h4>
                  <p>Conecta con HubSpot, Salesforce, Zoho, Pipedrive o <b>cualquier CRM</b> que tenga API o Webhooks en minutos.</p>
                </div>
              </div>
              
              <div 
                className={`${styles.featureItem} ${activeTab === 'crm' ? styles.activeFeature : ''}`}
                onMouseEnter={() => setActiveTab('crm')}
              >
                <div className={styles.iconBox}><Layout size={20} /></div>
                <div>
                  <h4>CRM Nativo Escalab</h4>
                  <p>¿No tienes CRM? Usa nuestro tablero Kanban inteligente integrado. Los leads entran calificados automáticamente por la IA.</p>
                </div>
              </div>

              <div 
                className={`${styles.featureItem} ${activeTab === 'stats' ? styles.activeFeature : ''}`}
                onMouseEnter={() => setActiveTab('stats')}
              >
                <div className={styles.iconBox}><BarChart3 size={20} /></div>
                <div>
                  <h4>Dashboard de Estadísticas</h4>
                  <p>Accede a un menú completo con métricas del agente: leads generados, tasa de conversión, tiempos de respuesta y más.</p>
                </div>
              </div>
            </div>

            <button className={styles.ctaBtn} onClick={onOpenOnboarding}>
              Explorar el Command Center <ArrowRight size={18} />
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
                <div className={styles.windowControls}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.mockupTabs}>
                  <button 
                    className={`${styles.mockupTab} ${activeTab === 'crm' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('crm')}
                  >
                    Pipeline CRM
                  </button>
                  <button 
                    className={`${styles.mockupTab} ${activeTab === 'stats' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('stats')}
                  >
                    Estadísticas IA
                  </button>
                </div>
              </div>
              
              <div className={styles.mockupBody}>
                <AnimatePresence mode="wait">
                  {activeTab === 'crm' ? (
                    <motion.div 
                      key="crm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={styles.kanbanView}
                    >
                      {/* Kanban Mockup */}
                      <div className={styles.kanban}>
                        <div className={styles.column}>
                          <h5>Nuevos Leads (IA)</h5>
                          <div className={styles.kanbanCard}>
                            <div className={styles.cardInfo}>
                              <span className={styles.cardName}>Juan Pérez</span>
                              <span className={styles.cardTag}>Calificado 🤖</span>
                            </div>
                            <div className={styles.cardScore}>95 pts</div>
                          </div>
                          <div className={styles.kanbanCard}>
                            <div className={styles.cardInfo}>
                              <span className={styles.cardName}>María García</span>
                              <span className={styles.cardTag}>En proceso 🤖</span>
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
                          <div className={styles.kanbanCard}>
                            <div className={styles.cardInfo}>
                              <span className={styles.cardName}>Ana López</span>
                              <span className={styles.cardTag}>Negociación</span>
                            </div>
                            <div className={styles.cardScore}>75 pts</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="stats"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={styles.statsView}
                    >
                      {/* Stats Row */}
                      <div className={styles.statsRow}>
                        <div className={styles.statCard}>
                          <Activity size={18} className={styles.statIcon} />
                          <div className={styles.statInfo}>
                            <span className={styles.statValue}>+42%</span>
                            <span className={styles.statLabel}>Conversión Lead a Cita</span>
                          </div>
                        </div>
                        <div className={styles.statCard}>
                          <Users size={18} className={styles.statIcon} />
                          <div className={styles.statInfo}>
                            <span className={styles.statValue}>850</span>
                            <span className={styles.statLabel}>Leads Gestionados (Mes)</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.statsRow}>
                        <div className={styles.statCard}>
                          <MessageSquare size={18} className={styles.statIcon} />
                          <div className={styles.statInfo}>
                            <span className={styles.statValue}>&lt; 2 min</span>
                            <span className={styles.statLabel}>Tiempo de Respuesta Medio</span>
                          </div>
                        </div>
                        <div className={styles.statCard}>
                          <MousePointerClick size={18} className={styles.statIcon} />
                          <div className={styles.statInfo}>
                            <span className={styles.statValue}>1,245</span>
                            <span className={styles.statLabel}>Interacciones Automáticas</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={styles.chartMockup}>
                        <div className={styles.chartTitle}>Crecimiento de Leads vs Conversión</div>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBar} style={{ height: '40%' }}></div>
                          <div className={styles.chartBar} style={{ height: '55%' }}></div>
                          <div className={styles.chartBar} style={{ height: '45%' }}></div>
                          <div className={styles.chartBar} style={{ height: '70%' }}></div>
                          <div className={styles.chartBar} style={{ height: '85%' }}></div>
                          <div className={styles.chartBar} style={{ height: '100%' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Integrations floating icons */}
              <div className={styles.floatingLogos}>
                <div className={styles.logoCircle} title="API Ready">API</div>
                <div className={styles.logoCircle} title="HubSpot">H</div>
                <div className={styles.logoCircle} title="Salesforce">S</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMIntegration;
