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
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { getAllPlaces } from "./services/all_service";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const places = await getAllPlaces();
      setData(places);
    };

    fetchAll();
    console.log("You fetch again")
  }, []);

  return (
    <>
      <div className="App">
        <Cover>
          <Form data={data}></Form>
        </Cover>
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
