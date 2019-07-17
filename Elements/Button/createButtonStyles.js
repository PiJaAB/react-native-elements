// @flow
import type ThemeSpec from '../../Theme';
import {unit} from '../../Theme';

import createButtonVariantStyles from './createButtonVariantStyles';

export default ({ colors, dimensions, fonts, font }: ThemeSpec) => ({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: dimensions.baseSize * unit(11),
    paddingHorizontal: dimensions.baseSize * unit(21),
    borderRadius: dimensions.baseSize * unit(4),
  },
  baseBasic: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: (dimensions.baseSize * unit(11)) - 1,
    paddingHorizontal: (dimensions.baseSize * unit(21)) - 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  baseDisabled: {
    opacity: 0.45,
  },

  text: {
    textAlign: 'center',
    fontSize: dimensions.baseSize * unit(13),
    lineHeight: dimensions.baseSize * unit(18),
    ...font({
      fontFamily: fonts.primary.fontFamily,
      fontWeight: '300',
    }),
  },
  textLoading: {
    opacity: 0,
  },

  ...createButtonVariantStyles({
    name: 'Default',
    color: '#e0e1e2',
    activeColor: '#cacbcd',
    textColor: 'rgba(0, 0, 0, 0.8)',
    basicColor: 'rgba(16, 16, 16, 0.8)',
    basicActiveColor: 'rgba(80, 80, 80, 0.8)',
  }),

  ...createButtonVariantStyles({
    name: 'primary',
    color: colors.primary,
    textColor: colors.primaryLabel || 'white',
  }),
  ...createButtonVariantStyles({
    name: 'secondary',
    color: colors.secondary,
    textColor: colors.secondaryLabel || 'white',
  }),
  ...createButtonVariantStyles({
    name: 'positive',
    color: colors.positive || '#21ba45',
    textColor: colors.positiveLabel || 'white',
  }),
  ...createButtonVariantStyles({
    name: 'negative',
    color: colors.negative || '#db2828',
    textColor: colors.negativeLabel || 'white',
  }),
});
