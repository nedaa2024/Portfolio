module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink 3s infinite",
      },
    },
  },
  plugins: [],
};