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
    const cargaTypes = await Type.bulkCreate(infoTypeApi);
    //console.log(cargaTypes);
    return cargaTypes;
}

const getAllTypesDb = async () => {
    const TypeDb = await Type.findAll()
    console.log(TypeDb)
    return TypeDb;
}


module.exports = {cargaTypesDB, getAllTypesDb};