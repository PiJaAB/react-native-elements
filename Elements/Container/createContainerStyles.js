// @flow
import type { ThemeSpec } from '../../Theme';

export default ({ dimensions }: ThemeSpec) => ({
  baseScroll: {
  },
  base: {
    padding: dimensions.baseSize,
  },

  fill: {
    marginHorizontal: -dimensions.baseSize,
  },
  fillFirstChild: {
    marginTop: -dimensions.baseSize,
  },
  fillLastChild: {
    marginBottom: -dimensions.baseSize,
  },
});
