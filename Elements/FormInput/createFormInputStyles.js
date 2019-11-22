// @flow
import type ThemeSpec from '../../Theme';

export default ({ colors, dimensions, fonts, font }: ThemeSpec) => ({
  textInput: {
    width: '100%',
    paddingBottom: 13,
    color: colors.primary,
    borderBottomWidth: 2,
    borderColor: colors.primaryBorder,
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '300',
    }),
  },
});
