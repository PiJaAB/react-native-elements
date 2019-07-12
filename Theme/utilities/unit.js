// @flow

/**
 * Helper function for defining dimensions of Element components, in terms of
 * base units.  For instance,
 *   dimensions.baseSize * unit(22)
 * can be used to define a padding/size/etc in a way that can be flexibly
 * controlled by varying `dimensions.baseSize`.
 */
export default (v: number) => v / 20;
