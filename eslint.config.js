module.exports = {
  root: true,
  ignores: ["node_modules", ".next", "public"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["react", "@typescript-eslint", "unused-imports"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
