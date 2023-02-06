# Vite + Tailwind Demo

- Vite and Vitest
- TypeScript
- Tailwind
- React Intl
- React Router 6
- Storybook
- Mock Service Worker
- Dark mode toggle
- Extensive tests using React Testing Library
- Storybook ESLint plugin
- `react-intl` ESLint plugin to enforce formatted strings
- `formatjs` ESLint plugin for automatic messages IDs.
- Prettier
- React Hook Form with a zod validator

## pnpm required

This project uses `pnpm` so please install:

```bash
npm install -g pnpm
```

Then install the project dependencies with:

```
pnpm install
```

## Scripts

Start the app in dev mode:

```
pnpm dev
```

Start the test runner:

```
pnpm test
```

Run all tests and generate a coverage report:

```
pnpm test:coverage
```

Start Storybook:

```
pnpm storybook
```

Lint the code:

```
pnpm lint
```

Check the code formatting:

```
pnpm format:check
```

Format the code using `prettier`:

```
pnpm format
```

Extract embedded English strings ready for translation:

```
pnpm intl:extract
```
