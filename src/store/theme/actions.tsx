import React from 'react';
import { themes, THEME_KEY, DEFAULT_THEME } from 'themes';
import { applyTheme } from 'utils/theme';
import { setlocalStorage, getlocalStorage } from 'utils/localStorage';
import { ThemeMutation, IThemeState } from './reducers';

export type ThemeActions = {
  setTheme: (theme: string | null) => void;
  resetTheme: () => void;
};

export const useActions = (
  state: IThemeState,
  dispatch: React.Dispatch<ThemeMutation>
): ThemeActions => {
  /**
   * Applies the theme and stores the theme name in the store and local storage
   *
   * @param {string} theme The name of the theme
   *
   * @return {void}
   */
  const handleSetTheme: (theme: string) => void = (theme: string): void => {
    applyTheme(theme);
    dispatch({ type: 'SET_THEME', theme });
    dispatch({ type: 'SET_VARIABLES', variables: themes[theme] });
    setlocalStorage(THEME_KEY, theme);
  };

  /**
   * Sets the theme
   *
   * @param {string | null} theme The name of the theme
   *
   * @return {void}
   */
  async function setTheme(theme: string | null): Promise<void> {
    const storage: string = await getlocalStorage(THEME_KEY);

    if (theme) {
      handleSetTheme(theme);
    } else {
      const themeName: string = storage ? storage : DEFAULT_THEME;
      handleSetTheme(themeName);
    }
  }

  /**
   * Resets the theme to the default theme
   *
   * @return {void}
   */
  async function resetTheme(): Promise<void> {
    handleSetTheme(DEFAULT_THEME);
  }

  return {
    setTheme,
    resetTheme,
  };
};
