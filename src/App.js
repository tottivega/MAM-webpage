import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Loteria from "./Components/Loteria";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Loteria />
        <Resume />
        <Portfolio />
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
