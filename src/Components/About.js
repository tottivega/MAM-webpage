import React, { Component } from "react";
import Fade from "react-reveal";
import Networks from "./Networks";
class About extends Component {
  render() {
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://i.imgur.com/iiMBfzg.png"
                alt="MAM logo"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>
                MAM is a cultural and technological movement that revolves
                around cutting edge blockchain techonlogy. Drawing from its own
                mysterious nature, the movement finds itself in constant
                evolution. MAM looks to present the absurdism and inexplicable
                nature of life through multisensorial experiences. MAM also
                looks to create new spaces for artists, promoting their
                ideological autonomy and presents the spectator as a relay of
                conversation and change.
              </p>
              <h2>Contact Details</h2>
              <div style={{ display: "flex" }}>
                <Networks whitemode />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
