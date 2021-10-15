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
import { SearchResults } from "./components/SearchResults";

function App() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const places = await getAllPlaces();
      setData(places);
    };

    fetchAll();
    console.log("You fetch again")
  }, []);

  console.log(searchResults);

  return (
    <>
      {searchResults !== null ? (
        <>
          <Cover>
            <h2 className="results-title">YOUR RESULTS FOR {searchResults.name.toUpperCase()}</h2>
          </Cover>
          <SearchResults results={searchResults.data} quantity={searchResults.quantity} parentUpdate={setSearchResults}></SearchResults>
        </>
      )
        :
      (
      <>
        <Cover>
          <Form data={data} parentUpdate={setSearchResults}></Form>
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
      </>
      )
      }
    </>
  );
}

export default App;
