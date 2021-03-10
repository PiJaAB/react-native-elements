// @flow
import type ThemeSpec from '../../Theme';
import { unit } from '../../Theme';

export default ({ colors, dimensions, fonts, font }: ThemeSpec) => ({
  header: {
    color: colors.text,
    fontSize: dimensions.baseSize * unit(23),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '800',
    }),
  },
  subheader: {
    fontSize: dimensions.baseSize * unit(23 * 0.75),
  },

  header1: {
    color: colors.text,
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '400',
    }),
  },
  subheader1: {
    fontSize: dimensions.baseSize * unit(23 * 0.75),
  },
  header2: {
    color: colors.text,
    fontSize: dimensions.baseSize * unit(16),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '700',
    }),
  },
  subheader2: {
    fontSize: dimensions.baseSize * unit(16 * 0.75),
  },
  header3: {
    fontSize: dimensions.baseSize * unit(16),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '600',
    }),
  },
  subheader3: {
    fontSize: dimensions.baseSize * unit(9 * 0.75),
    letterSpacing: dimensions.baseSize * unit(1 * 0.75),
  },
  header4: {
    fontSize: dimensions.baseSize * unit(9),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '600',
    }),
    letterSpacing: dimensions.baseSize * unit(1),
  },
  subheader4: {
    fontSize: dimensions.baseSize * unit(9 * 0.75),
    letterSpacing: dimensions.baseSize * unit(1 * 0.75),
  },

  inverted: {
    color: colors.inverted || 'white',
  },

  marginBottom: {
    marginBottom: dimensions.baseSize,
  },
});
