import React, { useState, useEffect } from 'react';
import { Users, Zap, Mail, BarChart2, PhoneIncoming, Play, Square, Loader2, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Platform.module.css';

/**
 * Datos de las 4 características de la plataforma Escalab.
 * @type {Array<{icon: JSX.Element, title: string, description: string}>}
 */
const PLATFORM_FEATURES = [
  {
    icon: <BarChart2 size={20} />,
    title: 'Leads calificados.',
    description: 'Sin ruido. Sin filtrar manualmente. Solo los contactos listos.',
  },
  {
    icon: <Zap size={20} />,
    title: 'CRM conectado.',
    description: 'El que ya usas. Los leads llegan solos.',
  },
  {
    icon: <Users size={20} />,
    title: 'Automatizaciones.',
    description: 'Configuras una vez. Trabaja siempre.',
  },
  {
    icon: <Mail size={20} />,
    title: 'Email marketing.',
    description: 'Al contacto correcto. En el momento exacto.',
  },
  {
    icon: <PhoneIncoming size={20} />,
    title: 'Agentes de voz.',
    description: 'Atiende llamadas con IA humana. Prueba cómo suena tu próximo agente.',
    isVoice: true,
  },
];

/**
 * Componente Platform estático.
 *
 * @returns {JSX.Element}
 */
const Platform = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audio, setAudio] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [selectedVoice, setSelectedVoice] = useState('EXAVITQu4vr4xnSDxMaL'); // Default: Valentina (Bella)

  // Limpiar audio si cambian las opciones para forzar nueva generación
  React.useEffect(() => {
    if (audio) {
      audio.pause();
      setAudio(null);
      setIsPlaying(false);
    }
  }, [companyName, selectedVoice]);

  const voices = [
    { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Zoe', label: 'Zoe (Asesora)' },
    { id: 'IKne3meq5aSn9XLyUdCD', name: 'Sam', label: 'Sam (Ventas)' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', name: 'Zoe', label: 'Zoe (Soporte)' },
    { id: 'JBFqnCBsd6RMkjVDRZzb', name: 'Sam', label: 'Sam (Cierre)' },
  ];

  const handlePlayVoice = async () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    if (audio) {
      audio.play();
      setIsPlaying(false); // Reset will happen via onended
      setIsPlaying(true);
      return;
    }

    setIsLoading(true);
    try {
      const selected = voices.find(v => v.id === selectedVoice) || voices[0];
      const aiName = selected.name;
      const name = companyName.trim() || "tu empresa";
      const demoText = `¡Hola! Soy ${aiName} de Escalab. Me puse en contacto contigo porque vi que te interesa escalar las ventas en ${name}. ¿Te gustaría que agendemos una breve llamada de 5 minutos para mostrarte cómo podemos ayudarte?`;

      const response = await fetch('/api/voice/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: demoText,
          voiceId: selectedVoice
        })
      });

      if (!response.ok) throw new Error('Error al generar audio');
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const newAudio = new Audio(url);
      
      newAudio.onended = () => setIsPlaying(false);
      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.platformSection} id="plataforma">
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={styles.sectionLabel}>La plataforma</span>
          <h2>Todo lo que necesitas.<br />En un solo lugar.</h2>
        </motion.div>

        <div className={styles.featuresGrid}>
          {PLATFORM_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${styles.featureItem} ${feature.isVoice ? styles.voiceFeature : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
            <div className={styles.featureIcon} aria-hidden="true">
              {feature.icon}
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDesc}>{feature.description}</p>
            
            {feature.isVoice && (
              <div className={styles.voiceControls}>
                <div className={styles.inputGroup}>
                  <input 
                    type="text" 
                    placeholder="Nombre de tu empresa..." 
                    className={styles.voiceInput}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <select 
                    className={styles.voiceSelect}
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                  >
                    {voices.map(v => (
                      <option key={v.id} value={v.id}>{v.label}</option>
                    ))}
                  </select>
                </div>

                <button 
                  className={styles.voiceBtn} 
                  onClick={handlePlayVoice}
                  disabled={isLoading || !companyName.trim()}
                >
                  {isLoading ? (
                    <Loader2 className={styles.spin} size={16} />
                  ) : isPlaying ? (
                    <Square size={16} fill="currentColor" />
                  ) : (
                    <Play size={16} fill="currentColor" />
                  )}
                  <span>{isLoading ? 'Generando...' : isPlaying ? 'Detener' : 'Escuchar Demo Personalizado'}</span>
                </button>
              </div>
            )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;

