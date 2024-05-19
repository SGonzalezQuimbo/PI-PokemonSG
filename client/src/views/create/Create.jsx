import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";//
import { getTypesDb, clearAllPokes } from "../../redux/actions/actions";

import validate from "./errors/validate";
import SelectType from "./SelectType";

import './create.styles.css';

function Create() {

  const dispatch = useDispatch();
  const allTypesDb = useSelector(state => state.allTypesDb);
  const cantTypesDB = allTypesDb.length;
  useEffect(()=>{
    console.log("crete montado")
    console.log(cantTypesDB);
    if (cantTypesDB === 0) {
      dispatch(getTypesDb());
  };

  },[dispatch, cantTypesDB]);
  
  const [errors, setErrors] = useState({ //estado local para manejo de errores
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

  const [types, setTypes] = useState([]); //estado local para cargar el objeto types (id, name) de pokemons

  const [idTypes, setIdTypes] = useState([]); //estado local para poder guardar solamente el id de los pokemons
                                              //este estado (idTypes) selo mando al form 

  const deleteType = (idType, event) => { //filtro los id para quedarme solo con los que son diferentes al que recivi.
    const typesFiltered = types.filter((type) => type.id !== idType);
    const idFiltered = idTypes.filter((id) => id !== idType);
    setIdTypes(idFiltered);
    setTypes(typesFiltered);
    
    const newForm ={...form, types: []};
    newForm.types.push.apply(newForm.types, idFiltered);
    setForm(newForm);
  
  }
  
  const changeHandlerType = (event) => {
    event.preventDefault();
    const {value} = event.target;
    console.log(value);
    console.log(event.target.name);
    const idType = allTypesDb.filter((type) => type.name === value);
    
    if (!idTypes.includes(idType[0].id)) {
    setTypes((oldTypes) => [...oldTypes, idType[0]]);
    setIdTypes((oldTypes) => [...oldTypes, idType[0].id]);
    const arrId = [];
    arrId.push(idType[0].id);

    //parte agregada
    const newForm ={...form};
    newForm.types.push.apply(newForm.types, arrId);
    setForm(newForm);
    } else {
     return alert("Este type ya esta seleccionado");
    }
    //console.log(typePoke);
    //console.log(allTypesDb);
  }

  
  // const fromPrueba = {
  //   name:"ahora",
  //   image: "image",
  //   hp: 938,
  //   attack: 956,
  //   defense: 576,
  //   specialattack: 50,
  //   specialdefense: 70,
  //   speed: 100,
  //   height: 453,
  //   weight: 343,
  //   types: [4,3]
  //   }
  
  const submitHandler = (event) => { //funcion para cargar la DB con lo del formulario de creacion del pokemon
    event.preventDefault();
    const errorsAux = Object.keys(errors); //me crea un array con las claves del objeto errors
    if (errorsAux.length === 0) { // si no hay errores cargados
      
    axios.post("http://localhost:3001/pokemons",form);
    dispatch(clearAllPokes()); //limpio el estado global para que cuando me mueva al componente home, el mismo se re-renderice y actualice el estado con todos los nuevos pokemons
    setForm({
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
    setErrors({
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
    setTypes([]);
    setIdTypes([]);
    return alert("Created successfully");
    }
    return alert("Error to create");
  }

  const changeHandler = (event) => {
    const nameInput = event.target.name;
    const valueInput = event.target.value;

    setErrors(validate({...form, [nameInput]:valueInput}));
    setForm({...form, [nameInput]:valueInput});
  };
  

  

    return (
      <div className="create-container">
        <div className="form-container">
        <h1>Create your Pokemon</h1>
        <form  onSubmit={(event) => submitHandler(event)}>

          <div>
            <label>Name:</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name ? <span>{errors.name}</span> : <span className={errors.name === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Image:</label>
            <input type="text" value={form.image} onChange={changeHandler} name="image"/>
            {errors.image ? <span>{errors.image}</span> : <span className={errors.image === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>HP:</label>
            <input  type="text" value={form.hp} onChange={changeHandler} name="hp"/>
            {errors.hp ? <span>{errors.hp}</span> : <span className={errors.hp === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Attack:</label>
            <input type="text" value={form.attack} onChange={changeHandler} name="attack"/>
            {errors.attack ? <span>{errors.attack}</span> : <span className={errors.attack === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Defense:</label>
            <input type="text" value={form.defense} onChange={changeHandler} name="defense"/>
            {errors.defense ? <span>{errors.defense}</span> : <span className={errors.defense === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Specialattack:</label>
            <input type="text" value={form.specialattack} onChange={changeHandler} name="specialattack"/>
            {errors.specialattack ? <span>{errors.specialattack}</span> : <span className={errors.specialattack === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Specialdefense:</label>
            <input type="text" value={form.specialdefense} onChange={changeHandler} name="specialdefense"/>
            {errors.specialdefense ? <span>{errors.specialdefense}</span> : <span className={errors.specialdefense === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Speed:</label>
            <input type="text" value={form.speed} onChange={changeHandler} name="speed"/>
            {errors.speed ? <span>{errors.speed}</span> : <span className={errors.speed === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Height:</label>
            <input type="text" value={form.height} onChange={changeHandler} name="height"/>
            {errors.height ? <span>{errors.height}</span> : <span className={errors.height === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Weight:</label>
            <input type="text" value={form.weight} onChange={changeHandler} name="weight"/>
            {errors.weight ? <span>{errors.weight}</span> : <span className={errors.weight === "" ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          <div>
            <label>Types:</label>
            {(idTypes.length < 3) ? 
            (<SelectType allTypesDb={allTypesDb} changeHandlerType={changeHandlerType}/> 
            ) : null}
            
            {idTypes.length === 0 ? <span>{"Must add a type"}</span> : <span className={idTypes.length === 0 ? "icono-render" : "icono-inicio"}>✅</span>}
          </div>

          { ((Object.keys(errors).length === 0) && (idTypes.length > 0)) ? (  //si no hay errores seteados muestro el boton
            <button type="submit">CREATE Pokemon</button>
    ) : null}
              
        </form>
        </div>

        <div className="detail-container">
        <p>{form.name}</p>
        <p>{form.image}</p>
        <p>{form.hp}</p>
        <p>{form.attack}</p>
        <p>{form.defense}</p>
        <p>{form.specialattack}</p>
        <p>{form.specialdefense}</p>
        <p>{form.speed}</p>
        <p>{form.height}</p>
        <p>{form.weight}</p>

        <div className="types-div">
          {types?.map((type) => {
            return (

              <div key={type.id} className="type-view">
                <button className="button-type" onClick={(event) => deleteType(type.id, event)} value={type.name} name="types">X</button>
                <h2 key={type.id}>{type.name}</h2>
              </div>
              
            )
          })
        }  
        </div>

        </div>


      </div>
    );
  }
  
  export default Create;