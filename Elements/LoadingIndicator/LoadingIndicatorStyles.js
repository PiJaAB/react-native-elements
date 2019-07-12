import { StyleSheet } from 'react-native';

// TODO
const colors = {
  white: 'white',
};

export default StyleSheet.create({
  loadingIndicator: {
    height: 14 * 2.28571429,
    width: 14 * 2.28571429,
    borderWidth: 14 * 0.2,
    borderColor: 'rgba(000, 000, 000, 0.1)',
    borderTopColor: '#767676',
    borderRadius: 1000,
  },
  loadingIndicatorNonBasic: {
    borderColor: 'rgba(000, 000, 000, 0.15)',
    borderTopColor: colors.white,
  },
  loadingIndicatorSizeButton: {
    height: 14 * 1.28571429,
    width: 14 * 1.28571429,
  },
  loadingIndicatorAbsolute: {
    position: 'absolute',
  },
  loadingIndicatorCentered: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
