import Card from "../card/Card";

import './cards.styles.css'

function Cards({allPokemons}) {
  const pokemonsList = allPokemons;
    
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