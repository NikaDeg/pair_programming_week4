import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
import { useState } from 'react'

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const handleDeleteItem= (itemid) => {
    setToursData (toursData.filter((tour) => tour.id !== itemid));
  }


  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} onRemove={handleDeleteItem} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
