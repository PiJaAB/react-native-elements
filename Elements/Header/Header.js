// @flow
import React from 'react';
import { Text } from 'react-native';
import compose from '../../Theme/utilities/compose';
import { Theme, withTheme } from '../../Theme';

type Props = {
  children: mixed,
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  sub?: boolean,
  inverted?: boolean,
  marginBottom?: boolean,
  textAlign?: "left" | "center" | "right",
  style?: mixed,
  className?: string | string[],
  theme: Theme,
};

const headerImportance = (theme, as, sub, className) => {
  let importance = 0;
  switch (as) {
    case 'h1': importance = 1; break;
    case 'h2': importance = 2; break;
    case 'h3': importance = 3; break;
    case 'h4': importance = 4; break;
    case 'h5': importance = 5; break;
    case 'h6': importance = 6; break;
    default: return null;
  }
  return [
    theme.getStyles(`Elements.Header.header${importance}`, className),
    sub && theme.getStyles(`Elements.Header.subheader${importance}`, className),
  ];
};

const Header = ({
  children,
  as,
  sub,
  inverted,
  marginBottom,
  textAlign,
  style,
  className,
  theme,
  ...rest
}: Props) => (
  <Text
    style={[
      theme.getStyles('Elements.Header.header', className),
      sub && theme.getStyles('Elements.Header.subheader', className),
      headerImportance(theme, as, sub, className),
      inverted && theme.getStyles('Elements.Header.inverted', className),
      marginBottom && theme.getStyles('Elements.Header.marginBottom', className),
      textAlign && { textAlign },
      style,
    ]}
    {...rest}
  >
    {children}
  </Text>
);

Header.defaultProps = {
  as: 'h1',
  sub: false,
  inverted: false,
  marginBottom: false,
  textAlign: '',
  style: {},
  className: null,
};

export default compose(withTheme)(Header);
