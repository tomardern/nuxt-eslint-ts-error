// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  [
    {
      rules: {
      // Require parserService
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
      },
    }
  ],
)
