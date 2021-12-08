import React from "react";
const supportedNetworks = [
  {
    name: "instagram",
    url: "http://instagram.com/tbaker_x",
    className: "fa fa-instagram",
  },
  {
    name: "twitter",
    url: "https://twitter.com/MAM_nfts",
    className: "fa fa-twitter",
  },
  // {
  //   name: "discord",
  //   url: "https://discord.gg/zws6EA9V9f",
  //   className: "fa fa-discord",
  // },
];

export default function Networks({ whitemode = false }) {
  if (whitemode) {
    return supportedNetworks.map(function (network) {
      return (
        <div key={network.name} style={{ marginRight: 24, fontSize: 46 }}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </div>
      );
    });
  }
  return (
    <ul className="social-links">
      {supportedNetworks.map(function (network, i) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i
                className={network.className}
                style={{
                  color: "white",
                  fontSize: 48,
                  marginRight: i === 0 ? 24 : 0,
                }}
              ></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
