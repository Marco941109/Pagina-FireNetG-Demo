/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // El asterisco doble '**' entra a CUALQUIER carpeta (incluyendo layouts y sections)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
