import React from 'react';

const Showcard = (props) => {
    // Icon sprites.front_default
    // name species.name
    // Number order
    // type types.type.name
    // weight weight
    // Moves abilities.ability.name x2
    // https://pokeapi.co/api/v2/pokemon/ditto
    console.log(props)
    return (
        <div>
            <icon href={props.sprites.front_default} className='sprite'/>
            <div className='title'>
                <h2 className='name'>{props.species.name}</h2>
                <h2 className='number'>{props.order}</h2>
            </div>

            <div className='info'>
                <p className='type'>{props.types.type.name}</p>
                <p className='weight'>{props.weight}</p>
            </div>

            <div className='moves'>
            <p className='move1'>{props.abilities.ability.name}</p>
            <p className='move2'>{props.abilities.ability.name}</p>
            </div>
          
        </div>
    );
}

export default Showcard;
