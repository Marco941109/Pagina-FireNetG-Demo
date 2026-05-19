export const CV_DATA = {
  perfil: {
    nombre: "MARCOS LÓPEZ SÁNCHEZ",
    titulo: "Software Engineer | Microservicios y Modernización",
    resumen: `Especializado en la transición de sistemas monolíticos a microservicios. 
    Con amplia experiencia en el ecosistema de Node.js (NestJS) y Java (Spring Boot), diseño soluciones backend de alto impacto técnico. Experto en optimización de persistencia de datos, integración de APIs empresariales y despliegue de soluciones en AWS. Comprometido con 
    la calidad del código mediante testing automatizado.`,
    foto: "/tu-foto.jpg", // Pon tu foto en la carpeta public
    contacto: {
      email: "marco941109@hotmail.com",
      tel: "+52 919 163 0711",
      ubicacion: "Ciudad de México, México",
    },
  },
  tecnologias: [
    {
      nombre: "Backend",
      skills: ["NestJS", "Spring Boot", "Java", "TypeScript", "Node.js"],
    },
    {
      nombre: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Oracle"],
    },
    {
      nombre: "Tools & Ops",
      skills: ["Docker", "AWS (S3)", "Jenkins", "Swagger", "Jest"],
    },
  ],
  experiencia: [
    {
      empresa: "GRUPO SALINAS",
      puesto: "Desarrollador Microservicios",
      periodo: "2025 – 2026",
      puntos: [
        "Modernización de Arquitecturas monolíticas a microservicios.",
        "Integración Empresarial (SAP) vía SOAP/XML.",
        "Automatización de Documentos con Puppeteer y Handlebars.",
      ],
    },
    {
      empresa: "INDUXSOFT",
      puesto: "Desarrollador Fullstack",
      periodo: "2023 – 2024",
      puntos: [
        "Generación de reportes y manejo de XML con DKL.",
        "Interfaces dinámicas con JavaScript (ES6+) y REST APIs.",
      ],
    },
  ],
};
