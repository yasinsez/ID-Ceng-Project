/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:             'var(--color-bg)',
        surface:        'var(--color-surface)',
        'surface-2':    'var(--color-surface-2)',
        'surface-sel':  'var(--color-surface-sel)',
        border:         'var(--color-border)',
        'border-sub':   'var(--color-border-sub)',
        primary:        'var(--color-text-primary)',
        secondary:      'var(--color-text-secondary)',
        accent:         'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        success:        'var(--color-success)',
        bezel:          'var(--color-bezel)',
        'bezel-stroke': 'var(--color-bezel-stroke)',
      },
    },
  },
  plugins: [],
};
