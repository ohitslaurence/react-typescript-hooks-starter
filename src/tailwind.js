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
        tertiary: {
          light: 'var(--color-tertiary-light)',
          default: 'var(--color-tertiary)',
          dark: 'var(--color-tertiary-dark)',
        },
        info: {
          light: 'var(--color-info-light)',
          default: 'var(--color-info)',
          dark: 'var(--color-info-dark)',
        },
        warning: {
          light: 'var(--color-warning-light)',
          default: 'var(--color-warning)',
          dark: 'var(--color-warning-dark)',
        },
        negative: {
          light: 'var(--color-negative-light)',
          default: 'var(--color-negative)',
          dark: 'var(--color-negative-dark)',
        },
        positive: {
          light: 'var(--color-positive-light)',
          default: 'var(--color-positive)',
          dark: 'var(--color-positive-dark)',
        },
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
