import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div
      className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-slate-900/40 border-blue-500/40 shadow-lg shadow-blue-500/5 backdrop-blur-md"
          : "bg-slate-950/20 border-slate-900 hover:border-slate-800 backdrop-blur-sm"
      }`}
    >
      <button
        onClick={toggleOpen}
        className="w-full px-6 py-5 flex justify-between items-center text-left gap-4 focus:outline-none group select-none"
      >
        <div className="flex items-center gap-3">
          <HelpCircle
            size={18}
            className={`shrink-0 transition-colors duration-300 ${
              isOpen
                ? "text-cyan-400"
                : "text-slate-500 group-hover:text-slate-400"
            }`}
          />
          <span
            className={`font-medium text-sm md:text-base tracking-wide transition-colors duration-300 ${
              isOpen ? "text-white" : "text-slate-300 group-hover:text-white"
            }`}
          >
            {question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`shrink-0 p-1 rounded-lg ${isOpen ? "text-cyan-400 bg-cyan-500/10" : "text-slate-500"}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { type: "spring", stiffness: 150, damping: 20 },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25 },
                opacity: { duration: 0.15 },
              },
            }}
          >
            <div className="px-6 pb-6 pt-1 text-slate-400 text-xs md:text-sm leading-relaxed border-t border-slate-900/50 font-light pl-11">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué incluye el costo de contratación e instalación?",
      answer:
        "Nuestra instalación estándar incluye el cableado necesario (fibra óptica o enlace inalámbrico según tu zona), el módem/router de última generación en comodato y la configuración completa de tus dispositivos iniciales para asegurar que navegues a la velocidad contratada desde el primer minuto.",
    },
    {
      question: "¿La velocidad de los planes es simétrica?",
      answer:
        "Sí, todos nuestros planes de Fibra Óptica ofrecen velocidad 100% simétrica. Esto significa que tendrás exactamente la misma velocidad para descargar archivos que para subirlos, garantizando videollamadas fluidas, streaming sin cortes y partidas de videojuegos estables.",
    },
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer:
        "Para tu comodidad, aceptamos transferencias bancarias SPEI, pagos con tarjeta de crédito/débito directamente en nuestro portal, y depósitos en efectivo a través de tiendas de conveniencia locales. Recibirás tu recordatorio y recibo digital de manera puntual cada mes.",
    },
    {
      question: "¿Tengo un plazo forzoso al contratar el servicio?",
      answer:
        "No creemos en las cláusulas obligatorias ni en las penalizaciones engañosas. Nuestro servicio se maneja mediante un esquema mensual prepagado, lo que significa que puedes cancelar, pausar o cambiar de plan cuando lo decidas, sin cargos adicionales adicionales.",
    },
    {
      question: "¿Cómo reportar una falla técnica o interrupción del servicio?",
      answer:
        "Contamos con soporte técnico especializado listo para atenderte. Puedes levantar un reporte de inmediato enviando un mensaje a nuestro WhatsApp de soporte o llamando a nuestra línea de atención directa. El 90% de los incidentes menores se resuelven de forma remota en menos de una hora.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Asegúrate de que el id coincida exactamente con el de tu array de menuItems en el Navbar
    <section
      id="faq"
      className="w-full min-h-screen py-24 relative flex items-center justify-center overflow-hidden bg-[#070a12]"
    >
      {/* Efectos ambientales de luz en el fondo */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20"
          >
            Soporte Técnico
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Preguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Frecuentes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-light text-sm md:text-base max-w-xl mx-auto"
          >
            Resuelve tus dudas al instante sobre nuestro servicio de internet,
            cobertura, instalación y formas de pago.
          </motion.p>
        </div>

        {/* Contenedor de Acordeones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
