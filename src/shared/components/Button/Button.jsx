import React from 'react';
import styles from './Button.module.css';

/**
 * Componente Button reutilizable.
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del botón.
 * @param {'primary' | 'secondary' | 'iconOnly' | 'consultation'} [props.variant='primary'] - Variante de estilo del botón.
 * @param {Function} [props.onClick] - Manejador del evento click.
 * @param {string} [props.className] - Clases adicionales.
 * @returns {JSX.Element}
 */
const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClass = styles.btn;
  const variantClass = styles[variant] || styles.primary;
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${className}`.trim()} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

/**
 * Envoltorio para iconos dentro del botón de consulta.
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Icono a renderizar.
 * @returns {JSX.Element}
 */
export const ButtonIconWrapper = ({ children }) => {
  return (
    <span className={styles.arrowIconWrapper}>
      {children}
    </span>
  );
};

export default Button;
