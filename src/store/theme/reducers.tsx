import { TYPES, SetThemeMutation, SetVariablesMutation } from './types';
import { ITheme } from 'themes';

export type ThemeMutation = SetThemeMutation | SetVariablesMutation;

export interface IThemeState {
  theme: string | null;
  variables: ITheme;
}

export const initialState: IThemeState = {
  theme: null,
  variables: {},
};

export function themeReducer(state: IThemeState, action: ThemeMutation): IThemeState {
  switch (action.type) {
    case TYPES.SET_THEME: {
      const { theme } = action as SetThemeMutation;
      return { ...state, theme };
    }

    case TYPES.SET_VARIABLES: {
      const { variables } = action as SetVariablesMutation;
      return { ...state, variables };
    }
    default:
      return state;
  }
}
