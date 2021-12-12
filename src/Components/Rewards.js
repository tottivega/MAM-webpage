import React from "react";
import Fade from "react-reveal";

function Rewards() {
  return (
    <div>
      <Fade bottom>
        <h1
          className="responsive-headline"
          style={{ color: "white", marginTop: 128, textAlign: "center" }}
        >
          Rewards
        </h1>
        <div style={{ width: "100%", textAlign: "center", marginTop: -24 }}>
          Rewards will be calculated and given out at auction end.
        </div>
      </Fade>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
        }}
      >
        <img
          src="https://i.imgur.com/Kc4r9OI.jpg"
          style={{
            borderRadius: "100%",
            height: 64,
            width: 64,
            marginBottom: 32,
          }}
          alt="MAM token"
        />
        <h3 style={{ color: "#ffffffd9" }}>
          The winners of the auction will be elligible for additional rewards in
          the form of Magic Art Money tokens
        </h3>
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          In the future, these tokens will allow you to participate in MAM's
          future projects, will serve as entrance tickets and credit for MAM
          exclusive events, can be used to buy MAM merch, and even bring your
          MAM NFTs into the metaverse.
        </div>

        <div style={{ marginBottom: 24 }}>
          <span style={{ color: "#eca61c", fontSize: 28, marginRight: 24 }}>
            Proud Owner
          </span>
          For each NFT you win
          <span style={{ color: "#eca61c", fontSize: 14, marginLeft: 24 }}>
            500 MAM tokens
          </span>
        </div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ color: "#eca61c", fontSize: 28, marginRight: 24 }}>
            Going Wide
          </span>
          If you win a full horizontal Loteria line
          <span style={{ color: "#eca61c", fontSize: 14, marginLeft: 24 }}>
            7,500 MAM tokens
          </span>
        </div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ color: "#eca61c", fontSize: 28, marginRight: 24 }}>
            Going Long
          </span>
          If you win a full vertical Loteria line
          <span style={{ color: "#eca61c", fontSize: 14, marginLeft: 24 }}>
            20,000 MAM tokens
          </span>
        </div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ color: "#eca61c", fontSize: 28, marginRight: 24 }}>
            Squared Square &sup2;
          </span>
          If you win a 2x2 square
          <span style={{ color: "#eca61c", fontSize: 14, marginLeft: 24 }}>
            5,000 MAM tokens
          </span>
        </div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ color: "#eca61c", fontSize: 28, marginRight: 24 }}>
            Artist Lover
          </span>
          If you win all of the NFTs from the same artist
          <span style={{ color: "#eca61c", fontSize: 14, marginLeft: 24 }}>
            20,000 MAM tokens
          </span>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
