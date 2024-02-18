const {Pokemon} = require("../db");

const createPokemonDB = async (name, image, life, attack, defense, speed, heigth, weigth) => {
    const newPokemon = await Pokemon.create({name, image, life, attack, defense, speed, heigth, weigth});
    return newPokemon;
}

module.exports = {createPokemonDB};