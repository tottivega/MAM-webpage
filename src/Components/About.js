import React, { Component } from "react";
import Fade from "react-reveal";
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
              <h2>We are here to revolutionize the art ecosystem</h2>

              <p>
                MAM is a cultural and technological movement that revolves
                around cutting edge blockchain technology. Drawing from its own
                mysterious essence, the movement finds itself in constant
                evolution. MAM looks to present the absurdism and inexplicable
                nature of life through multisensorial experiences. <br /> MAM
                also looks to create new spaces for artists, promoting their
                ideological autonomy and presents the spectator as a relay of
                conversation and change.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "80%",
                }}
              >
                <img
                  className="profile-pic"
                  src="data:image/png;base64,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"
                  alt="MAM logo"
                />{" "}
                <img
                  className="profile-pic"
                  src="https://pbs.twimg.com/profile_images/1457736496631406593/Oad1Zm7Y_400x400.png"
                  alt="Objkt marketplace"
                />{" "}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
