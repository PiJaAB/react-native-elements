// @flow
import parseColor from './parseColor';
import stringifyColor from './stringifyColor';

/**
 * Darken the react-native colour `colorSpec` by `ratio` (0..1, where 0.1
 * means 10% darker).  Darkening is done in RGB space for RGB colours, and by
 * darkening lightness for HSL colours.
 */
export default (colorSpec: string, ratio: number) => {
  const color = parseColor(colorSpec);
  switch (color.type) {
    case 'rgba': {
      const [r, g, b, a] = color.fields;
      const f = 1.0 - ratio;
      return stringifyColor({ type: 'rgba', fields: [r * f, g * f, b * f, a] });
    }
    case 'hsla': {
      const [h, s, l, a] = color.fields;
      return stringifyColor({ type: 'hsla', fields: [h, s, l * (1.0 - ratio), a] });
    }
    default:
      throw new Error('Not a valid color');
  }
};
