// @flow
import { StyleSheet } from 'react-native';
import type { ThemeSpec } from '../../Theme';

import createButtonStyles from '../Button/createButtonStyles';
import createContainerStyles from '../Container/createContainerStyles';
import createDividerStyles from '../Divider/createDividerStyles';
import createGridStyles from '../Grid/createGridStyles';
import createHeaderStyles from '../Header/createHeaderStyles';
import createParagraphStyles from '../Paragraph/createParagraphStyles';
import createSceneContainerStyles from '../SceneContainer/createSceneContainerStyles';
import createFormInputStyles from '../FormInput/createFormInputStyles';
import createLinkStyles from '../Link/createLinkStyles';

export default (spec: ThemeSpec) => ({
  'Elements.Button': StyleSheet.create(createButtonStyles(spec)),
  'Elements.Container': StyleSheet.create(createContainerStyles(spec)),
  'Elements.Divider': StyleSheet.create(createDividerStyles(spec)),
  'Elements.Grid': StyleSheet.create(createGridStyles(spec)),
  'Elements.Header': StyleSheet.create(createHeaderStyles(spec)),
  'Elements.Paragraph': StyleSheet.create(createParagraphStyles(spec)),
  'Elements.SceneContainer': StyleSheet.create(createSceneContainerStyles(spec)),
  'Elements.FormInput': StyleSheet.create(createFormInputStyles(spec)),
  'Elements.Link': StyleSheet.create(createLinkStyles(spec)),
});
