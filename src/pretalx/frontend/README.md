# Insular Vue Apps

Vue apps which can be integrated into existing django views.

## Develop
```sh
npm ci
npm start
```

## Build

```sh
npm ci
npm run build
```

## Lint

```sh
npm run lint
```

## i18n

Loads existing .po files and transparently transforms them to i18next json format via `vite-gettext-plugin.js`.
Locale gets choosen at app load.

# Extract keys

```sh
npm run i18n:extract
npm run i18n:convert2gettext
```
