// @flow
import { type ThemeSpec } from '../../Theme';

const cellsColumns = {};
for (let i = 0; i < 12; i += 1) {
  cellsColumns[`cellColumn${i}`] = {
    flexBasis: `${(i * 100) / 12}%`,
  };
}

export default ({ dimensions }: ThemeSpec) => ({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  cell: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '100%',
  },
  ...cellsColumns,

  gridCollapsed: {
    margin: 0,
  },
  gridSmall: {
    margin: dimensions.baseSize * -0.25,
  },
  gridMedium: {
    margin: dimensions.baseSize * -0.5,
  },
  gridLarge: {
    margin: dimensions.baseSize * -1,
  },
  gridExtraLarge: {
    margin: dimensions.baseSize * -2,
  },

  cellCollapsed: {
    padding: 0,
  },
  cellSmall: {
    padding: dimensions.baseSize * 0.25,
  },
  cellMedium: {
    padding: dimensions.baseSize * 0.5,
  },
  cellLarge: {
    padding: dimensions.baseSize * 1,
  },
  cellExtraLarge: {
    padding: dimensions.baseSize * 2,
  },
});
