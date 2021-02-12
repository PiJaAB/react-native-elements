// @flow
import ThemeContext from './ThemeContext';

export type { ThemeSpec } from './Theme';

export const ThemeProvider = ThemeContext.Provider;
export { default as Context } from './ThemeContext';
export { default as Theme } from './Theme';
export { default as withTheme } from './withTheme';
export * from './utilities';
