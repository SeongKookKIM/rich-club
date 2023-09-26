import { useEffect } from "react";

import { SectionsContainer } from "react-fullpage";
import Main from "./Pages/Main";
import Token from "./Pages/Token";
import Tip from "./Pages/Tip";
import Born from "./Pages/Born";
import Bless from "./Pages/Bless";
import Auction from "./Pages/Auction";

function App() {
  const options = {
    activeClass: "active",
    anchors: ["main", "token", "tip", "born", "bless", "auction"],
    arrowNavigation: true,
    className: "SectionContainer",
    delay: 1500,
    navigation: true,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "0",
    sectionPaddingBottom: "0",
    verticalAlign: false,
  };

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-gnb">
          <div className="wrapper-logo">
            <img src="/assets/image/main/Logo_The_rich_club.png" alt="Logo" />
          </div>
        </div>
        <div className="wrapper-bg">
          <img src="/assets/image/main/Background_line.png" alt="background" />
        </div>
        <SectionsContainer {...options}>
          <Main />
          <Token />
          <Tip />
          <Born />
          <Bless />
          <Auction />
        </SectionsContainer>
      </div>
    </div>
  );
}

export default App;
