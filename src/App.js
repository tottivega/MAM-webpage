import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Tutorials from "./Components/Tutorials";
import Loteria from "./Components/Loteria";
import TutorialWrapper from "./Components/TutorialWrapper";
function App() {
  const [navigation, setNavigation] = useState("");
  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }, []);

  if (navigation)
    return (
      <TutorialWrapper
        navigation={navigation}
        navigate={(route) => setNavigation(route)}
      />
    );

  return (
    <div className="App">
      <Header />
      <About />
      {false && <Loteria />}
      <Resume />
      {true && <Tutorials navigate={(route) => setNavigation(route)} />}
      <Footer />
    </div>
  );
}

export default App;
