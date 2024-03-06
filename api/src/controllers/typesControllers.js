const axios = require('axios');

const {Type} = require("../db");

const cargaTypesDB = async () => {
    const infoTypeApi = (await axios.get('https://pokeapi.co/api/v2/type')).data.results;
    console.log(infoTypeApi.length);
    // const namesOfTypes = [];
    // for (let i = 0; i < infoTypeApi.length; i++) {
    //     namesOfTypes.push(infoTypeApi[i].name)
        
    // }
    // console.log(namesOfTypes);
    console.log(infoTypeApi);
    const cantPokemonOnDB = await Type.findAll();
    console.log(`esto hay en la base de datos antes de cargar ${cantPokemonOnDB.length}`);
    if (cantPokemonOnDB.length === 0) {
        const cargaTypes = await Type.bulkCreate(infoTypeApi);
        console.log(`esto es despues de cargar ${cargaTypes.length}`);
        return cargaTypes;
    }
    return;
}

const getAllTypesDb = async () => {
    const TypeDb = await Type.findAll()
    console.log(TypeDb.length)
    return TypeDb;
}


module.exports = {cargaTypesDB, getAllTypesDb};