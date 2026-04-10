/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"DotGothic16"', 'monospace'],
        retro: ['"DotGothic16"', 'sans-serif'],
      },
      colors: {
        bg: {
          primary:   '#120a0a',
          secondary: '#1c0f0f',
          card:      '#1a0d0d',
        },
        retro: {
          red:    '#b74646',
          orange: '#e0784a',
          gold:   '#f0b832',
          cream:  '#f5e8d3',
          brown:  '#7a3030',
          dim:    '#3a1818',
        },
      },
      animation: {
        'blink':       'blink 1s step-end infinite',
        'glitch':      'glitch 4s infinite',
        'float-pixel': 'floatPixel 3s steps(6) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        glitch: {
          '0%, 88%, 100%': { transform: 'translate(0)' },
          '90%': { transform: 'translate(-2px,  1px)' },
          '92%': { transform: 'translate( 2px, -1px)' },
          '94%': { transform: 'translate(-1px,  2px)' },
          '96%': { transform: 'translate( 1px, -2px)' },
        },
        floatPixel: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'pixel-red':    '4px 4px 0px #b74646',
        'pixel-orange': '4px 4px 0px #e0784a',
        'pixel-gold':   '4px 4px 0px #f0b832',
        'glow-red':     '0 0 12px #b74646aa',
        'glow-orange':  '0 0 12px #e0784aaa',
        'glow-gold':    '0 0 12px #f0b832aa',
      },
    },
  },
  plugins: [],
};
