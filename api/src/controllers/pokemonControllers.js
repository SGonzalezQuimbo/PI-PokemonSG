const axios = require('axios');
const {Pokemon} = require("../db");

//funcion auxiliar para poder limpiar los datos obtenidos desde la API y quedarme solamente con los que quiero
const infoCleanerObj = (pokeObj) => { 
    
        // let objPokemon = {
        //     name: pokeObj.name,
        //     image: pokeObj.sprites.front_default,
        //     height: pokeObj.height,
        //     weight: pokeObj.weight,
        //     created: false,
        // }; //este obj sin la key stats sirve por si quiero concatenarle los stats con el metodo Object.assign

        let allStates = {};
        pokeObj.stats.forEach((st) => {
            allStates[st.stat.name] = st.base_stat;
            //Object.assign(objPokemon, allStates); //esto si quiero que las carcteristicas sean key y value diferentes del mismo objeto de retorno
        });

    // de esta forma me retorna un objeto dentro de la key stats con todos los estados.
    return {
        name: pokeObj.name,
        image: pokeObj.sprites.front_default,
        stats: allStates,
        height: pokeObj.height,
        weight: pokeObj.weight,
        created: false, // esto nos sirve para saber si el pokemon vienen de la API o de la BdD
    }
    
};



const createPokemonDB = async (name, image, life, attack, defense, speed, height, weight) => {
    const newPokemon = await Pokemon.create({name, image, life, attack, defense, speed, height, weight});
    return newPokemon;
}

const getPokemonById = async (idPokemon, source) => {
    const pokemonXId = 
    source === 'api' 
    ? infoCleanerObj((await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)).data) 
    
    : await Pokemon.findByPk(idPokemon);
    console.log(pokemonXId);
    //return pokemonXId;
}

const getPokemonByName = async (name) => {
    const infoApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;

    const pokemonApi = infoCleanerObj(infoApi);

    const pokemonDB = (await Pokemon.findAll({where: {name: name}}));

    let totalPokemons = [];          //creo este array para poder almacenar y retornar la info tanto de la API com de la BDD unificadas
    totalPokemons.push(pokemonApi);  //en el caso de la API es seguro que hay un pokemon de nombre unico
    for (let i = 0; i < pokemonDB.length; i++) { //pero en el caso de la BDD yo puedo tener varios pokemon con el mismo nombre.
        totalPokemons.push(pokemonDB[i]);
    }
     return totalPokemons;
}



const getAllPokemons = async () => {
    const pokemonDB = await Pokemon.findAll();
    const infoApi = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data.results;
    const allPokemonsApi = infoApi.map( async (poke) => {
        const response = (await axios.get(poke.url)).data;
        return infoCleanerObj(response);
    })
    console.log(await Promise.all(allPokemonsApi));
    //return (await Promise.all(allPokemonsApi));

    //optimizar funcion y hacerla reutilizable
    let totalPokemons = (await Promise.all(allPokemonsApi));          //creo este array para poder almacenar y retornar la info tanto de la API com de la BDD unificadas
    for (let i = 0; i < pokemonDB.length; i++) { //pero en el caso de la BDD yo puedo tener varios pokemon con el mismo nombre.
        totalPokemons.push(pokemonDB[i]);
    }
    //console.log(totalPokemons);
     return totalPokemons;
}

module.exports = {createPokemonDB, getPokemonById, getAllPokemons, getPokemonByName};