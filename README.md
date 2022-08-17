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

### Example

```
import { PolygonDarkblockWidget } from "@darkblock.io/matic-widget"

const Widget = () => {
  ...

  const contractAddress = 'nft contract address'
  const tokenId = 'nft token id'
  
  return (
    <PolygonDarkblockWidget
      contractAddress={contractAddress}
      tokenId={tokenId
      w3={web3}
      cb={(p) => console.log(p)}
      config={config}
    />
  )
}

export default Widget

```

### Example

```
import { PolygonUpgradeWidget } from "@darkblock.io/matic-widget"

const Widget = () => {
  const apiKey = '** contact darkblock for apikey **'
  const contractAddress = 'nft contract address'
  const tokenId = 'nft token id'

  return (
    <PolygonUpgradeWidget
      apiKey={apiKey} 
      contractAddress={contractAddress}
      tokenId={tokenId
      w3={web3}
      cb={(p) => console.log(p)}
      config={config}
    />
  )
}

export default Widget

```
