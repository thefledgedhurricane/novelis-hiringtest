/* eslint-disable prettier/prettier */
module.exports = {
  parser: "babel-eslint",
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
};
