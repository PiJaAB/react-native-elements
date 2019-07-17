// @flow
import { StyleSheet } from 'react-native';
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import type { Props as FontProps } from './utilities/font';

export type ThemeSpec = {
  name: string,
  colors: { [string]: string },
  dimensions: { [string]: number },
  fonts: { [string]: { [string]: mixed } },
  font?: FontProps => TextStyleProp,
  getFontName?: (string, string, string) => string,
};

export default class Theme {
  spec: ThemeSpec;
  styleSheetMap: Map<string, StyleSheet[]> = new Map();

  /**
   * Create a new theme with the given theme spec (colours, dimensions, etc)
   */
  constructor(spec: ThemeSpec) {
    this.spec = spec;
  }

  /**
   * Add a stylesheet associated with a path to a component, e.g.
   *   theme.addStyleSheet('Elements.Button', myButtonStyleSheet)
   * Chainable.
   */
  addStyleSheet(path: string, styleSheet: StyleSheet) {
    if (typeof path !== 'string' || !(styleSheet != null && typeof styleSheet === 'object')) {
      throw new Error('Theme.addStyleSheet: expected path to be a string and styleSheet to be an object');
    }
    const map = this.styleSheetMap;
    const styleSheets = map.get(path) || [];
    styleSheets.push(styleSheet);
    map.set(path, styleSheets);
    return this;
  }

  /** Add several path => stylesheet mappings at once.  Chainable. */
  addStyleSheets(map: { [string]: StyleSheet }) {
    if (map == null || typeof map !== 'object') {
      throw new Error('Theme.addStyleSheets: expected object mapping path => stylesheet');
    }
    Object.keys(map).forEach(path => this.addStyleSheet(path, map[path]));
    return this;
  }

  /**
   * Gets all the styling for a single path to a subcomponent name, e.g.
   *   theme.getStyles('Elements.Button.baseBasic')
   * would return all the styling of the baseBasic subcomponent for Elements.Button.
   *   theme.getStyles('Elements.Button.base', 'foo bar')
   * would return styling for the 'base' subcomponent of Elements.Button, for
   * classes (none), 'foo', 'bar' (in that order).
   */
  getStyles(path: string, classNames: string | string[] = '', omitNullClassName: boolean = false) {
    const map = this.styleSheetMap;
    const pathComponents = path.split('.');

    const basePath = pathComponents.slice(0, -1).join('.');
    const subcomponentName = pathComponents.slice(-1)[0];
    const componentSheets = map.get(basePath) || [];

    const classNamesArray = (Array.isArray(classNames) ? classNames.join(' ') : classNames || '').match(/[-\w]+/g) || [];

    const styles = [];
    [...(omitNullClassName ? [] : [null]), ...classNamesArray].forEach((className) => {
      componentSheets.forEach((styleSheet) => {
        const lookupName = className == null ? subcomponentName : `${subcomponentName}.${className}`;
        styles.push(styleSheet[lookupName]);
      });
    });
    return styles;
  }
}
