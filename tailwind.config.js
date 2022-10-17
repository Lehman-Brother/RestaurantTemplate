/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./restaurant_menu/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
