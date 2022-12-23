# Zenklub Frontend

Zenkulb Frontend is a project focused in simulating a mental health session scheduling, built with Angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Setting up

1. Install `nvm`, the [Node Version Manager](https://github.com/nvm-sh/nvm)
2. Run `nvm use` to use the appropriate Node version
3. Run `npm install` to install the project dependencies

## Development server

**Important note:** The [msw](https://mswjs.io/) library is used to mock API calls. It is currently being always called in `src/main.ts` for the purpose of this example.

```
ng serve
```

Navigate to http://localhost:4200/.

## Code scaffolding

Generate a new component

```
ng generate component component-name
```

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Code lint

```
ng lint
```

```
ng lint --fix
```

## Running unit tests

```
ng test
```

Execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

```
ng e2e
```

Execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
