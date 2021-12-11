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

// Collection https://objkt.com/collection/KT19A7Y3vMDQCLNBMdT97f8jcw3yvg5RY6o8
// API docs https://data.objkt.com/docs/
const LoteriaGrid = () => {
  const [nftData, setNftData] = useState();

  useEffect(() => {
    const getNfts = async () => {
      const body = JSON.stringify({
        query: `{
        token(where: {creator: {address: {_eq: "tz1T8thQvCWt21upiDU3nFbuRMtvcGMgURud"}}}) {
          id
          description
          highest_bid
          title
          display_uri
          artifact_uri
          thumbnail_uri
          token_holders {
            holder_id
          }
        }
      }
      `,
      });
      const res = await fetch("https://data.objkt.com/v1/graphql", {
        method: "POST",
        body,
      });

      const data = await res.json();
      if (!data || !data.data.token) return;
      const nftData = data.data.token.map((nft) => {
        return {
          highest_bid: nft.highest_bid,
          id: nft.id,
          title: nft.title,
          permalink:
            "https://objkt.com/asset/KT19A7Y3vMDQCLNBMdT97f8jcw3yvg5RY6o8/" +
            nft.id,
          thumbnail:
            "https://cloudflare-ipfs.com/ipfs/" +
            nft.thumbnail_uri.split("/")[2],
          // If holder id === "tz1T8thQvCWt21upiDU3nFbuRMtvcGMgURud" owner none
        };
      });
      console.log(nftData);
      setNftData(nftData);
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
                {nft.title}
              </span>
              <div style={{ marginTop: 64 }}>
                <img
                  src={nft.thumbnail}
                  style={{ objectFit: "contain" }}
                  alt={nft.title}
                />
              </div>
              {/* {nft.owner.address !==
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
              )} */}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 4,
                  color: "white",
                }}
              >
                Top Bid: {nft.highest_bid ?? "No bids yet"}
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const loteria = [
  "Llaverito",
  "Organillero",
  "La nieve",
  "Picza",
  "Caretas",
  "Alarma",
  "La Cajita",
  "Los ninos",
  "La Danza",
  "Mazapanes",
  "El Guero",
  "El predicador",
  "El gas",
  "Panadera",
  "La banda",
  "Le vengo comprando",
  "El canto",
  "La orquesta",
  "Tortillas",
  "Los esquites",
  "Tamales",
  "Banda",
  "Profesor",
  "Las tostadas",
  "El tamal",
  "Los churros",
  "Agua",
  "Juanito Lennon",
  "Viaje Fantastico",
  "El danzon",
  "Pelota de Novedad",
  "Papita Fresca",
  "Las fresas",
  " Las pelotas",
  "Pajaros",
  "Los danzantes",
  "Los toques",
  "Carrito",
  "Cargador",
  "Las frutas",
  "Calcetas",
  "Beatbox",
  "La basura",
  "Sanitarios",
  "Tatuajes",
  "Fierro viejo",
  "El polizonte",
  "Elotes y Pollos",
  "La cantante",
  "Lentes",
];
