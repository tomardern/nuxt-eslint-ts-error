# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Lint Issues
npm run lint

```
<project-root> %{npm run lint             

> lint
> eslint . --max-warnings 0


Oops! Something went wrong! :(

ESLint: 9.32.0

Error: Error while loading rule '@typescript-eslint/no-unnecessary-boolean-literal-compare': You have used a rule which requires type information, but don't have parserOptions set to generate type information for this file. See https://typescript-eslint.io/getting-started/typed-linting for enabling linting with type information.
Parser: (unknown)
Note: detected a parser other than @typescript-eslint/parser. Make sure the parser is configured to forward "parserOptions.project" to @typescript-eslint/parser.
Occurred while linting <project-root>/eslint.config.mjs
    at throwError (<project-root>/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:38:11)
    at getParserServices (<project-root>/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:21:9)
    at create (<project-root>/node_modules/@typescript-eslint/eslint-plugin/dist/rules/no-unnecessary-boolean-literal-compare.js:87:55)
    at Object.create (<project-root>/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js:31:20)
    at createRuleListeners (<project-root>/node_modules/eslint/lib/linter/linter.js:1020:15)
    at <project-root>/node_modules/eslint/lib/linter/linter.js:1152:7
    at Array.forEach (<anonymous>)
    at runRules (<project-root>/node_modules/eslint/lib/linter/linter.js:1086:31)
    at #flatVerifyWithoutProcessors (<project-root>/node_modules/eslint/lib/linter/linter.js:2102:4)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (<project-root>/node_modules/eslint/lib/linter/linter.js:2190:43)
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
