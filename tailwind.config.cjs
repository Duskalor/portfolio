/** @type {import('tailwindcss').Config} */

const colores = {
  SilverA: '#aaaaaa',
  SilverB: '#bbbbbb',
  SilverC: '#cccccc',
  Platinum: '#dddddd',
  Orange: '#FB6107',
  Dark: '#1b1b1b',
};

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: colores,
      borderColor: colores,
      colors: colores,
      fontFamily: { Courgette: 'Courgette', Gruppo: 'Gruppo' },
    },
  },
  plugins: [],
};
