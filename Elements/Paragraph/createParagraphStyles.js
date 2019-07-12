// @flow
import type ThemeSpec from '../../Theme';
import {font, unit} from '../../Theme';

export default ({ colors, dimensions, fonts }: ThemeSpec) => ({
  paragraph: {
    color: colors.text,
    ...fonts.text,
    fontSize: dimensions.baseSize * unit(12),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '300',
    }),
    lineHeight: dimensions.baseSize * unit(14),
  },

  paddingBefore: {
    marginTop: dimensions.baseSize * unit(7),
  },
  paddingAfter: {
    marginBottom: dimensions.baseSize * unit(7),
  },
});
