import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function EpisodeList() {
    const [data, setData] = useState({});
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setData(response.data);
        console.log(response.data.results,"episode");
      });
  
    }, []);

    return (
        <section className="episode-list grid-view">
          <h2>TODO: `array.map()` over your state here!</h2>
        </section>
      );
}