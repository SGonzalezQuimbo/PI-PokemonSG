import { useEffect,  } from "react"; //useState
import {useDispatch, useSelector} from "react-redux"; //

import { getPokemons, getTypesDb } from "../../redux/actions/actions";

//import Cards from "../../components/cards/Cards";
// import Navbar from "../../components/navbar/Navbar";

import './home.styles.css'
import Filters from "../../components/filters/Filters";
//import Pagination from "../../components/pagination/Pagination";

function Home() {

const dispatch = useDispatch();
const allPokemons = useSelector(state => state.allPokemons); //estado global para cargar todos los pokemons.
const allTypesDb = useSelector(state => state.allTypesDb);

let cantPoke = allPokemons.length;
let cantTypesDB = allTypesDb.length; // para no seguir cargando datos en la DB




console.log(`cantPoke largo ${cantPoke}`);
console.log(`cantTypesDB largo ${cantTypesDB}`);
useEffect(()=> {
  if (cantPoke === 0) {
    dispatch(getPokemons());
  };
  if (cantTypesDB === 0) {
      dispatch(getTypesDb());
  };
},[dispatch, cantPoke, cantTypesDB]);

//console.log(`en home se monta el componente pokeFiltered ${allPokemonsCopy}`);

    return (
      <div className="home">
        <div>
          <Filters/>
        </div>

        {/* <div>
          <Cards allPokemonsCopy={allPokemonsCopy} />{/*nPokemons={nPokemons}
        </div>
        */}
        
        {/* <div>
          <Pagination/>
        </div> */}

      </div>
    );
  }
  
  export default Home;