const { cargaTypesDB, getAllTypesDb, crateType } = require("../controllers/typesControllers");



const getCargaTypesHandler = async (req, res) => {
    try {
        const response = await cargaTypesDB()
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const postTypesHandler = async (req, res) =>{
    const {name} = req.body;
    try {
        const response = await crateType(name);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllTypesDbHandler = async (req, res) => {
    try {
        const response = await getAllTypesDb()
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = {getCargaTypesHandler, getAllTypesDbHandler, postTypesHandler};