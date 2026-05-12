import React, { useState, useEffect, useRef } from 'react';
import FeatureCards from '../FeatureCards/FeatureCards';
import styles from './TryAI.module.css';

const TryAI = ({ onLeadCaptured }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatHistoryRef = useRef(null);

  // Obtener o crear un ID de sesión único para este dispositivo
  const getSessionId = () => {
    let sessionId = localStorage.getItem('escalab_chat_session');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
      localStorage.setItem('escalab_chat_session', sessionId);
    }
    return sessionId;
  };

  const sessionId = getSessionId();

  // Cargar historial al montar el componente
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/chat/messages', {
          headers: { 'x-session-id': sessionId }
        });
        if (!response.ok) throw new Error('Error en el servidor');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error cargando historial de chat:', error);
      }
    };
    fetchMessages();
  }, []);

  // Hacer scroll hacia abajo cuando hay nuevos mensajes
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue(''); // Limpiar input
    setIsLoading(true);

    // Agregar el mensaje del usuario optimísticamente a la UI
    const optimisticUserMsg = { id: Date.now(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, optimisticUserMsg]);

    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-session-id': sessionId
        },
        body: JSON.stringify({ text: userText })
      });
      
      if (!response.ok) throw new Error('Error enviando mensaje');
      const data = await response.json();
      
      if (data.success) {
        // Reemplazar el estado con la data real de la BD
        setMessages(prev => {
          // Remover el mensaje optimista y añadir los reales
          const filtered = prev.filter(m => m.id !== optimisticUserMsg.id);
          return [...filtered, data.userMessage, data.aiMessage];
        });
      }
    } catch (error) {
      console.error('Error enviando mensaje:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChatFormSubmit = async (e, msgId) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        // Enviar un mensaje de ventas persuasivo tras guardar datos
        const successMsg = { 
          id: Date.now(), 
          text: "¡Perfecto! Tus datos están seguros. Pero antes de irnos, una pregunta estratégica: Si pudiéramos automatizar el 80% de tu captación de leads este mes, ¿qué impacto tendría en el crecimiento de tu empresa? ¿Te gustaría ver cómo lo haríamos?", 
          sender: 'ai' 
        };
        setMessages(prev => [...prev, successMsg]);
        e.target.reset(); 
        e.target.style.display = 'none'; 
        const successP = document.createElement('p');
        successP.innerText = "✓ Formulario enviado.";
        successP.style.color = "var(--primary-green)";
        successP.style.fontWeight = "bold";
        successP.style.marginTop = "10px";
        e.target.parentNode.appendChild(successP);

        // Abrir el modal de onboarding pasando los datos ya capturados
        setTimeout(() => {
          if (onLeadCaptured) onLeadCaptured(data);
        }, 2000);
      }
    } catch (err) {
      console.error('Error enviando lead desde chat:', err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section className={styles.tryAiSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.label}>PROBAR IA</span>
            <h2 className={styles.title}>Conversa con nuestra IA</h2>
            <p className={styles.subtitle}>
              Descubre cómo podemos transformar tu negocio. 
              Este es un entorno de prueba para que experimentes el potencial de Escalab.
            </p>
            <div className={styles.cardsWrapper}>
              <FeatureCards />
            </div>
          </div>

          <div className={styles.chatWindow}>
          <div className={styles.chatHistory} ref={chatHistoryRef}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`${styles.messageWrapper} ${msg.sender === 'ai' ? styles.aiMessage : styles.userMessage}`}
              >
                {msg.sender === 'ai' && (
                  <div className={styles.avatar}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                    </svg>
                  </div>
                )}
                <div className={styles.bubble}>
                  {msg.text.includes('[FORMULARIO]') ? (
                    <div className={styles.embeddedForm}>
                      <p>{msg.text.replace('[FORMULARIO]', '').trim()}</p>
                      <form className={styles.chatForm} onSubmit={(e) => handleChatFormSubmit(e, msg.id)}>
                        <input type="text" name="nombre" placeholder="Nombre completo" required className={styles.chatInput} />
                        <input type="email" name="email" placeholder="Correo electrónico" required className={styles.chatInput} />
                        <input type="text" name="empresa" placeholder="Empresa" required className={styles.chatInput} />
                        <input type="tel" name="telefono" placeholder="WhatsApp / Teléfono" required className={styles.chatInput} />
                        <button type="submit" className={styles.chatFormBtn}>Enviar mis datos</button>
                      </form>
                    </div>
                  ) : (
                    <p>{msg.text}</p>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className={`${styles.messageWrapper} ${styles.aiMessage}`}>
                <div className={styles.avatar}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                  </svg>
                </div>
                <div className={styles.bubble}>
                  <div className={styles.typingIndicator}>
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.inputArea}>
            <input 
              type="text" 
              placeholder={isLoading ? "La IA está pensando..." : "Escribe tu mensaje aquí..."} 
              className={styles.input}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button 
              className={styles.sendButton} 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()} 
              aria-label="Enviar"
              style={{ 
                opacity: (isLoading || !inputValue.trim()) ? 0.5 : 1, 
                cursor: (isLoading || !inputValue.trim()) ? 'not-allowed' : 'pointer' 
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryAI;
