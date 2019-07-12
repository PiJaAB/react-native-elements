// @flow
import { StyleSheet } from 'react-native';

const messageVariant = variant => ({
  [`message${variant.name}`]: {
    borderColor: variant.borderColor,
    backgroundColor: variant.backgroundColor,
  },
  [`messageParagraph${variant.name}`]: {
    color: variant.textColor,
  },
});

const message = StyleSheet.create({
  message: {
    marginTop: 14,
    marginBottom: 14,
    paddingTop: 14 - 1,
    paddingRight: (14 * 1.5) - 1,
    paddingBottom: 14 - 1,
    paddingLeft: (14 * 1.5) - 1,
    borderWidth: 1,
    borderColor: 'rgba(34, 36, 38, 0.22)',
    borderRadius: 14 * 0.28571429,
    backgroundColor: '#f8f8f9',
  },
  messageLastChild: {
    marginBottom: 0,
  },
  ...messageVariant({
    name: 'Error',
    borderColor: '#e0b4b4',
    backgroundColor: '#fff6f6',
    textColor: '#9f3a38',
  }),
});

export default message;
