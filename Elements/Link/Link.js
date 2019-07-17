// @flow
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import compose from '../../Theme/utilities/compose';
import { Theme, withTheme } from '../../Theme';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

type Props = {
  children: mixed,
  onPress?: Function,
  loading?: boolean,
  disabled?: boolean,
  textAlign?: 'left' | 'center' | 'right',
  buttonUnderline?: boolean,
  underline?: boolean,
  style?: mixed,
  textStyle?: mixed,
  className?: string | string[],
  theme: Theme,
};

type State = {
  active: boolean,
};

class Link extends Component<Props, State> {
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
    const {
      children,
      onPress,
      loading,
      disabled,
      style,
      textAlign,
      textStyle,
      buttonUnderline,
      underline,
      theme,
      className,
      ...rest
    } = this.props;
    return (
      <TouchableOpacity
        style={[
        theme.getStyles('Elements.Link.base', className),
        this.state.active && theme.getStyles('Elements.Link.baseActive', className),
        disabled && theme.getStyles('Elements.Link.baseDisabled', className),
        buttonUnderline && theme.getStyles('Elements.Link.buttonUnderline', className),
        style,
      ]}
        activeOpacity={1}
        disabled={disabled}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        onPress={onPress}
        {...rest}
      >
        <Text
          style={[
            theme.getStyles('Elements.Link.text', className),
            this.state.active && theme.getStyles('Elements.Link.textActive', className),
            disabled && theme.getStyles('Elements.Link.textDisabled', className),
            loading && theme.getStyles('Elements.Link.textLoading', className),
            textAlign && { textAlign },
            underline && theme.getStyles('Elements.Link.underline', className),
            { ...textStyle },
          ]}
        >
          {children}
        </Text>
        <LoadingIndicator
          loading={loading}
          absolute
          size="button"
        />
      </TouchableOpacity>
    );
  }
}

Link.defaultProps = {
  onPress: () => {},
  loading: false,
  disabled: false,
  textAlign: undefined,
  buttonUnderline: false,
  underline: false,
  style: {},
  textStyle: {},
  className: null,
};

export default compose(
  withTheme,
)(Link);
