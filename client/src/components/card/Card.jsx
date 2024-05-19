import './card.styles.css';

function Card({pokemon}) {
  const typesOfPoke = pokemon.types //array
    return (
      <div className="card-container">
        <h2>{pokemon.name}</h2>
        <h3>Attack:{pokemon.attack}</h3>
        <img className='poke-image' src={pokemon.image} alt='image_pokemon'></img>
        
        <div className='type-container'>
          {typesOfPoke?.map((type) => {
          return(
          <div className="type" key={Math.random()}>{type.name}</div>
          )})}
        </div>
        
      </div>
    );
  }
  
  export default Card;