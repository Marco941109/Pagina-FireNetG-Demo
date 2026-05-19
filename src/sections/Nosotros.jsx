import { Eye, Target, Users } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal"; // Asegúrate de mantener la ruta correcta de tu componente

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-24 px-6 md:px-12 bg-[#0b0f19] overflow-hidden scroll-mt-16"
    >
      {/* Luces de fondo decorativas */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* 1. ENCABEZADO DE LA SECCIÓN (Entrada limpia e inmediata) */}
        <div className="text-center mb-16 md:mb-24">
          <ScrollReveal direction="up" delay={0.1}>
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-950/40 px-4 py-1.5 rounded-full border border-cyan-800/30">
              Nuestra Identidad
            </span>
          </ScrollReveal>
        </div>

        {/* 2. CONTENIDO PRINCIPAL EN CUADRÍCULA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* BLOQUE IZQUIERDO: QUIÉNES SOMOS (Entra primero desde abajo) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-cyan-400 mb-4 font-bold tracking-wide">
                <Users
                  size={22}
                  className="drop-shadow-[0_0_5px_rgba(6,182,212,0.4)]"
                />
                <span className="uppercase text-sm tracking-widest font-mono">
                  ¿Quiénes Somos?
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 leading-tight">
                Infraestructura Moderna y Tecnología Confiable
              </h3>

              <div className="text-slate-400 text-base md:text-lg leading-relaxed font-light space-y-4 text-justify">
                <p>
                  Somos una empresa enfocada en ofrecer un servicio de internet
                  de alta calidad para hogares, negocios y comunidades. Nacimos
                  con el objetivo de mejorar la conectividad mediante
                  infraestructura moderna, atención personalizada y tecnología
                  confiable.
                </p>
                <p>
                  Trabajamos con pasión, innovación y responsabilidad para
                  convertirnos en una opción confiable dentro del sector de
                  internet.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* BLOQUE DERECHO: TARJETAS DE MISIÓN Y VISIÓN */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* TARJETA: MISIÓN (Entra desde la derecha con un desorden controlado) */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="group relative bg-slate-950/40 backdrop-blur-xl border border-slate-800/60 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-500 flex flex-col h-full shadow-xl shadow-black/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                  <Target size={24} />
                </div>

                <h4 className="text-xl font-bold text-white mb-4 tracking-wide">
                  Misión
                </h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300 text-justify">
                  Brindar servicio de internet confiable, rápidos y accesibles,
                  conectando hogares y comunidades de alta calidad con atención
                  cercana, innovación constante y compromiso de mejorar día a
                  día.
                </p>
              </div>
            </ScrollReveal>

            {/* TARJETA: VISIÓN (Entra de última desde abajo para completar el ensamble) */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="group relative bg-slate-950/40 backdrop-blur-xl border border-slate-800/60 hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-500 flex flex-col h-full shadow-xl shadow-black/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/0 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <Eye size={24} />
                </div>

                <h4 className="text-xl font-bold text-white mb-4 tracking-wide">
                  Visión
                </h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300 text-justify">
                  Ser una empresa líder en servicios de internet, reconocida por
                  su cobertura, calidad y confianza, impulsando la conectividad
                  y el crecimiento, con una infraestructura moderna y una
                  expansión constante a municipios cercanos.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
