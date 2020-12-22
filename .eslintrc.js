module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    'no-shadow': 0,
    'class-methods-use-this': 0,
    'no-useless-constructor': 0,
    'no-underscore-dangle': 0,
  },
};
