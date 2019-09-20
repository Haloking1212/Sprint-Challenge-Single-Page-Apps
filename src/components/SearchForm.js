import React, { useState, useEffect } from "react";
import axios from "axios"
export default function SearchForm() {
  
  const [searchCharacter, setSearchCharacter] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchCharacter(event.target.value);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
    //  setData(response.data.results);
      // console.log(response.data.results,"character");
      const people = response.data.results;
      console.log(people,"people")
      const result = people.filter(person => {
       return  person.name.toLowerCase() === searchCharacter.toLowerCase()
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
          <li>{item.name}</li>
        ))}
     </ul>
     <button type="submit">Search</button>
    </section>
  );
}



// import React, { useState } from "react";
// // import * as Yup from "yup";

// export default function SearchForm(/*{ onSearch }*/) {

//   const [form, setForm] = useState({ name: ""});

//   const changeHandler = event => {
//       console.log(event.target.value);
//       setForm({...form, [event.target.name]: event.target.value});
//   };
  
//   const submitForm = event => {
//       event.preventDefault();
//       const newMem = {
//           ...form,
//           id: Date.now()
//       }
//     }

//   return (
//     <section className="search-form">
//       <form onSubmit={() => onSearch(Search)}>
//         <input
//           onChange={changeHandler}
//           // placeholder="name"
//           // value={Search}
//           // name="name"
//         />
//         <button type="submit">Search</button>
//       </form>
//     </section>
//   );
// }
