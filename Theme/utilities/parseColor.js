// @flow
import type { Color } from './Color';
import namedColors from './namedColors';

// See https://facebook.github.io/react-native/docs/colors

const hslPattern = /^hsl\(([\d.]+), ([\d.]+)%, ([\d.]+)%\)$/;
const hslaPattern = /^hsla\(([\d.]+), ([\d.]+)%, ([\d.]+)%, ([\d.]+)\)$/;

function parseHSL(spec) {
  let hslParams = null;
  if (hslPattern.test(spec)) {
    hslParams = hslPattern.exec(spec).slice(1);
  }
  if (hslaPattern.test(spec)) {
    hslParams = hslaPattern.exec(spec).slice(1);
  }

  if (hslParams == null) {
    throw new SyntaxError(`Not a HSL color string: '${spec}'`);
  }

  const [hue, saturation, lightness, alpha = 1.0] = hslParams.map(str =>
    parseFloat(str),
  );
  return { type: 'hsla', fields: [hue, saturation, lightness, alpha] };
}

const hash3Pattern = /^#[0-9a-fA-F]{3}$/;
const hash6Pattern = /^#[0-9a-fA-F]{6}$/;
const hash8Pattern = /^#[0-9a-fA-F]{8}$/;
const rgbPattern = /^rgb\(([\d.]+), ([\d.]+), ([\d.]+)\)$/;
const rgbaPattern = /^rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)$/;

function parseRGB(spec) {
  let rgbParams = null;
  if (hash3Pattern.test(spec)) {
    rgbParams = spec
      .slice(1)
      .split('')
      .map(ch => parseInt(ch + ch, 16));
  }
  if (hash6Pattern.test(spec) || hash8Pattern.test(spec)) {
    rgbParams = (spec.slice(1).match(/[0-9a-fA-F]{2}/g) || []).map(str =>
      parseInt(str, 16),
    );
  }
  if (rgbPattern.test(spec)) {
    rgbParams = rgbPattern.exec(spec).slice(1);
  }
  if (rgbaPattern.test(spec)) {
    rgbParams = rgbaPattern.exec(spec).slice(1);
  }

  if (rgbParams == null) {
    throw new SyntaxError(`Not a RGB color string: '${spec}'`);
  }

  const [red = 0, green = 0, blue = 0, alpha = 1.0] = rgbParams.map(str =>
    parseFloat(str),
  );
  return { type: 'rgba', fields: [red, green, blue, alpha] };
}

/**
 * Parses a colour string into an object describing the colour, to be
 * manipulated in code.  Supports all the standard react-native colour
 * formats: hex (3, 6, 8 chars), rgb, rgba, hsl, hsla, named colours.
 */
export default (spec: string): Color =>
  spec.startsWith('hsl') ? parseHSL(spec) : parseRGB(namedColors[spec] || spec);
