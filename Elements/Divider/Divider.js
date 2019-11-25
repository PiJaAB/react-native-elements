// @flow
import React from 'react';
import { View, Text } from 'react-native';
import compose from '../../Theme/utilities/compose';
import { Theme, withTheme } from '../../Theme';

type Props = {
  children?: mixed,
  fitted?: boolean,
  style?: mixed,
  lineStyle?: mixed,
  theme: Theme,
};

const Divider = ({
  children,
  fitted,
  style,
  lineStyle,
  theme,
  ...rest
}: Props) => (
  <View
    style={[
      theme.getStyles('Elements.Divider.divider'),
      fitted && theme.getStyles('Elements.Divider.dividerFitted'),
      style,
    ]}
    {...rest}
  >
    <View
      style={[theme.getStyles('Elements.Divider.dividerLine'), lineStyle]}
    />
    {children && (
      <Text style={theme.getStyles('Elements.Divider.dividerText')}>
        {children}
      </Text>
    )}
    {children && (
      <View
        style={[theme.getStyles('Elements.Divider.dividerLine'), lineStyle]}
      />
    )}
  </View>
);

Divider.defaultProps = {
  children: false,
  fitted: false,
  style: null,
  lineStyle: null,
};

export default compose(withTheme)(Divider);
