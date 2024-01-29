/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#2196F3",
        bgSecondary: "#1E88E5",
        bgThirdary: "#1F8FE0",
      },
    },
  },
  plugins: [],
};
