// @flow
import React, { Component } from 'react';
import compose from '../../Theme/utilities/compose';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { Theme, withTheme } from '../../Theme';
import camelCaseJoin from '../../Theme/utilities/camelCaseJoin';

type GetClassNameParams = {
  name: string,
  basic?: boolean,
  active?: boolean,
  variant?: string,
};
const getClassName = (
  baseName,
  { basic = false, active = false, variant }: GetClassNameParams,
) =>
  camelCaseJoin(
    [baseName, basic && 'basic', variant, active && 'active'].filter(Boolean),
  );

type Props = {
  children?: mixed,
  onPress: Function,
  basic?: boolean,
  variant?:
    | 'default'
    | 'primary'
    | 'positive'
    | 'negative'
    | 'message'
    | 'facebook',
  loading?: boolean,
  disabled?: boolean,
  style?: mixed,
  className?: string | string[],
  theme: Theme,
  textStyle?: mixed,
  loadingIndicatorColor: string,
};

type State = {
  active: boolean,
};

class Button extends Component<Props, State> {
  static defaultProps: *;

  state = {
    active: false,
  };

  onPressIn = () => {
    this.setState({ active: true });
  };
  onPressOut = () => {
    this.setState({ active: false });
  };

  renderText = child => {
    const { active } = this.state;
    const {
      basic,
      variant = 'default',
      loading,
      theme,
      className,
      textStyle,
    } = this.props;
    return (
      <Text
        style={[
          theme.getStyles(getClassName('Elements.Button.text', { basic })),
          active &&
            theme.getStyles(
              getClassName('Elements.Button.text', { basic, active }),
            ),
          variant &&
            theme.getStyles(
              getClassName('Elements.Button.text', { basic, variant, active }),
            ),
          // TODO: integrate variants into "class" system, simplify
          theme.getStyles(
            getClassName('Elements.Button.text', { basic }),
            className,
            true,
          ),
          active &&
            theme.getStyles(
              getClassName('Elements.Button.text', { basic, active }),
              className,
              true,
            ),
          loading && theme.getStyles('Elements.Button.textLoading'),
          textStyle,
        ]}
      >
        {child}
      </Text>
    );
  };

  render() {
    const { active } = this.state;
    const {
      children,
      onPress,
      basic,
      variant = 'default',
      loading,
      loadingIndicatorColor,
      disabled,
      style,
      theme,
      className,
      textStyle,
      touchableStyle,
      ...rest
    } = this.props;

    const renderChildren = () => {
      if (typeof children === 'function') {
        return children({ active });
      }
      return React.Children.map(children, child =>
        typeof child === 'string' ? this.renderText(child) : child,
      );
    };

    return (
      <TouchableOpacity
        activeOpacity={1}
        disabled={disabled || loading}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onPress={onPress}
        style={[touchableStyle]}
        {...rest}
      >
        <View style={theme.getStyles('Elements.Button.shadow', className)} />
        <View
          style={[
            theme.getStyles(getClassName('Elements.Button.base', { basic })),
            active &&
              theme.getStyles(
                getClassName('Elements.Button.base', { basic, active }),
              ),
            variant &&
              theme.getStyles(
                getClassName('Elements.Button.base', {
                  basic,
                  variant,
                  active,
                }),
              ),
            // TODO: integrate variants into "class" system, simplify
            theme.getStyles(
              getClassName('Elements.Button.base', { basic }),
              className,
              true,
            ),
            active &&
              theme.getStyles(
                getClassName('Elements.Button.base', { basic, active }),
                className,
                true,
              ),
            disabled && theme.getStyles('Elements.Button.baseDisabled'),
            style,
          ]}
        >
          {loading ? (
            <ActivityIndicator color={loadingIndicatorColor} />
          ) : (
            renderChildren({ active })
          )}
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
  loadingIndicatorColor: undefined,
  disabled: false,
  style: null,
  className: null,
  textStyle: null,
};

export default compose(withTheme)(Button);
