import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Detail() {

  const {id} = useParams() // obtengo ek id de la url con este hook.
  const [pokemon, setPokemon] = useState({}); //creo un estado local para almacenar el pokemon en cuestion

  const getPokemonById = async (id) =>{
    const pokemonXId = (await axios.get(`http://localhost:3001/pokemons/${id}`));
    return (pokemonXId);
  }

  

  useEffect(()=>{
    getPokemonById(id).then(({data}) => {
      console.log(data);
      if (data.name){
      setPokemon(data);
    } else {
      window.alert('No hay pokemon con ese ID');
    }
  });
    //console.log(Promise(pokemonById));
    
    return setPokemon({}); //cuando el componente se desmonte seteo el estado en vacio para limpiarlo.
  }, [id])



  
    return (
       
      <div className="Detail">
        <h1>Este es el DETAIL</h1>
        {pokemon.name && (
        <>
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
           {pokemon.types?.map((type) => {
            return(
            <h3 key={Math.random()}>{type.name}</h3>
            )})}
        </div>
        </>
        )}
        
      </div>
    );
  }

  // function Card({pokemon}) {
  //   const typesOfPoke = pokemon.types //array
  //     return (
  //       <div className="card-container">
  //         <h3>Id:{pokemon.id}</h3>
  //         <h2>Name:{pokemon.name}</h2>
  //         <img src={pokemon.image} alt='image_pokemon'></img>
  //         <h3>Height:{pokemon.height}</h3>
  //         <h3>Weight:{pokemon.weight}</h3>
  //         <h3>HP:{pokemon.hp}</h3>
  //         <h3>Attack:{pokemon.attack}</h3>
  //         <h3>Defense:{pokemon.defense}</h3>
  //         <h3>Special-Attack:</h3>
  //         <h3>Special-Defense:</h3>
  //         <h3>Speed:{pokemon.speed}</h3>
  //         {typesOfPoke?.map((type) => {
  //           return(
  //           <h3 key={Math.random()}>{type.name}</h3>
  //           )})}
  //       </div>
  //     );
  //   }
  
  export default Detail;