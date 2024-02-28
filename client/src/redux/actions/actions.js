import axios from "axios";
import { GET_POKEMONS, ORDER, FILTER, RESET } from "./actions_types";
// "https://pokeapi.co/api/v2/pokemon"

export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = (await axios.get("http://localhost:3001/pokemons")).data;
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
