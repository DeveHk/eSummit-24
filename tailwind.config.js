/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
    dropShadow: {
      bold: "black 5px 5px 1px",
      semibold: "black 3px 3px 1px",
      lightbold: "black 2.5px 2.5px 0.5px",
      lightestbold: "black 1px 1px 2px",
      lowGlowtext: "rgba(255, 255, 255, 0.6) 0px 0px 10px ",
      lowGlow: "rgba(255, 255, 255, 0.3) 0px 0px 20px ",
      glow: "rgba(255, 255, 255, 0.6) 0px 0px 30px",
    },
    boxShadow: {
      lowlit:
        "0px 0px 5px 1px #D3BAFF, inset 0px 0px 10px 5px rgba(255, 255, 255, 0.2)",

      extrasoft: "0px 0px 6px 5px rgba(0, 0, 0, 0.2)",
      soft: "0px 0px 6px 5px rgba(0, 0, 0, 0.2)",
      lowGlow:
        "0px 0px 50px 5px rgba(255, 255, 255, 0.3), inset 0px 0px 50px 5px rgba(255, 255, 255, 0.2)",
      glow: "0px 0px 50px 5px rgba(255, 255, 255, 0.6), inset 0px 0px 50px 5px rgba(255, 255, 255, 0.5) ",
      glowbig:
        "0px -5px 60px 10px rgba(255, 255, 255, 0.6), inset 0px 0px 50px 10px rgba(255, 255, 255, 0.5) ",
    },

    keyframes: {
      move: {
        "0%": { transform: "translateY(0) translateX(0)" },

        "10%": { transform: "translateY(100px) translateX(20px)" },

        "25%": { transform: "translateY(200px) translateX(-20px)" },

        "40%": { transform: "translateY(300px) translateX(20px)" },

        "50%": { transform: "translateY(400px) translateX(-10px)" },

        "60%": { transform: "translateY(300px) translateX(30px)" },

        "75%": { transform: "translateY(200px) translateX(10px)" },

        "90%": { transform: "translateY(100px) translateX(20px)" },

        "100%": { transform: "translateY(0px) translateX(0px)" },
      },
      rotate: {
        from: {
          rotate: "0deg",
        },

        to: {
          rotate: "30deg",
          scale: "20 2.3",
        },

        to: {
          rotate: "0deg",
          scale: "1 1",
        },
      },
      slideinbottom: {
        "0%": { transform: "translateY(100%)", opacity: "0" },

        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      slideinleft: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },

        "100%": { transform: "translateX(0px)", opacity: "1" },
      },
      infinitescrollleft: {
        "0%": { left: "0%" },

        "100%": { left: "-100%" },
      },
      infinitescrollright: {
        "0%": { right: "0%" },

        "100%": { right: "-100%" },
      },

      scroll: {
        "0%": { left: "0" },
        "100%": { left: "-100%" },
      },
      wheel: {
        "0%": { transform: "rotate(360deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
    },
    animation: {
      //popup: "popupanimation 0.7s",
      carosel: "scroll 5s linear infinite",
      wheel: "wheel 70s linear infinite",
      random: "move 30s linear infinite",

      slideinbottom: "slideinbottom 1s ease-in-out 0s 1",
      slideinleft: "slideinleft 1.5s ease-in-out 0s 1",
      infinitescrollleft: "infinitescrollleft 10s linear infinite",
      infinitescrollright: "infinitescrollright 10s linear infinite",
    },
  },
  plugins: [],
};
