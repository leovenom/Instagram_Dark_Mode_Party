# Pier Web Static

## Running

Install the dependencies and run locally

```bash
yarn install && yarn dev
```

## Static Checking

It`s recommend to use VS Code editor and have installed prettier and eslint extensions for a better dev experience.

- [Prettier Formatter for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

These are automatically run in a pre-commit hook, so don't worry about calling them manually unless you have a reason to:

Prettifies all relevant files with [Prettier](https://prettier.io).

```bash
 `yarn run prettify`
```

Lints all relevant files with [ESLint](https://eslint.org).

```bash
 `yarn run lint`
```

## Testing

### Unit tests

Run once

```bash
yarn test
```

Watch the files changes

```bash
yarn test:watch
```

### e2e Tests

Open cypress ui

```bash
yarn cypress:open
```

Run tests in background

```bash
yarn cypress:run
```

## Generators

Install hygen globally

```bash
 npm i -g hygen
```

Generate a ui component

```bash
hygen component new [NAME]
```

## Storybook

Run storybook

```bash
  yarn storybook
```

## Docker

From now on pier-web-landing also supports docker for the development environment. To standardise task execution, we used make (and Makefile).

To setup everything, just run:

```bash
make setup
```

Then you can use `make start` and `make stop` as needed:

```bash
make start
```

Take a look at the `Makefile` to check all available commands.
