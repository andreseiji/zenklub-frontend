# Zenklub Frontend

Zenklub Frontend is a project focused in simulating a mental health session scheduling, built with Angular and `msw` for the backend mock service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Setting up

1. Install `nvm`, the [Node Version Manager](https://github.com/nvm-sh/nvm)
2. Run `nvm use` to use the appropriate Node version (install v18 if needed)
3. Run `npm install` to install the project dependencies

## Development server

**Important note:** The [msw](https://mswjs.io/) library is used to mock API calls. It is always being initialized in `src/main.ts` for the purpose of this example, which has no real backend.

```
ng serve
```

Navigate to http://localhost:4200/.

## Running unit tests

Execute the unit tests via [Karma](https://karma-runner.github.io):

```
ng test
```

Run once with coverage:

```
npm run test:coverage
```

The coverage report will be available at `coverage/zenklub-frontend/index.html`

## Code lint

```
ng lint
```

```
ng lint --fix
```

## Build

```
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Code scaffolding

Generate a new component

```
ng generate component component-name
```

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running end-to-end tests

```
ng e2e
```

Execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
