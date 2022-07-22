import Web3 from "web3"
import React, { useEffect, useState } from "react"
import { storiesOf } from "@storybook/react"
import PolygonDarkblockWidget from "../lib/MaticWidget"

const stories = storiesOf("Polygon Darkblock Widget", module)

// TODO: look for Polygon NFT's values here
const contractAddress = "0xda2ec25b733fa79af72277b920639bbb30716164"
const tokenId = "23"

stories.add("test", () => {
  const cb = (param1) => {
    console.log(param1)
  }

  const Widget = () => {
    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      if (window.ethereum) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            setAddress(accounts[0])
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
          <PolygonDarkblockWidget
            contractAddress={contractAddress}
            tokenId={tokenId}
            w3={web3}
            cb={cb}
            config={{
              customCssClass: "custom-class",
              debug: true,
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
