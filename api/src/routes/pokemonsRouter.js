const { Router } = require('express');
const { getPokemonHandler, getDetailPokemonHandler, createPokemonHandler } = require('../handlers/pokemonHandlers');



const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonHandler);


pokemonsRouter.get("/:idPokemon", getDetailPokemonHandler);

pokemonsRouter.post("/", createPokemonHandler);

module.exports = pokemonsRouter;