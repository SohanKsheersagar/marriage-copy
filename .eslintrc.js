module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'marriage/tsconfig.json', tsconfigRootDir: __dirname, sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};