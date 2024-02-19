const axios = require('axios');
const {Pokemon} = require("../db");

//funcion auxiliar para poder limpiar los datos obtenidos desde la API y quedarme solamente con los que quiero
const infoCleaner = (pokeObj) => { 
    return {
        name: pokeObj.name,
        image: pokeObj.sprites.front_default,
        // life: pokeObj.life,
        // attack: pokeObj.attack,
        // defense: pokeObj.defense,
        // speed: pokeObj.speed,
        stats: pokeObj.stats,
        height: pokeObj.height,
        weight: pokeObj.weight,
        created: false, // esto nos sirve para saber si el pokemon vienen de la API o de la BdD
    }
    
};

//const statsPokemon = (arr) => arr.map() hay que revisar bien para filtrar la info

const createPokemonDB = async (name, image, life, attack, defense, speed, heigth, weigth) => {
    const newPokemon = await Pokemon.create({name, image, life, attack, defense, speed, heigth, weigth});
    return newPokemon;
}

const getPokemonById = async (idPokemon, source) => {
    const pokemonXId = source === 'api' 
    ? infoCleaner((await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)).data) 
    
    : await Pokemon.findByPk(idPokemon);

    return pokemonXId;
}

const getPokemonByName = async (name) => {
    const infoApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;

    const pokemonApi = infoCleaner(infoApi);

    const pokemonDb = await Pokemon.findAll({where: {name: name}});

    return [...pokemonDb, ...pokemonApi];
}



const getAllPokemons = async () => {
    const pokemonDB = await Pokemon.findAll();
    const infoApi = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data;
    
    const pokemonApi = infoCleaner(infoApi);
    
    return [...pokemonDB, ...pokemonApi]; //retorna un nuevo array con los dos arrays unificados
}

module.exports = {createPokemonDB, getPokemonById, getAllPokemons, getPokemonByName};