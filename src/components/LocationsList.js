import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
      setData(response.data.results);
      console.log(response.data.results,"location");
    });

  }, []);
  return (
    <section className="location-list grid-view">
      {data.map( res => (
        <LocationCard key={res.id} name={res.name} type={res.type} dimension={res.dimension}/>
      
      ))}
    </section>
  );
}
