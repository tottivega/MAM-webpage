import React, { Component, useEffect, useState } from "react";
import Fade from "react-reveal";

class Loteria extends Component {
  render() {
    return (
      <header id="loteria" style={{ height: 1200 }}>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" style={{ color: "white" }}>
                Loteria
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <LoteriaGrid />
            </Fade>
            <hr />
          </div>
        </div>
      </header>
    );
  }
}

export default Loteria;

const nftIds = ["1494", "1495", "1496", "1497", "1498", "1499", "1500"];

const contractAddress = "0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3";

const LoteriaGrid = () => {
  const [nftData, setNftData] = useState();

  useEffect(() => {
    const getNfts = async () => {
      let queryIds = "";
      nftIds.forEach((nftId) => (queryIds += `token_ids=${nftId}&`));
      const res = await fetch(
        "https://api.opensea.io/api/v1/assets?" +
          `asset_contract_address=${contractAddress}&` +
          queryIds
      );

      const data = await res.json();
      if (data?.assets) setNftData(data.assets);
    };

    getNfts();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20% 20% 20% 20% 20%",
        // gridTemplateRows: "20% 20% 20% 20% 20%",
        columnGap: 8,
        rowGap: 8,
      }}
    >
      {nftData?.map((nft) => {
        return (
          <div
            style={{
              minHeight: 400,
              position: "relative",
              alignContent: "center",
              border: "1px solid gray",
            }}
          >
            <a href={nft.permalink} target="_blank" rel="noreferrer">
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 4,
                  color: "white",
                }}
              >
                {nft.name}
              </span>
              <div style={{ marginTop: 64 }}>
                <img
                  src={
                    nft.image_thumbnail_url ||
                    nft.image_url ||
                    nft.image_original_url
                  }
                  style={{ objectFit: "contain" }}
                  alt={nft.name}
                />
              </div>
              {nft.owner.address !==
                "0x0000000000000000000000000000000000000000" && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: 4,
                    color: "white",
                  }}
                >
                  Owner: {nft.owner.user.username || nft.owner.address}
                </span>
              )}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 4,
                  color: "white",
                }}
              >
                Top Bid: {nft.top_bid ?? "No bids yet"}
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};
