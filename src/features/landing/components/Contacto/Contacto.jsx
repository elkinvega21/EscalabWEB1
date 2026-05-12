import React, { useState } from 'react';
import Button, { ButtonIconWrapper } from '../../../../shared/components/Button/Button';
import styles from './Contacto.module.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', empresa: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setStatus('error');
    }
  };

  return (
    <section className={styles.contactoSection} id="contacto" aria-label="Sección de contacto">
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2>
            <span className={styles.highlight}>¿Cuántas ventas</span>
            <br />
            perdiste hoy?
          </h2>
          <p className={styles.description}>
            Deja de dejar dinero sobre la mesa. Completa el formulario y descubre cómo automatizar tu seguimiento y multiplicar tus conversiones con IA.
          </p>
          
          <div className={styles.contactInfo}>
            <a href="mailto:founder@escalabsapp.com" className={styles.email}>
              founder@escalabsapp.com
            </a>
            <span className={styles.location}>Medellín, Colombia</span>
          </div>
        </div>

        <div className={styles.formColumn}>
          {status === 'success' ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3>¡Datos recibidos!</h3>
              <p>Un especialista de Escalab se pondrá en contacto contigo pronto.</p>
              <button className={styles.resetButton} onClick={() => setStatus('idle')}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="nombre">Nombre completo *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  required 
                  value={formData.nombre} 
                  onChange={handleChange} 
                  placeholder="Tu nombre"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Correo electrónico *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="tu@empresa.com"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="empresa">Nombre de la empresa *</label>
                <input 
                  type="text" 
                  id="empresa" 
                  name="empresa" 
                  required 
                  value={formData.empresa} 
                  onChange={handleChange} 
                  placeholder="Ej. Acme Corp"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="mensaje">¿En qué podemos ayudarte?</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="4" 
                  value={formData.mensaje} 
                  onChange={handleChange} 
                  placeholder="Cuéntanos sobre tu proceso de ventas..."
                ></textarea>
              </div>

              <div className={styles.submitWrapper}>
                <Button variant="primary" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Enviando...' : 'Solicitar Demo'}
                  {!status === 'loading' && (
                    <ButtonIconWrapper>
                      <span aria-hidden="true">→</span>
                    </ButtonIconWrapper>
                  )}
                </Button>
                {status === 'error' && <p className={styles.errorText}>Ocurrió un error. Intenta de nuevo.</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacto;
