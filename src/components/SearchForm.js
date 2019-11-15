import React, { useState, useEffect } from "react";
import axios from "axios"

export default function SearchForm() {
  /*//Below on lines 6 and 7 are my useStates for my search input.
  //searchCharacter is set to an empty string,
  // while setSearchCharacter is set to the value of the input
  */
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchCharacter(event.target.value);
  };

  // const [data, setData] = useState([]);

  /* Here is an axios call which is getting the array of objects of Characters
  i captured that data but puting it in a varible called people
  i filtered through the array of objects returning only the searchCharacters*/
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
    //  setData(response.data.results);
      // console.log(response.data.results,"character search");
      const people = response.data.results;
      // console.log(people,"people")
      const result = people.filter(person => {
       return  person.name.toLowerCase().includes(searchCharacter)
      }
      );
      
      setSearchResults(result);
      
    });
  }, [searchCharacter]);

  return (
    <section className="search-form">
     <input 
     type="text"
     placeholder="search"
     value={searchCharacter}
     onChange={handleChange}/>
     <ul>
     
     {searchResults && searchResults.map(item => (
       <div>
       <h4>{item.name}</h4>
     </div>
        ))}
     </ul>
     {/* <button type="submit">Search</button> */}
    </section>
  );
}