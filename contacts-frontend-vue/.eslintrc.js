module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 6,
  },
  "globals": {
    "axios": true,
  },
  // parser: "babel-eslint",
  "extends": ["plugin:vue/base"],
  plugins: ["vue", "standard"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
