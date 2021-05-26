import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  return (
    <div className="flex center">
      {props.pokemons.map(({ name, type, averageWeight, image }, index) => (
        <div key={index} className="poke box center">
          <div className="flex column center">
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight = {averageWeight.value}{' '}
              {averageWeight.measurementUnit}
            </p>
          </div>
          <img src={image} alt={name} />
        </div>
      ))}
    </div>
  );
}

Pokemon.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default Pokemon;
