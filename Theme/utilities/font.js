// @flow
import { Platform } from 'react-native';

import fonts from 'src/theme/fonts';
import fontFiles from 'src/theme/fontFiles';

type Props = {
  fontFamily?: string,
  fontWeight?: '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  fontStyle?: 'normal' | 'italic',
};

const font = ({
  fontFamily = fonts.primary,
  fontWeight = '400',
  fontStyle = 'normal',
}: Props) => {
  if (Platform.OS === 'android') {
    return {
      fontFamily: fontFiles[fontFamily][fontWeight][fontStyle],
    };
  }
  return {
    fontFamily,
    fontWeight,
    fontStyle,
  };
};

export default font;
