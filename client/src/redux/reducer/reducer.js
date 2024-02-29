import { GET_POKEMONS, ORDER, FILTER, RESET, GET_TYPES } from "../actions/actions_types";


let initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    allTypesDb: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
            };
        
        case GET_TYPES:
            return {
                ...state,
                allTypesDb: action.payload,
            };

        case ORDER:
            break;

        case FILTER:
            break;

        case RESET:
            break;


    
        default:
            return {
                ...state,
            }
    }
};


export default rootReducer;