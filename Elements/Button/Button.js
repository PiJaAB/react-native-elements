// @flow
import React, { Component } from 'react';
import compose from '../../Theme/utilities/compose';
import { TouchableOpacity, Text, View } from 'react-native';
import { Theme, withTheme } from '../../Theme';
import camelCaseJoin from '../../Theme/utilities/camelCaseJoin';

import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

type GetClassNameParams = {
  name: string,
  basic?: boolean,
  active?: boolean,
  variant?: string,
};
const getClassName = (baseName, {
  basic = false, active = false, variant,
  // $FlowFixMe: figure out how to express this in a typesafe way
  // $FlowFixMe: ([name, ...].filter(Boolean) should end up as string[])
}: GetClassNameParams) => camelCaseJoin([baseName, basic && 'basic', variant, active && 'active'].filter(Boolean));

type Props = {
  children?: mixed,
  onPress: Function,
  basic?: boolean,
  variant?: "default" | "primary" | "positive" | "negative" | "message" | "facebook",
  loading?: boolean,
  disabled?: boolean,
  style?: mixed,
  title?: string,
  className?: string | string[],
  theme: Theme,
  textStyle?: mixed,
};

type State = {
  active: boolean,
};

class Button extends Component<Props, State> {
  static defaultProps: *;

  state = {
    active: false,
  }

  onPressIn = () => {
    this.setState({ active: true });
  }
  onPressOut = () => {
    this.setState({ active: false });
  }

  render() {
    const { active } = this.state;
    const {
      children,
      onPress,
      basic,
      variant = 'default',
      loading,
      disabled,
      style,
      title,
      theme,
      className,
      textStyle,
      ...rest
    } = this.props;

    renderText = () => (
      <Text
        style={[
          theme.getStyles(getClassName('Elements.Button.text', { basic })),
          active && theme.getStyles(getClassName('Elements.Button.text', { basic, active })),
          variant && theme.getStyles(getClassName('Elements.Button.text', { basic, variant, active })),
          // TODO: integrate variants into "class" system, simplify
          theme.getStyles(getClassName('Elements.Button.text', { basic }), className, true),
          active && theme.getStyles(getClassName('Elements.Button.text', { basic, active }), className, true),
          loading && theme.getStyles('Elements.Button.textLoading'),
          textStyle,
        ]}
      >
        {child}
      </Text>
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        disabled={disabled}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onPress={onPress}
        {...rest}
      >
        <View style={theme.getStyles('Elements.Button.shadow', className)} />
        <View style={[
          theme.getStyles(getClassName('Elements.Button.base', { basic })),
          active && theme.getStyles(getClassName('Elements.Button.base', { basic, active })),
          variant && theme.getStyles(getClassName('Elements.Button.base', { basic, variant, active })),
          // TODO: integrate variants into "class" system, simplify
          theme.getStyles(getClassName('Elements.Button.base', { basic }), className, true),
          active && theme.getStyles(getClassName('Elements.Button.base', { basic, active }), className, true),
          disabled && theme.getStyles('Elements.Button.baseDisabled'),
          style,
        ]}
        >
          {React.Children.map(children, child => typeof child === 'string'
            ? this.renderText
            : child
          )}
          { loading &&
          <LoadingIndicator
            loading={loading}
            nonBasic={!basic}
            size="button"
          /> }
        </View>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  basic: false,
  children: null,
  variant: 'default',
  loading: false,
  disabled: false,
  style: null,
  title: null,
  className: null,
  textStyle: null,
};

export default compose(
  withTheme,
)(Button);
