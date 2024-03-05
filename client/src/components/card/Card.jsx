import './card.styles.css';

function Card({pokemon}) {
  const typesOfPoke = pokemon.types //array
    return (
      <div className="card-container">
        <h2>Name:{pokemon.name}</h2>
        <h3>Attack:{pokemon.attack}</h3>
        <img src={pokemon.image} alt='image_pokemon'></img>
        {typesOfPoke?.map((type) => {
          return(
          <h3 key={Math.random()}>{type.name}</h3>
          )})}
      </div>
    );
  }
  
  export default Card;