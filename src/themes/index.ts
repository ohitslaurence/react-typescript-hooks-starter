import base from './default';
import dark from './dark';

/**
 * Local storage key for the current theme
 */
export const THEME_KEY: string = 'theme';

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'default';

export interface ITheme {
  [key: string]: string;
}

export interface IThemes {
  [key: string]: ITheme;
}

export const themes: IThemes = {
  default: base,
  dark,
};
