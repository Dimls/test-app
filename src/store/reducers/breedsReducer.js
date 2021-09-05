import {
  SELECT_BREED,
  FETCH_BREEDS,
  FETCH_IMAGES,
} from "../actions/actionTypes";

const initialState = {
  breeds: [],
  selectedBreed: "",
  images: [],
};

export const breedsReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case FETCH_BREEDS:
      return {...state, breeds: payload};
    case FETCH_IMAGES:
      return {...state, images: payload};;
    case SELECT_BREED:
      return {...state, selectedBreed: payload};;
    default:
      return state;
  }
};
