export default {
  theme: {
    extend: {
      animation: {
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      screens: {
        custom: "700px", // ✅ Custom breakpoint
      },
    },
  },
  plugins: [],
};