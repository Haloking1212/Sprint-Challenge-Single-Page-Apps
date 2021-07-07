import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import axios from 'axios';


export default function EpisodeList() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setData(response.data.results);
        // console.log(response.data.results,"episode");
      });
  
    }, []);

    return (
        <section className="episode-list grid-view">
                {data.map( res => (
        <EpisodeCard 
        key={res.id}
        air_date={res.air_date}
        episodeNumber={res.episode}
        name={res.name}
         />
      
      ))}
        </section>
      );
}