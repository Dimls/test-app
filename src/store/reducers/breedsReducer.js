import {
  SELECT_BREED,
  FETCH_BREEDS,
  FETCH_BREED_IMAGES,
  FETCH_RANDOM_IMAGES
} from "../actions/actionTypes";

const initialBreedState = {
  breeds: [],
  selectedBreed: { name: ""},
  images: [],
};

const initialRandomBreedImageState = {
  images: []
}

export const breedsReducer = (state = initialBreedState, { type, payload }) => {
  switch (type) {
    case FETCH_BREEDS:
      return { ...state, breeds: payload };
    case FETCH_BREED_IMAGES:
      return { ...state, images: payload };
    case SELECT_BREED:
      return { ...state, selectedBreed: payload };
    default:
      return state;
  }
};

export const randomBreedImageReducer = (
  state = initialRandomBreedImageState,
  { type, payload }
) => {
  switch (type) {
    case FETCH_RANDOM_IMAGES:
      return { ...state, images: payload };
    // case VOTE_IMAGE: 
    //   return {...state }
    default:
      return state;
  }
};
