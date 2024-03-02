import { orderPokemonsByAttack } from "../../redux/actions/actions";
import SelectType from "../../views/create/SelectType";
import './filters.styles.css';
import { useSelector, useDispatch } from "react-redux";
//import Cards from "../cards/Cards";


function Filters() {

    const allPokemonsCopy = useSelector((state) => state.allPokemonsCopy);
    const dispatch = useDispatch();
    console.log(allPokemonsCopy);

    const handleOrder = (event) => {
        //event.preventDefault();
        const {name, value} = event.target;
        console.log(value, name);
        dispatch(orderPokemonsByAttack(value));
        console.log(allPokemonsCopy);
    }


    return (
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
        <button value="A" name="A" onClick={handleOrder}>Mayor a menor</button>
        <button value="D" name="D" onClick={handleOrder}>menor a Mayor</button>
       </div>

       <div>
       {/* <Cards allPokemonsCopy={allPokemonsCopy}/> */}
       </div>

      </div>
    );
  }
  
  export default Filters;

  //filtrar:-por tipo

  //filtrar: -por origen(DB o API)

  //ordenar ascendente o descendente: -por attack

  //ordenar ascendente o descendente: -por nombre(alfabeticamente)