import { useEffect, useState } from "react";
import { getAllFeatured } from "../services/featured_service";
import { Container } from "./Container";
import WideCard from "./WideCard";
import { filterArrays } from "../utils/array_filter";

export default function Featured() {
  const [data, setData] = useState([]);
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    async function getData() {
      const featured_data = await getAllFeatured();
      setData(featured_data);
    }
    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const leng = 5;
      const rate = 3;
      setInitial(initial => (leng > initial + rate) ? (initial + rate) : (initial + rate - leng));
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Container prefix="featured">
      <Container prefix="center">
        <h2 className="heading">Featured Chairdnb Plus Destinations</h2>
        <p className="discover-call--subtle">
          Multi-day pair programming sessions organized by local experts with
          activities, meals and accommodation included
        </p>
        <Container prefix="wide-card">
          {filterArrays(data, 3, initial).map((feature) => (
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
    </Container>
  );
}
