import { isEmpty as _isEmpty } from 'lodash';
import { themes, ITheme } from 'themes';

export interface IMappedTheme {
  [key: string]: string | null;
}

/**
 * Helper function to set a new theme
 *
 * @param {string} theme The name of the theme to be set
 *
 * @return {void}
 */
export const applyTheme = (theme: string): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (_isEmpty(themeObject)) return;
  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

/**
 * Take a theme as a base and extend it with new properties
 *
 * @param {string} extending The name of the theme to be extended
 * @param {ITheme} newTheme The new theme properties
 *
 * @return {ITheme}
 */
export const extend: (extending: ITheme, newTheme: ITheme) => ITheme = (
  extending: ITheme,
  newTheme: ITheme
): ITheme => {
  return { ...extending, ...newTheme };
};

export const mapTheme: (variables: ITheme) => IMappedTheme = (variables: ITheme) => {
  return {
    '--color-primary': variables.primary || '',
    '--color-primary-dark': variables.primaryDark || '',
    '--color-primary-light': variables.primaryLight || '',

    '--color-secondary': variables.secondary || '',
    '--color-secondary-light': variables.secondaryLight || '',
    '--color-secondary-dark': variables.secondaryDark || '',

    '--color-tertiary': variables.tertiary || '',
    '--color-tertiary-light': variables.tertiaryLight || '',
    '--color-tertiary-dark': variables.tertiaryDark || '',

    '--color-info': variables.info || '',
    '--color-info-light': variables.infoLight || '',
    '--color-info-dark': variables.infoDark || '',

    '--color-warning': variables.warning || '',
    '--color-warning-light': variables.warningLight || '',
    '--color-warning-dark': variables.warningDark || '',

    '--color-negative': variables.negative || '',
    '--color-negative-light': variables.negativeLight || '',
    '--color-negative-dark': variables.negativeDark || '',

    '--color-positive': variables.positive || '',
    '--color-positive-light': variables.positiveLight || '',
    '--color-positive-dark': variables.positiveDark || '',

    '--color-text-primary': variables.textPrimary || '',

    '--sidebar-width': variables.sidebarWidth || '',
    '--background-primary': variables.backgroundPrimary || '',
    '--background-sec': variables.backgroundSecondary || '',
  };
};
