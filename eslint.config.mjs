import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import sonarjs from 'eslint-plugin-sonarjs'
import react from 'eslint-plugin-react'

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  sonarjs.configs.recommended,

  {
    plugins: {
      'unused-imports': unusedImports,
      react
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',

      // React / hooks
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' }
      ],

      // Clean code
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'unused-imports/no-unused-imports': 'error',

      // Maintainability
      complexity: ['warn', 10],
      'max-depth': ['warn', 3],
      'max-params': ['warn', { max: 4, countThis: false }],
      'max-lines-per-function': [
        'warn',
        {
          max: 75,
          skipBlankLines: true,
          skipComments: true
        }
      ],

      // Sonar-like
      'sonarjs/cognitive-complexity': ['warn', 15],
      'sonarjs/no-nested-functions': ['warn', 4],
      'sonarjs/no-identical-expressions': 'warn',
      'sonarjs/no-duplicated-branches': 'warn',
      'sonarjs/elseif-without-else': 'off'
    }
  },

  prettier,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts'
  ])
])