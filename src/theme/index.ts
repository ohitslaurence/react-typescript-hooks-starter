import { mapTheme } from './util';
import * as base from './default';

interface Themes {
  default: any;
}

export const themes: Themes = {
  default: mapTheme(base),
  // dark: mapTheme(dark),
};
