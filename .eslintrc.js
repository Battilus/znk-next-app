const merge = require('deepmerge');

const sharedConfig = {
  extends: ['plugin:jest/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true,
    'jest/globals': true,
  },
  globals: {
    // Переменные окружения, которые может выставлять наш сборщик @ott/bundler
    __CLIENT__: 'readonly',
    __SERVER__: 'readonly',
    __PROJECT__: 'readonly',
    __VERSION__: 'readonly',
    __DEV__: 'readonly',
    __PROD__: 'readonly',
    __TEST__: 'readonly',
    __DISABLE_ADS__: 'readonly',
    __WHITE_LABEL__: 'readonly',
    __PUBLIC_PATH__: 'readonly',
    // Глобальная переменная, используемая для переводов
    __l10n: 'writable',
    __DEVTOOLS__: true,
    __AVIA__: true,
    __PACKAGES__: true,
    __HOTELS__: true,
    __RZD__: true,
    __CARS__: true,
    _kmq: true,
    Promise: true,
    sinon: true,
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  parser: '@babel/eslint-parser',
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'import/no-default-export': 'off',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
  rules: {
    'no-shadow': 'error',
    'no-continue': 'off',
    'no-use-before-define': 'error',
    'arrow-body-style': 'off',
    'ban-ts-comment': 'off',
    'guard-for-in': 'off',
    'no-unstable-nested-components': 'off',
    'default-param-last': 'off',
    'class-methods-use-this': 'off', // allow create class-methods without using this in body
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-relative-packages': 'off',
    'new-cap': 'off',
    'newline-before-return': 'error',
    'no-param-reassign': 'error',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__WHITE_LABEL__',
          '__DEV__',
          '__PROD__',
          '__l10n',
          '__lang',
          '___store',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        ],
      },
    ],
    'prefer-promise-reject-errors': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
  plugins: ['import', 'react', 'jest'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};

const projectConfig = {
  ignorePatterns: ['*.js', '*.jsx'],
  rules: {
    'import': 'off',
    'import/export': 'off',
    'import/order': 'off',
    'no-restricted-exports': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
      },
    ],
    'consistent-return': 'off',
    'no-console': 'off',
    'no-empty': 'warn',
    'no-param-reassign': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/no-duplicates': 'off',
        'import/no-self-import': 'off',
        'import/no-cycle': 'off',
        'import/no-useless-path-segments': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
};

module.exports = merge.all([sharedConfig, projectConfig]);
