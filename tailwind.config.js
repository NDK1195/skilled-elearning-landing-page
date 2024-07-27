/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "666CA3": "#666CA3",
        "13183F": "#13183F",
        "83869A": "#83869A",
        F74780: "#F74780",
        FFA7C3: "#FFA7C3",
      },
      backgroundImage: {
        "gradient-page": "linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)",
        "gradient-1": "linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)",
        "gradient-2": "linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)",
        "hover-gradient-1":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)",
        "hover-gradient-2":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)",
      },
    },
  },
  plugins: [],
};
