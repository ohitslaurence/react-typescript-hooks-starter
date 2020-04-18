// postcss.config.js
const whitelistPatterns = require('./purgeWhitelist');
const purgecss = require('@fullhuman/postcss-purgecss');

const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./src/tailwind.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss({
            content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
            whitelist: [
              'with-sidebar-left',
              'with-sidebar-right',
              'with-sidebar-left-mobile',
              'with-sidebar-right-mobile',
              'sidebar-left-hidden',
              'sidebar-right-hidden',
            ],
            whitelistPatterns,
          }),
        ]
      : []),
  ],
};
