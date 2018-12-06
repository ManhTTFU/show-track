module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'typescript'],
  rules: {
    'vue/max-attributes-per-line': 0
  }
};
