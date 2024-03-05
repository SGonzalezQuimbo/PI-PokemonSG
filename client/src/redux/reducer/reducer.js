import { GET_POKEMONS, ORDER, ORDER_ALF, FILTER_BY_ORIGIN, RESET, GET_TYPES, GET_POKEMON_BY_ID, CLEAR_DETAIL } from "../actions/actions_types";


const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    pokemonById: [],
    allTypesDb: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                allPokemonsCopy: action.payload,
            };

        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonById: action.payload,
            };
        case CLEAR_DETAIL:
            return {
                ...state,
                pokemonById: [],
            }

        case GET_TYPES:
            return {
                ...state,
                allTypesDb: action.payload,
            };

        case ORDER:
            const orderFiltered = state.allPokemonsCopy.sort((a,b) => {
                if(action.payload === 'A') {
                    return a.attack - b.attack
                } 
                return b.attack - a.attack;
            });
            return {
                ...state,
                allPokemonsCopy: [...orderFiltered],
            };
        
        case ORDER_ALF:
            const newOrder = state.allPokemonsCopy.sort((a,b) => {
                if(action.payload === 'A') {
                    return a.name.charCodeAt(0) - b.name.charCodeAt(0)
                }
                return b.name.charCodeAt(0) - a.name.charCodeAt(0)
            });
            return {
                ...state,
                allPokemonsCopy: [...newOrder],
            };

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