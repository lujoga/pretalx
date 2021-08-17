module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/max-attributes-per-line': 0,
    'vue/require-default-prop': 0
  }
}
