import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
          this.setState({ characters: data.results });
        });
    }, 3000);
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Ricky and Morty Characters:</h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
