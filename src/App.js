import "./App.css";
import LongCard from "./components/LongCard";
import { Container } from "./components/Container";
import { MediumCard } from "./components/MediumCard";


function App() {
  return (
    <>
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

      <section className="App">
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
      </section>  
    </>
  );
}

export default App;
