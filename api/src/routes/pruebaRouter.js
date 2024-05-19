const {Router} = require('express');

const pruebaRouter = Router();




pruebaRouter.get("/", (req, res) => {
    try {
        const response = "esta es la ruta"
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = pruebaRouter;