module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion:  2018,
    sourceType:  'module',
  }
}
