import React from "react";
import styled from 'styled-components'

const Div = styled.div`
background-color:black
margin: 20px;
`
const P = styled.p`
color: white;
`

export default function LocationCard(props) {
  return (
    <Div>
      <P>{props.name}</P>
      <P>{props.type}</P>
      <P>{props.dimension}</P>
    </Div>
  )
}