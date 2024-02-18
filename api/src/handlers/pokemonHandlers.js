const {createPokemonDB} = require("../controllers/pokemonControllers.js");

const createPokemonHandler = async (req, res) => {
    const {name, image, life, attack, defense, speed, heigth, weigth} = req.body;
    try {
        const response = await createPokemonDB(name, image, life, attack, defense, speed, heigth, weigth);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getPokemonHandler = (req, res) => {
    res.status(200).send("retornar un arreglo de objetos con los pokemon y su info")
};

const getDetailPokemonHandler = (req, res) => {
    const {idPokemon} = req.params;
    res.status(200).send(`retornar un objeto con la info del pokemon con id ${idPokemon} tanto si esta en la bd o en la api`);
}

module.exports = {
    createPokemonHandler,
    getPokemonHandler,
    getDetailPokemonHandler,
};