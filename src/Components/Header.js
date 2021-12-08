import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <div id="home" style={{ backgroundColor: "white" }}>
        <Fade left>
          <div
            style={{
              position: "relative",
              color: "black",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              className="responsive-headline title-responsive-font"
              style={{ position: "absolute", textAlign: "center" }}
            >
              Mexican Art Machine
            </h1>
            <div className="logo-container-responsive-size">
              <img
                src="https://i.imgur.com/iiMBfzg.png"
                className="logo-responsive-size"
                alt="MAM logo"
              />
            </div>
            {/* <h2
              className="responsive-headline subtitle-responsive-font"
              style={{ position: "absolute", textAlign: "center" }}
            >
              Presenting "The Sounds of Mexico"
            </h2> */}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Header;
