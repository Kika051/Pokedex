function Navbar (props){
return (<>
              <button onClick={props.handlePreviousClick}>Précédent</button>
      <button onClick={props.handleNextClick}>Suivant</button>
</>)
}
export default Navbar