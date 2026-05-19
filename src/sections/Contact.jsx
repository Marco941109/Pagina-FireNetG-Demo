import { motion } from "framer-motion";
import { Mail, Send, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "../components/ScrollReveal"; // Importación integrada

const SERVICE_ID = "service_ktgejrg";
const TEMPLATE_ID = "template_ha47asw";
const PUBLIC_KEY = "U3C_nf2UagakUSCRK";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("⚠️ Por favor, completa todos los campos.");
      return;
    }

    // Validación básica extra para limpiar emojis en la UI si fuera necesario
    const cleanedMessage = statusMessage.startsWith("⚠️") ? "" : statusMessage;

    setIsSending(true);
    setStatusMessage("");

    emailjs.init(PUBLIC_KEY);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage(
            "✅ ¡Mensaje enviado con éxito! Nos comunicaremos contigo pronto.",
          );
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatusMessage(
            "❌ Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
          );
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contacto"
      className="py-24 px-5 bg-slate-950 text-white scroll-mt-16 relative overflow-hidden"
    >
      {/* Luz neón decorativa de fondo en sintonía con la marca */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO Y ATENCIÓN */}
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-cyan-400 font-mono font-bold text-xs uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30 tracking-widest">
                  Atención Inmediata
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                ¿Listo para navegar a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  Alta Velocidad?
                </span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed font-light">
                Contrata tu plan, solicita soporte técnico o consulta la
                cobertura en tu domicilio. Elige el canal de tu preferencia;
                nuestro equipo está listo para ayudarte.
              </p>

              {/* SECCIÓN DE TELÉFONOS Y MEDIOS DIRECTOS */}
              <div className="space-y-4">
                {/* Teléfono 1: Ventas y Contrataciones */}
                <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        Línea Principal / Ventas
                      </div>
                      <div className="text-base font-mono font-bold text-slate-200">
                        919 129 6980
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto shrink-0">
                    <a
                      href="tel:9191296980"
                      className="flex-1 sm:flex-none text-center bg-slate-800 hover:bg-slate-700 text-xs text-white font-medium px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
                    >
                      Llamar
                    </a>
                    <a
                      href="https://wa.me/529191296980?text=Hola,%20me%20interesa%20contratar%20un%20plan%20de%20internet."
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none text-center bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-medium px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                  </div>
                </div>

                {/* Teléfono 2: Soporte y Atención Ciudadana */}
                <div className="bg-slate-900/50 border border-slate-800/80 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="p-3 bg-blue-600/10 text-blue-400 rounded-xl shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        Soporte Técnico y Atención
                      </div>
                      <div className="text-base font-mono font-bold text-slate-200">
                        919 106 3894
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto shrink-0">
                    <a
                      href="tel:9191063894"
                      className="flex-1 sm:flex-none text-center bg-slate-800 hover:bg-slate-700 text-xs text-white font-medium px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
                    >
                      Llamar
                    </a>
                    <a
                      href="https://wa.me/529191063894?text=Hola,%20necesito%20soporte%20técnico%20con%20mi%20servicio."
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none text-center bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-medium px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                  </div>
                </div>

                {/* Correo Electrónico */}
                <a
                  href="mailto:marcos.lopez.sanchez.dev@gmail.com"
                  className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/60 p-4 rounded-2xl hover:border-blue-500/20 transition-all text-slate-300 hover:text-white no-underline"
                >
                  <div className="p-3 bg-slate-800/80 text-slate-400 rounded-xl shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      Correo Corporativo
                    </div>
                    <div className="text-sm font-mono text-slate-300 truncate breakdown-all">
                      marcos.lopez.sanchez.dev@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* COLUMNA DERECHA: FORMULARIO DIGITAL */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative">
              <form onSubmit={sendEmail} className="space-y-5 relative z-10">
                <h3 className="text-lg font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-cyan-400" /> Déjanos un
                  mensaje
                </h3>

                {/* Input Nombre */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-black/40 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm font-light"
                  />
                </div>

                {/* Input Email/Teléfono */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
                    Correo Electrónico o Teléfono
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@correo.com o celular"
                    className="w-full bg-black/40 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm font-light"
                  />
                </div>

                {/* Textarea Mensaje */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
                    ¿En qué te podemos ayudar?
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe aquí tu domicilio, el plan de interés o tus dudas..."
                    className="w-full bg-black/40 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm font-light resize-none"
                  ></textarea>
                </div>

                {statusMessage && (
                  <div
                    className={`text-xs font-medium p-3 rounded-xl border ${
                      statusMessage.startsWith("✅")
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  {isSending ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
