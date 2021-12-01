import React, { Component } from "react";
import Fade from "react-reveal";
const networkObjects = [
  {
    name: "instagram",
    url: "https://www.instagram.com/mam_nfts/",
    className: "fa fa-instagram",
  },
];

class Footer extends Component {
  render() {
    const networks = networkObjects.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;
