//Combine the two reducers from this folder (counter.js & isLogged.js)
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//Combining the two reducers

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers