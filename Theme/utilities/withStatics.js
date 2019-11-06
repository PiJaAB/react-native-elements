// @flow
import React from 'react';
import type { ComponentType } from 'react';
import displayNameOf from './displayNameOf';

/** HOC: returns `Comp`, wrapped and with `statics` assigned to the wrapper. */
export default <T: {}, U: {}>(statics: T) => (Comp: ComponentType<U>) => {
  const WrappedComp = (props: U) => <Comp {...props} />;
  WrappedComp.displayName = `withStatics(${displayNameOf(Comp)})`;
  Object.assign(WrappedComp, statics);
  return WrappedComp;
};
