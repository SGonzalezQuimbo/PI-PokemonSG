const axios = require('axios');
const {Pokemon, Type} = require("../db");

//funcion auxiliar para poder limpiar los datos obtenidos desde la API y quedarme solamente con los que quiero
const infoCleanerObj = (pokeObj) => { 

    let typesPoke = []; //en este array cargo los tipo correspondientes a cada pokemon
    pokeObj.types.forEach((ty) =>{
        typesPoke.push({name : ty.type.name})
    })
    
        let objPokemon = {
            id: pokeObj.id,
            name: pokeObj.name,
            image: pokeObj.sprites.front_default,
            height: pokeObj.height,
            weight: pokeObj.weight,
            created: false,
            types: typesPoke,
        }; //este obj sin la key stats sirve por si quiero concatenarle los stats con el metodo Object.assign

        let allStates = {}; //en este objeto se guardan las propiedades del estado de los pokemons con el nombre de cada estado como clave y su valor como value
        pokeObj.stats.forEach((st) => {
            allStates[st.stat.name] = st.base_stat;
            Object.assign(objPokemon, allStates); //esto si quiero que las carcteristicas sean key y value diferentes del mismo objeto de retorno
        });

return objPokemon;
    // de esta forma me retorna un objeto dentro de la key stats con todos los estados.
    // return {
    //     name: pokeObj.name,
    //     image: pokeObj.sprites.front_default,
    //     stats: allStates,
    //     height: pokeObj.height,
    //     weight: pokeObj.weight,
    //     created: false, // esto nos sirve para saber si el pokemon vienen de la API o de la BdD
    // }
    
};



const createPokemonDB = async (name, image, hp, attack, defense, specialattack, specialdefense, speed, height, weight, types) => {
    const newPokemon = await Pokemon.create({name, image, hp, attack, defense, specialattack, specialdefense, speed, height, weight});
    newPokemon.addTypes(types); // addTypes es un metodo que genera sequelize automaticamente para la instancia ya que se establecio la relacion belongstomany
    return newPokemon;
}

const getPokemonById = async (idPokemon, source) => {
    const pokemonXId = 
    source === 'api' 
    ? infoCleanerObj((await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)).data) 
    
    : await Pokemon.findByPk(idPokemon);
    //console.log(pokemonXId);
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
    const pokemonDB = await Pokemon.findAll({
        include: { //para me tambien me muestre la tabla intermedia con los types
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    }
    );
    const infoApi = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data;//.data.results
    let urlNext = infoApi.next;
    console.log(`fuera del while ${urlNext}`);
//descomentar cesto es codigo original
    const allPokemonsApi = infoApi.results.map( async (poke) => { 
        const response = (await axios.get(poke.url)).data;
        return infoCleanerObj(response);
    })
//hataa aca codigo original

    //parte agregada para poder cargar mas pokemons
    let totalPokemons = (await Promise.all(allPokemonsApi))
    const cantVueltas = 6;
    let vuelta = 1;
    while (vuelta !== cantVueltas) {
        let infoApiNext = (await axios.get(urlNext)).data;
        console.log(`dentro del while ${urlNext}`);
        urlNext = infoApiNext.next;

        const allPokemonsNext = infoApiNext.results.map(async (poke) =>{
            const response =(await axios.get(poke.url)).data;
            return infoCleanerObj(response);
        });
        
        console.log(`ultimo valor en el while ${urlNext}`);
        vuelta++;
        console.log(vuelta);
        totalPokemons.push(await Promise.all(allPokemonsNext));
    }

    //hasta aca se agrego para poder cargar mas poquemons


    //console.log(await Promise.all(allPokemonsApi));
    //return (await Promise.all(allPokemonsApi));

    //optimizar funcion y hacerla reutilizable
    //tottalPokemons la declaro mas arriba para cargar los pokemons.
   // let totalPokemons = (await Promise.all(allPokemonsApi));          //creo este array para poder almacenar y retornar la info tanto de la API com de la BDD unificadas
    for (let i = 0; i < pokemonDB.length; i++) { //pero en el caso de la BDD yo puedo tener varios pokemon con el mismo nombre.
        totalPokemons.push(pokemonDB[i]);
    }
    console.log(totalPokemons.length);
     return totalPokemons;
}

module.exports = {createPokemonDB, getPokemonById, getAllPokemons, getPokemonByName};