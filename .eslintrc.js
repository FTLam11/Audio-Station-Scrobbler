module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'func-names': ['error', 'never'],
    'no-console': ['error', { allow: ['log', 'debug', 'error'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
