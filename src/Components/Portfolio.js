import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>New to crypto? Don't know how to participate?</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <Zmage
                      alt="Create a Cryptowallet"
                      src="http://la-candelaria.com/wp-content/uploads/2015/05/tutorial.jpg"
                    />
                    <div style={{ textAlign: "center" }}>
                      Create a Cryptowallet
                    </div>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <Zmage
                      alt="Buy an NFT in Opensea"
                      src="https://www.finder.com/niche-builder/611f92c51f96f.png"
                    />
                    <div style={{ textAlign: "center" }}>
                      Buy an NFT in Opensea
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
