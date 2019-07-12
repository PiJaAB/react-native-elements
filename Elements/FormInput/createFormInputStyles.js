// @flow
import { type ThemeSpec } from '../../Theme';

export default ({ colors }: ThemeSpec) => ({
  textInput: {
    width: '100%',
    paddingBottom: 13,
    color: colors.primary,
    borderBottomWidth: 2,
    borderColor: colors.primaryBorder,
  },
});
