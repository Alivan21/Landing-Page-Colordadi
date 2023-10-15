/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url(/assets/img/bg-primary.svg)",
        "card-1": "url(/assets/img/bg-card-1.png)",
        "card-2": "url(/assets/img/bg-card-2.png)",
        "card-3": "url(/assets/img/bg-card-3.png)",
        "card-4": "url(/assets/img/bg-card-4.png)",
        "card-5": "url(/assets/img/bg-card-5.png)",
        "card-6": "url(/assets/img/bg-card-6.png)",
        "card-7": "url(/assets/img/bg-card-7.png)",
        "card-8": "url(/assets/img/bg-card-8.png)",
        "card-9": "url(/assets/img/bg-card-9.png)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
