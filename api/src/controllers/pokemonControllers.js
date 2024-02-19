const axios = require('axios');
const {Pokemon} = require("../db");

//funcion auxiliar para poder limpiar los datos obtenidos desde la API y quedarme solamente con los que quiero
const infoCleanerObj = (pokeObj) => { 
    return {
        name: pokeObj.name,
        //image: pokeObj.sprites.front_default,
        // life: pokeObj.life,
        // attack: pokeObj.attack,
        // defense: pokeObj.defense,
        // speed: pokeObj.speed,
        //stats: pokeObj.stats,
        height: pokeObj.height,
        weight: pokeObj.weight,
        created: false, // esto nos sirve para saber si el pokemon vienen de la API o de la BdD
    }
    
};

//const statsPokemon = (arr) => arr.map() hay que revisar bien para filtrar la info

const createPokemonDB = async (name, image, life, attack, defense, speed, height, weight) => {
    const newPokemon = await Pokemon.create({name, image, life, attack, defense, speed, height, weight});
    return newPokemon;
}

const getPokemonById = async (idPokemon, source) => {
    const pokemonXId = 
    source === 'api' 
    ? infoCleaner((await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)).data) 
    
    : await Pokemon.findByPk(idPokemon);

    return pokemonXId;
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
    console.log(totalPokemons);
     return totalPokemons;
}

module.exports = {createPokemonDB, getPokemonById, getAllPokemons, getPokemonByName};