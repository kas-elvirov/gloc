module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  useTabs: false,
  semi: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,

  importOrder: [
    'react',

    "^@reduxjs/(.*)$",

    "^@mui/(.*)$",

    '<THIRD-PARTY-MODULES',

    '^(..\/){15}',
    '^(..\/){14}',
    '^(..\/){13}',
    '^(..\/){12}',
    '^(..\/){11}',
    '^(..\/){10}',
    '^(..\/){9}',
    '^(..\/){8}',
    '^(..\/){7}',
    '^(..\/){6}',
    '^(..\/){5}',
    '^(..\/){4}',
    '^(..\/){3}',
    '^(..\/){2}',
    '^(..\/){1}',

    /**
     * Sibling level imports (withous css)
    */
    '^(.\/){1}(.*(?<!css))$',

    '(\w*.css)+$',
  ]
};