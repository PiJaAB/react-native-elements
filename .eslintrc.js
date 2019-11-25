module.exports = {
  extends: ['@react-native-community', 'plugin:flowtype/recommended'],
  plugins: ['jsx-a11y', 'import', 'flowtype'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js'],
        packageDir: './',
      },
    ],
    'react/forbid-prop-types': ['off', { forbid: [] }],
    'jsx-a11y/anchor-is-valid': ['off'],
    'react/default-props-match-prop-types': ['off'],
    'flowtype/space-after-type-colon': ['off'],
  },
  env: {
    jest: true,
  },
  globals: {},
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};
