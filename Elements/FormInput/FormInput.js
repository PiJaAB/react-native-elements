// @flow
import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import compose from '../../Theme/utilities/compose';
import { Theme, withTheme } from '../../Theme';

type Props = TextInputProps & {
  autoCapitalize?: string,
  autoCorrect?: boolean,
  onChangeText: Function,
  onSubmit: Function,
  text: string,
  style: mixed,
  keyboardType?: string,
  textContentType?: string,
  placeholder: string,
  placeholderTextColor: string,
  className?: string | string[],
  theme: Theme,
}

const FormInput = ({
  onSubmit,
  text,
  style,
  className,
  theme,
  ...rest
}: Props) => (
  <TextInput
    value={text}
    style={[theme.getStyles('Elements.FormInput.textInput', className), style]}
    onSubmitEditing={onSubmit}
    underlineColorAndroid="transparent"
    {...rest}
  />
);

FormInput.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: true,
  keyboardType: 'default',
  textContentType: 'none',
  className: null,
};

export default compose(
  withTheme,
)(FormInput);
