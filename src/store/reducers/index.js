import { combineReducers } from "redux";
import {breedsReducer, randomBreedImageReducer} from "./breedsReducer";
import {loadingReducer} from "./loadingReducer";

export default combineReducers({
    breedsReducer,
    randomBreedImageReducer,
    loadingReducer
});
