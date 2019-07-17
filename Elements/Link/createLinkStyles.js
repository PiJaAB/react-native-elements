// @flow
import type ThemeSpec from '../../Theme';
import {unit} from '../../Theme';

export default ({ colors, dimensions, fonts, font }: ThemeSpec) => ({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: colors.dustyOrange,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  baseDisabled: {
    opacity: 0.45,
  },
  text: {
    color: colors.secondaryText,
    fontSize: dimensions.baseSize * unit(12),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '300',
    }),
    lineHeight: dimensions.baseSize * unit(14),
  },
  textDisabled: {
    color: colors.primaryBorder,
  },
  textActive: {
    color: colors.active,
  },
  textLoading: {
    opacity: 0,
  },
});
