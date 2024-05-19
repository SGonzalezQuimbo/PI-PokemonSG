import { useState } from "react";
import Cards from "../cards/Cards";

import './pagination.styles.css';

function Pagination({allPokemonsCopy}) {

const [pokeQt, setPokeQt] = useState(12); //estado local para manejar la cantidad de pokemons que quiero renderizar en la pagina
const [page, setPage] = useState(1); //estado para controlar y/o actualizar el numero de la pagina en la que me encuentro.

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
// if (page > totalPages || page < totalPages) {
//   setPage(0);
// }

    return (

        <>
        <div>
            <Cards nPokemons={nPokemons}/>
        </div>


        <div className="pagination-container">
            <button onClick={prev} value="prev" name="prev" >Prev</button>
            <h3>{page} / {totalPages}</h3>
            <button onClick={next} value="next" name="next" >Next</button>
        </div>
        </>
    )
    
}

export default Pagination;