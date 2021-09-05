import { combineReducers } from "redux";
import {breedsReducer} from "./breedsReducer";
import {loadingReducer} from "./loadingReducer";

export default combineReducers({
    breedsReducer,
    loadingReducer
});
