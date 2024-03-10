import axios from "axios";
import { GET_POKEMONS, GET_POKEMON_BY_NAME, ORDER_ALF, ORDER, FILTER_BY_ORIGIN, FILTER_BY_TYPE, RESET, GET_TYPES, GET_POKEMON_BY_ID, CLEAR_DETAIL, CLEAR_ALL_POKES } from "./actions_types";

export const getPokemons = () => {
    return async function (dispatch) {
        try {
            const apiData = (await axios.get("http://localhost:3001/pokemons")).data;
        console.log(apiData);
        return dispatch({
            type: GET_POKEMONS,
            payload: apiData
        });
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

export const getTypesDb = () => {
    return async function (dispatch) {
        await axios.get("http://localhost:3001/types")
        const apiData = (await axios.get("http://localhost:3001/types/db")).data;
       // console.log(apiData);
        return dispatch({
            type: GET_TYPES,
            payload: apiData
        });
    }
}

export const getPokemonsById = (id) => {
    return async function (dispatch) {
        const apiData = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data;
        console.log(apiData);
        return dispatch({
            type: GET_POKEMON_BY_ID,
            payload: apiData
        });
    }
}

export const clearAllPokes = () => {
    return {
        type: CLEAR_ALL_POKES,
    }
}

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
    }
}

export const getPokemonsByName = (name) => {
    return async function (dispatch) {
        try {
            const apiData = (await axios.get(`http://localhost:3001/pokemons/?name=${name}`)).data;
        console.log(`en getpokebyNAME tengo a ${apiData}`);
        return dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: apiData
        });
        } catch (error) {
            console.log(error.response.data.message); //arreglar esto para que me mande una alerta en la ventana
        }
        
    }
}

export const orderPokemonsAlf = (ordAlf) => {
    return {
        type: ORDER_ALF,
        payload: ordAlf,
    }
}

export const orderPokemonsByAttack = (ordAttack) => {
    return {
        type: ORDER,
        payload: ordAttack,
    };
};

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
