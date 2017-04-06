import React from 'react';
import './Row.css';
import Card from './Card'

export default function Row (props) {

  const cards = props.characters.map((card, index) =>
    <Card key={index} {...card} />
  );

  return (
    <div className="row">
     {cards}
    </div>
  );
}
