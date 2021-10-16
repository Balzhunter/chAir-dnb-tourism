import { useEffect, useState } from "react";
import { getAllFeatured } from "../services/featured_service";
import { Container } from "./Container";
import WideCard from "./WideCard";

export default function Featured() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const featured_data = await getAllFeatured();
      setData(featured_data);
    }
    getData();
  }, []);

  return (
    <div className="my-88">
      <Container prefix="center">
        <h2 className="heading">Featured Chairdnb Plus Destinations</h2>
        <p className="discover-call--subtle">
          Multi-day pair programming sessions organized by local experts with
          activities, meals and accommodation included
        </p>
        <Container prefix="wide-card">
          {data.slice(0, 3).map((feature) => (
            <WideCard
              key={feature.name}
              title="@"
              verified_stays={feature.verified_stays}
              price={feature.price}
              start_date={feature.start_date}
              end_date={feature.end_date}
              img={feature.image_url}
            />
          ))}
        </Container>
      </Container>
    </div>
  );
}
