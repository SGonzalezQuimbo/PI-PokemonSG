import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import { getPokemons } from "../../redux/actions/actions";

import Cards from "../../components/cards/Cards";
// import Navbar from "../../components/navbar/Navbar";

import './home.styles.css'

function Home() {

const dispatch = useDispatch();
const allPokemons = useSelector(state => state.allPokemons);


useEffect(()=> {
  dispatch(getPokemons())
},[dispatch]);

    return (
      <div className="home">
        <Cards allPokemons={allPokemons}/>
      </div>
    );
  }
  
  export default Home;