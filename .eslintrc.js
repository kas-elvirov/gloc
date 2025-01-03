module.exports = {
  'extends': ['react-app', 'prettier'],
  'parser': '@typescript-eslint/parser',
  'rules': {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'max-len': [2, { 'code': 120 }],
    'linebreak-style': [2, 'unix'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'array-bracket-spacing': [2, 'never'],
    'camelcase': [2, { 'properties': 'always' }],
    'eol-last': [2],
    'no-trailing-spaces': [2]
  }
};
