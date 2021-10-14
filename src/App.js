import "./App.css";
import LongCard from "./components/LongCard";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container prefix="center">
        <Container prefix="long-card">
          <LongCard/>
          <LongCard/>
          <LongCard/>
          <LongCard/>
          <LongCard/>
          <LongCard/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
