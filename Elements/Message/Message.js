// @flow
import React from 'react';
import { View } from 'react-native';

import Paragraph from '../Paragraph/Paragraph';

import messageStyles from './MessageStyles';

type Props = {
  children: mixed,
  variant?: "error",
  lastChild?: boolean,
};

const Message = ({
  children,
  variant,
  lastChild,
}: Props) => (
  <View
    style={[
      messageStyles.message,
      lastChild && messageStyles.messageLastChild,
      (variant === 'error') && messageStyles.messageError,
    ]}
  >
    <Paragraph
      lastChild
      style={[
        (variant === 'error') && messageStyles.messageParagraphError,
      ]}
    >
      {children}
    </Paragraph>
  </View>
);

Message.defaultProps = {
  variant: '',
  lastChild: false,
};

export default Message;
