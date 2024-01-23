# vue_base_app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Steps
```
<!-- Vue -->
npm create vue@latest

<!-- Pinia -->
npm install pinia
npm install pinia-plugin-persistedstate

<!-- Axios -->
npm install axios

<!-- Fontawesome -->
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/vue-fontawesome@latest-3
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons

<!-- Alerts -->
npm install sweetalert2

<!-- Sass -->
npm install sass

<!-- Bootstrap -->
npm install bootstrap@5.3.2

<!-- Firebase -->
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

```
