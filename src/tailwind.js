module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-primary-light)',
          default: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          light: 'var(--color-secondary-light)',
          default: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        tertiary: 'var(--color-tertiary)',
        info: 'var(--color-info)',
        warning: 'var(--color-warning)',
        negative: 'var(--color-negative)',
        positive: 'var(--color-positive)',
        'primary-background': 'var(--background-primary)',
        'text-primary': 'var(--color-text-primary)',
        'sec-background': 'var(--background-sec)',
      },
      padding: {
        xs: '0.1rem',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    padding: ['responsive'],
    margin: ['last'],
    gridTemplateRows: ['responsive'],
  },
  plugins: [],
};
