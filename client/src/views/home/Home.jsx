import { useEffect } from "react"; //useState
import {useDispatch, useSelector} from "react-redux";

import { getPokemons, getTypesDb } from "../../redux/actions/actions";

import Filters from "../../components/filters/Filters";

import './home.styles.css'


function Home() {

const dispatch = useDispatch();
const allPokemons = useSelector(state => state.allPokemons); //estado global para cargar todos los pokemons.
const allTypesDb = useSelector(state => state.allTypesDb);

//const [charged, setCharged] = useState(false);

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
          <Filters/>
      
      </div>
    );
  }
  
  export default Home;