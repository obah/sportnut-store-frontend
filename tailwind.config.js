/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#22577A",
        secondary: "#FB3640",
        blurry: "hsl(0 100% 100% / 55%)",
      },
      boxShadow: {
        "3xl": "0 2px 10px rgba(0 0 0 / 30%)",
      },
    },
  },
  plugins: [],
};
