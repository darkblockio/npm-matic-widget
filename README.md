# Darkblock.io React Polygon Widget

## Getting Started 🚀

Install Darkblock's React Polygon Widget using `yarn` or `npm`

```
yarn add @darkblock.io/matic-widget
```

```
npm i @darkblock.io/matic-widget --save
```

Once the library is installed, import or require components into your codebase, i.e:

```
import "@darkblock.io/matic-widget"

require("@darkblock.io/matic-widget")
```

## Testing locally

Run `yarn storybook`

Or test the widget on the Nextjs app

- Run `yarn build-lib`. This will generate the `dist` folder with the following files

  ```
  dist
  ├── README.md
  ├── index.es.js
  ├── index.js
  └── package.json
  ```

- Copy `index.js` into the Nextjs App `components` folder and rename it to `matic.js`

- Use `matic.js` instead of the npm package by changing

  ```
  const PolygonDarkblockWidget = dynamic(() => import('@darkblock.io/matic-widget'), { ssr: false })
  ```

  to

  ```
  const PolygonDarkblockWidget = dynamic(() => import('./matic'), { ssr: false })
  ```
