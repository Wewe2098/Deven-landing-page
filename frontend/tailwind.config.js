/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e0e0e",
        secondary: "#507abd",
        accent: "#507abd",
        dark: "#0e0e0e",
        light: "#F9FAFB",
      },
      fontFamily: {
        sans: ["Oswald", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(80,122,189,0.28), 0 10px 30px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #0e0e0e 0%, #141414 100%)",
        mesh: "radial-gradient(circle at 20% 0%, rgba(80,122,189,0.2), transparent 35%), radial-gradient(circle at 80% 0%, rgba(80,122,189,0.12), transparent 40%)",
      },
    },
  },
  plugins: [],
}
