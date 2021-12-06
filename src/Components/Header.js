import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    return (
      <div id="home" style={{ backgroundColor: "white" }}>
        <Fade bottom>
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
              className="responsive-headline"
              style={{ position: "absolute", top: 8 }}
            >
              Mexican Art Machine
            </h1>
            <img
              src="https://i.imgur.com/iiMBfzg.png"
              style={{ height: "100vh" }}
              alt="MAM logo"
            />
            <h2
              className="responsive-headline"
              style={{ position: "absolute", bottom: 48 }}
            >
              Que pedo mi pinche Jose aqui hay que poner algo{" "}
            </h2>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Header;
