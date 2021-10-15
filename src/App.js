import "./App.css";
import { Adventures } from "./components/Adventures";
import { Cover } from "./components/Cover";
import { ExplorerSection } from "./components/ExplorerSection"
import { ExplorerButton } from "./components/ExplorerButton";
import { CallToAction } from "./components/CallToAction";
import accomodationb from "../src/static/images/accomodationb.png";
import experienceb from "../src/static/images/experienceb.png"
import adventureb from "../src/static/images/adventureb.png"
import { Container } from "./components/Container";
import { MediumCard } from "./components/MediumCard";

function App() {
  return (
    <>
      <div className="App">
        <Cover></Cover>
        <Container prefix="center">
          <ExplorerSection title = "Explorer Chairdnb">
            <ExplorerButton source={accomodationb}>Accommodations</ExplorerButton>
            <ExplorerButton source={experienceb}>Experiences</ExplorerButton>
            <ExplorerButton source={adventureb}>Adventures</ExplorerButton>
          </ExplorerSection>
          <CallToAction title = "Chairdnb Plus accommodation" subtle = "A selection of accommodation verified according to quality and connectivity criteria" />
        </Container>
        <Adventures />
      </div>

      <div className="App">
        <Container prefix="center">
          <h2 className="heading">Accommodation around the world</h2>
          <Container prefix="medium-card">
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/1018/640" price="577.0" rating="4.96"/>
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/1047/640" price="577.0" rating="4.96"/>
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/100/640" price="577.0" rating="4.96"/>
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/1038/640" price="577.0" rating="4.96"/>
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/1018/640" price="577.0" rating="4.96"/>
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/1047/640" price="577.0" rating="4.96"/>
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/100/640" price="577.0" rating="4.96"/>
            <MediumCard name="Tokyo" image_url="https://picsum.photos/id/1038/640" price="577.0" rating="4.96"/>
          </Container>
        </Container>
      </div>  
    </>
  );
}

export default App;
