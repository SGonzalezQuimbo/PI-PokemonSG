import { filterPokemonsByType, orderPokemonsAlf, orderPokemonsByAttack, resetPokemons } from "../../redux/actions/actions";
//import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import SelectType from "../../views/create/SelectType";
import './filters.styles.css';
import { useSelector, useDispatch } from "react-redux";
import Cards from "../cards/Cards";
//import Card from "../card/Card"


function Filters() {

    const allPokemonsCopy = useSelector(state => state.allPokemonsCopy);
    const allTypesDb = useSelector(state => state.allTypesDb);
    const dispatch = useDispatch();
    console.log(allPokemonsCopy);

    const handleOrderAlf = (event) => {
      event.preventDefault();
      const {value} = event.target;
      dispatch(orderPokemonsAlf(value));
      console.log("despachando orderAlf");
    }

    const handleOrder = (event) => {
        //event.preventDefault();
        const {name, value} = event.target;
        console.log(`Este es el value ${value}, y este es el name ${name}`);
        dispatch(orderPokemonsByAttack(value));
    }

    const handleReset = (event) => {
      event.preventDefault();
      dispatch(resetPokemons());
      console.log("pokemons reseteados");
    }

    const changeHandler = (event) => {
      event.preventDefault();
      const {value} = event.target;
      dispatch(filterPokemonsByType(value));
      console.log(`esto es en filter con el valor ${value}`);
    }


    return (
      <>
      <div className="filters-container">
        
        <div>
            <button onClick={handleReset}>RESET</button>
        </div>

       <div className="filter-type">
        <label>Filtrar por tipo:</label>
        <SelectType allTypesDb={allTypesDb} changeHandler={changeHandler}/>
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
        <button onClick={handleOrderAlf} value="A" >A/Z</button>
        <button onClick={handleOrderAlf} value="Z" >Z/A</button>
       </div>

       <div>
        <label>Ordenar por Attack</label>
        <select onChange={handleOrder} name="order">
          <option value="default" name="default" >Seleccionar orden</option>
          <option value="D" name="D" >Mayor a menor</option>
          <option value="A" name="A" >menor a Mayor</option>
        </select>
       </div>

      </div>

      <div>
        <Cards allPokemonsCopy={allPokemonsCopy}/>
       </div>
      </>
    );
  }
  
  export default Filters;

  //filtrar:-por tipo

  //filtrar: -por origen(DB o API)

  //ordenar ascendente o descendente: -por attack

  //ordenar ascendente o descendente: -por nombre(alfabeticamente)