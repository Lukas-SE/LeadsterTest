/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Media querry para o samsung fold:
      screens: {
      "xsm": {"max": "300px"}
    },
      colors: {
        leadster: {
          0: "#1C3C50",
          100: "#F0F8FF",
          400: "#0083FF",
        },
      },
    },
  },
  plugins: [],
};
