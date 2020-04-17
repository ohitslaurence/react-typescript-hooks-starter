import { initialState, themeReducer as reducer } from 'store/theme/reducers';
import * as TYPES from 'store/theme/types';
import { ITheme } from 'themes';

describe('theme mutations', () => {
  test('SET_THEME mutation updates the theme state property', () => {
    const theme: string = 'default';

    const mutation: TYPES.SetThemeMutation = {
      type: 'SET_THEME',
      theme,
    };
    const updatedState = reducer(initialState, mutation);

    expect(updatedState.theme).toEqual(theme);
  });

  test('SET_VARIABLES mutation updates the variables state property', () => {
    const variables: ITheme = {
      primary: '#e3e3e3',
    };

    const mutation: TYPES.SetVariablesMutation = {
      type: 'SET_VARIABLES',
      variables,
    };
    const updatedState = reducer(initialState, mutation);

    expect(updatedState.variables).toEqual(variables);
  });
});
