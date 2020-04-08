import { isEmpty as _isEmpty } from 'lodash';
import { themes } from '../theme';

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const setTheme = (theme: 'default'): void => {
  const themeObject = themes[theme];
  if (_isEmpty(themeObject)) return;
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};
