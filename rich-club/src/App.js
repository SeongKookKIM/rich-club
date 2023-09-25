import { SectionsContainer, Section } from "react-fullpage";
import Main from "./Pages/Main";

function App() {
  const options = {
    activeClass: "active",
    anchors: ["main", "sectionTwo", "sectionThree"],
    arrowNavigation: true,
    className: "SectionContainer",
    delay: 1000,
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
          <Section className="two">Page 2</Section>
          <Section className="three">Page 3</Section>
        </SectionsContainer>
      </div>
    </div>
  );
}

export default App;
