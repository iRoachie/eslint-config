# @iroachie/eslint-config

Eslint config utilizing Airbnb-base, Prettier and Jest support.

Plugins and configs used:

- [eslint-config-airbnb-base](https://yarnpkg.com/en/package/eslint-config-airbnb-base)
- [eslint-config-prettier](https://yarnpkg.com/en/package/eslint-config-prettier)
- [eslint-plugin-jest](https://yarnpkg.com/en/package/eslint-plugin-jest)

Additionally, it sets these environments:

```json
{
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  }
}
```

## Installation

```bash
yarn add --dev eslint @iroachie/eslint-config
```

_Note: We're using `yarn` to install deps. Feel free to change commands to use `npm` 3+ and `npx` if you like_

## Usage

Add to your eslint config (`.eslintrc`, or `eslintConfig` field in `package.json`):

```json
{
  "extends": "@iroachie"
}
```

Add the eslint extension for your editor. Example below is VSCode.

- eslint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

In your "User Settings" add the following lines:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```

### Example of extending the configuration

```json
{
  "extends": "@iroachie",
  "rules": {
    "global-require": 0,
    "prefer-destructuring": 0
  }
}
```

## Advanced Usage

Optionally in your repo you can set up githooks to format your code when you make a commit.
You can follow the setup over [here](https://github.com/okonet/lint-staged#installation-and-setup).
