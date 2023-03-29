import PokemonCards from './components/PokemonCards'

function App() {
 
  return (
    <div> 
      <PokemonCards name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc}/>
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

