import { SectionsContainer } from "react-fullpage";
import Main from "./Pages/Main";
import Token from "./Pages/Token";
import Tip from "./Pages/Tip";
import Born from "./Pages/Born";
import Bless from "./Pages/Bless";

function App() {
  const options = {
    activeClass: "active",
    anchors: ["main", "token", "tip", "born", "bless"],
    arrowNavigation: true,
    className: "SectionContainer",
    delay: 2000,
    navigation: true,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "0",
    sectionPaddingBottom: "0",
    verticalAlign: false,
  };

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
        </SectionsContainer>
      </div>
    </div>
  );
}

export default App;
