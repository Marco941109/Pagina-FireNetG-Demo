import { Mail, Phone, MapPin, Shield, FileText } from "lucide-react";
import imgLogo from "../assets/logoFiberNetG.png";

const Footer = () => {
  return (
    <footer className="bg-[#070a12] border-t border-slate-900/80 text-slate-400 font-light relative overflow-hidden">
      {/* Destello de luz neón azul sutil en el fondo del Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 mb-12">
          {/* COLUMNA 1: IDENTIDAD Y REDES */}
          <div className="lg:col-span-5 space-y-5">
            <div className="w-40 h-10 flex items-center">
              <img
                src={imgLogo}
                alt="FiberNetG"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-sm">
              Conectando hogares, negocios y comunidades con internet de alta
              velocidad mediante fibra óptica y enlaces inalámbricos de última
              generación.
            </p>
            <div className="flex gap-3">
              {/* BOTÓN FACEBOOK (SVG NATIVO) */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center hover:border-blue-500/50 hover:text-white transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 fill-current text-slate-400 group-hover:text-blue-500 transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              {/* BOTÓN INSTAGRAM (SVG NATIVO) */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 hover:text-white transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4 text-slate-400 group-hover:text-pink-500 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-200 font-mono">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a
                  href="#hero"
                  className="text-slate-500 hover:text-cyan-400 transition-colors no-underline"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-slate-500 hover:text-cyan-400 transition-colors no-underline"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#planes"
                  className="text-slate-500 hover:text-cyan-400 transition-colors no-underline"
                >
                  Planes de Internet
                </a>
              </li>
              <li>
                <a
                  href="#cobertura"
                  className="text-slate-500 hover:text-cyan-400 transition-colors no-underline"
                >
                  Zonas de Cobertura
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-500 hover:text-cyan-400 transition-colors no-underline"
                >
                  Preguntas Frecuentes (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-slate-500 hover:text-cyan-400 transition-colors no-underline"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO DIRECTO DE LA EMPRESA */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-200 font-mono">
              Atención Directa
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 font-sans leading-relaxed">
                  AV 3A NORTE PONIENTE S/N <br />
                  BARRIO SAN ANTONIO 29740 <br />
                  RAYON, CHIS.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-500 shrink-0" />
                <span className="font-mono text-slate-300">919 129 5980</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-500 shrink-0" />
                <span className="font-mono text-slate-300 text-xs truncate">
                  fibernetg1@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* LÍNEA DE CRÉDITOS Y CONDICIONES LEGALES */}
        <div className="border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-600">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} FiberNetG. Todos los derechos
              reservados.
            </span>
            <a
              href="#legal"
              className="hover:text-slate-400 text-slate-600 transition-colors flex items-center gap-1 no-underline"
            >
              <Shield size={12} /> Aviso de Privacidad
            </a>
            <a
              href="#terminos"
              className="hover:text-slate-400 text-slate-600 transition-colors flex items-center gap-1 no-underline"
            >
              <FileText size={12} /> Términos del Servicio
            </a>
          </div>
          <div className="select-none text-center sm:text-right">
            <span>Desarrollado con precisión por </span>
            <a
              href="mailto:marco941109@gmail.com"
              className="text-slate-400 hover:text-cyan-400 font-mono font-medium transition-colors no-underline"
            >
              MLS.Dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
