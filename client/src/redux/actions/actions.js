import axios from "axios";
import { GET_POKEMONS, ORDER, FILTER, RESET, GET_TYPES, GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID } from "./actions_types";

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

export const orderPokemons = (type_ord) => {
    return {
        type: ORDER,
        payload: type_ord,
    }
}

export const filterPokemons = (type_filter) => {
    return {
        type: FILTER,
        payload: type_filter,
    }
}

export const resetPokemons = () => {
    return {
        type: RESET,
    }
}
