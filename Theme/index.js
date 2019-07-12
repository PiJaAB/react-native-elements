// @flow
// @flow
import ThemeContext from './ThemeContext';

export type { ThemeSpec } from './Theme';

export const ThemeProvider = ThemeContext.Provider;
export { default as Theme } from './Theme';
export { default as withTheme } from './withTheme';
// export { default as defaultTheme } from 'src/theme';
export * from './utilities';
