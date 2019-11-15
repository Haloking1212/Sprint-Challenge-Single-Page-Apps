import React from "react";
import styled from 'styled-components'

const Div = styled.div`
background-color: #38cedb;
margin: 5px;
`

const H4 = styled.h4`
color: purple;
`

const P = styled.p`
color: black;
`

export default function CharacterCard(props) {
  return (
   <Div>
    <img src={props.image} alt={"picture of character"}/>
    <H4>{props.name}</H4>
    <P>{props.species} {props.status} </P>
  </Div>
  )

}