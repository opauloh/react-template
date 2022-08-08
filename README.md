# react-template

Template to Start a React Application with minimal configuration using Webpack and Babel.

## Dependencies

- react: The aim of this project, is a JavaScript library for creating user interfaces and handle stage management.
- react-dom: In this project is the entry point to the DOM for React

## Dev Dependencies

-typescript : TS makes developer's life easier by executing javascript Type checks in development time, helping to prevent a lot of unexpected runtime errors from happening
- @babel/core: This package is core of the Babel, Babel is a compiler used to execute transformations on javascript, like transform ECMA 6 javascript to ECMA 5, for better compatibility, and support plugins to load javascript, and assets as well.
- @babel/preset-env: This package is used to allow Babel transpile the Javascript necessary accordinly to the necessary target browsers, by used public data from open source projects, the plugin knows if the browser is dead, or used by less than 0.x% of people, so it can transpile only the needed, used to have always the most advanced javascript running, according to the public target (you can specify specific browsers and versions to support as well).
- @babel/preset-react: This is a Babel preset, and is used to convert JSX syntax to React's Syntax, like from `<div>Hello</div>` to React.
- @babel/preset-typescript: This is a Babel preset, and is recommended if you use TypeScript, a typed superset of JavaScript. It includes the plugins "@babel/plugin-transform-typescript" that adds support for the syntax used by the TypeScript programming language. However, this plugin does not add the ability to type-check the JavaScript passed to it. For that, we will need to install and set up TypeScript
- webpack: This package is a static module bundler for Javascript Applications, it is responsible to map every module in the project and generate the desired number of bundles. (or we would have thousand of files being requested, or have to manually minimize them, neither option is a good deal)
- webpack-cli: This package provides a flexible set of commands for developers to increase speed when setting up a custom webpack project, also is needed to actually run the webpack in the command line.
- webpack-dev-server: It is intended to use webpack with a development server that provides live reloading. This should be used for development only. It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets, so it is faster, instead of rely on rewriting on the phisicaly on dist folder using the file system.
- html-webpack-plugin: This package is a plugins for our webpack package, and important to note that plugins runs after the modules of webpack resolves, we are using it to generate our index.html file (inside the dist folder when building for production) and applying a `
  <script src="[bundle_name].js"></script>` at our index.html file inside the app folder.
- babel-loader: This package allows transpiling JavaScript files using Babel and webpack, its totally required since we will want to transpile JSX from Javascript Files for development with React.js.


## Instalation
- Install it quickly using degit:

`degit github:opauloh/react-template my-react-project`

If you don't have degit, install it first:

`npm install -g degit`
