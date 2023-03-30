import PokemonCards from './components/PokemonCards'
import { useState } from "react";
import Navbar from './components/Navbar';

function App() {
  const [pokemonNumber, setPokemonNumber] = useState(0);

  
  

  return (
    <div> 
      <PokemonCards pokemon={pokemonList[pokemonNumber]}/>
      {pokemonList.map((pokemon, numPok)=>(
         <Navbar pokemon={pokemon.name} pokemonNumber={numPok} setPokemonNumber = {setPokemonNumber} />
      ))}
    </div>
  )
  
}
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


export default App

