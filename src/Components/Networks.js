import React from "react";
const supportedNetworks = [
  {
    name: "twitter",
    url: "https://twitter.com/MAM_nfts",
    className: "fa fa-twitter",
  },
  {
    name: "discord",
    url: "https://discord.gg/zws6EA9V9f",
    className: "fa fa-discord",
  },
  {
    name: "instagram",
    url: "http://instagram.com/tbaker_x",
    className: "fa fa-instagram",
  },
];

export default function Networks({ whitemode = false }) {
  console.log(supportedNetworks);

  if (whitemode) {
    return supportedNetworks.map(function (network) {
      return (
        <div key={network.name} style={{ marginRight: 42, fontSize: 46 }}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </div>
      );
    });
  }
  return (
    <ul className="social-links">
      {supportedNetworks.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
