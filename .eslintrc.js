module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
    amd: true,
    node: true,
  },
  plugins: ["prettier", "react"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
