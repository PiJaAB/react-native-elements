// @flow
export default ({ colors }: ThemeSpec) => ({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    marginHorizontal: 5,
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: colors.inverted,
  },
  active: {
    backgroundColor: colors.secondary,
  },
});


