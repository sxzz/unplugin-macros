# unplugin-macros [![npm](https://img.shields.io/npm/v/unplugin-macros.svg)](https://npmjs.com/package/unplugin-macros)

[![Unit Test](https://github.com/sxzz/unplugin-macros/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sxzz/unplugin-macros/actions/workflows/unit-test.yml)

> Macros are a mechanism for running JavaScript functions at bundle-time.
> The value returned from these functions are directly inlined into your bundle.

## Installation

```bash
npm i -D unplugin-macros
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Macros from 'unplugin-macros/vite'

export default defineConfig({
  plugins: [Macros()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Macros from 'unplugin-macros/rollup'

export default {
  plugins: [Macros()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('unplugin-macros/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-macros/webpack')()],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-macros/webpack')()],
  },
}
```

<br></details>

## Usage

```js
// main.js
import { getRandom } from './macros' assert { type: 'macro' }

getRandom() // Will be replaced with a random number at build time
```

```js
// macros.js
export function getRandom() {
  return Math.random()
}
```

See more in [Bun Macros](https://bun.sh/blog/bun-macros).

## Thanks

Thanks to [Bun Macros](https://bun.sh/blog/bun-macros).

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [三咲智子](https://github.com/sxzz)
