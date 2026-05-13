import React, { useState, useEffect, useRef } from 'react';
import styles from './OnboardingModal.module.css';

const OnboardingModal = ({ isOpen, onClose, skipContactInfo = false, initialLeadData = null }) => {
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [category, setCategory] = useState('');
  const [reaction, setReaction] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const debounceRef = useRef(null);

  // Form Data
  const [automationType, setAutomationType] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [clarification, setClarification] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Handle typing category and getting reaction
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);

    if (value.trim().length < 3) {
      setReaction('');
      return;
    }

    setIsTyping(true);
    setReaction('');

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch('/api/chat/react', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category: value })
        });
        if (!res.ok) throw new Error('Error en reacción');
        const data = await res.json();
        if (data.reaction) {
          setReaction(data.reaction);
        }
      } catch (err) {
        console.error('Error fetching reaction', err);
      } finally {
        setIsTyping(false);
      }
    }, 1200); // 1.2s after user stops typing
  };

  const handleLeadSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsSending(true);
    
    // Recoger datos del formulario si existen o usar los iniciales
    let formData = initialLeadData || {};
    if (e && e.target && e.target.tagName === 'FORM') {
      const fd = new FormData(e.target);
      formData = { ...formData, ...Object.fromEntries(fd.entries()) };
    }
    
    // Añadir el contexto recogido y el análisis final
    const fullMessage = `Resumen IA: ${analysis}. Sector: ${category}. Buscan: ${automationType}. Dolor: ${painPoint}. Aclaración: ${clarification}`;
    
    const payload = {
      ...formData,
      mensaje: fullMessage,
      origen: 'onboarding_interactivo'
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        // Disparar evento de conversión para Meta/Google Ads
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'generate_lead' });

        setStep(6); // Success step
        // Redirigir a Calendly después de 2.5 segundos
        setTimeout(() => {
          window.location.href = 'https://calendly.com/escalab/demo';
        }, 2500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  const generateAnalysis = async () => {
    setStep(4);
    setIsAnalyzing(true);
    try {
      const res = await fetch('/api/chat/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, automationType, painPoint, clarification })
      });
      if (!res.ok) throw new Error('Error en análisis');
      const data = await res.json();
      if (data.analysis) {
        setAnalysis(data.analysis);
      }
    } catch (err) {
      console.error('Error fetching analysis', err);
      setAnalysis(`Entiendo que en el sector de ${category} buscas ${automationType} para solucionar: ${painPoint}.`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFinalStep = () => {
    if (skipContactInfo) {
      handleLeadSubmit(); // Llamar directamente sin evento
    } else {
      setStep(5); // Pedir datos
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${(step === 4 || step === 6) ? styles.analysisModal : ''}`}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <div className={styles.aiHeader}>
          <img src="/ai-listening.gif" alt="AI Listening" className={styles.aiGif} />
          <h3 className={styles.aiTitle}>Escalab AI</h3>
        </div>

        {step === 1 && (
          <div className={styles.stepContainer}>
            <p className={styles.question}>¡Hola! Para darte la solución perfecta, ¿a qué se dedica tu negocio?</p>
            <input 
              type="text" 
              placeholder="Ej: Tienda de ropa, Bienes Raíces, Educación..." 
              value={category}
              onChange={handleCategoryChange}
              className={styles.inputField}
              autoFocus
            />
            
            <div className={styles.reactionBox} style={{ opacity: (isTyping || reaction) ? 1 : 0 }}>
              {isTyping ? (
                <div className={styles.typingDots}><span></span><span></span><span></span></div>
              ) : (
                <p className={styles.reactionText}>{reaction}</p>
              )}
            </div>

            <button 
              className={styles.nextBtn} 
              onClick={() => setStep(2)}
              disabled={!category.trim() || isTyping}
            >
              {isTyping ? 'Escuchando...' : 'Siguiente →'}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContainer}>
            <p className={styles.question}>¿Qué parte de tu negocio te gustaría automatizar primero?</p>
            <div className={styles.optionsGrid}>
              {['Ventas por WhatsApp', 'Captación de Leads', 'Atención al Cliente', 'Seguimiento (CRM)'].map(opt => (
                <button 
                  key={opt}
                  className={`${styles.optionBtn} ${automationType === opt ? styles.selected : ''}`}
                  onClick={() => setAutomationType(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button 
              className={styles.nextBtn} 
              onClick={() => setStep(3)}
              disabled={!automationType}
            >
              Siguiente →
            </button>
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepContainer}>
            <p className={styles.question}>¿Cuál es el mayor "dolor de cabeza" que tienes hoy en tu proceso de ventas?</p>
            <textarea 
              placeholder="Ej: Muchos mensajes y poco tiempo, pierdo el seguimiento de los clientes..." 
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              className={styles.textareaField}
              autoFocus
            />
            <button 
              className={styles.nextBtn} 
              onClick={generateAnalysis}
              disabled={!painPoint.trim()}
            >
              Siguiente →
            </button>
          </div>
        )}

        {step === 4 && (
          <div className={styles.stepContainer}>
            <p className={styles.question}>Esto es lo que he analizado sobre tu negocio:</p>
            
            <div className={styles.analysisBox}>
              {isAnalyzing ? (
                <div className={styles.loadingContainer}>
                  <div className={styles.typingDots}><span></span><span></span><span></span></div>
                  <p>Generando estrategia personalizada...</p>
                </div>
              ) : (
                <p className={styles.analysisText}>{analysis}</p>
              )}
            </div>

            <p className={styles.subQuestion}>¿He captado bien tu objetivo o te gustaría ajustar algo?</p>
            
            <div className={styles.actionsRow}>
              <button className={styles.editBtn} onClick={() => setStep(3.5)} disabled={isSending}>
                Ajustar / Agregar detalles
              </button>
              <button className={styles.confirmBtn} onClick={handleFinalStep} disabled={isAnalyzing || isSending}>
                {isSending ? 'Enviando...' : '¡Exacto! Es lo que quiero ✓'}
              </button>
            </div>
          </div>
        )}

        {step === 3.5 && (
          <div className={styles.stepContainer}>
            <p className={styles.question}>Entiendo. Cuéntame con más detalle, ¿qué me faltó considerar o qué más debería saber?</p>
            <textarea 
              placeholder="Ej: También necesito que se conecte con mi inventario real..." 
              value={clarification}
              onChange={(e) => setClarification(e.target.value)}
              className={styles.textareaField}
              autoFocus
            />
            <button 
              className={styles.nextBtn} 
              onClick={generateAnalysis}
              disabled={!clarification.trim() || isAnalyzing}
            >
              Regenerar Análisis →
            </button>
          </div>
        )}

        {step === 5 && !skipContactInfo && (
          <div className={styles.stepContainer}>
            <p className={styles.question}>¡Excelente! Déjanos tus datos y la IA te enviará la propuesta detallada ahora mismo.</p>
            <form onSubmit={handleLeadSubmit} className={styles.contactForm}>
              <input type="text" name="nombre" placeholder="Tu Nombre" required className={styles.inputField} />
              <input type="email" name="email" placeholder="Tu Correo" required className={styles.inputField} />
              <input type="text" name="empresa" placeholder="Nombre de tu Empresa" required className={styles.inputField} />
              <input type="tel" name="telefono" placeholder="WhatsApp" required className={styles.inputField} />
              <button type="submit" className={styles.submitBtn}>
                Ver Propuesta
              </button>
            </form>
          </div>
        )}

        {step === 6 && (
          <div className={styles.successContainer}>
            <div className={styles.checkmark}>✓</div>
            <h3>¡Estrategia guardada!</h3>
            <p>Redirigiendo a nuestro calendario para que reserves tu sesión de diseño técnico de inmediato...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingModal;
