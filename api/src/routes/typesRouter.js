const { Router } = require('express');



const typesRouter = Router();

typesRouter.get("/", (req,res) => {
    //obtine un arreglo con todos los tipos de pokemons desde la api.
    //los guarda en la BD
    //para utilizarlos en el front deben ser sacados desde la BD.
})

module.exports = typesRouter;