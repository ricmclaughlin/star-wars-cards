import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="col-4">
      <div className="box">
        <img src={props.image} alt={props.name} />
        <footer>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </footer>
      </div>
    </div>
  );
}


