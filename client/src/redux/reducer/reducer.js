import { GET_POKEMONS, ORDER, ORDER_ALF, FILTER_BY_ORIGIN, RESET, GET_TYPES, GET_POKEMON_BY_ID, CLEAR_DETAIL, GET_POKEMON_BY_NAME, FILTER_BY_TYPE } from "../actions/actions_types";


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

        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                allPokemonsCopy: action.payload,
            }

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

        case FILTER_BY_TYPE:
            //const pokeFiltered = state.allPokemons.types.filter((type) => type.name === action.payload);
            const pokeFiltered = [];

            for (let i = 0; i < state.allPokemons.length; i++) {
                for (let t = 0; t < state.allPokemons[i].types.length; t++) {
                    if (state.allPokemons[i].types[t].name === action.payload) {
                        pokeFiltered.push(state.allPokemons[i]);
                    };
                }
                
            }
            return {
                ...state,
                allPokemonsCopy: pokeFiltered,
            }

        case RESET:
            return {
                ...state,
                allPokemonsCopy: [...state.allPokemons],
            }


    
        default:
            return {
                ...state,
            }
    }
};


export default rootReducer;