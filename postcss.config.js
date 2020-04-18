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
            whitelist: [],
            whitelistPatterns,
            defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g),
          }),
        ]
      : []),
  ],
};
