import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Loteria extends Component {
  render() {
    return (
      <header id="loteria" style={{ height: 1200 }}>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Loteria</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <LoteriaGrid />
            </Fade>
            <hr />
          </div>
        </div>
      </header>
    );
  }
}

export default Loteria;

const images = [
  {
    src: "https://i1.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/1e18c92ee4cda80c557cd5cf548f2c9a.jpg?resize=657%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/b5afab7258d8acdc1f7042e45e1f2fce.jpg?resize=656%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i1.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/1e18c92ee4cda80c557cd5cf548f2c9a.jpg?resize=657%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/b5afab7258d8acdc1f7042e45e1f2fce.jpg?resize=656%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i1.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/1e18c92ee4cda80c557cd5cf548f2c9a.jpg?resize=657%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/b5afab7258d8acdc1f7042e45e1f2fce.jpg?resize=656%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i1.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/1e18c92ee4cda80c557cd5cf548f2c9a.jpg?resize=657%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/b5afab7258d8acdc1f7042e45e1f2fce.jpg?resize=656%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i1.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/1e18c92ee4cda80c557cd5cf548f2c9a.jpg?resize=657%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/b5afab7258d8acdc1f7042e45e1f2fce.jpg?resize=656%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
  {
    src: "https://i2.wp.com/blog.claroshop.com/wp-content/uploads/2021/07/e049b5042076ebd6c5f135b6821efa97.jpg?resize=655%2C1024&ssl=1",
    opensea:
      "https://opensea.io/assets/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3/1494",
  },
];

const LoteriaGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20% 20% 20% 20% 20%",
        gridTemplateRows: "20% 20% 20% 20% 20%",
      }}
    >
      {images.map((image) => {
        return (
          <div style={{ width: 100, height: 400 }}>
            <a href={image.opensea} target="_blank">
              <img src={image.src} style={{ objectFit: "contain" }} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
