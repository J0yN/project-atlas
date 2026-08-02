const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const reactPlugin = require("eslint-plugin-react");
const unusedImportsPlugin = require("eslint-plugin-unused-imports");
const prettierConfig = require("eslint-config-prettier");
const globals = require("globals");

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    ignores: ["node_modules/**", ".next/**", "public/**", "*.config.js", "*.config.ts", "*.config.cjs"]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
      "unused-imports": unusedImportsPlugin
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...tsPlugin.configs["eslint-recommended"].overrides?.[0]?.rules,
      ...tsPlugin.configs["recommended"].rules,
      ...reactPlugin.configs["recommended"].rules,
      "react/react-in-jsx-scope": "off",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }]
    }
  },
  prettierConfig
];
