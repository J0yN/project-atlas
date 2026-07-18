module.exports = {
  root: true,
  ignorePatterns: ["node_modules", ".next", "public", "next.config.ts", "postcss.config.js", "prettier.config.js"],
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
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
