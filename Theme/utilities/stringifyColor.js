// @flow
import type { Color } from './Color';

export default ({ type, fields }: Color) => {
  switch (type) {
    case 'rgba':
      return `rgba(${fields.join(', ')})`;
    case 'hsla': {
      const [hue, saturation, lightness, alpha] = fields;
      return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    }
    default:
      throw new Error(`stringifyColor: unsupported color type '${type}'`);
  }
};
