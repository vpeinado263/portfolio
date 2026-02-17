import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: pluginReact,
      'jsx-a11y': pluginJsxA11y,
    },
    rules: {
    
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]