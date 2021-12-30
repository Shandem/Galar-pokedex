import React from 'react';
import './PokemonList.css'

const Pokemon = (props) => {
    return (
      <div className='card'>
          
          <h2>{props.name}</h2>
          <p>{props.id}</p>
      </div>
    );
}

export default Pokemon;
