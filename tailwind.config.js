module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: "#F8B13D",
        clr2: "#4e376f",
        customBlue: "#2779a7",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        "3xl": "0 30px 60px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
