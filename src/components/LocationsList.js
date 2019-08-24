import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function LocationsList() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
      setData(response.data.results);
      console.log(response.data.results,"location");
    });

  }, []);
  return (
    <section className="location-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
