import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import img3 from "./assets/logoFiberNetG.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");
  const [isOpen, setIsOpen] = useState(false);

  // Color inicial por defecto (en formato R_G_B) para sincronizar con la primera imagen
  const [dynamicColor, setDynamicColor] = useState("15_23_42");

  // LISTADO REORGANIZADO SIN: CONTRATAR, BENEFICIOS NI OPINIONES
  const menuItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Planes", href: "#planes" },
    { name: "Cobertura", href: "#cobertura" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    // 1. Escuchador para cambiar el tamaño y sombra del Navbar al hacer scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // 2. Escuchador del evento personalizado emitido por el Hero para los colores del fondo
    const handleColorChange = (e) => {
      setDynamicColor(e.detail);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("navbarColorChange", handleColorChange);

    // 3. LOGICA DE AUTO-SELECCIÓN (Intersection Observer)
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Retornamos al margen original que funciona ideal con secciones estándar
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const matchingItem = menuItems.find((item) => item.href === `#${id}`);
          if (matchingItem) {
            setActiveSection(matchingItem.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Seleccionamos y observamos cada sección real en la página
    menuItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("navbarColorChange", handleColorChange);
      observer.disconnect();
    };
  }, []);

  const rgbValues = dynamicColor.replace(/_/g, ",");

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] border-b transition-all duration-1000 w-full ${
        scrolled ? "h-16 shadow-lg shadow-slate-950/20" : "h-20"
      }`}
      style={{
        backgroundColor: scrolled
          ? `rgba(${rgbValues}, 0.65)` // Recuperamos la sutil transparencia traslúcida original
          : `rgba(${rgbValues}, 0.85)`,
        borderColor: `rgba(${rgbValues}, 0.25)`,
      }}
    >
      {/* Volvemos a la distribución limpia con max-w-7xl y padding responsivo estándar */}
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center w-full">
        {/* LOGO DE LA EMPRESA */}
        <a
          href="#hero"
          className="flex items-center no-underline select-none group cursor-pointer"
          onClick={() => setActiveSection("Inicio")}
        >
          <div className="relative w-40 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src={img3}
              alt="Logo FiberNetG"
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]"
            />
            <div className="absolute inset-0 bg-sky-500/10 blur-md rounded-lg -z-10"></div>
          </div>
        </a>

        {/* 1. MENU DESKTOP (Regresa el breakpoint a md:flex gracias al espacio recuperado) */}
        <div className="hidden md:flex items-center">
          <motion.div
            animate={{
              x: scrolled ? 0 : 20,
              gap: scrolled ? "4px" : "16px", // Espaciado original elegante
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className={`flex items-center text-slate-300 font-bold uppercase tracking-widest ${
              scrolled ? "text-xs" : "text-sm"
            }`}
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveSection(item.name)}
                  className={`relative font-bold transition-colors duration-300 no-underline rounded-full flex items-center justify-center whitespace-nowrap ${
                    scrolled ? "px-4 py-1.5" : "px-5 py-2"
                  } ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-cyan-400"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavbarTab"
                      className="absolute inset-0 bg-blue-700/80 shadow-md shadow-blue-500/10"
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL (Regresa a md:hidden) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 2. MENÚ DESPLEGABLE MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full border-b backdrop-blur-xl md:hidden flex flex-col p-6 space-y-3 shadow-2xl"
            style={{
              backgroundColor: `rgba(${rgbValues}, 0.95)`,
              borderColor: `rgba(${rgbValues}, 0.4)`,
            }}
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.name);
                  setIsOpen(false);
                }}
                className={`text-sm font-bold uppercase tracking-widest no-underline transition-colors block py-2 rounded-lg px-3 ${
                  activeSection === item.name
                    ? "text-cyan-400 bg-slate-900/40"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
