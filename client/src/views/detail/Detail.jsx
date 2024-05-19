//import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';// useState,
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsById, clearDetail } from '../../redux/actions/actions';


import './detail.styles.css';

function Detail() {

  const {id} = useParams() // obtengo ek id de la url con este hook.
  const dispatch = useDispatch();
  let pokemonById = useSelector(state => state.pokemonById);
  

  useEffect(()=>{
    dispatch(getPokemonsById(id));
    
    return (() => {
      dispatch(clearDetail())}); //cuando el componente se desmonte seteo el estado en vacio para limpiarlo.
  }, [dispatch, id]);
  
  
    return (
       
      <div className="detail">
        {pokemonById.name && (
        <>
        <div className="stats-detail-container">
          <h3>Id:{pokemonById.id}</h3>
          <h2>Name:{pokemonById.name}</h2>
           <h3>Height:{pokemonById.height}</h3>
           <h3>Weight:{pokemonById.weight}</h3>
           <h3>HP:{pokemonById.hp}</h3>
          <h3>Attack:{pokemonById.attack}</h3>
           <h3>Defense:{pokemonById.defense}</h3>
          <h3>Special-Attack:{pokemonById.specialattack}</h3>
           <h3>Special-Defense:{pokemonById.specialdefense}</h3>
           <h3>Speed:{pokemonById.speed}</h3>

        </div>

        <div className="types-detail">
           {pokemonById.types?.map((type) => {
            return(
            <h3 className="type-detail" key={Math.random()}>{type.name}</h3>
            )})}
            </div>


        <div className="img-container">
            <img className="img-detail" src={pokemonById.image} alt='image_of_pokemon'/>
        </div>
        </>
        )}
        
      </div>
    );
  }
  
  export default Detail;



  
//   { "name":"sebas",
//   "height":"23",
//           "weight":"23",
//           "hp":"23",
//          "attack":"23",
//         "defense":"23",
//          "specialattack":"23",
//          "specialdefense":"23",
//           "speed":"23"
          
// }