import { Link } from 'react-router-dom';
import './navbar.styles.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getPokemonsByName } from '../../redux/actions/actions';

function Navbar() {

  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const {value} = event.target;
    setSearchString(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`se busco el pokemon ${searchString}`);
    console.log(typeof(searchString));
    dispatch(getPokemonsByName(searchString));
  }



    return (
      <div className="navbar">
        <Link to="/">LANDING</Link>
        <Link to="/home">HOME</Link>
        <Link to="/create">CREATE</Link>
        <form onChange={handleChange}>
          <input placeholder="Buscar Pkemon" type="search" />
          <button type="submit" onClick={handleSubmit} >Buscar</button>
        </form>
      </div>
    );
  }
  
  export default Navbar;