const { Router } = require('express');
const { getCargaTypesHandler, getAllTypesDbHandler } = require('../handlers/typesHandler');



const typesRouter = Router();

typesRouter.get("/", getCargaTypesHandler);

typesRouter.get("/db", getAllTypesDbHandler);

module.exports = typesRouter;