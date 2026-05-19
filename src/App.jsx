import Navbar from "./Navbar";
import Hero from "./sections/Hero";
import Nosotros from "./sections/Nosotros";
import Planes from "./sections/Planes";
import Cobertura from "./sections/Cobertura";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer"; // Importamos tu nuevo componente modular
import "./App.css";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white select-none">
      <Navbar />

      <main>
        <Hero />
        <Nosotros />
        <Planes />
        <Cobertura />
        <Faq />
        <Contact />
      </main>

      {/* Ahora el Footer está limpio, aislado y fácil de mantener */}
      <Footer />
    </div>
  );
}

export default App;
