import { isEmpty as _isEmpty } from 'lodash';
import { themes } from '../theme';

export const setTheme = (theme: 'default') => {
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
