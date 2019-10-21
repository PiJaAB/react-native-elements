// @flow
import type { ThemeSpec } from '../../Theme';

export default ({ dimensions }: ThemeSpec) => ({
  baseScroll: {
  },
  base: {
    padding: dimensions.baseSize,
    flex: 1,
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
