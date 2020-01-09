const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier', 'jest', 'react', 'react-hooks', 'eslint-comments'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        proseWrap: 'never',
      },
    ],
    "import/order": ["error", {
      "newlines-between": "always",
    }],
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/export': 'error',
    'import/extensions': ['error', { js: 'never', json: 'always' }],
    'import/imports-first': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    'camelcase': OFF,
    'no-plusplus': OFF,
    'no-param-reassign': [ERROR, { props: false }],
    'no-console': OFF,
    'no-useless-escape': OFF,
    'no-prototype-builtins': OFF,
    'no-use-before-define': OFF,
    'no-restricted-syntax': OFF,
    'no-underscore-dangle': OFF,
    'no-shadow': OFF,
    'no-return-await': OFF,
    'no-await-in-loop': OFF,
    'guard-for-in': OFF,
    'global-require': OFF,
    'consistent-return': OFF,
    'prefer-promise-reject-errors': OFF,
    'spaced-comment': ["error", "always", { "markers": ["/"] }],

    // React
    'jsx-quotes': [1, 'prefer-double'], // enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote
    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/wrap-multilines': 0,

    // React-Hooks Plugin
    // The following rules are made available via `eslint-plugin-react-hooks`
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: require.resolve('@typescript-eslint/parser'),
      plugins: ['@typescript-eslint/eslint-plugin'],
      settings: {
        'import/extensions': ['.js', '.ts', '.tsx'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          node: {
            extensions: ['.js', '.ts', '.tsx'],
          },
        },
      },
      rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as' },
        ],
        "@typescript-eslint/member-delimiter-style": "error",
        '@typescript-eslint/no-array-constructor': 'error',
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": ["error", {"allowSingleExtends": true}],
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-misused-new": "error",
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/unified-signatures": "error",

        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-unused-vars': 'off',
        'no-array-constructor': 'off',
        'no-use-before-define': 'off',
      },
    },
  ],
};
