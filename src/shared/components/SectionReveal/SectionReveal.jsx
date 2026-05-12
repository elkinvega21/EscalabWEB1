import React from 'react';
import { motion } from 'framer-motion';

/**
 * Variantes de animación para SectionReveal.
 * Movimientos pequeños para evitar saltos bruscos o layout shifts.
 *
 * @type {Object}
 */
const ANIMATION_VARIANTS = {
  /** Sube suavemente desde 20px abajo — default para todas las secciones */
  fadeUp: {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0  },
  },
  /** Solo opacidad — para secciones de fondo oscuro/full-width */
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  /** Escala muy sutil — para tarjetas tipo card */
  scaleUp: {
    hidden:  { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1    },
  },
};

/**
 * Componente SectionReveal.
 *
 * Wrapper de animación de scroll usando Framer Motion.
 * Aplica una transición suave cuando el elemento entra al viewport.
 *
 * - Movimientos pequeños (max 20px) para evitar layout shifts.
 * - Threshold bajo (0.05) para que dispare antes de que la sección sea visible.
 * - `once: true` para que solo anime una vez al hacer scroll.
 * - Sin animaciones horizontales para evitar overflow.
 *
 * @param {Object}  props
 * @param {React.ReactNode} props.children   - Contenido a animar.
 * @param {'fadeUp'|'fadeIn'|'scaleUp'} [props.variant='fadeUp']
 * @param {number}  [props.delay=0]          - Retraso en segundos.
 * @param {number}  [props.duration=0.65]    - Duración en segundos.
 * @param {string}  [props.className='']     - Clase CSS extra opcional.
 * @returns {JSX.Element}
 */
const SectionReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.65,
  className = '',
}) => {
  const selectedVariant = ANIMATION_VARIANTS[variant] ?? ANIMATION_VARIANTS.fadeUp;

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], /* ease out expo — suave y premium */
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;

