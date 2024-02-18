const { Router } = require('express');
const { getPokemonHandler, getDetailPokemonHandler, createPokemonHandler } = require('../handlers/pokemonHandlers');



const pokemonsRouter = Router();

pokemonsRouter.get("/", (req, res) => { //getPokemonHandler);
const {name} = req.query;
    if (name) {
        res.status(200).send(`retornar el pokemon por nombre ${name}`);
    };
    res.status(200).send("retornar un arreglo de objetos con los pokemon y su info");
}
);


pokemonsRouter.get("/:idPokemon", getDetailPokemonHandler);

pokemonsRouter.post("/", createPokemonHandler);

module.exports = pokemonsRouter;