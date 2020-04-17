import { useActions, ThemeActions } from 'store/theme/actions';
import { initialState } from 'store/theme/reducers';
import { THEME_KEY, DEFAULT_THEME, themes } from 'themes';
import { setlocalStorage } from 'utils/localStorage';
const utils = require('utils/theme');
const localStorage = require('utils/localStorage');

describe('theme actions', () => {
  let actions: ThemeActions;
  let dispatch: jest.Mock = jest.fn();

  beforeAll(() => {
    actions = useActions(initialState, dispatch);
  });

  afterEach(() => {
    dispatch.mockRestore();
    setlocalStorage(THEME_KEY, null);
  });

  test('set theme with null parameter applies the theme', async () => {
    const utilSpy = jest.spyOn(utils, 'applyTheme');
    await actions.setTheme(null);

    expect(utilSpy).toHaveBeenCalled();
    expect(utilSpy).toHaveBeenCalledWith(DEFAULT_THEME);
  });

  test('set theme with null parameter sets default theme in store', async () => {
    await actions.setTheme(null);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({ theme: DEFAULT_THEME, type: 'SET_THEME' });
    expect(dispatch).toHaveBeenCalledWith({
      variables: themes[DEFAULT_THEME],
      type: 'SET_VARIABLES',
    });
  });

  test('set theme with null parameter uses local storage', async () => {
    const storageTheme: string = 'dark';
    await setlocalStorage(THEME_KEY, storageTheme);
    await actions.setTheme(null);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({ theme: storageTheme, type: 'SET_THEME' });
    expect(dispatch).toHaveBeenCalledWith({
      variables: themes[storageTheme],
      type: 'SET_VARIABLES',
    });
  });

  test('set theme with null parameter sets stores theme in local storage', async () => {
    const storageSpy = jest.spyOn(localStorage, 'setlocalStorage');
    await actions.setTheme(null);

    expect(storageSpy).toHaveBeenCalled();
    expect(storageSpy).toHaveBeenCalledWith(THEME_KEY, DEFAULT_THEME);
  });

  test('reset theme applies the default theme', async () => {
    await actions.resetTheme();

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({ theme: DEFAULT_THEME, type: 'SET_THEME' });
    expect(dispatch).toHaveBeenCalledWith({
      variables: themes[DEFAULT_THEME],
      type: 'SET_VARIABLES',
    });
  });
});
