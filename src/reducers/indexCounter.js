import { combineReducers } from "redux";
import conterReducer from "./counter";
import logedReducer from "./isLoged";


const allReducers = combineReducers({
    counter : conterReducer ,
    isLoged : logedReducer

});

export default allReducers ;