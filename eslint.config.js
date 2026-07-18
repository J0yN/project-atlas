const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const reactPlugin = require("eslint-plugin-react");
const unusedImports = require("eslint-plugin-unused-imports");

module.exports = [
  {
    ignores: ["node_modules/**", ".next/**", "public/**"]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
      "unused-imports": unusedImports
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-explicit-any": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
