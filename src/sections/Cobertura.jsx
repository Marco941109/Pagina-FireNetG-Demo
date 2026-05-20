import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Navigation, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ScrollReveal from "../components/ScrollReveal"; // Única importación añadida

const COBERTURA_DATA = [
  {
    municipio: "Rayón, Chiapas",
    estado: "Cobertura Total",
    tipo: "Fibra Óptica + Wireless",
    zonas: [
      "Barrio San Miguel",
      "Barrio San Juan",
      "Barrio Guadalupe",
      "Barrio El Centro",
      "Barrio Santa Cruz",
      "Barrio San Antonio",
      "Y comunidades aledañas...",
    ],
    activo: true,
  },
  {
    municipio: "Municipios Vecinos",
    estado: "Cobertura Activa",
    tipo: "Enlace Wireless de Alta Capacidad",
    zonas: ["Pantepec", "Solosuchiapa", "Tapilula"],
    activo: true,
  },
  {
    municipio: "Próxima Expansión",
    estado: "Muy Pronto",
    tipo: "Despliegue de Infraestructura",
    zonas: ["Ixhuatán", "Tapalapa"],
    activo: false,
  },
];

const Cobertura = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1150);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const totalCards = COBERTURA_DATA.length;

  return (
    <section
      id="cobertura"
      className="py-24 px-5 bg-[#0b0f19] text-white relative overflow-hidden scroll-mt-16"
    >
      {/* Efectos de luz ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16 lg:mb-24">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-950/40 px-4 py-1.5 rounded-full border border-cyan-800/30">
              Disponibilidad de Red
            </span>

            <p className="text-slate-200 max-w-2xl mx-auto font-normal text-base md:text-lg mt-4">
              Estamos expandiendo nuestra infraestructura moderna para conectar
              a más hogares y negocios con la máxima estabilidad.
            </p>
          </ScrollReveal>
        </div>

        {/* ENVOLVEMOS EL BLOQUE COMPLETO DEL ABANICO AQUÍ PARA EVITAR EL ESPACIO EN BLANCO */}
        <ScrollReveal direction="up" delay={0.3}>
          <div
            className={
              isMobile
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto justify-items-center"
                : "group relative flex justify-center items-center min-h-[550px] w-full max-w-6xl mx-auto"
            }
          >
            {COBERTURA_DATA.map((item, index) => {
              // Configuración matemática del abanico intacta
              const centerOffset = index - (totalCards - 1) / 2;
              const rotation = centerOffset * 8;
              const xInitialOffset = centerOffset * 60;
              const spreadDistance = 350;
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
                      : { rotate: 0, x: xExpandedOffset }
                  }
                  transition={{ type: "spring", stiffness: 85, damping: 14 }}
                  className={`${
                    isMobile
                      ? "relative w-full max-w-[360px]"
                      : "absolute w-[330px]"
                  } bg-slate-900/80 backdrop-blur-md border ${
                    item.activo
                      ? "border-slate-800/80 hover:border-cyan-500/40"
                      : "border-dashed border-slate-800 bg-slate-950/40"
                  } p-8 rounded-3xl flex flex-col h-[460px] shadow-2xl transition-all duration-300 group-hover:bg-slate-900/90`}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {/* Encabezado de la tarjeta */}
                  <div className="flex items-center justify-between mb-4 w-full">
                    <div
                      className={`p-3 rounded-xl ${item.activo ? "bg-cyan-500/10 text-cyan-400" : "bg-slate-800 text-slate-500"}`}
                    >
                      <MapPin size={22} />
                    </div>
                    <span
                      className={`text-[10px] uppercase font-mono tracking-widest font-bold px-3 py-1 rounded-full ${
                        item.activo
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      }`}
                    >
                      {item.estado}
                    </span>
                  </div>

                  {/* Título de Región */}
                  <h3 className="text-2xl font-bold text-white mb-1 text-left">
                    {item.municipio}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mb-6 text-left">
                    {item.tipo}
                  </p>

                  {/* Lista de comunidades/colonias */}
                  <div className="w-full flex-1 overflow-y-auto pr-1 custom-scrollbar mb-6">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 text-left">
                      {item.activo
                        ? "Localidades cubiertas:"
                        : "Planes de red:"}
                    </p>
                    <ul className="space-y-2.5 text-left">
                      {item.zonas.map((zona, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-slate-200"
                        >
                          {item.activo ? (
                            <CheckCircle2
                              size={16}
                              className="text-cyan-400 shrink-0 mt-0.5"
                            />
                          ) : (
                            <Navigation
                              size={14}
                              className="text-purple-400 shrink-0 mt-1 rotate-45"
                            />
                          )}
                          {/* Cambiado font-light por font-normal para mayor nitidez */}
                          <span className="font-normal leading-tight">
                            {zona}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indicador visual inferior */}
                  <div className="w-full pt-4 border-t border-slate-800/60 text-center text-xs text-slate-400 font-medium tracking-wide">
                    {item.activo
                      ? "Servicio Listo para Instalación"
                      : "Sujeto a mapa de ruta"}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 3. BOTÓN DE ACCIÓN / CONSULTA DE FACTIBILIDAD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 max-w-2xl mx-auto bg-gradient-to-r from-slate-900 to-blue-950/40 border border-blue-900/30 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20 animate-pulse">
              <HelpCircle size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                ¿No encuentras tu localidad?
              </h4>
              <p className="text-sm text-slate-400 font-normal mt-0.5">
                Envíanos tu ubicación exacta para realizar un estudio de
                factibilidad técnica sin costo.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 whitespace-nowrap shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:scale-105"
          >
            Consultar mi Zona
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Cobertura;
