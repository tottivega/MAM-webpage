import React, { Component } from "react";
import Fade from "react-reveal";

const supportedNetworks = [
  {
    name: "facebook",
    url: "https://github.com/nordicgiant2/react-nice-resume",
    className: "fa fa-facebook",
  },
  { name: "twitter", url: "http://twitter.com", className: "fa fa-twitter" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/tim-baker-8420009a/",
    className: "fa fa-linkedin",
  },
  {
    name: "instagram",
    url: "http://instagram.com/tbaker_x",
    className: "fa fa-instagram",
  },
  {
    name: "github",
    url: "https://github.com/nordicgiant2/react-nice-resume",
    className: "fa fa-github",
  },
];

const networks = supportedNetworks.map(function (network) {
  return (
    <div key={network.name} style={{ marginRight: 42, fontSize: 46 }}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </div>
  );
});

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/4a14e7b2de7f6eaf5a6c98cb8c00b8de.png"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>
                MAM is a cultural and technological movement that revolves
                around cutting edge blockchain techonlogy. Drawing from its own
                mysterious nature, the movement finds itself in constant
                evolution. MAM looks to present the absurdism and inexplicable
                nature of life through multisensorial experiences el absurdismo
                y misterio de la Vida. MAM also looks to create new spaces for
                artists,promoting their ideological autonomy and presents the
                spectator as a relay of conversation and change.
              </p>
              <h2>Contact Details</h2>
              <div style={{ display: "flex" }}>{networks}</div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
