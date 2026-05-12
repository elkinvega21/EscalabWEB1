import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Check, X } from 'lucide-react';
import styles from './Comparison.module.css';

const Comparison = () => {
  return (
    <section className={styles.comparisonSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>LA DIFERENCIA</span>
          <h2>¿Por qué Escalab es diferente?</h2>
          <p>No todos los chatbots son iguales. Mientras otros siguen reglas rígidas, Escalab entiende intenciones humanas.</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Card: Escalab AI Agent */}
          <motion.div 
            className={`${styles.card} ${styles.aiCard}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>
                <ThumbsUp size={24} fill="#b2f111" color="#000" />
              </div>
              <h3>AI Agent de Escalab</h3>
            </div>
            
            <div className={styles.chatMockup}>
              <div className={styles.bubbleUser}>¿Cuál es el plan más económico que tienen?</div>
              <div className={styles.bubbleAi}>
                El plan más económico es el Lite, desde $49/mes. ¿Te gustaría que te envíe el PDF con todos los detalles o prefieres agendar una demo? 🚀
              </div>
              <div className={styles.bubbleUser}>Quiero saber si incluye CRM y cuántos mensajes puedo enviar.</div>
              <div className={styles.bubbleAi}>
                ¡Claro! Incluye integración completa con tu CRM y mensajes ilimitados. Es ideal para equipos que están empezando a escalar. ¿Te gustaría ver cómo se conectaría con tu CRM actual?
              </div>
            </div>

            <p className={styles.footerText}>
              Este es un ejemplo real de un <strong>AI Agent creado en Escalab</strong>, capaz de entender y <strong>responder como un humano</strong>.
            </p>
          </motion.div>

          {/* Card: Traditional Chatbot */}
          <motion.div 
            className={`${styles.card} ${styles.traditionalCard}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconCircleDown}>
                <ThumbsDown size={24} fill="#ff4d4d" color="#fff" />
              </div>
              <h3>Chatbot lineal</h3>
            </div>
            
            <div className={styles.chatMockup}>
              <div className={styles.bubbleTraditional}>
                Hola, bienvenido. Por favor elige una de las siguientes opciones:<br/>
                1. Ventas<br/>
                2. Soporte<br/>
                3. Precios
              </div>
              <div className={styles.bubbleUser}>¿Cuál es el plan más barato?</div>
              <div className={styles.bubbleTraditional}>
                Lo siento, no entiendo tu pregunta. Por favor elige una opción válida:<br/>
                1. Ventas<br/>
                2. Soporte<br/>
                3. Precios
              </div>
            </div>

            <p className={styles.footerText}>
              Este es un chatbot transaccional, solo funciona con <strong>secuencias rígidas</strong> y si no entiende la intención, simplemente <strong>no funciona</strong>.
            </p>
          </motion.div>
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.tableHeader}>
            <div className={styles.tableFeatureCol}>
              <p className={styles.tableHighlight}>Escalab tiene más funcionalidades y usuarios ilimitados</p>
            </div>
            <div className={styles.tableLogoCol}>
              <div className={styles.logoMarkSmall}>E</div>
              <span>ESCALAB</span>
            </div>
            <div className={styles.tableCompetitorCol}>
              <span>Otros Bots</span>
            </div>
          </div>

          <div className={styles.tableBody}>
            {COMPARISON_DATA.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.featureName}>{item.feature}</div>
                <div className={styles.featureCheck}>
                  {item.escalab ? <Check size={20} color="#25d366" strokeWidth={3} /> : <X size={20} color="#ff4d4d" />}
                </div>
                <div className={styles.featureCross}>
                  {item.others ? <Check size={20} color="#25d366" strokeWidth={3} /> : <X size={20} color="#ff4d4d" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const COMPARISON_DATA = [
  { feature: "Lectura de información de imágenes con IA", escalab: true, others: false },
  { feature: "Llamadas WhatsApp API", escalab: true, others: false },
  { feature: "AI Agents de voz", escalab: true, others: false },
  { feature: "IA Conversacional (Interacciones humanas)", escalab: true, others: true },
  { feature: "Captura de intenciones con IA Generativa", escalab: true, others: false },
  { feature: "Base de conocimiento para guiar respuestas", escalab: true, others: true },
  { feature: "Generación de Pipeline automático con IA", escalab: true, others: false },
  { feature: "Transcripción de audios en automático", escalab: true, others: true },
];

export default Comparison;
