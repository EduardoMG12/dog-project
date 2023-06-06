/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          top404: '#2C2C2C',
          bottom404: '#B7B7B7',
          backgroundHeader:"#000000",
          backgroundSearchInactive:"rgba(255, 255, 255, 0.21)",
          backgroundSearchActive:"rgba(255, 255, 255, 1)",
          background:"#2C2C2C",
          text: "#FFFFFF", // Cor de texto para o tema dark (preto)
        },
        white:{
          top404: '#979797',
          bottom404: '#000000',
          backgroundHeader:"#F5F5F5",
          background:"#F5F5F5",
          text: "#FFFFFF", // Cor de texto para o tema dark (preto)
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
  plugins: [],
};
