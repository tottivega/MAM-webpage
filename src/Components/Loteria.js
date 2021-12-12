import React, { Component, useEffect, useState } from "react";
import Fade from "react-reveal";
import Rewards from "./Rewards";
class Loteria extends Component {
  render() {
    return (
      <div
        id="loteria"
        style={{ height: "auto", paddingBottom: 120, paddingTop: 60 }}
      >
        <div>
          <div className="banner-text">
            <Fade bottom>
              <h2
                className="responsive-headline"
                style={{
                  color: "#ffffffc7",
                  textAlign: "center",
                  fontSize: 14,
                }}
              >
                MAM in collaboration with the Tezos blockchain and the Objkt
                marketplace presents
              </h2>
            </Fade>
            <Fade bottom>
              <h2
                className="responsive-headline"
                style={{ color: "white", textAlign: "center" }}
              >
                The Sounds of Mexico
              </h2>
              <h1
                className="responsive-headline"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: 48,
                }}
              >
                Loteria{" "}
              </h1>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: -48,
                  marginBottom: 120,
                }}
                className="hide-on-desktop"
              >
                To be able to see the Loteria layout, open this webpage on your
                desktop
              </div>
            </Fade>
            <LoteriaGrid />

            <Rewards />
          </div>
        </div>
      </div>
    );
  }
}

export default Loteria;

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

      try {
        const res = await fetch("https://data.objkt.com/v1/graphql", {
          method: "POST",
          body,
        });

        const data = await res.json();
        if (!data || !data.data.token) return;

        let nftData = [];

        loteria.forEach((lotNft) => {
          const loteriaNft = data.data.token.find(
            (nft) => nft.id === lotNft.id
          );
          if (!loteriaNft) return;
          nftData.push({
            highest_bid: loteriaNft.highest_bid
              ? loteriaNft.highest_bid / 1000000
              : null,
            id: loteriaNft.id,
            title: loteriaNft.title,
            artist: lotNft.artist,
            permalink:
              "https://objkt.com/asset/KT19A7Y3vMDQCLNBMdT97f8jcw3yvg5RY6o8/" +
              loteriaNft.id,
            thumbnail:
              "https://cloudflare-ipfs.com/ipfs/" +
              loteriaNft.thumbnail_uri.split("/")[2],
            audio:
              "https://cloudflare-ipfs.com/ipfs/" +
              loteriaNft.artifact_uri.split("/")[2],
            // If holder id === "tz1T8thQvCWt21upiDU3nFbuRMtvcGMgURud" owner none
          });
        });
        console.log(nftData);
        setNftData(nftData);
      } catch (e) {
        setNftData([]);
      }
    };

    getNfts();

    setInterval(getNfts, 1000 * 10);
  }, []);

  if (!nftData)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        Loading...
      </div>
    );

  return (
    <div className="responsive-loteria-grid">
      {nftData?.map((nft, i) => (
        <LoteriaNft nft={nft} key={nft.id} index={i} />
      ))}
    </div>
  );
};

function LoteriaNft({ nft, index }) {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio(nft.audio));

  return (
    <div
      style={{
        minHeight: 400,
        position: "relative",
        alignContent: "center",
        border: "1px solid #ffffff6e",
      }}
    >
      <a href={nft.permalink} target="_blank" rel="noreferrer">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src={nft.thumbnail}
            style={{ objectFit: "contain", textAlign: "center" }}
            alt={nft.title}
          />
        </div>
      </a>
      {/* Upload owner not necessary right now */}
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
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 28,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 28,
          }}
        >
          {nft.title}
        </span>
        <span
          style={{
            color: "#f3db97",
            fontSize: 12,

            marginLeft: 12,
          }}
        >
          {nft.artist}
        </span>
        <i
          className={`fa fa-${playing ? "pause" : "play"}`}
          onClick={() => {
            if (!playing) audio.play();
            else audio.pause();
            setPlaying(!playing);
          }}
          style={{
            fontSize: 28,
            marginTop: 12,
            marginBottom: 12,
            textAlign: "center",
          }}
        />
        <span
          style={{
            color: "white",
            fontSize: 12,
            marginLeft: 12,
          }}
        >
          Top Bid: {nft.highest_bid ? `${nft.highest_bid} Tezos` : "--"}
        </span>
      </div>
    </div>
  );
}

const loteria = [
  { name: "Llaverito", id: "20", artist: "Glenda Torrado" },
  { name: "Organillero", id: "23", artist: "Manuel Macias" },
  { name: "La nieve", id: "30", artist: "Boris Viskin" },
  { name: "Picza", id: "34", artist: "Manuel Macias" },
  { name: "Caretas", id: "31", artist: "Cris Altamirano" },
  { name: "Alarma", id: "7", artist: "Cris Altamirano" },
  { name: "La Cajita", id: "49", artist: "Paco Calderon" },
  { name: "Los ninos", id: "37", artist: "Manuel Macias" },
  { name: "El conchero", id: "60", artist: "Boris Vinski" },
  { name: "Mazapanes", id: "55", artist: "Cris Altamirano" },
  { name: "El Guero", id: "10", artist: "Glenda Torrado" },
  { name: "El predicador", id: "24", artist: "Boris Viskin" },
  { name: "El gas", id: "52", artist: "Paco Calderon" },
  { name: "Panadera", id: "16", artist: "Manuel Macias" },
  { name: "La banda", id: "11", artist: "Glenda Torrado" },
  { name: "Le vengo comprando", id: "5", artist: "Cris Altamirano" },
  { name: "El canto", id: "6", artist: "Boris Viskin" },
  { name: "La orquesta", id: "13", artist: "Boris Viskin" },
  { name: "Tortillas", id: "19", artist: "Manuel Macias" },
  { name: "Los esquites", id: "8", artist: "Glenda Torrado" },
  { name: "Tamales", id: "42", artist: "Cris Altamirano" },
  { name: "Callejera Banda", id: "45", artist: "Boris Viskin" },
  { name: "Profesor", id: "29", artist: "Boris Viskin" },
  { name: "Las tostadas", id: "3", artist: "Glenda Torrado" },
  { name: "El tamal", id: "46", artist: "Glenda Torrado" },
  { name: "Los churros", id: "53", artist: "Glenda Torrado" },
  { name: "Agua", id: "48", artist: "Paco Calderon" },
  { name: "Juanito Lennon", id: "58", artist: "Boris Viskin" },
  { name: "Viaje Fantastico", id: "32", artist: "Cris Altamirano" },
  { name: "El danzon", id: "21", artist: "Paco Calderon" },
  { name: "Pelota de Novedad", id: "59", artist: "Glenda Torrado" },
  { name: "Papita Fresca", id: "28", artist: "Glenda Torrado" },
  { name: "Las fresas", id: "22", artist: "Paco Calderon" },
  { name: "Las pelotas", id: "33", artist: "Boris Viskin" },
  { name: "Pajaros", id: "38", artist: "Paco Calderon" },
  { name: "Los danzantes", id: "40", artist: "Cris Altamirano" },
  { name: "Los toques", id: "27", artist: "Manuel Macias" },
  { name: "Carrito", id: "56", artist: "Glenda Torrado" },
  { name: "Cargador", id: "39", artist: "Cris Altamirano" },
  { name: "Las frutas", id: "44", artist: "Paco Calderon" },
  { name: "Calcetas", id: "14", artist: "Cris Altamirano" },
  { name: "Beatbox", id: "54", artist: "Manuel Macias" },
  { name: "La basura", id: "12", artist: "Manuel Macias" },
  { name: "Sanitarios", id: "15", artist: "Boris Viskin" },
  { name: "Tatuajes", id: "51", artist: "Paco Calderon" },
  { name: "Se compran", id: "4", artist: "Glenda Torrado" },
  { name: "El polizonte", id: "25", artist: "Paco Calderon" },
  { name: "Elotes y Pollos", id: "26", artist: "Manuel Macias" },
  { name: "La cantante", id: "17", artist: "Cris Altamirano" },
  { name: "Lentes", id: "50", artist: "Paco Calderon" },
];
