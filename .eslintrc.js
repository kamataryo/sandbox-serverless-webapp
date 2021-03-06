module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'array-callback-return': ['error'],
    'quote-props': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'valid-jsdoc': ['off'],
    'key-spacing': ['off'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-dupe-args': ['error'],
    'no-console': ['warn'],
    'no-const-assign': ['error'],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],
    'no-unused-vars': ['error'],
    'no-undefined': ['error'],
    'no-var': ['error'],
    'no-multiple-empty-lines': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': [
      'off',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true,
        },
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
    'space-before-blocks': [
      'error',
      { functions: 'always', keywords: 'always', classes: 'always' },
    ],
    'space-unary-ops': ['error'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'sort-imports': ['off'],
  },
}
