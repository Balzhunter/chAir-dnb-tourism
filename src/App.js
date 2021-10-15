import "./App.css";
import { Adventures } from "./components/Adventures";
import { Cover } from "./components/Cover";
import { ExplorerSection } from "./components/ExplorerSection";
import { ExplorerButton } from "./components/ExplorerButton";
import { CallToAction } from "./components/CallToAction";
import accomodationb from "../src/static/images/accomodationb.png";
import experienceb from "../src/static/images/experienceb.png";
import adventureb from "../src/static/images/adventureb.png";
import { Container } from "./components/Container";
import { Accommodations } from "./components/Accommodations";
import { Experiences } from "./components/Experiences"

function App() {
  return (
    <>
      <div className="App">
        <Cover></Cover>
        <Container prefix="center">
          <ExplorerSection title="Explorer Chairdnb">
            <ExplorerButton source={accomodationb}>
              Accommodations
            </ExplorerButton>
            <ExplorerButton source={experienceb}>Experiences</ExplorerButton>
            <ExplorerButton source={adventureb}>Adventures</ExplorerButton>
          </ExplorerSection>
          <CallToAction
            title="Chairdnb Plus accommodation"
            subtle="A selection of accommodation verified according to quality and connectivity criteria"
          />
        </Container>
        <Adventures />
        <Accommodations />
        <Experiences />
      </div>
    </>
  );
}

export default App;
