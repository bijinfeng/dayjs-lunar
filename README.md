# dayjs-lunar

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

dayjs-lunar is a dayjs plugin to support chinese lunar

## Install

```bash
npm i dayjs-lunar
```

## Usage

```javascript
import dayjs from 'dayjs'
import lunar from 'dayjs-lunar'

const day = dayjs('2010-10-20')

console.log(day.lunar()) // "二〇一〇年九月十三"
console.log(day.lunar('YYYY-MM-DD')) // "2010-09-13"
console.log(day.lunar('年月日')) // "二〇一〇年九月十三"
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Bijinfeng](https://github.com/bijinfeng)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/dayjs-lunar?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/dayjs-lunar
[npm-downloads-src]: https://img.shields.io/npm/dm/dayjs-lunar?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/dayjs-lunar
[bundle-src]: https://img.shields.io/bundlephobia/minzip/dayjs-lunar?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=dayjs-lunar
[license-src]: https://img.shields.io/github/license/bijinfeng/dayjs-lunar.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/bijinfeng/dayjs-lunar/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/dayjs-lunar
