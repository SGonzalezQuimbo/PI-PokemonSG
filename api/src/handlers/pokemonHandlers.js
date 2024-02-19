const {createPokemonDB, getPokemonById, getAllPokemons, getPokemonByName} = require("../controllers/pokemonControllers.js");

const createPokemonHandler = async (req, res) => {
    const {name, image, life, attack, defense, speed, heigth, weigth} = req.body;
    try {
        const response = await createPokemonDB(name, image, life, attack, defense, speed, heigth, weigth);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getPokemonHandler = async (req, res) => {
    const {name} = req.query;
    try {
        if(name) {
            const pokemonByName = await getPokemonByName(name)
            res.status(200).json(pokemonByName);
        } else {
            const response = await getAllPokemons()
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getDetailPokemonHandler = async (req, res) => {
    const {idPokemon} = req.params;
    const source = isNaN(idPokemon) ? 'bdd' : 'api'; //si el id es de tipo numero entonces el usuario debe ser buscado en la api, pero si no es de tipo number(UUID) entonces hay que buscarlo en la BdD
    try {
        const response = await getPokemonById(idPokemon, source)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    createPokemonHandler,
    getPokemonHandler,
    getDetailPokemonHandler,
};