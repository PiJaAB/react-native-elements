// @flow
import capitalize from './capitalize';

/**
 * Turn the given array of strings into a camelCased (or PascalCased) string.
 *   camelCaseJoin(['an', 'example', 'string]) => 'anExampleString'
 */
export default (arr: string[], pascalCase: boolean = false) =>
  arr.map((str, i) => (i > 0 || pascalCase ? capitalize(str) : str)).join('');
