// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginNext from "@next/eslint-plugin-next";

export default [
  // Ignorar carpetas
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**"],
  },
  
  // Configuración principal para archivos JS/JSX
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly", // Importante: React en scope global para JSX
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    
    plugins: {
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y,
      "@next/next": pluginNext,
    },
    
    rules: {
      // Desactivar reglas de TypeScript (no usamos TS)
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      
      // Reglas de React
      "react/react-in-jsx-scope": "off", // Next.js no requiere import React
      "react/prop-types": "off", // Desactivar PropTypes si no las usas
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/display-name": "off", // Para forwardRef
      
      // Reglas generales
      "no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }],
      "no-undef": "error",
      "no-cond-assign": ["error", "always"],
      
      // Reglas de accesibilidad
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      
      // Reglas de Next.js
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off", // Permitimos img con Next/Image
    },
    
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  
  // Configuración recomendada de JavaScript
  pluginJs.configs.recommended,
  
  // Configuración recomendada de React
  pluginReact.configs.flat.recommended,
];