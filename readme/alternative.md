# Alternative

Alternatively, [`identity-object-proxy-loader`](https://github.com/lucasconstantino/identity-object-proxy-loader) can be used **plus an additional configuration**:

1 . Add dependencies:

`package.json`:

```json
  ..
  "devDependencies": {
    "webpack": "^4.0.0",
    "identity-obj-proxy": "^3.0.0",
    "identity-object-proxy-loader": "^0.1.0",
    ..
```

> For `"node": "< 6.0.0"`, `harmony-reflect` is required.

2 . Configure loader:

`webpack.config.test.js`:

```js
{
  use: {
    test: /\.css$/,
    use: {
      loader: 'identity-object-proxy-loader'
    }
  },
  ..
}
```

3 . Add additional configuration which requires to use [`DefinePlugin`](https://webpack.js.org/plugins/define-plugin) to emulate the missing variables that are required by [`identity-obj-proxy`](https://github.com/keyz/identity-obj-proxy):

`webpack.config.test.js`:

```js
{
  plugins: [
    new webpack.DefinePlugin({
      'process.versions.node': JSON.stringify(process.versions.node),
    }),
    ..
  ]
  ..
}
```

Or use

"text-transform-loader": " ^2.0.0",

const mockedCssRule = {
  test: /\.css$/,
  use: {
  loader: 'text-transform-loader',
  options: {
    transformText: function transform(source) {
      return identity-object-proxy-loader().text o algo asi
      }
    }
  }
}

**Or instead Just use `echo-members-names-loader`**:

* 2 steps.
* 1 dependency.
* Totally independent package, it has not dependency in other modules.

1 . Add dependencies:

`package.json`:

```json
  ..
  "devDependencies": {
    "webpack": "^4.0.0",
    "echo-members-names-loader": "1.0.1",
    ..
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
  ..
}
```

> Requires `"node": ">= 6.0.0"`.

## Main documentation

[Back](../README.md)
