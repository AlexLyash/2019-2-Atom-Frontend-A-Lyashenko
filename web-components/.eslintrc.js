module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'prefer-template': 0,
    'no-useless-concat': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/href-no-hash': 0,
  },
};
