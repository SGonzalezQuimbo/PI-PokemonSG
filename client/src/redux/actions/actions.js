import axios from "axios";
import { GET_POKEMONS, ORDER_ALF, ORDER_BY_ATTACK, FILTER_BY_ORIGIN, FILTER_BY_TYPE, RESET, GET_TYPES, GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID } from "./actions_types";

export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = (await axios.get("http://localhost:3001/pokemons")).data;
        //console.log(apiData);
        dispatch({
            type: GET_POKEMONS,
            payload: apiData
        });
    }
}

export const getTypesDb = () => {
    return async function (dispatch) {
        await axios.get("http://localhost:3001/types")
        const apiData = (await axios.get("http://localhost:3001/types/db")).data;
       // console.log(apiData);
        dispatch({
            type: GET_TYPES,
            payload: apiData
        });
    }
}

// export const getPokemonsById = (id) => {
//     return async function (dispatch) {
//         const apiData = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data;
//         console.log(apiData);
//         dispatch({
//             type: GET_POKEMON_BY_ID,
//             payload: apiData
//         });
//     }
// }

export const getPokemonsByName = () => {
    return async function (dispatch) {
        const apiData = (await axios.get("http://localhost:3001/pokemons")).data;
        //console.log(apiData);
        dispatch({
            type: GET_POKEMONS,
            payload: apiData
        });
    }
}

export const orderPokemonsAlf = (ordAlf) => {
    return {
        type: ORDER_ALF,
        payload: ordAlf,
    }
}

export const orderPokemonsByAttack = (ordAttack) => {
    return function (dispatch) {
        dispatch({
            type: ORDER_BY_ATTACK,
            payload: ordAttack,
        }) 
    }
}

export const filterPokemonsByOrigin = (filterOrigin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: filterOrigin,
    }
}

export const filterPokemonsByType = (filterType) => {
    return {
        type: FILTER_BY_TYPE,
        payload: filterType,
    }
}

export const resetPokemons = () => {
    return {
        type: RESET,
    }
}
