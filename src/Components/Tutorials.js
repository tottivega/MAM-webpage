import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

function Tutorials({ navigate }) {
  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ fontSize: 40, lineHeight: 1, color: "black" }}>
              How to participate in the auction
            </h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                className="columns portfolio-item"
                onClick={() => navigate("wallet")}
              >
                <div className="item-wrap">
                  <Zmage
                    alt="Create your wallet / get Tezos"
                    src="http://la-candelaria.com/wp-content/uploads/2015/05/tutorial.jpg"
                    style={{ height: 200 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 24,
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Create your wallet / get Tezos
                  </div>
                </div>
              </div>

              <div className="flex-break-responsive" />
              <div
                className="columns portfolio-item"
                onClick={() => navigate("bid")}
              >
                <div className="item-wrap">
                  <Zmage
                    alt="Place a bid on an NFT"
                    src="https://pbs.twimg.com/profile_images/1457736496631406593/Oad1Zm7Y_400x400.png"
                    style={{ height: 200, width: 300 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 24,
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Place a bid on an NFT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Tutorials;
