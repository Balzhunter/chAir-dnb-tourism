import "./App.css";
import LongCard from "./components/LongCard";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container prefix="center">
        <h2 className="heading">Discover Chairdnb adventures</h2>
        <p className="subtitle">Multi-day hackatons organized by local experts with activities, meals and accommodation included</p>
        <Container prefix="long-card">
          <LongCard name="Bali" image_url="https://picsum.photos/id/1023/640" price="120.0" rating="4.6"/>
          <LongCard name="Bali" image_url="https://picsum.photos/id/1038/640" price="120.0" rating="4.6"/>
          <LongCard name="Bali" image_url="https://picsum.photos/id/1026/640" price="120.0" rating="4.6"/>
          <LongCard name="Bali" image_url="https://picsum.photos/id/1021/640" price="120.0" rating="4.6"/>
          <LongCard name="Bali" image_url="https://picsum.photos/id/1054/640" price="120.0" rating="4.6"/>
          <LongCard name="Bali" image_url="https://picsum.photos/id/1058/640" price="120.0" rating="4.6"/>
        </Container>
      </Container>
    </div>
  );
}

export default App;
