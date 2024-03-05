import axios from "axios";
import { useState, useEffect } from "react";
import {  useSelector } from "react-redux";//useDispatch,
//import { getTypesDb } from "../../redux/actions/actions";

import SelectType from "./SelectType";

function Create() {

  //const dispatch = useDispatch();
  const allTypesDb = useSelector(state => state.allTypesDb);
  //const [charged, setCharged] = useState(false) //revisar porque no funciona

  useEffect(()=>{
    console.log("crete montado")
    // if(!charged){
    //   dispatch(getTypesDb());
    //   setCharged(true);
    // }

  },[]);

//console.log(`Esto es despues del useEffect en create ${allTypesDb}`);
  
  const [errors, setErrors] = useState({
    name:"",
    image:"",
    hp:"",
    attack:"",
    defense:"",
    specialattack:"",
    specialdefense:"",
    speed:"",
    height:"",
    weight:"",
    types:[],
  })

  const [form, setForm] = useState({ //estado local para cargar el form
    name:"",
    image:"",
    hp:"",
    attack:"",
    defense:"",
    specialattack:"",
    specialdefense:"",
    speed:"",
    height:"",
    weight:"",
    types:[],
  });

  const changeHandler = (event) => {
    const nameInput = event.target.name;
    const valueInput = event.target.value;

    setErrors(validate({...form, [nameInput]:valueInput}));
    setForm({...form, [nameInput]:valueInput});
  };

  const validate = (form) => {
    const errors = {};
    if(form.name === "") {errors.name = "Nombre vacio"};

    if(form.name !== "") {errors.name = ""};

    if(form.image === "") {errors.image = "Imagen vaciaa"};

    if(form.image !== "") {errors.image =  ""};

    if(form.hp === "") {errors.hp = "Campo hp vacio"};

    if(form.hp !== "") {errors.hp =  ""};

    return errors;
  };

  const submitHandler = (event) => { //funcion para cargar la DB con lo del formulario
    event.preventDefault();
    axios.post("http://localhost:3001/pokemons",form)

  }

    return (
      <div className="Create">
        <h1>Este es el CREATE</h1>
        <form>

          <div>
            <label>Name:</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div>
            <label>Image:</label>
            <input type="text" value={form.image} onChange={changeHandler} name="image"/>
            {errors.image && <span>{errors.image}</span>}
          </div>

          <div>
            <label>HP:</label>
            <input type="text" value={form.hp} onChange={changeHandler} name="hp"/>
            {errors.hp && <span>{errors.hp}</span>}
          </div>

          <div>
            <label>Attack:</label>
            <input type="text" value={form.attack} onChange={changeHandler} name="attack"/>
            {errors.attack && <span>{errors.attack}</span>}
          </div>

          <div>
            <label>Defense:</label>
            <input type="text" value={form.defense} onChange={changeHandler} name="defense"/>
            {errors.defense && <span>{errors.defense}</span>}
          </div>

          <div>
            <label>Specialattack:</label>
            <input type="" value={form.specialattack} onChange={changeHandler} name="specialattack"/>
            {errors.specialattack && <span>{errors.specialattack}</span>}
          </div>

          <div>
            <label>Specialdefense:</label>
            <input type="text" value={form.specialdefense} onChange={changeHandler} name="specialdefense"/>
            {errors.specialdefense && <span>{errors.specialdefense}</span>}
          </div>

          <div>
            <label>Speed:</label>
            <input type="text" value={form.speed} onChange={changeHandler} name="speed"/>
            {errors.speed && <span>{errors.speed}</span>}
          </div>

          <div>
            <label>Height:</label>
            <input type="text" value={form.height} onChange={changeHandler} name="height"/>
            {errors.height && <span>{errors.height}</span>}
          </div>

          <div>
            <label>Weight:</label>
            <input type="text" value={form.weight} onChange={changeHandler} name="weight"/>
            {errors.weight && <span>{errors.weight}</span>}
          </div>

          <div>
            {/* <label>Types:</label>
            <input type="text" value={form.types} onChange={changeHandler} name="types"/>
            {errors.types && <span>{errors.types}</span>} */}
            <label>Types:</label>
            <SelectType allTypesDb={allTypesDb}/>
          </div>

          <button type="submit" onClick={submitHandler}>CREATE Pokemon</button>

        </form>
      </div>
    );
  }
  
  export default Create;

//   "name":"hola",
// "image": "image",
// "hp": 938,
// "attack": 90,
// "defense": 576,
// "specialattack": 50,
// "specialdefense": 70,
// "speed": 100,
// "height": 453,
// "weight": 343,
// "types": [2,12,8]

// Name:
// Image:
// HP:
// Attack:
// Defense:
// Specialattack:
// Specialdefense:
// Speed:
// Height:
// Weight:
// Types