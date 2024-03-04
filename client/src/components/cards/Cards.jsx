import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Card from "../card/Card";

import './cards.styles.css'

function Cards({allPokemonsCopy}) {
  const pokemonsList = allPokemonsCopy;
    
  return (
      <div className= "cards-list">
        {pokemonsList?.map((pokemon) => {
          return(
            <NavLink key ={pokemon.id} to={`/detail/${pokemon.id}`}>
              <Card key={pokemon.id} pokemon={pokemon}/>
            </NavLink>
          
          )})}
      </div>
    );
  }
  
  export default Cards;