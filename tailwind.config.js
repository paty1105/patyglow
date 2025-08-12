/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Arial","sans-serif"],
        body: ["ui-sans-serif","system-ui","-apple-system","Segoe UI","Roboto","Arial","sans-serif"]
      },
      colors: {
        ink: "#0B0B0B",
        paper: "#FFFFFF",
        stone: "#F6F7F9",
        line: "#E7E8EC",
        gold: "#D4AF37",
        blue: "#3B82F6",
        pink: "#EC4899"
      }
    },
  },
  plugins: [],
}
