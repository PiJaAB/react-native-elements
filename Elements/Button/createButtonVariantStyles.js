// @flow
import { darken, capitalize } from '../../Theme';

type VariantSpec = {
  name: string,
  color: string,
  activeColor?: string,
  textColor?: string,
  basicColor?: string,
  basicActiveColor?: string,
};

/**
 * Create styles for an Button variant (set of colours), to be available both
 * in standard and basic forms.
 * - name: name of the button variant
 * - color: main theme colour for the variant, used as background/border
 * - activeColor: used when the button is active (held), default: 20% darker `color`
 * - textColor: used for standard buttons' labels, default: white
 * - basicColor: used for the basic form, default: `color`
 * - basicActiveColor: used when the basic form is active, default: `activeColor`
 */
export default ({
  name,
  color,
  activeColor = darken(color, 0.2),
  textColor = 'white',
  basicColor = color,
  basicActiveColor = activeColor,
}: VariantSpec) => {
  const nameUpper = capitalize(name);
  return {
    [`base${nameUpper}`]: {
      backgroundColor: color,
    },
    [`base${nameUpper}Active`]: {
      backgroundColor: activeColor,
    },
    [`baseBasic${nameUpper}`]: {
      borderColor: basicColor,
    },
    [`baseBasic${nameUpper}Active`]: {
      borderColor: basicActiveColor,
    },
    [`text${nameUpper}`]: {
      color: textColor,
    },
    [`text${nameUpper}Active`]: {
      color: textColor,
    },
    [`textBasic${nameUpper}`]: {
      color: basicColor,
    },
    [`textBasic${nameUpper}Active`]: {
      color: basicActiveColor,
    },
  };
};
