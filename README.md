<p align="center">
  <br/>
  <img src="https://assets.gitlab-static.net/uploads/-/system/project/avatar/18006515/echo-members-names-loader.png" alt=" "/>
</p>

<h1 align="center">Webpack loader that echoes Members Names</h1>

[![echo-members-names-loader](https://badgen.net/badge/homepage/echo-members-names-loader/blue)](https://echo-members-names-loader.github.io/)
[![echo-members-names-loader](https://badgen.net/badge/npm%20pack/echo-members-names-loader/blue)](https://www.npmjs.com/package/echo-members-names-loader)
[![ ](https://badgen.net/npm/v/echo-members-names-loader)](https://www.npmjs.com/package/echo-members-names-loader)
[![ ](https://badgen.net/npm/node/echo-members-names-loader)](https://www.npmjs.com/package/echo-members-names-loader)
![ ](https://gitlab.com/gmullerb/echo-members-names-loader/badges/master/coverage.svg)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE.txt)
[![Github repo](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/gmullerb/echo-members-names-loader)
[![Gitlab repo](https://badgen.net/badge/icon/gitlab?icon=gitlab&label)](https://gitlab.com/gmullerb/echo-members-names-loader)

__________________

## Quick Start

1 . Add dependencies:

`package.json`:

```json
  "devDependencies": {
    "webpack": "^4.0.0",
    "echo-members-names-loader": "1.0.1",
```

2 . Configure loader:

`webpack.config.test.js`:

```js
{
  use: {
    test: /\.css$/,
    use: {
      loader: 'echo-members-names-loader'
    }
  },
```

> Requires `"node": ">= 6.0.0"`.
__________________

## Goals

`echo-members-names-loader` is a Webpack loader that transform any module to an object that echoes the name of any member that is accessed.

E.g.:

"Mocking" [CSS Modules](https://github.com/css-modules/css-modules) for test:

Having:

```javascript
  import styles from './Some.css'
  ..
    <div className={styles.container}/>
```

In production/development environment, using `css-loader` loader, it will be transform to some random string:

`styles.container` => `'AD5dsSwwe_433SA452aswg'`

but for tests, using `echo-members-names-loader` loader, it will be transform into accessed member's name:

`styles.container` => `'container'`

In other words:

**`module.memberName` => `'memberName'`**

An example of use can be looked at [basecode-cordova-react-ts](https://github.com/gmullerb/basecode-cordova-react-ts).

### Influence

`echo-members-names-loader` use [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and is inspired in [`identity-obj-proxy`](https://github.com/keyz/identity-obj-proxy) [1], but implemented as a loader for webpack eliminating some checking done by the latter, that "prevent it" to run it in Non-Node environments (it accesses [`process.versions.node`](https://nodejs.org/api/process.html#process_process_versions) which is not available in Non-Node environments).

[An alternative](readme/alternative.md).

> [1] Which can be use in Jest, but if you prefer Jasmine, Mocha, etc. is not a solution. (Being jest a "clone" of Jasmine, there is nothing that jest does that can not done by Good "Old Fashioned" Jasmine, in fact Jasmine can do ever more - in matters of testing, not configuration).

__________________

## Evolution

[`CHANGELOG`](CHANGELOG.html): contains the information about changes in each version, chronologically ordered ([Keep a Changelog](http://keepachangelog.com)).

## Extending/Developing

[Developing](readme/developing.md)

## Contributing

* **Use it**.
* **Share it**.
* [Give it a Star](https://github.com/gmullerb/echo-members-names-loader).
* [Propose changes or improvements](https://github.com/gmullerb/echo-members-names-loader/issues).
* [Report bugs](https://github.com/gmullerb/echo-members-names-loader/issues).

## License

[MIT License](LICENSE.txt)
__________________

## Remember

* Use code style verification tools => Encourages Best Practices, Efficiency, Readability and Learnability.
* Code Review everything => Encourages Functional suitability, Performance Efficiency and Teamwork.
* If viable, Start testing early => Encourages Reliability and Maintainability.

## Additional words

Don't forget:

* **Love what you do**.
* **Learn everyday**.
* **Learn yourself**.
* **Share your knowledge**.
* **Think different!**.
* **Learn from the past, dream on the future, live and enjoy the present to the max!**.
* **Enjoy and Value the Quest** (It's where you learn and grow).

At life:

* Let's act, not complain.
* Be flexible.

At work:

* Let's give solutions, not questions.
* Aim to simplicity not intellectualism.
