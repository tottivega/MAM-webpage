import React, { Component } from "react";
import Fade from "react-reveal";
import Networks from "./Networks";

class Footer extends Component {
  render() {
    return (
      <footer style={{ backgroundColor: "#000524" }}>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <Networks />
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;
