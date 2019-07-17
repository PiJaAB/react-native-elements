// @flow
import { Platform } from 'react-native';

export type Props = {
  fontFamily?: string,
  fontWeight?: '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  fontStyle?: 'normal' | 'italic',
};

const font = (spec, {
  fontFamily = spec.fonts.primary,
  fontWeight = '400',
  fontStyle = 'normal',
}: Props) => {
  if (Platform.OS === 'android') {
    return {
      fontFamily: spec.getFontName(fontFamily, fontWeight, fontStyle),
    };
  }
  return {
    fontFamily,
    fontWeight,
    fontStyle,
  };
};

export default font;
