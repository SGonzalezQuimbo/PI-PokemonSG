const { cargaTypesDB } = require("../controllers/typesControllers");



const getTypesHandler = async (req, res) => {
    try {
        const response = await cargaTypesDB()
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {getTypesHandler};