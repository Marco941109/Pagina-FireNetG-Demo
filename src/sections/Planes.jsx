import { motion } from "framer-motion";
import { Check, Wifi, Zap, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const PLANES_DATA = [
  {
    nombre: "Plan Básico",
    velocidad: "15 MB",
    precio: "$300 / mes",
    icono: <Wifi />,
    detalles: [
      "Conexión Estable y Confiable",
      "Ideal para Redes Sociales y Tareas",
      "Streaming de Video Fluido",
      "Soporte Técnico Local",
      "Sin Plazos Forzosos",
    ],
    destacado: false,
    tag: "El más accesible",
  },
  {
    nombre: "Plan Familiar",
    velocidad: "20 MB",
    precio: "$350 / mes",
    icono: <Zap />,
    detalles: [
      "Mayor Ancho de Banda",
      "Ideal para Streaming HD y Clases",
      "Múltiples Dispositivos Conectados",
      "Soporte Técnico Prioritario",
      "Navegación Fluida sin Interrupciones",
    ],
    destacado: true,
    tag: "El más vendido",
  },
  {
    nombre: "Plan Avanzado",
    velocidad: "30 MB",
    precio: "$450 / mes",
    icono: <Building2 />,
    detalles: [
      "Máximo Rendimiento de Red",
      "Ideal para Descargas Pesadas y Smart TVs",
      "Videoconferencias en Alta Definición",
      "Soporte Técnico Dedicado",
      "Ideal para Hogares Conectados o Negocios",
    ],
    destacado: false,
    tag: "Máximo Rendimiento",
  },
];

const Planes = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1150);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const totalCards = PLANES_DATA.length;

  return (
    <section
      id="planes"
      className="py-24 px-5 bg-slate-950 text-white overflow-hidden scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16 lg:mb-24">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-950/40 px-4 py-1.5 rounded-full border border-cyan-800/30">
              Nuestros Paquetes
            </span>
            <p className="text-slate-200 max-w-2xl mx-auto font-normal text-base md:text-lg mt-4">
              Elige el plan ideal para tu hogar o negocio con precios justos y
              conectividad estable.
            </p>
          </ScrollReveal>
        </div>

        {/* CONTENEDOR DEL ABANICO */}
        <ScrollReveal direction="up" delay={0.3}>
          <div
            className={
              isMobile
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto justify-items-center"
                : "group relative flex justify-center items-center min-h-[620px] w-full max-w-6xl mx-auto"
            }
          >
            {PLANES_DATA.map((plan, index) => {
              const centerOffset = index - (totalCards - 1) / 2;
              const rotation = centerOffset * 10;
              const xInitialOffset = centerOffset * 50;
              const spreadDistance = 340;
              const xExpandedOffset = centerOffset * spreadDistance;

              return (
                <motion.div
                  key={index}
                  initial={
                    isMobile
                      ? { opacity: 0, y: 30 }
                      : { rotate: rotation, x: xInitialOffset }
                  }
                  whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 50,
                    y: isMobile ? -8 : -25,
                    transition: { duration: 0.2 },
                  }}
                  animate={
                    isMobile
                      ? { rotate: 0, x: 0, y: 0 }
                      : {
                          rotate: 0,
                          x: xExpandedOffset,
                        }
                  }
                  transition={{ type: "spring", stiffness: 85, damping: 14 }}
                  className={`${
                    isMobile
                      ? "relative w-full max-w-[350px]"
                      : "absolute w-[320px]"
                  } ${
                    plan.destacado
                      ? "border-cyan-500 bg-slate-900/90 shadow-[0_0_30px_rgba(6,182,212,0.15)] shadow-cyan-500/10"
                      : "border-slate-800 bg-slate-900"
                  } border p-8 rounded-3xl flex flex-col items-center text-center shadow-2xl transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-slate-900/90`}
                  style={{
                    transformOrigin: "bottom center",
                  }}
                >
                  {/* Tag Distintivo */}
                  <span
                    className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-4 ${
                      plan.destacado
                        ? "bg-cyan-500 text-slate-950"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {plan.tag}
                  </span>

                  {/* Icono */}
                  <div
                    className={`p-4 rounded-2xl mb-4 ${
                      plan.destacado
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-blue-600/10 text-blue-400"
                    }`}
                  >
                    {plan.icono}
                  </div>

                  {/* Nombre y Velocidad */}
                  <h3 className="text-2xl font-bold mb-1 text-white">
                    {plan.nombre}
                  </h3>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 mb-2">
                    {plan.velocidad}
                  </div>

                  {/* Precio */}
                  <div className="text-xl font-bold text-slate-200 mb-6 font-mono">
                    {plan.precio}
                  </div>

                  {/* Detalles optimizados para legibilidad */}
                  <ul className="w-full mb-8 space-y-4 text-left border-t border-slate-800/60 pt-6">
                    {plan.detalles.map((detalle, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-200 leading-snug"
                      >
                        <Check
                          size={16}
                          className={`${plan.destacado ? "text-cyan-400" : "text-blue-500"} shrink-0 mt-0.5`}
                        />
                        <span className="font-normal">{detalle}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <div className="mt-auto w-full">
                    <a
                      href="#contacto"
                      className={`block w-full py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                        plan.destacado
                          ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_4px_15px_rgba(6,182,212,0.3)]"
                          : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_4px_15px_rgba(37,99,235,0.2)]"
                      }`}
                    >
                      Contratar
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Planes;
