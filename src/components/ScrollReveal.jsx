import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  // Configuración de direcciones dinámicas por si quieres que unos entren desde los lados
  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true, // La animación ocurre solo la primera vez que se ve (evita parpadeos molestos)
        amount: 0.15, // Se dispara cuando el 15% del elemento ya es visible en pantalla
      }}
      transition={{
        type: "spring",
        stiffness: 100, // Fuerza del resorte
        damping: 18, // Amortiguación (controla el desorden antes de acomodarse)
        delay: delay, // Tiempo de espera para el efecto escalonado
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
