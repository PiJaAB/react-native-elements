// @flow
import type { ThemeSpec } from '../../Theme';

export default ({ colors, dimensions, fonts }: ThemeSpec) => ({
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: dimensions.baseSize,
    marginBottom: dimensions.baseSize,
  },
  dividerFitted: {
    marginTop: 0,
    marginBottom: 0,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    paddingLeft: dimensions.baseSize,
    paddingRight: dimensions.baseSize,
    color: colors.secondaryText,
    ...fonts.label,
    fontSize: dimensions.baseSize,
    // textTransform: 'uppercase',
    letterSpacing: dimensions.baseSize * 0.05,
  },
});
