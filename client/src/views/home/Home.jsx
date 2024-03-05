import { useEffect,  } from "react"; //useState
import {useDispatch, useSelector} from "react-redux"; //

import { getPokemons, getTypesDb } from "../../redux/actions/actions";

//import Cards from "../../components/cards/Cards";
// import Navbar from "../../components/navbar/Navbar";

import './home.styles.css'
import Filters from "../../components/filters/Filters";
import Pagination from "../../components/pagination/Pagination";

function Home() {

const dispatch = useDispatch();
const allPokemons = useSelector(state => state.allPokemons); //estado global para cargar todos los pokemons.
const allTypesDb = useSelector(state => state.allTypesDb);
//const allPokemonsCopy = useSelector(state => state.allPokemonsCopy);
let cantPoke = allPokemons.length;
let cantTypesDB = allTypesDb.length; //ver si funciona para no seguir cargando datos en la DB

//const [pokeFiltered, setPokeFiltered] = useState(allPokemons);
//const [charged, setCharged] = useState(false);

//const [pokeQt, setPokeQt] = useState(4); //estado local para manejar la cantidad de pokemons que quiero renderizar en la pagina
//const [page, setPage] = useState(1); //estado para controlar y/o actualizar el numero de la pagina en la que me encuentro.

// const handleOrder = (event) => {
//   event.preventDefault();
//   const value = event.target.value
//   const orderFiltered = allPokemons.sort((a,b) =>{
//     if (value === 'A') {
//       return b.id - a.id;
//     }
//     return a.id - b.id;
//   });
//   setPokeFiltered(orderFiltered);
// }

console.log(`cantPoke largo ${cantPoke}`);
console.log(`cantTypesDB largo ${cantTypesDB}`);
useEffect(()=> {
  if (cantPoke === 0) {
    dispatch(getPokemons());
    dispatch(getTypesDb());
  };
},[dispatch, cantPoke]);

//console.log(`en home se monta el componente pokeFiltered ${allPokemonsCopy}`);

//ahora es necesario manejar de forma dinamica los indices del slice para mostrar los diferentes pokemons
//const indexFin = page * pokeQt;
//const indexIni = indexFin - pokeQt;

//para limitar los pokemons que se muestran en pantalla

//const nPokemons = allPokemons.slice(indexIni, indexFin);
//const totalPages = Math.ceil(allPokemons.length / pokeQt);


//funciones para cambiar de pagina con Prev y Next
// const prev = () => {
//   if(page !== 1){
//     setPage(page - 1);
//   }
// }

// const next = () => {
//   if(page !== totalPages) {
//     setPage(page + 1);
//   }
// }

// const handlePage = (event) =>{
//   event.preventDefault();
//   const value = event.target.value;
//   if(value === "next" & page !== totalPages) {
//     setPage(page + 1);
//   } else {
//     if(value === "prev" & page !== 1){
//       setPage(page -1);
//     }
//   }
// };

    return (
      <div className="home">
        <div>
          <Filters/>
        </div>

        {/* <div>
          <Cards allPokemonsCopy={allPokemonsCopy} />{/*nPokemons={nPokemons}
        </div>
        */}
        
        <div>
          <Pagination/>
        </div>

      </div>
    );
  }
  
  export default Home;