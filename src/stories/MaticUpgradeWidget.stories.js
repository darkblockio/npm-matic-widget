import Web3 from "web3"
import React, { useEffect, useState } from "react"
import { storiesOf } from "@storybook/react"
import PolygonUpgradeWidget from "../lib/MaticUpgradeWidget"

const stories = storiesOf("Polygon Upgrade Widget", module)

stories.add("Add Content", () => {
  const cb = (param1) => {
    console.log("upgrade cb", param1)
  }

  const Widget = () => {
    const [web3, setWeb3] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const contractAddress = "0xda2ec25b733fa79af72277b920639bbb30716164"
    const token_id = "23"

    const apiKey = "" //Darkblock API key goes here

    let nftBlockchain = "Polygon"
    if (["avalanche", "polygon"].includes(nftBlockchain.toLowerCase())) nftBlockchain = "ERC-1155"

    useEffect(() => {
      if (window.ethereum) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            let w3 = new Web3(window.ethereum)
            setWeb3(w3)
            setLoaded(true)
          })
          .catch((err) => {
            console.log(err)
            setWeb3(null)
            setLoaded(true)
          })
      } else {
        setWeb3(null)
        setLoaded(true)
      }
    }, [])

    return (
      <div style={{ maxWidth: "700px" }}>
        {loaded && (
          <PolygonUpgradeWidget
            apiKey={apiKey}
            contractAddress={contractAddress}
            tokenId={token_id}
            w3={web3}
            cb={cb}
            config={{
              customCssClass: "custom-class",
              debug: false,
              imgViewer: {
                showRotationControl: true,
                autoHideControls: true,
                controlsFadeDelay: true,
              },
            }}
          />
        )}
      </div>
    )
  }

  return <Widget />
})
