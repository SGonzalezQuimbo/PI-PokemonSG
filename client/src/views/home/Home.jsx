import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import { getPokemons } from "../../redux/actions/actions";

import Cards from "../../components/cards/Cards";
// import Navbar from "../../components/navbar/Navbar";

import './home.styles.css'
import Filters from "../../components/filters/Filters";

function Home() {

const dispatch = useDispatch();
const allPokemons = useSelector(state => state.allPokemons); //estado global para cargar todos los pokemons.
const allPokemonsCopy = useSelector(state => state.allPokemonsCopy);

const [pokeQt, setPokeQt] = useState(4); //estado local para manejar la cantidad de pokemons que quiero renderizar en la pagina
const [page, setPage] = useState(1); //estado para controlar y/o actualizar el numero de la pagina en la que me encuentro.

useEffect(()=> {
  dispatch(getPokemons());
},[dispatch]);

//console.log(`en home ${allPokemons}`);

//ahora es necesario manejar de forma dinamica los indices del slice para mostrar los diferentes pokemons
const indexFin = page * pokeQt;
const indexIni = indexFin - pokeQt;

//para limitar los pokemons que se muestran en pantalla
const nPokemons = allPokemonsCopy.slice(indexIni, indexFin);
const totalPages = Math.ceil(allPokemonsCopy.length / pokeQt);


//funciones para cambiar de pagina con Prev y Next
const prev = () => {
  if(page !== 1){
    setPage(page - 1);
  }
}

const next = () => {
  if(page !== totalPages) {
    setPage(page + 1);
  }
}

    return (
      <div className="home">
        <div>
          <Filters/>
        </div>

        <div>
          <Cards nPokemons={nPokemons}/>
        </div>
        

        <div>
          <button onClick={prev}>Prev</button>
          <h3>{page} / {totalPages}</h3>
          <button onClick={next}>Next</button>
        </div>

      </div>
    );
  }
  
  export default Home;