import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    plugins: { tseslint },
    extends: [tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
  eslintConfigPrettier,
])
