module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // すべてのJS、JSX、TS、TSXファイルをスキャン
  ],
  future: {
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  daisyui: {
    themes: ["light", "dark", "cupcake", "aqua", "pastel"],
  },
};
