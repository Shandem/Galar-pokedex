import React, { useState, useCallback } from 'react';
import './App.css';
import Pokemonlist from './Components/PokemonList';
import Searchbar from './Components/searchBar';

function App() {
  const [dex, setDex] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try{
     const responce = await fetch('https://pokeapi.co/api/v2/pokedex/27/')
     if (!responce.ok){
       throw new Error('Somthing went wrong!')
     }
     const data = await responce.json()
     console.log(data)
   
       const transformedPokemon = data.pokemon_entries.map(pokemon => {
         return {
           id: pokemon.entry_number,
           name: pokemon.pokemon_species.name,
           
         }
       })
       setDex(transformedPokemon);
       

    }
    catch(error){
     setError(error.message)
    }
    setIsLoading(false)
  },[]);

 async function addMovieHandler(movie) {
    const responce = await fetch('https://swapi-react-8607f-default-rtdb.firebaseio.com/movies.json',{
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    const data = await responce.json()
    console.log(data)
  }


  return (
    <div className="App">
    <button onClick={fetchMoviesHandler}>pokemon</button>
      hi
      <div className='container'>
        <Pokemonlist  mons={dex}/>

        <Searchbar/>
      </div>
    </div>
  );
}

export default App;
