import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

function Pokedex() {
  return (
    <div>
      <h1>Pokedéx</h1>
      <Pokemon pokemons={pokemons} />
    </div>
  );
}

export default Pokedex;
