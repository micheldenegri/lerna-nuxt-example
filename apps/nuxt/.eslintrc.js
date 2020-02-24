module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/strongly-recommended',
    '@nuxtjs',
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  }
}
