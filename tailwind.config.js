/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
      "xsm": {"max": "300px"}
    },
      colors: {
        leadster: {
          0: "#1C3C50",
          100: "#F0F8FF",
          400: "#007EFF",
        },
      },
    },
  },
  plugins: [],
};
