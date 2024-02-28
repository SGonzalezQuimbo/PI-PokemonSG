import './card.styles.css';

function Card({pokemon}) {
  const typesOfPoke = pokemon.types //array
    return (
      <div className="card-container">
        <h3>Id:{pokemon.id}</h3>
        <h2>Name:{pokemon.name}</h2>
        <img src={pokemon.image} alt='image_pokemon'></img>
        <h3>Height:{pokemon.height}</h3>
        <h3>Weight:{pokemon.weight}</h3>
        <h3>HP:{pokemon.hp}</h3>
        <h3>Attack:{pokemon.attack}</h3>
        <h3>Defense:{pokemon.defense}</h3>
        <h3>Special-Attack:</h3>
        <h3>Special-Defense:</h3>
        <h3>Speed:{pokemon.speed}</h3>
        {typesOfPoke?.map((type) => {
          return(
          <h3 key={Math.random()}>{type.name}</h3>
          )})}
      </div>
    );
  }
  
  export default Card;