import React from "react";


export default function CharacterCard(props) {
  return <div key={props.id}>
    <img src={props.image}/>
    <h4>{props.name}</h4>
    <p>{props.species}</p>
    <p>{props.status}</p>
  </div>
}
