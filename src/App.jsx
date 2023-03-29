import PokemonCards from './components/PokemonCards'
import { useState } from "react";

function App() {
  const [pokemonNumber, setPokemonNumber] = useState(0);

  const handleNextClick = () => {
    setPokemonNumber(pokemonNumber + 1)
  }
  
  const handlePreviousClick = () => {
    setPokemonNumber(pokemonNumber - 1)
  }
  return (
    <div> 
      <PokemonCards pokemon={pokemonList[pokemonNumber]}/>
      <button onClick={handlePreviousClick}>Précédent</button>
      <button onClick={handleNextClick}>Suivant</button>
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

