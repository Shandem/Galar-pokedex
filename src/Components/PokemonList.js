import React from 'react';
import Pokemon from './Pokemon'
import './PokemonList.css'

const Pokemonlist = (props) => {
    return (
      <ul className='names_list'>
       
          {props.mons.map((pokemon) => (
            <Pokemon
                  key={pokemon.id}
                  name={pokemon.name}
                  
              />
      ))}
      </ul>
    );
}

export default Pokemonlist;
