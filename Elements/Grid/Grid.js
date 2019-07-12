// @flow
import React from 'react';
import { View } from 'react-native';
import compose from 'src/utilities/compose';

import { Theme, withTheme } from '../../Theme';
import camelCaseJoin from 'src/utilities/camelCaseJoin';
import withStatics from 'src/utilities/withStatics';

const passOnProps = ({ size }) => child => (
  child && child.props && child.props.size === undefined
    ? React.cloneElement(child, { size })
    : child
);


type CellProps = {
  children: mixed,
  size?: "collapsed" | "small" | "medium" | "large" | "extraLarge",
  column?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  flexGrow?: number,
  flexShrink?: number,
  flexBasis?: number | string,
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
  style?: mixed,
  className?: string | string[],
  theme: Theme,
};

const Cell = ({
  children,
  size = Cell.defaultProps.size,
  column,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  style,
  className,
  theme,
}: CellProps) => (
  <View
    style={[
      theme.getStyles('Elements.Grid.cell', className),
      theme.getStyles(camelCaseJoin(['Elements.Grid.cell', size]), className),
      column && theme.getStyles(`Elements.Grid.cellColumn${column}`, className),
      flexGrow && { flexGrow },
      flexShrink && { flexShrink },
      flexBasis && { flexBasis },
      alignSelf && { alignSelf },
      style,
    ]}
  >
    {children}
  </View>
);

Cell.defaultProps = {
  size: 'medium',
  column: undefined,
  flexGrow: undefined,
  flexShrink: undefined,
  flexBasis: undefined,
  alignSelf: undefined,
  style: {},
  className: null,
};


type GridProps = {
  children: mixed,
  size?: "collapsed" | "small" | "medium" | "large" | "extraLarge",
  flexWrap?: "wrap" | "nowrap",
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
  alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around",
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly",
  style?: mixed,
  className?: string | string[],
  theme: Theme,
};

const Grid = ({
  children,
  size = Grid.defaultProps.size,
  flexWrap,
  alignItems,
  alignContent,
  justifyContent,
  style,
  className,
  theme,
}: GridProps) => (
  <View
    style={[
      theme.getStyles('Elements.Grid.grid', className),
      theme.getStyles(camelCaseJoin(['Elements.Grid.grid', size]), className),
      flexWrap && { flexWrap },
      alignItems && { alignItems },
      alignContent && { alignContent },
      justifyContent && { justifyContent },
      style,
    ]}
  >
    {React.Children.map(children, passOnProps({ size }))}
  </View>
);

Grid.defaultProps = {
  size: 'medium',
  flexWrap: undefined,
  alignItems: undefined,
  alignContent: undefined,
  justifyContent: undefined,
  style: {},
  className: null,
};


export default compose(
  withStatics({
    Cell: withTheme(Cell),
  }),
  withTheme,
)(Grid);
