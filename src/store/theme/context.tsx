import React from 'react';
import { themeReducer, initialState, ThemeMutation, IThemeState } from './reducers';
import { useActions, ThemeActions } from './actions';

type ThemeContextProps = {
  state: IThemeState;
  dispatch: React.Dispatch<ThemeMutation>;
  actions: ThemeActions;
};

const ThemeContext = React.createContext<ThemeContextProps>({
  state: initialState,
  dispatch: () => initialState,
  actions: useActions(initialState, () => initialState),
});

export const ThemeProvider: React.FunctionComponent<React.PropsWithChildren<{}>> = (
  props: React.PropsWithChildren<{}>
) => {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);
  const actions = useActions(state, dispatch);

  React.useEffect(() => {
    actions.setTheme(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ThemeContext.Provider value={{ state, dispatch, actions }} {...props} />;
};

export default function useTheme() {
  return React.useContext(ThemeContext);
}
