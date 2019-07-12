// @flow

/** Capitalizes a string (first letter uppercase, the rest unchanged) */
export default (str: string) =>
  (str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str);
