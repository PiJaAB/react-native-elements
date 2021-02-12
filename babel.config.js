module.exports = () => {
  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-transform-react-jsx-source',
    ],
  };
};
