import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Define os globais do Node.js
  { languageOptions: { globals: globals.node } },

  // Configuração recomendada do @eslint/js
  pluginJs.configs.recommended,

  // Outras configurações do ESLint
  {
    env: {
      node: true,
      es6: true,
    },
    extends: ["airbnb-base", "prettier"],
    plugins: ["prettier"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
