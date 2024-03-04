import { orderPokemonsByAttack } from "../../redux/actions/actions";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import SelectType from "../../views/create/SelectType";
import './filters.styles.css';
import { useSelector, useDispatch } from "react-redux";
// import Cards from "../cards/Cards";
import Card from "../card/Card"


function Filters() {

    const allPokemonsCopy = useSelector((state) => state.allPokemonsCopy);
    const dispatch = useDispatch();
    console.log(allPokemonsCopy);

    const handleOrder = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        console.log(value, name);
        dispatch(orderPokemonsByAttack(value));
        console.log(allPokemonsCopy);
    }


    return (
      <>
      <div className="filters-container">
        
        <div>
            <button>RESET</button>
        </div>

       <div className="filter-type">
        <label>Filtrar por tipo:</label>
        <SelectType/>
       </div>

       <div className="filter-origin">
        <label>Filtrar por origen:</label>
        <select>
            <option>All Poke</option>
          <option>DB</option>
          <option>API</option>  
        </select>
       </div>

       <div>
        <label>Ordenar alfabeticamente</label>
        <button>A/Z</button>
        <button>Z/A</button>
       </div>

       <div>
        <label>Ordenar por Attack</label>
        <select onChange={handleOrder}>
          <option value="D" name="D" >Mayor a menor</option>
          <option value="A" name="A" >menor a Mayor</option>
        </select>
       </div>

      </div>
      <div>
      {allPokemonsCopy?.map((pokemon) => {
          return(
            <NavLink key ={pokemon.id} to={`/detail/${pokemon.id}`}>
              <Card key={pokemon.id} pokemon={pokemon}/>
            </NavLink>
          
          )})}
        {/* <Cards allPokemonsCopy={allPokemonsCopy}/> */}
       </div>
      </>
    );
  }
  
  export default Filters;

  //filtrar:-por tipo

  //filtrar: -por origen(DB o API)

  //ordenar ascendente o descendente: -por attack

  //ordenar ascendente o descendente: -por nombre(alfabeticamente)