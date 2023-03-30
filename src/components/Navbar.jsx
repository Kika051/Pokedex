function Navbar(props) {
  return (
    <>
      <button
        key={props.pokemonNumber}
        onClick={() => {
          props.setPokemonNumber(props.pokemonNumber);
        }}
      >
        {props.pokemon}
      </button>
    </>
  );
}
export default Navbar;
