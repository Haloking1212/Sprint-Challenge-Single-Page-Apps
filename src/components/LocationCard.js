import React from "react";
import { Card } from "semantic-ui-react"; 

export default function LocationCard(props) {
  return (
     <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.type} {props.dimension}</Card.Meta>
      </Card.Content>
    </Card>
  )
}
