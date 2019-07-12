// @flow
import React from 'react';
import type { ComponentType } from 'react';
import ThemeContext from './ThemeContext';

/** Injects `theme` prop into a component */
export default function withTheme<T: {}>(Comp: ComponentType<T>) {
  const WrappedComp = (props: T) => (
    <ThemeContext.Consumer>
      { theme => <Comp theme={theme} {...props} /> }
    </ThemeContext.Consumer>
  );
  WrappedComp.displayName = `withTheme(${Comp.displayName || Comp.name})`;
  return WrappedComp;
}
