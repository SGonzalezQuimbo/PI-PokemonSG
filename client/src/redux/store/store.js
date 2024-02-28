// import {createStore, applyMiddleware} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk"; //sirve para poder agregar asincronia a redux
// import rootReducer from "../reducer/reducer";

// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
//     );
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);


// export default store;
