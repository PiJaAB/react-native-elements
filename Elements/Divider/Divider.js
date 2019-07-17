// @flow
import React from 'react';
import { View, Text } from 'react-native';
import compose from '../../Theme/utilities/compose';
import { Theme, withTheme } from '../../Theme';

type Props = {
  children?: mixed,
  fitted?: boolean,
  style?: mixed,
  theme: Theme,
}

const Divider = ({
  children,
  fitted,
  style,
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
    <View style={theme.getStyles('Elements.Divider.dividerLine')} />
    {children && <Text style={theme.getStyles('Elements.Divider.dividerText')}>{children}</Text>}
    {children && <View style={theme.getStyles('Elements.Divider.dividerLine')} />}
  </View>
);

Divider.defaultProps = {
  children: false,
  fitted: false,
  style: null,
};

export default compose(
  withTheme,
)(Divider);
