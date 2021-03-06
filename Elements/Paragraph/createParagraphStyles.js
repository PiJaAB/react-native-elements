// @flow
import type ThemeSpec from '../../Theme';
import { unit } from '../../Theme';

export default ({ colors, dimensions, fonts, font }: ThemeSpec) => ({
  paragraph: {
    color: colors.text,
    fontSize: dimensions.baseSize * unit(12),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '300',
    }),
  },

  paddingBefore: {
    marginTop: dimensions.baseSize * unit(7),
  },
  paddingAfter: {
    marginBottom: dimensions.baseSize * unit(7),
  },
});
