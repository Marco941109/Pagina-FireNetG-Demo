import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ParticlesBg from "../components/ParticlesBg";

// TUS IMÁGENES .PNG
import img1 from "../assets/fiber1.png";
import img2 from "../assets/fiber2.png";
import img3 from "../assets/fiber3.png";
import img4 from "../assets/fiber4.png";
import img5 from "../assets/fiber5.png";

// Estructura de datos con colores asociados en formato RGB
const slideshowData = [
  { img: img1, navColor: "15_23_42" }, // Tono Slate / Azul Grisáceo Oscuro
  { img: img2, navColor: "7_43_94" }, // Azul Eléctrico Tecnológico
  { img: img3, navColor: "11_63_92" }, // Azul Petróleo / Satelital
  { img: img4, navColor: "20_30_50" }, // Gris Profundo Corporativo
  { img: img5, navColor: "3_15_36" }, // Azul Noche / Oscuro Cerrado
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % slideshowData.length;

        // Emitimos el color dinámico al cambiar de slide
        const nextColor = slideshowData[nextIndex].navColor;
        const event = new CustomEvent("navbarColorChange", {
          detail: nextColor,
        });
        window.dispatchEvent(event);

        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#020617] scroll-mt-20"
    >
      {/* 1. SLIDESHOW DE FONDO CON ZOOM CINEMÁTICO */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slideshowData[index].img})`,
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* 2. CAPA DE CONTRASTE PROFESIONAL (OVERLAY) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950 z-10 backdrop-blur-[1px]"></div>

        {/* LUCES AMBIENTALES NEÓN */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full z-10 pointer-events-none animate-pulse"></div>
      </div>

      {/* 3. CAPA DE PARTÍCULAS */}
      <div className="absolute inset-0 z-20 opacity-40 pointer-events-none">
        <ParticlesBg />
      </div>

      {/* 4. CONTENIDO PRINCIPAL */}
      <div className="relative z-30 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto mt-16">
        {/* LOGO Y ESFERA CON ANIMACIÓN FLOTANTE */}
        <motion.div
          className="mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* TEXTOS PRINCIPALES */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-6xl md:text-[90px] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-cyan-400 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                FiberNetG
              </h1>
              <h2 className="text-xl md:text-3xl font-bold tracking-[0.2em] mt-3 uppercase text-cyan-400/90 drop-shadow-[0_2px_10px_rgba(6,182,212,0.5)]">
                Wireless & Fibra óptica
              </h2>
            </div>

            {/* ESFERA TECNOLÓGICA FLOTANTE */}
            <motion.div
              className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute w-[260px] md:w-[360px] h-[80px] md:h-[100px] border-[2px] border-purple-500/60 rounded-[50%] -rotate-[20deg] z-0 shadow-[0_0_40px_rgba(168,85,247,0.4)]" />
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full relative z-20 overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.6),inset_-10px_-10px_25px_rgba(0,0,0,0.9)] border border-sky-400/30 bg-gradient-to-tr from-[#0b1f3d] via-[#1d4ed8] to-[#0284c7]">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.4)_0%,transparent_60%)]"></div>
              </div>
              <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-blue-500/20 blur-2xl rounded-full -z-10"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* DESCRIPCIÓN REFINADA */}
        <motion.p
          className="text-slate-300/90 text-base md:text-xl max-w-3xl mb-12 leading-relaxed font-light tracking-wide drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Liderando la nueva era de conectividad ultrarrápida. Ofrecemos
          soluciones de internet de alto rendimiento diseñadas para potenciar tu
          hogar y empresa con tecnología de vanguardia.
        </motion.p>

        {/* BOTONES GEMELOS SIMÉTRICOS */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a
            href="#planes"
            className="w-56 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 text-center"
          >
            Ver Planes
          </a>
          <a
            href="#contacto"
            className="w-56 py-4 border-2 border-white/20 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 text-white hover:text-cyan-400 rounded-full font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:-translate-y-1 text-center"
          >
            Contratar Aquí
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
