import React from "react";
import styled from 'styled-components'

const Div = styled.div`
background-color: grey;
margin: 5px;
`

const H4 = styled.h4`
color: purple;
`

const Para = styled.p`
color: white;
`

export default function CharacterCard(props) {
  return (
   <Div>
    <img src={props.image} alt={"picture of character"}/>
    <H4>{props.name}</H4>
    <Para>{props.species} {props.status} </Para>
  </Div>
  )

}