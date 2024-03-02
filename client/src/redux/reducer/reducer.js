import { GET_POKEMONS, ORDER_ALF, ORDER_BY_ATTACK, FILTER_BY_ORIGIN, FILTER_BY_TYPE, RESET, GET_TYPES } from "../actions/actions_types";


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
                allPokemonsCopy: action.payload,
            };
        
        case GET_TYPES:
            return {
                ...state,
                allTypesDb: action.payload,
            };

        case ORDER_BY_ATTACK:
            const orderFiltered = state.allPokemons.sort((a,b) => {
                if(action.payload === 'A') {
                    return b.id - a.id
                } 
                return a.id - b.id;
            });
            return {
                ...state,
                allPokemonsCopy: orderFiltered,
            }

        case FILTER_BY_ORIGIN:
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