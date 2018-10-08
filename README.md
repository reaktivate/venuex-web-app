_Note: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) (CRA) and "rewired" for customization with [`react-app-rewired`](https://github.com/timarney/react-app-rewired). See [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) for the full version of the CRA maintainer's guide, including upgrade instructions._


## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Linting](#linting)
- [Whitelabeling / CSS styling](#whitelabeling--css-styling)
- [Firebase Configuration](#firebase-configuration)
- [Environment Variables](#environment-variables)
- [Running Tests](#running-tests)
- [Continuous Integration](#continuous-integration)
- [Deployment](#deployment)


## Folder Structure

Notable things to know about the folder structure:

* Only files inside `src` are processed by Webpack;
* Only files inside `public` can be used from `public/index.html`;
* Only files from `src` and `public` top-level directories will be included in the production build.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console; see [linting](#linting) for more information.

### `yarn test`

Launches the [test runner](#running-tests) in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you plan on using any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.

Also note that using some newer syntax features like `for...of` or `[...nonArrayValue]` causes Babel to emit code that depends on ES6 runtime features and might not work without a polyfill. When in doubt, use [Babel REPL](https://babeljs.io/repl/) to see what any specific syntax compiles down to.


## Linting

This project is using [ESlint](https://eslint.org/) to catch common coding errors and enforce [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) (with a few exceptions, see the project's `.eslintrc` for specifics).

Most editors, including Sublime Text, Atom, and Visual Studio Code, provide [plugins for ESLint](https://eslint.org/docs/user-guide/integrations). You also will see the linter output right in your terminal as well as the browser console.


## Whitelabeling / CSS styling

This project uses [styled-components](https://www.styled-components.com/) for CSS styling/whitelabeling support. `styled-components` comes with default [theming support](https://www.styled-components.com/docs/advanced#theming), which we plug into (see `containers/VenueThemeProvider`).

Accessing the current theme on the component side is as easy as this:

```js
const Header = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
`;
```

To avoid run-time errors due to invalid venue configuration, the venue theme loaded from [Firebase](#firebase-configuration) is merged with the default theme loaded from `config/defaultTheme.json`.


## Firebase Configuration

[Firebase Javascript SDK](https://firebase.google.com/docs/web/setup) is initialized in `src/firebase.js`, with the config values taken from the corresponding `REACT_APP_FIREBASE_` [environment variables](#environment-variables).

To reduce the chance of accidental data corruption/production outage, **keep the project's test and development Firebase instances separate from the production instance**.


## Environment Variables

This project can consume variables declared in your environment as if they were declared locally in your JS files. The variables can be defined in your shell or in a `.env` file (recommended).

**`.env` files conventions:**

* `.env`: Default.
* `.env.local`: Local overrides. **This file is loaded for all environments except test.**
* `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
* `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

`.env` files **should be** checked into source control **with the exclusion of `.env*.local`**.

**The environment variables are embedded during the build time**, and can be accessed through `process.env`. For example, an environment variable named `REACT_APP_FIREBASE_API_KEY` is exposed in JS as `process.env.REACT_APP_FIREBASE_API_KEY`. You can also access the environment variables in the `public/index.html` like this:

```html
<title>%REACT_APP_PAGE_TITLE%</title>
```

>Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid accidentally [exposing a private key on the machine that could have the same name](https://github.com/facebookincubator/create-react-app/issues/865#issuecomment-252199527). Changing any environment variables will require you to restart the development server if it is running.


## Running Tests

This project uses [Jest](https://facebook.github.io/jest/) as its test runner, and [`enzyme`](https://github.com/airbnb/enzyme) for easy testing of React components. See `src/setupTests.js` for the specifics of the test environment configuration.

### Filename Conventions

Put the test files in the `__tests__` folder next to the code they are testing; Jest will automatically pick up all `.js` files in `__tests__` folders at any depth under `src`.

### Command Line Interface

When you run `yarn test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `yarn start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run.


## Continuous Integration

TBD

## Deployment

TBD
