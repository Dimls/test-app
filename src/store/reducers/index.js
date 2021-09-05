import { combineReducers } from "redux";
import {breedsReducer, breedVotesReducer} from "./breedsReducer";
import {loadingReducer} from "./loadingReducer";

export default combineReducers({
    breedsReducer,
    breedVotesReducer,
    loadingReducer
});
