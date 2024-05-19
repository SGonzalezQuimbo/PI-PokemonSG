const { Router } = require('express');
const { getCargaTypesHandler, getAllTypesDbHandler, postTypesHandler } = require('../handlers/typesHandler');

const {Type} = require('../db'); //importo las funcionalidades del modelo que declaro en la base de datos
const typesRouter = Router();

typesRouter.get("/", getCargaTypesHandler);

typesRouter.post("/", postTypesHandler);

typesRouter.get("/db", getAllTypesDbHandler);

module.exports = typesRouter;