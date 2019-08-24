import React from "react";
import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
background-color: #d8f8fd;
`
const P = styled.p`
color: grey;
`


export default function EpisodeCard(props) {
  return (
    <Div>
    <P> {props.air_date} </P>
    <P> {props.episodeNumber} </P>
    <P> {props.name} </P>
    </Div>
  );
}