# Material-colors-tailwindcss
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Material-colors-tailwindcss** is a package that contains the material colors palette for easy use in tailwindcss config.

## Installation
### npm:
```bash
npm install -D material-colors-tailwindcss
```
### yarn:
```bash
yarn add -D material-colors-tailwindcss
```
### pnpm:
```bash
pnpm add -D material-colors-tailwindcss
```


## implementation in tailwind.config.js
```js
import {colors} from 'material-colors-tailwind'

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {...colors},
    extend: {},
  },
  plugins: [],
}
```

If you want to use only a few colors, you can import them individually.
```js
import {amber, grey} from 'material-colors-tailwind'

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {},
    extend: {
        colors: {
            ...amber,
            ...grey,
        },
    },
  },
  plugins: [],
}
```


## Implementation in HTML
```html
<div class="bg-red-500 text-onRed-500">Hello world!</div>
```
