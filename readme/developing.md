# Extending/Developing

## Prerequisites

* [NodeJS](https://nodejs.org/en/download)/npm [1].
* [Git](https://git-scm.com/downloads) (if you are going to clone the project).

> [1] [Downloading NodeJS](https://nodejs.org/en/download) will also download and provide [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm).

## Getting it

[Clone](https://help.github.com/articles/cloning-a-repository/) the project in the desired folder by executing:

```sh
git clone https://github.com/gmullerb/echo-members-names-loader
```

or

```sh
git clone https://gitlab.com/gmullerb/echo-members-names-loader
```

## Set up

Run:

```sh
npm install
```

It will install project dependencies, as [eslint](https://www.npmjs.com/package/eslint), [eslint-plugin-regex](https://www.npmjs.com/package/eslint-plugin-regex), [any-eslint-parser](https://www.npmjs.com/package/any-eslint-parser), [eslint-plugin-base-style-config](https://www.npmjs.com/package/eslint-plugin-base-style-config), etc.

> Recommendation: Immediately after installation, run `npm run check` to be sure that initial code is "ok".

### Npm scripts

Npm scripts, [`package.json`](../package.json):

* `lint.common`: checks common style of "all" files.
* `lint.source`: checks eslint style of `js` files.
* `lint`: runs lints.
* `test`: runs test.
* `check`: runs lints, test, pack and audit.

## Folders structure

```
  /lib/index.js
  /tests/test.js
```

- `/lib/index.js`: Main file.
- `/tests/test.js`: Test file.

## Main documentation

[Back](../README.md)
