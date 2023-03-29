import PokemonCards from './components/PokemonCards'

function App() {
 
  return (
    <div> 
      <PokemonCards pokemon={pokemonList[0]}/>
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
    name: "mew",
  },
];

export default App

