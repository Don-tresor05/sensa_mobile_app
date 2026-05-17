/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#fffaf0",
        primary: "#0a0a0a",
        muted: "#6a6a6a",
        hairline: "#e5e5e5",
        "surface-soft": "#faf5e8",
        "brand-pink": "#ff4d8b",
        "brand-teal": "#1a3a3a"
      },
      borderRadius: {
        "clay-sm": "4px",
        "clay-md": "8px",
        "clay-lg": "12px"
      }
    }
  },
  plugins: []
};
