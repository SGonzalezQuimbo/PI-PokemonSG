import { GET_POKEMONS, ORDER, FILTER, RESET } from "../actions/actions_types";


let initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
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