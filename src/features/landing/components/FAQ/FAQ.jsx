import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQS = [
  {
    q: '¿Qué es Escalab y cómo funciona?',
    a: 'Escalab es una plataforma de automatización de ventas con IA. Entrenas a tu agente una sola vez con la información de tu empresa, y él califica leads, responde preguntas, agenda reuniones y escala los contactos listos para cerrar — las 24 horas, sin supervisión.',
  },
  {
    q: '¿Puedo conectarlo con mi CRM actual?',
    a: 'Sí. Escalab se integra con cualquier CRM que tenga API: HubSpot, Salesforce, Pipedrive, Zoho, Monday, Notion y más. También puedes usar nuestro CRM nativo con tablero Kanban automatizado. Los leads fluyen solos a donde los necesitas.',
  },
  {
    q: '¿Qué estadísticas puedo ver del agente?',
    a: 'Al contratar el servicio obtienes acceso al panel de estadísticas completo: conversaciones por día, tasa de calificación de leads, tiempo de respuesta promedio, leads convertidos vs. descartados, fuentes de tráfico y rendimiento de cada campaña. Todo en tiempo real.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'La configuración inicial toma entre 24 y 72 horas. Subimos tu información, entrenamos al agente con tus datos, lo conectamos a tus canales (web, WhatsApp, email) y hacemos pruebas de calidad antes del lanzamiento.',
  },
  {
    q: '¿El agente puede hacer llamadas de voz?',
    a: 'Sí. Nuestros agentes de voz con IA pueden realizar y recibir llamadas con voz completamente natural. Pueden presentar tu producto, resolver dudas básicas y agendar reuniones con tu equipo comercial de forma autónoma.',
  },
  {
    q: '¿Qué pasa si el agente no sabe responder algo?',
    a: 'El agente está entrenado para escalar la conversación a un humano cuando detecta preguntas fuera de su alcance o cuando el lead está listo para cerrar. Nunca dejará a un cliente sin respuesta.',
  },
  {
    q: '¿Tienen planes para empresas pequeñas?',
    a: 'Sí. Tenemos planes desde startups y pymes hasta grandes corporaciones. El precio se adapta según volumen de conversaciones, canales integrados y nivel de personalización del agente.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>PREGUNTAS FRECUENTES</span>
          <h2>Todo lo que necesitas saber.</h2>
          <p>Respuestas directas para que tomes la mejor decisión.</p>
        </motion.div>

        <div className={styles.list}>
          {FAQS.map((item, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.open : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className={styles.icon}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className={styles.answer}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
