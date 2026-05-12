import React from 'react';
import { MessageCircle, Clock, Shield, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ServicesGrid.module.css';

/**
 * Componente ServicesGrid.
 * Renderiza la sección de servicios, mostrando una cuadrícula de 4 tarjetas.
 * @returns {JSX.Element}
 */
const ServicesGrid = () => {
  const serviceIcons = [
    <MessageCircle size={16} key="msg" />,
    <Clock size={16} key="clk" />,
    <Shield size={16} key="shd" />,
    <Briefcase size={16} key="brf" />
  ];

  return (
    <section className={styles.servicesSection}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={styles.sectionHeader}
      >
        <span className={styles.sectionLabel}>SERVICES</span>
        <h2>We Champion the Bold to<br/>Achieve the Extraordinary</h2>
      </motion.div>
      
      <div className={styles.servicesGrid}>
        {[1, 2, 3, 4].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.serviceItem}
          >
            <div className={styles.serviceIcon}>
              {serviceIcons[index]}
            </div>
            <div className={styles.serviceImagePlaceholder}>
              <span>[Servicio {item}]</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
