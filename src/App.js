import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Row from './components/Row';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters : [
        {name: 'Rey', description: 'Protagonist, from Tatooine', image: '/images/rey_square.png'},
        {name: 'Finn', description: 'Storm Trooper, befriends Rey', image: '/images/finn_square.png'},
        {name: 'Kylo', description: 'Main Villian, or is he?', image: '/images/kylo_square.png'},
        {name: 'Yoda', description: 'Jedi Master he is', image: '/images/yoda_square.png'},
        {name: 'Poe', description: 'Soon to be dead Pilot', image: '/images/poe_square.png'},
        {name: 'Chewbacca', description: 'Tall, yet furry', image: '/images/chewbacca_square.png'}
      ]
    }
  }

  render() {
    const chunks = function(array, size) {
      let results = [];
      while (array.length) {
        results.push(array.splice(0, size));
      }
      return results;
    };
    
    let rows = chunks(this.state.characters, 3).map((characters, index) =>
      <Row key={index} characters={characters}/>
    );

    return (
      <div className="App">
        <Header />
        {rows}
      </div>
    );
  }
}

export default App;
