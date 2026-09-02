import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d1117',
        surface: '#161b22',
        'surface-hover': '#1c2433',
        'surface-card': '#141a23',
        text: '#e6edf3',
        muted: '#8b949e',
        accent: '#58a6ff',
        'accent-warn': '#f0883e',
        'accent-green': '#3fb950',
        'accent-purple': '#bc8cff',
        'accent-red': '#f85149',
        border: '#30363d',
        grid: '#21262d',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
