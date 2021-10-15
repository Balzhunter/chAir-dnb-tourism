import logo from "./logo.svg";
import accomodationb from "../src/static/images/accomodationb.png";
import experienceb from "../src/static/images/experienceb.png"
import adventureb from "../src/static/images/adventureb.png"

import "./App.css";
import { ExplorerSection } from "./components/ExplorerSection"
import { ExplorerButton } from "./components/ExplorerButton";
import { CallToAction } from "./components/CallToAction"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 123
        </a>
      </header>
      <ExplorerSection title = "Explorer Chairdnb">
        <ExplorerButton source={accomodationb}>Accommodations</ExplorerButton>
        <ExplorerButton source={experienceb}>Experiences</ExplorerButton>
        <ExplorerButton source={adventureb}>Adventures</ExplorerButton>
      </ExplorerSection>

      <CallToAction title = "Chairdnb Plus accommodation" subtle = "A selection of accommodation verified according to quality and connectivity criteria" />
    </div>
  );
}

export default App;
