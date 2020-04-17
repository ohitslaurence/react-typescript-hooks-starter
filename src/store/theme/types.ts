import { ITheme } from 'themes';

export const TYPES = {
  SET_THEME: 'SET_THEME',
  SET_VARIABLES: 'SET_VARIABLES',
};

export interface SetThemeMutation {
  type: 'SET_THEME';
  theme: string | null;
}

export interface SetVariablesMutation {
  type: 'SET_VARIABLES';
  variables: ITheme;
}
