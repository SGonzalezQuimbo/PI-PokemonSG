import Card from "../card/Card";

import './cards.styles.css'

function Cards({nPokemons}) {
  const pokemonsList = nPokemons;
    
  return (
      <div className= "cards-list">
        {pokemonsList?.map((pokemon) => {
          return(
          <Card
            key={pokemon.id}
            pokemon={pokemon}/>
          )})}
      </div>
    );
  }
  
  export default Cards;