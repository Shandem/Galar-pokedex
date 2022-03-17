import React from 'react';
import { mockComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';

const Showcard = (props) => {
    // Icon sprites.front_default
    // name species.name
    // Number order
    // type types.type.name
    // weight weight
    // Moves abilities.ability.name x2
    // https://pokeapi.co/api/v2/pokemon/ditto
    console.log(props.mon)
    
    return (
        <div>
            <img src={props.mon.sprites.front_default} alt='pokemon front'/>
            <img src={props.mon.sprites.front_shiny} alt='pokemon front'/>
            <div className='title'>
                <h2 className='name'>NAME {props.mon.name}</h2>
                <h2 className='number'>ID {props.mon.id}</h2>
            </div>

            <div className='info'>
                
                <p className='weight'>WEIGHT {props.mon.weight}</p>
            </div>

            <div className='moves'>
            <p className='move1'>BASE EXPERIANCE {props.mon.base_experience}</p>
            <p className='move2'>height {props.mon.height}</p>
            </div>
          
        </div>
    );
}

export default Showcard;
