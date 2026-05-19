import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 0.6 }, // Mayor brillo al pasar el mouse por encima
        },
      },
    },

    particles: {
      color: { value: "#3b82f6" }, // Azul eléctrico a juego con los botones de tu marca
      links: {
        color: "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.35, // Incrementado de 0.2 para que las líneas de red sean bien visibles
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2, // Movimiento sutil pero fluido
        direction: "none",
        outModes: { default: "out" },
      },
      number: {
        value: 90, // Un toque extra de densidad
        density: { enable: true, area: 800 },
      },
      opacity: {
        // En lugar de una opacidad plana, usamos un rango dinámico para dar profundidad
        value: { min: 0.3, max: 0.7 },
      },
      shape: { type: "circle" },
      size: {
        // Partículas un poco más marcadas para que destaquen sobre el fondo oscuro
        value: { min: 1, max: 4 },
      },
    },

    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 -z-10"
      />
    );
  }

  return null;
};

export default ParticlesBg;
